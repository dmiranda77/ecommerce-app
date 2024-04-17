import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, CardActions, Button, Container } from '@mui/material';
import ProductsTable from '../components/ProductsTable';
import { products_data as products } from '../data/products';
import '../App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Cinzel"',
    ].join(','),
  },
});
export default class Products extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <Container className='container'>
        <Typography variant="h3" align="center" gutterBottom>
         Shopmee
        </Typography>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
              <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className="product-card">
                  <CardContent className="product-card-content">
                    <Typography variant="h5" component="h2" className="product-title">{product.title}</Typography>
                    <Typography variant="body1" className="product-price">Php {product.price}</Typography>
                    <img src={product.image} alt={product.title} className="product-card-image" />
                    {/* <Typography variant="body2">{product.description}</Typography> */}
                    <Typography variant="body2">Ratings: {product.rating.rate}/5</Typography>
                  </CardContent>
                  <CardActions className="product-card-actions">
                    <Button variant="contained" color="primary">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
      </ThemeProvider>
    );
  }
}
