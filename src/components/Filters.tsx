import React, { useContext, useEffect, useState } from "react";

import { FilterContext } from "../context/FilterContext";
import { Product } from "../types/Product";

export const Filters = () => {
  const [categories, setCategories] = useState([]);
  const { setFilters } = useContext(FilterContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevFilters: Product) => ({
      ...prevFilters,
      category: event.target.value,
    }));
  };

  return (
    <div>
      <h1>Filters</h1>
      <select onChange={handleFilterChange}>
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
