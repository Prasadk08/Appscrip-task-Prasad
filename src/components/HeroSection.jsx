import React from "react";
import Brandmiddle from "./BrandMiddle";
import ProductsSection from "./ProductSection";

const getProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
};

const HeroSection = async () => {
  const products = await getProducts();

  return (
    <>
      <Brandmiddle />
      <ProductsSection products={products} />
    </>
  );
};

export default HeroSection;
