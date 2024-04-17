import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { products_data as products } from "../data/products";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Cinzel"',
    ].join(','),
  },
});
const ProductDetails = ({}) => {
  const params = useParams();
  const productId = params.id;
  const product = products.find((product) => product.id === parseInt(productId));

  console.log('id',productId, 'params', params.id);
  console.log('prod: ', product)

  if (!product) {
    return <div>with value...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
    <Card >
      <CardContent >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className="container" variant="h4">{product.title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={product.image} alt={product.title} style={{ width: "auto", height: "auto", maxHeight: "250px" }} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Price: Php {product.price}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Description: {product.description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Category: {product.category}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Rating: {product.rating && product.rating.rate}/5</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">In Stock: {product.rating && product.rating.count}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </ThemeProvider>
  );
};


export default ProductDetails;
