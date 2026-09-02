import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const navbar = readFileSync("app/components/Navbar.tsx", "utf8");
const styles = readFileSync("app/components/Navbar.module.css", "utf8");

assert.match(navbar, /href="\/exotic-weed"[\s\S]*?Store Menu/i, "Store Menu must target /exotic-weed");
assert.match(navbar, /href="\/weed-delivery-brampton"[\s\S]*?Weed Delivery/i, "Weed Delivery must target /weed-delivery-brampton");
assert.match(navbar, /aria-label="Choose a menu"/, "Menu choices need an accessible label");
assert.match(navbar, /aria-current=/, "Active menu choices must expose aria-current");
assert.match(styles, /\.deliveryTab\s*\{[\s\S]*?background:/, "Delivery Menu needs a distinct style");
assert.match(styles, /\.primaryTab:focus-visible\s*\{/, "Menu choices need a visible keyboard focus state");
assert.match(styles, /@media \(max-width: 560px\)[\s\S]*?\.primaryTab\s*\{[\s\S]*?display:\s*grid[\s\S]*?min-height:\s*44px/, "Mobile menu choices must remain visible with 44px touch targets");
assert.match(styles, /@media \(max-width: 560px\)[\s\S]*?\.topBarRight\s*\{[\s\S]*?grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/, "Mobile menu choices must use a non-overflowing two-column grid");

console.log("Navigation action check passed: Store and Delivery menu controls are visible, accessible, and mobile-safe.");
