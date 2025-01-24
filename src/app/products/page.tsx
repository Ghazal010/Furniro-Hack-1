"use client";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

const sanity = sanityClient({
    projectId: "qum1hy27",
    dataset: "production",
    apiVersion: "2023-01-01",
    useCdn: true,
});

interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    discountPercentage: number;
    imageUrl: string;
    tags: string[];
}

const ProductCards: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const fetchProduct = async () => {
        try {
            const query = `
                *[_type == "product"]{
                    _id,
                    title,
                    price,
                    description,
                    discountPercentage,
                    "imageUrl": productImage.asset->url,
                    tags
                }
            `;

            const data = await sanity.fetch(query);
            setProducts(data);
        } catch (error) {
            console.error("Products Fetching Error:", error);
        }
    };

    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
        setIsCartOpen(true);
    };

    const removeFromCart = (index: number) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
    };

    const truncateDescription = (description: string, maxLength: number = 100) => {
        return description.length > maxLength
            ? `${description.substring(0, maxLength)}...`
            : description;
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-center text-slate-50 mt-4 mb-4">Products From API's Data</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                        <Image
                            src={product.imageUrl}
                            alt={product.title}
                            width={300}
                            height={300}
                            className="w-full h-48 object-cover rounded-md"
                        />

                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                            <p className="text-slate-800 ml-2 text-sm">
                                {truncateDescription(product.description)}
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <p className="text-slate-600 font-bold">${product.price.toFixed(2)}</p>
                                    {product.discountPercentage > 0 && (
                                        <p className="text-sm text-green-500">
                                            {product.discountPercentage}% OFF
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {product.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-slate-700 text-white rounded-full px-2 py-1">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <button
                                className="mt-4 w-full bg-orange-400 text-white py-2 rounded-md hover:bg-slate-800"
                                onClick={() => addToCart(product)}>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {isCartOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50"
                        onClick={() => setIsCartOpen(false)}></div>
                    <div className="relative w-80 bg-white shadow-lg h-full p-4 overflow-y-auto">
                        <button
                            className="absolute top-4 right-4 text-red-500"
                            onClick={() => setIsCartOpen(false)}>
                            Close
                        </button>
                        <h2 className="text-lg font-black text-slate-900 mb-4">Your Cart</h2>
                        {cart.length > 0 ? (
                            <ul className="space-y-4">
                                {cart.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex justify-between items-center bg-gray-100 shadow-sm p-4 rounded-md">
                                        <div>
                                            <p className="font-medium text-slate-900">{item.title}</p>
                                            <p className="text-sm text-blue-700">${item.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Image
                                                src={item.imageUrl}
                                                alt={item.title}
                                                width={50}
                                                height={50}
                                                className="rounded-md"
                                            />
                                            <button
                                                className="text-red-500 hover:text-red-700"
                                                onClick={() => removeFromCart(index)}>
                                                Remove
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 text-center">Your Cart is Empty</p>
                        )}
                        <div className="mt-6 border-t pt-4">
                            <h3 className="text-lg font-bold text-slate-900">Total: ${calculateTotal()}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCards;
