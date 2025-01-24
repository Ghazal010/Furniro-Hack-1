"use client"
import { products } from '@/constant/pro1'
import React from 'react'
import { ProductCard } from '../productCard/productCard'
import Link from 'next/link'
import { product } from '@/sanity/schemaTypes/product';

function OurProductsPreview() {
  // Slice to get only the first 8 products
  const displayedProducts = products.slice(0, 8);

  function addToCart(product: any): void {
    console.log(`Added ${product.name} to cart`);
    // Add your cart logic here
  }

  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Products</h2>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 exsm:pl-0 justify-items-center">
            {displayedProducts.map((product) => (
              <div 
                key={product.id} 
                className="flex flex-col items-center bg-white p-4 shadow-md rounded-md h-[500px] max-w-xs w-full justify-between"
              >
                <ProductCard product={product} />
                <div className="mt-auto w-full">
                  <button
                    className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-slate-800"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/shop">
              <button className="border-2 border-[#B88E2F] px-8 py-2 text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-colors">
                Show More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurProductsPreview
