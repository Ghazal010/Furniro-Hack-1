// src/pages/product/[id].tsx
import { useRouter } from "next/router";
import { Product, products } from "@/constant/pro1"; // Import Product type and data

// Define the type for the component's props
interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  // Find the product by ID
  const product: Product | undefined = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      {/* Display other product details as needed */}
    </div>
  );
}
