"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import menu from "./delivery-menu.json";
import ProductDetailsDrawer from "./ProductDetailsDrawer";
import DeliveryBanner from "../components/DeliveryBanner";

type PriceOption = { key: string; label: string; price: number };
type Offer = { kind: "prime_time" | "multi_ounce"; quantity?: number; price?: number; weight?: string; bonus?: string; perUnitPrice?: number; totalPrice?: number; label: string };
type Tier = "SHREDS" | "Budget" | "BC Premium" | "CRAFTS" | "Exotics";
type Product = { publicProductId:string; name:string; tier:Tier; category:string; strain:string; thc:string; effects:string[]; description:string|null; images:string[]; priceOptions:PriceOption[]; offers?:Offer[] };
type TierFilter = "ALL" | Tier;
const bundledProducts = menu.products as Product[];
const tierFilters: TierFilter[] = ["ALL", "Exotics", "CRAFTS", "BC Premium", "Budget", "SHREDS"];
const tierDisplayOrder: Tier[] = ["Exotics", "CRAFTS", "BC Premium", "Budget", "SHREDS"];

function flowerTier(product: Product): Tier { return product.tier; }

function normalEntryPrice(product: Product) {
  const prices = product.priceOptions.map((option) => option.price);
  return prices.length ? Math.min(...prices) : Number.POSITIVE_INFINITY;
}

function compareProducts(a: Product, b: Product) {
  const tierA = flowerTier(a);
  const tierB = flowerTier(b);
  const tierDifference = (tierA ? tierDisplayOrder.indexOf(tierA) : tierDisplayOrder.length) - (tierB ? tierDisplayOrder.indexOf(tierB) : tierDisplayOrder.length);
  if (tierDifference !== 0) return tierDifference;
  const priceA = normalEntryPrice(a);
  const priceB = normalEntryPrice(b);
  if (priceA !== priceB) return priceA - priceB;
  return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
}

function ProductPricing({ product }: { product: Product }) {
  const regular28 = product.priceOptions.find((option) => option.label === "28g");
  const compact = product.priceOptions.filter((option) => option.label !== "28g");
  const member = product.offers?.find((offer) => offer.kind === "prime_time");
  const eligible = ["Exotics", "CRAFTS", "BC Premium"].includes(flowerTier(product) || "");
  const explicitLoyalty = Number(member?.price);
  const loyaltyPrice = Number.isFinite(explicitLoyalty) && explicitLoyalty > 0
    ? explicitLoyalty
    : eligible && regular28 ? regular28.price - 30 : null;
  const bundles = eligible && loyaltyPrice
    ? [
      { kind: "multi_ounce" as const, quantity: 2, perUnitPrice: loyaltyPrice, totalPrice: loyaltyPrice * 2, label: `2 × 28g at $${loyaltyPrice} each — $${loyaltyPrice * 2} total` },
      ...(product.offers?.filter((offer) => offer.kind === "multi_ounce" && Number(offer.quantity) !== 2) || [])
    ]
    : product.offers?.filter((offer) => offer.kind === "multi_ounce") || [];
  return <div className="productPricing">
    {compact.length > 0 && <div><div className="compactPriceGrid">{compact.map((option) => <div className="compactPrice" key={option.key}><span>{option.label}</span><strong>${option.price}</strong></div>)}</div></div>}
    {(regular28 || member || bundles.length > 0) && <div className="decisionPrices">
      {loyaltyPrice !== null && <div className="decisionTile member28"><span>MEMBER LOYALTY 28g</span><strong>${loyaltyPrice}</strong><small>Member price</small><p>{member?.bonus ? `${member.bonus} applies on a later order when eligible.` : "Coupon or add-on eligibility is confirmed separately."}</p></div>}
      {bundles.map((offer, index) => { const quantity = Number(offer.quantity); const total = Number(offer.totalPrice); const each = Number(offer.perUnitPrice) || total / quantity; return <div className="decisionTile bundleDecision" key={`${quantity}-${index}`}><span>{quantity} × 28g DEAL</span><div className="bundleNumbers"><strong>${each} <small>each</small></strong><b>${total} <small>total</small></b></div></div>; })}
      {regular28 && <div className="decisionTile standard28"><span>STANDARD 28g</span><strong>${regular28.price}</strong><small>Regular price</small></div>}
    </div>}
  </div>;
}

function LoyaltySection() {
  return <section className="memberLoyalty" aria-labelledby="member-loyalty-title"><div><p className="eyebrow">SAVE ON A LATER ORDER</p><h2 id="member-loyalty-title">Member Loyalty Savings</h2><p>Qualify with an eligible regular-price 28g purchase in BC Premium, Crafts, or Exotics, or with a selected 2 × 28g tier offer. Rewards and coupons apply to a later order—not the qualifying purchase.</p></div><ol><li><span>1</span><p><strong>Qualify</strong> with an eligible regular-price ounce or selected two-ounce tier offer.</p></li><li><span>2</span><p><strong>Return</strong> for $30 off an eligible regular-price 28g item in the selected tier.</p></li><li><span>3</span><p><strong>Use the coupon later.</strong> A 3g Craft coupon requires a qualifying spend of $120 or more.</p></li><li><span>4</span><p><strong>Keep access active</strong> with a $50 or more purchase within 14 days.</p></li></ol><aside><strong>Important conditions</strong><p>Complimentary items apply only to regular-price Craft or Exotic ounces—not BC Premium. Loyalty prices are firm and cannot be reduced with points. Loyalty-price orders do not include extra complimentary items. Otherwise, requalify with a full-price purchase. Dispatcher confirms current eligibility and any included item before checkout.</p></aside></section>;
}

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>(bundledProducts);
  const [activeTier, setActiveTier] = useState<TierFilter>("ALL");
  const [search, setSearch] = useState("");
  const [selectedProduct,setSelectedProduct]=useState<Product|null>(null);
  const closeDetails=useCallback(()=>setSelectedProduct(null),[]);
  useEffect(() => {
    const controller = new AbortController();
    fetch("https://milestone-1-demo.vercel.app/api/catalog?store=P59", { signal: controller.signal }).then((response) => response.ok ? response.json() : Promise.reject()).then((payload) => { if (Array.isArray(payload.products) && payload.products.length >= 50 && payload.products.every((product:Product)=>product.publicProductId&&product.tier&&Array.isArray(product.images))) setProducts(payload.products); }).catch(() => {});
    return () => controller.abort();
  }, []);

  const filteredProducts = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return products.filter((product) => {
      if (activeTier !== "ALL" && flowerTier(product) !== activeTier) return false;
      return !needle || `${product.name} ${product.category} ${product.strain}`.toLowerCase().includes(needle);
    }).sort(compareProducts);
  }, [activeTier, search, products]);

  return (
    <main className="main">
      <header className="p59Header">
        <Link className="p59Brand" href="/" aria-label="PLANETS 59 home"><span>P59</span><strong>PLANETS 59<small>Delivery menu</small></strong></Link>
        <nav><a href="#delivery-menu">Menu</a><a href="#how-to-order">How to order</a></nav>
      </header>
      <DeliveryBanner />
      <section className="p59TermsBanner" aria-labelledby="p59-delivery-terms"><div><p>PLANETS 59 DELIVERY DETAILS</p><h2 id="p59-delivery-terms"><span>$60 PRODUCT MINIMUM</span><span>$10 DELIVERY FEE</span><span>DELIVERY HOURS 10:00 a.m.–10:00 p.m.</span></h2></div><a href="#how-to-order">Read the ordering steps</a></section>

      <section className="hero" id="top">
        <div className="heroOrbit" aria-hidden="true" />
        <div className="heroCopy"><p className="eyebrow">PLANETS 59 DELIVERY</p><h1>PLANETS 59 Cannabis Delivery in Brampton</h1><p>Browse the current flower delivery menu, then use LIVE ORDER to connect with the PLANETS 59 dispatcher.</p><div className="heroActions"><a href="#delivery-menu">Browse delivery menu</a><a href="#how-to-order">How delivery works</a></div></div>
        <div className="launchCard"><span>HOW TO ORDER</span><strong>LIVE ORDER</strong><p>{products.length} flower products are ready to browse.</p><small>The dispatcher confirms availability and delivery details.</small></div>
      </section>

      <section className="serviceStrip" aria-label="Delivery menu details"><div><strong>{products.length} products</strong><span>Browse the flower menu</span></div><div><strong>Five flower tiers</strong><span>Sorted from least to most by entry price</span></div><div><strong>LIVE ORDER</strong><span>Connect with the dispatcher</span></div><div><strong>Adults only</strong><span>19+ access</span></div></section>
      <LoyaltySection />

      <section className="menuShell" id="delivery-menu">
        <aside className="filters"><div className="filterHeading"><p>Flower menu</p><h2>Choose a tier</h2></div><div className="filterGroup"><h3>Flower tiers</h3>{tierFilters.map((tier) => <button key={tier} type="button" className={activeTier === tier ? "activeFilter" : ""} onClick={() => setActiveTier(tier)}>{tier === "ALL" ? "ALL" : tier.toUpperCase()}<span>{tier === "ALL" ? products.length : products.filter((product) => flowerTier(product) === tier).length}</span></button>)}</div></aside>

        <div className="catalog"><div className="catalogTools"><div><p className="eyebrow">PLANETS 59 FLOWER MENU</p><h2>{activeTier === "ALL" ? "All flower" : activeTier}</h2><span>{filteredProducts.length} products in this view</span></div><label><span>Search flower</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Product or strain" /></label></div><div className="mobileFilters" aria-label="Flower tier filters">{tierFilters.map((tier) => <button key={tier} type="button" onClick={() => setActiveTier(tier)} className={activeTier === tier ? "activeFilter" : ""}>{tier === "ALL" ? "ALL" : tier.toUpperCase()}</button>)}</div>
          <div className="productGrid">{filteredProducts.map((product) => { const productTier = flowerTier(product); return <article className="productCard" key={product.publicProductId}><button className="productImage" type="button" onClick={()=>setSelectedProduct(product)} aria-label={`View details for ${product.name}`}>{product.images[0] ? <Image src={product.images[0]} alt={`${product.name} on the PLANETS 59 delivery menu`} fill sizes="(max-width:520px) 100vw, 300px" unoptimized /> : <span>PLANETS 59</span>}</button><div className="productBody"><div className="badges">{productTier && <span>{productTier}</span>}<span>{product.category}</span></div><h3><button className="productTitleButton" type="button" onClick={()=>setSelectedProduct(product)}>{product.name}</button></h3><p>{product.category}</p><ProductPricing product={product} /><button className="viewDetailsButton" type="button" onClick={()=>setSelectedProduct(product)}>View details</button></div></article>; })}</div>
        </div>

      </section>
      <section className="p59OrderSteps" id="how-to-order" tabIndex={-1} aria-labelledby="how-to-order-title">
        <p className="eyebrow">HOW TO ORDER</p>
        <h2 id="how-to-order-title">LIVE ORDER connects you with the PLANETS 59 dispatcher.</h2>
        <ol>
          <li>Browse the menu and note the product names and weights.</li>
          <li>Select LIVE ORDER at the bottom-right and send the dispatcher your choices.</li>
          <li>New customers complete private selfie-with-ID verification in Web Chat.</li>
          <li>The dispatcher confirms availability, delivery details, and next steps.</li>
        </ol>
      </section>
      <ProductDetailsDrawer product={selectedProduct} storeName="Planets 59" onClose={closeDetails} pricing={selectedProduct?<ProductPricing product={selectedProduct}/>:null}/>
    </main>
  );
}
