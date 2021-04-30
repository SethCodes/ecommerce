import React from "react";
import Product from "../Products/Product.js";

function Home() {
  return (
    <div id="header">
      <div className="row">
        <div className="col-lg-6"></div>
        <h1>Ecommerce Home</h1>
        <div className="col-lg-6">
          <h1>Ecommerce Home</h1>
        </div>
      </div>
      <Product className="product__Image" />
    </div>
  );
}

export default Home;
