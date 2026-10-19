/**
 * PL501 exact full name + NAP. Name = the store's full name as used on its Google Business Profile.
 * Public GBP primary phone only. Map link = this store's own Google place ID.
 */
export const FULL_NAME_NAP = {
  "code": "PL501",
  "fullName": "Planets 59 Dispensary Weed Delivery",
  "street": "8500 Torbram Rd, Unit 59",
  "city": "Brampton",
  "region": "ON",
  "postal": "L6T 5C6",
  "phoneDisplay": "(289) 536-7493",
  "phoneTel": "tel:+12895367493",
  "hours": "Open 24 hours, 7 days a week",
  "mapsUrl": "https://www.google.com/maps/place/?q=place_id:ChIJj4B2l5Y9K4gRorxT85ql9Sg",
  "placeId": "ChIJj4B2l5Y9K4gRorxT85ql9Sg",
  "neighbourhood": "Torbram / Airport Road, Brampton",
  "intersection": "Torbram Rd & Steeles Ave E",
  "transit": "Brampton Transit route 14 Torbram stops at 8500 Torbram Rd, on the same street as the plaza.",
  "visitPath": "/visit"
} as const;

export const FULL_NAME_NAP_ADDRESS = `${FULL_NAME_NAP.street}, ${FULL_NAME_NAP.city}, ${FULL_NAME_NAP.region} ${FULL_NAME_NAP.postal}`;
