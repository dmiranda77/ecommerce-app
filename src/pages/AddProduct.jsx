import React from "react";
import ProductsForm from "../components/ProductsForm";
import * as productService from "../services/product";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const handleSubmit = (product) => {
    console.log("from add product page handle submit");
    productService.addproduct(product).then((response) => {
      navigate("/products");
    });
  };

  return (
    <div>
      <ProductsForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddProduct;
