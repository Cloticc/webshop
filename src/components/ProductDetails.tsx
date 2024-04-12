import "../styles/ProductDetails.css";

import { useContext, useEffect, useState } from "react";

import { CartContext } from "../context/CartContext";
import { Product } from "../types/Product";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const id = useParams<{ id: string }>().id;
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct({ ...data, quantity: 1 }));
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="details-container">
      <h1 className="details-tilee">{product.title} </h1>
      <img className="details-img" src={product.image} alt={product.title} />
      <p className="details-price">price {product.price.toFixed(2)} $</p>
      <button className="details-card-btn" onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </div>
  );
};
