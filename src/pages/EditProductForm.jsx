import React, { useState, useEffect } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { products_data as initialProducts } from "../data/products";

const EditProductForm = () => {
  const [editedProduct, setEditedProduct] = useState(null);
  const params = useParams();
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    const product = products.find((product) => product.id === parseInt(params.id));
    setEditedProduct(product);
  }, [params.id, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
    console.log("Product updated:", editedProduct);
  };

  if (!editedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={editedProduct.title}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Price"
            name="price"
            value={editedProduct.price}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            name="description"
            value={editedProduct.description}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Category"
            name="category"
            value={editedProduct.category}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Image URL"
            name="image"
            value={editedProduct.image}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditProductForm;
