import React from 'react'
import Brandmiddle from './Brandmiddle.js'
import ProductsSection from './ProductSection.js'
import axios from 'axios'

const HeroSection = async () => {
   const res = await axios.get("https://fakestoreapi.com/products", {
    headers: { "Cache-Control": "no-store" }
  });
  const products = res.data;
  return (
    <>
      <Brandmiddle />
      <ProductsSection products={products} />
    </>
  )
}



export default HeroSection