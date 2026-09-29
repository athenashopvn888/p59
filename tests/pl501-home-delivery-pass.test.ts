import assert from"node:assert/strict";import fs from"node:fs";import test from"node:test";import{HOME_DELIVERY_CARDS,HOME_DELIVERY_FAQS,HOME_TITLE}from"../app/lib/homeDelivery.ts";
const page=fs.readFileSync("app/HomePage.tsx","utf8"),meta=fs.readFileSync("app/page.tsx","utf8"),globals=fs.readFileSync("app/globals.css","utf8");
test("locked title",()=>{assert.equal(HOME_TITLE,"PLANETS 59 Dispensary - Weed Delivery in Brampton");assert.match(page,/\{HOME_TITLE\}/);assert.match(meta,/absolute: HOME_TITLE/);});
test("correct paths",()=>{assert.match(page,/href="\/exotic-weed"[\s\S]*>STORE MENU<\/Link>/);assert.match(page,/href="\/weed-delivery-brampton"[\s\S]*>Delivery<\/Link>/);});
test("delivery body",()=>{assert.ok(HOME_DELIVERY_FAQS.length>=5&&HOME_DELIVERY_FAQS.length<=8);assert.ok(HOME_DELIVERY_CARDS.length>=3&&HOME_DELIVERY_CARDS.length<=6);for(const c of HOME_DELIVERY_CARDS)assert.match(c.href,/^\/(faq|visit|weed-delivery-brampton|weed-delivery-torbram)$/);});
test("sticky order",()=>{assert.ok(page.indexOf("<FleetAnnouncementBanner />")>page.indexOf("<Navbar />"));assert.match(globals,/margin-top:\s*var\(--homepage-nav-clearance\)/);});
