"use client";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import { FaFilter } from "react-icons/fa";

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
    const [filterTag, setFilterTag] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isGridView, setIsGridView] = useState(true);

    const itemsPerPage = 8;

    useEffect(() => {
        const fetchProducts = async () => {
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
        fetchProducts();
    }, []);

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

    const filteredProducts = filterTag
        ? products.filter((product) => product.tags.includes(filterTag))
        : products;

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    return (

        <div className="p-4">


        
                <div className="w-full relative bg-white flex flex-col items-start justify-start leading-normal tracking-normal">
                  <div className="flex flex-col justify-start mx-auto w-full px-2 sm:px-6 md:px-8 lg:px-12">
            
            <section className="bg-[url('/blogMainImage.png')] bg-cover bg-center md:py-16">
                    <div className="container mx-auto px-4 text-center">
                      <div className="inline-block w-20 h-16 bg-[url('/logo1.png')] mb-4" />
                      <h1 className="text-3xl md:text-4xl font-medium mb-4">Shop</h1>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <a href="#" className="hover:underline">
                          Home
                        </a>
                        <span>
                          <Image src={"/rightA.png"} width={20} height={20} alt="arrow" />
                        </span>
                        <span>Shop</span>
                      </div>
                    </div>
                  </section>
                  </div>
          </div>
            {/* Filter Dropdown */}
            <div className="mb-4 ml-10">
                <label htmlFor="filter" className="text-lg font-bold">
                    Filter by Tag
                </label>
                <select
                    id="filter"
                    value={filterTag || ""}
                    onChange={(e) => setFilterTag(e.target.value || null)}
                    className="p-2 border rounded-md ml-4"
                >
                    <option value="">All</option>
                    {Array.from(new Set(products.flatMap((product) => product.tags))).map(
                        (tag) => (
                            <option key={tag} value={tag}>
                                {tag}
                            </option>
                        )
                    )}
                </select>
            </div>

            {/* View Toggle
            <div className="flex justify-end mt-0">
                <button
                    onClick={() => setIsGridView(!isGridView)}
                    className="p-2 bg-orange-400 text-white rounded-md"
                >
                    Toggle to {isGridView ? "List" : "Grid"} View
                </button>
            </div> */}

            {/* Products Grid */}
            <div
                className={
                    isGridView
                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                        : "space-y-4"
                }
            >
                {paginatedProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                    >
                        <Image
                            src={product.imageUrl}
                            alt={product.title}
                            width={300}
                            height={300}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                            <p className="text-sm text-slate-800">
                                {truncateDescription(product.description)}
                            </p>
                            <p className="text-orange-500 font-bold mt-2">
                                ${product.price.toFixed(2)}
                            </p>
                            <button
                                onClick={() => addToCart(product)}
                                className="mt-4 w-full bg-orange-400 text-white py-2 rounded-md"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center space-x-2 my-4">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-4 py-2 border rounded-md ${
                            currentPage === i + 1 ? "bg-orange-400 text-white" : "bg-white"
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            {/* Cart */}
            {isCartOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50"
                        onClick={() => setIsCartOpen(false)}
                    ></div>
                    <div className="relative w-80 bg-white shadow-lg h-full p-4 overflow-y-auto">
                        <button
                            className="absolute top-4 right-4 text-red-500"
                            onClick={() => setIsCartOpen(false)}
                        >
                            Close
                        </button>
                        <h2 className="text-lg font-black mb-4">Your Cart</h2>
                        {cart.map((item, index) => (
                            <div key={index} className="flex justify-between">
                                <span>{item.title}</span>
                                <span>${item.price.toFixed(2)}</span>
                                <button
                                    onClick={() => removeFromCart(index)}
                                    className="text-red-500"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <div className="mt-4 font-bold">
                            Total: ${calculateTotal()}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCards;
