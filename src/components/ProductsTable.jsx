import { ArrowForward, Delete, Edit, Add } from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { products_data as products } from "../data/products";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductDetails from "../pages/ProductDetails";
import ProductsForm from "./ProductsForm";

const theme = createTheme({
  palette: {
    primary: {
      main: '#e78b2d', // Custom color for the primary palette
    },
    secondary: {
      main: '#34513a', // Custom color for the secondary palette
    },
  },
  typography: {
    fontFamily: [
      '"Cinzel"',
    ].join(','),
  },
});

const handleArrowButtonClick = (productId, product) => {
  console.log('Chosen Product:', productId);
  < ProductDetails/>
};

const handleAddProductClick = () => {
  console.log('Add New Product:');
  <ProductsForm/>
};

const handleEditProduct = (productId) => {
  console.log('Edit Product:', productId);
};

const handleDeleteProduct = (productId) => {
  console.log('Delete Product:', productId);
  onDelete(productId);
};

const ProductsTable = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} sx={{ margin: 'auto', maxWidth: 1200, borderRadius: 8 }} >
        <Button
          variant="contained"
          color="primary"
          endIcon={<Add />}
          onClick={handleAddProductClick}
          sx={{ margin: 2, float: 'right' }}
        >
          Add Product
        </Button>
        <Typography variant="h4" align="center" gutterBottom sx={{ paddingTop: 2 }}>
          Shopmee Products
        </Typography>
        <TableContainer sx={{ overflowX: 'auto' }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#e78b2d' }}>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}><b>Title</b></TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}><b>Price</b></TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}><b>Description</b></TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}><b>Category</b></TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}><b>Rate</b></TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}><b>Count/Stocks</b></TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((prod) => (
                <TableRow key={prod.id}>
                  <TableCell align="center">{prod.title}</TableCell>
                  <TableCell align="center">Php{prod.price}</TableCell>
                  <TableCell align="left">{prod.description}</TableCell>
                  <TableCell align="center">{prod.category}</TableCell>
                  <TableCell align="center">{prod.rating.rate}/5</TableCell>
                  <TableCell align="center">{prod.rating.count}</TableCell>
                  <TableCell align="center">
                    <ThemeProvider theme={theme}>
                      <Link to={`/products/${prod.id}`}>
                        <IconButton color="primary" onClick={() => handleArrowButtonClick(prod.id, prod)}>
                          <ArrowForward />
                        </IconButton>
                      </Link >
                      <Link to={`/products/${prod.id}/edit`}>
                      <IconButton color="secondary" onClick={() => handleEditProduct(prod.id)}>
                        <Edit />
                      </IconButton>
                      </Link>
                      <Link>
                      <IconButton color="error" onClick={() => handleDeleteProduct(prod.id)}>
                        <Delete />
                      </IconButton>
                      </Link>
                    </ThemeProvider>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </ThemeProvider>
  );
};

export default ProductsTable;
