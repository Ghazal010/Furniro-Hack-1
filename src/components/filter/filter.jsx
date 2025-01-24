import React, { useState } from "react";

const FilterArea = ({ products, setFilteredProducts }) => {
  const [activeTag, setActiveTag] = useState(null);

  // Get unique tags from all products
  const uniqueTags = Array.from(new Set(products.flatMap((product) => product.tags)));

  const handleTagClick = (tag) => {
    setActiveTag(tag);
    if (tag === null) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.tags.includes(tag)));
    }
  };

  return (
    <div className="flex flex-wrap gap-4 my-4">
      {/* Show "All" as a default filter */}
      <button
        onClick={() => handleTagClick(null)}
        className={`px-4 py-2 rounded-md border ${
          activeTag === null ? "bg-orange-400 text-white" : "bg-white text-gray-800"
        }`}
      >
        All
      </button>

      {/* Dynamically generate buttons for each tag */}
      {uniqueTags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`px-4 py-2 rounded-md border ${
            activeTag === tag ? "bg-orange-400 text-white" : "bg-white text-gray-800"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterArea;
