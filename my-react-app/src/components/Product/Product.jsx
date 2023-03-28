import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, seller, quantity, name, price, shipping } = props.product;
  const handleCart = props.handleCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div>
        <h6>Name:{name}</h6>
        <p>Price:{price}</p>
        <p>shipping:{shipping}</p>
      </div>
      <button onClick={() => handleCart(props.product)} className="btn-cart">
        Add to Cart{" "}
      </button>
    </div>
  );
};

export default Product;
