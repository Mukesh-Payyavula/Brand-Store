import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
      existingProduct.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8000/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  const Loading = () => (
    <Skeleton height={400} width={400} />
  );

  const ShowProduct = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 col-sm-12 py-3">
          <img className="img-fluid" src={product.image} alt={product.title} />
        </div>
        <div className="col-md-6 py-5">
          <h4 className="text-uppercase text-muted">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <h3 className="display-6 my-4">₹ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark" onClick={() => addToCart(product)}>Add to Cart</button>
          <Link to="/cart" className="btn btn-dark mx-3">Go to Cart</Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      {loading ? <Loading /> : <ShowProduct />}
      <Footer />
    </>
  );
};

export default Product;
