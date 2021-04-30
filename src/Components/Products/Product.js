import React from "react";
import pic from "../../images/testProductImage.jpg";
import "../../css/product.css";

function Product({ image, title, description, price }) {
  //get all products from store

  //map items to list

  return (
    <div id="product">
      <img className="productImage" src={pic} alt="product" />
      <div className="row">
        <div className="col-lg-6">
          <h3>Title</h3>
          <p> blaasjiowejuvnaivuwndjc</p>
        </div>
        <div>
          <p>Descriptions</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
