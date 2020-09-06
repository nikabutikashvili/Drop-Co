import React from "react";
import ProductCatalogue from "../common/ProductsCatalogue";
function TeaCatalogue() {
  return <ProductCatalogue data={productAll} />;
}
export default TeaCatalogue;

const productAll = {
  coffee: [
    {
      name: "Green Tea",
      about: "Small bitter beverage that  spreads all flavor notes",
      img:
        "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      price: 10,
      calories: 120,
      id: 1,
    },
    {
      name: "Black Tea",
      about: "Espresso shot with a small amount of milk",
      img:
        "https://images.unsplash.com/photo-1534687941688-651ccaafbff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      price: 13,
      calories: 120,
      id: 2,
    },
    {
      name: "Georgian Tea",
      about: "Espresso shot with pure water",
      img:
        "https://images.unsplash.com/photo-1556845925-1ff299fcd5b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      price: 18,
      calories: 120,
      id: 3,
    },
    {
      name: "American Tea",
      about: "Espresso shot with less amout of milk than cappuccino",
      img:
        "https://images.unsplash.com/photo-1558210834-473f430c09ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      price: 9,
      calories: 120,
      id: 4,
    },
    {
      name: "English Tea",
      about: "Espresso shot with some amount of milk",
      img:
        "https://images.unsplash.com/photo-1551539441-309773d8580b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
      price: 5,
      calories: 120,
      id: 5,
    },
    {
      name: "Irish Tea",
      about: "Espresso shot with many amount of milk",
      img:
        "https://images.unsplash.com/photo-1555778586-061e5dee1102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1316&q=80",
      price: 12,
      calories: 120,
      id: 6,
    },
    {
      name: "Persian Tea",
      about: "Espresso shot, many amount of milk and cacao chocolate",
      img:
        "https://images.unsplash.com/photo-1521813475821-5e3f5bc3c7a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
      price: 13,
      calories: 120,
      id: 7,
    },
    {
      name: "V60",
      about: "Filtered coffee with water spreading all flavor notes",
      img:
        "https://images.unsplash.com/photo-1541498355002-4ee81a1872ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
      price: 13,
      calories: 120,
      id: 8,
    },
    {
      name: "Chemex",
      about: "Filtered coffee with water spreading all flavor notes",
      img:
        "https://images.unsplash.com/photo-1520722217742-5887a8cb5778?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      price: 13,
      calories: 120,
      id: 9,
    },
    {
      name: "Aeropress",
      about: "Filtered pressure coffee",
      img:
        "https://images.unsplash.com/photo-1496198183329-402041b2487b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1032&q=80",
      price: 13,
      calories: 120,
      id: 10,
    },
    {
      name: "Syphon",
      about: "It produces a delicate, tea-like cup of coffee",
      img:
        "https://images.unsplash.com/photo-1550048192-f5416a1f132a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      price: 13,
      calories: 120,
      id: 11,
    },
  ],
};