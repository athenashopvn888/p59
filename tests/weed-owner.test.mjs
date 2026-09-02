import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
const owner=readFileSync("app/components/WeedOwnerPage.tsx","utf8");const route=readFileSync("app/weed-dispensary-brampton/page.tsx","utf8");const home=readFileSync("app/page.tsx","utf8");
test("secondary local owner keeps canonical and indexing",()=>{assert.match(route,/Weed Dispensary in Brampton \| PLANETS 59/);assert.match(route,/planets59\.com\/weed-dispensary-brampton"/);assert.match(route,/index: true/);assert.match(route,/follow: true/)});
test("FMD-backed visit facts are present",()=>{assert.match(owner,/8500 Torbram Rd Unit 59/);assert.match(owner,/\+1 289-536-7493/);assert.match(owner,/Open 24 Hours/)});
test("approved category owners are linked",()=>{for(const href of ["/budget-weed","/exotic-weed","/items/edibles","/items/vape-disposables","/resources"])assert.ok(owner.includes(`"${href}"`));assert.doesNotMatch(owner,/available now|in stock|best price/i)});
test("homepage remains broad owner with discovery, not a handoff",()=>{assert.match(home,/PLANETS 59/);assert.match(home,/Explore Weed &amp; Cannabis at PLANETS 59/);assert.match(home,/Explore PLANETS 59 Weed in Brampton/)});
test("qualified Weed Delivery UI remains present and separate from owner discovery",()=>{assert.match(home,/<DeliveryBanner \/>/);assert.match(home,/href="\/weed-delivery-brampton"/);const block=home.slice(home.indexOf('weedDiscovery'),home.indexOf('STORE LOCATION GRID'));assert.doesNotMatch(block,/delivery/i)});
