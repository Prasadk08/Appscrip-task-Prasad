"use server";
import React from 'react'
import Brandmiddle from './BrandMiddle'
import ProductsSection from './ProductSection'
import axios from 'axios'

const getProducts = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products", {
      headers: { "Cache-Control": "no-store" },
    });
    return res.data;
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
  )
}

export default HeroSection;
