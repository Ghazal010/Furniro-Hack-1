"use client"
import Shopbottombar from '@/components/shopBottomBar/Shopbottombar'
import { Input } from '@/components/ui/input'
import { Trash } from 'lucide-react'

import CartTotals from '@/components/cartTotals/CartTotals'

// function Cart() {
//   return (
//     <>
//     {/* <section className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-12 md:py-16 mb-6">
//               <div className="container mx-auto px-4 text-center">
//                 <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
//                 <h1 className="text-3xl md:text-4xl font-medium mb-4">Cart</h1>
//                 <div className="flex items-center justify-center gap-2 text-sm">
//                   <a href="#" className="hover:underline">
//                     Home
//                   </a>
//                   <span>
//                     <Image src={"/rightA.png"} width={20} height={20} alt="arrow" />
//                   </span>
//                   <span>Cart</span>
//                 </div>
//               </div>
//             </section>
     
//       <div className="w-full flex flex-col lg:flex-row gap-8 px-6 md:px-12 lg:px-24 mb-16">
        
//         <div className="w-full lg:w-[817px]">
//           <div className="bg-[#f9f1e7] w-full h-14 px-4 flex items-center text-[16px] leading-[24px]">
//             <p className="w-1/4 text-center">Product</p>
//             <p className="w-1/4 text-center">Price</p>
//             <p className="w-1/4 text-center">Quantity</p>
//             <p className="w-1/4 text-center">SubTotal</p>
//           </div>

//           <div className="mt-8 flex flex-col md:flex-row items-center md:justify-between gap-4">
//             <div className="flex items-center gap-4">
//               <Image
//                 src="/cart2.png"
//                 alt="cart2"
//                 width={108}
//                 height={105}
//                 className="max-w-full"
//               />
//               <p className="text-[#9f9f9f]">Asgaard sofa</p>
//             </div>

//             <p className="text-[#9f9f9f]">Rs. 250,000.00</p>

//             <Input 
//               placeholder="1" 
//               className="w-12 h-12 text-center text-[16px] leading-[24px]"
//             />

//             <p className="text-[#9f9f9f]">Rs. 250,000.00</p>

//             <Trash size={28} fill="#b88e2f" />
//           </div>
//         </div>

//         <div className="w-full lg:w-[393px]"> */}
// {/* 
//           <CartTotals/>
         
//         </div>
//       </div>

//       <Shopbottombar />
//     </>
//   )
// } */}

// export default Cart

import React, { useState } from "react";
import Image from "next/image";

// Define the type for a product
interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

function Cart() {
  // State for managing the cart
  const [cart, setCart] = useState<Product[]>([]); // Explicitly set the type to Product[]

  // Dummy products array for demonstration
  const products: Product[] = [
    { id: 1, title: "Product 1", price: 10.99, imageUrl: "/images/product1.jpg" },
    { id: 2, title: "Product 2", price: 15.99, imageUrl: "/images/product2.jpg" },
    { id: 3, title: "Product 3", price: 8.99, imageUrl: "/images/product3.jpg" },
  ];

  // Function to add a product to the cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]); // Now the type matches
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-50 mt-4 mb-4">Available Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-md p-4 bg-white shadow-md flex flex-col items-center">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={150}
              height={150}
              className="rounded-md"
            />
            <p className="font-medium text-slate-900 mt-2">{product.title}</p>
            <p className="text-sm text-blue-700">${product.price.toFixed(2)}</p>
            <button
              className="mt-4 w-full bg-orange-400 text-white py-2 rounded-md hover:bg-slate-800"
              onClick={() => addToCart(product)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-slate-700 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-red-700">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md">
                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="text-sm text-blue-700">${item.price.toFixed(2)}</p>
                </div>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">
            Your Cart is Empty. Please Choose Products
          </p>
        )}
      </div>
    </div>
  );
}

export default Cart;

