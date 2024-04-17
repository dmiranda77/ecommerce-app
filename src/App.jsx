import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import { Container, CssBaseline } from '@mui/material';
import ProductsList from "./pages/ProductsList";
import ProductDetails from './pages/ProductDetails';
import ProductsTable from './components/ProductsTable';
import AddProduct from './pages/AddProduct';
import ProductsForm from './components/ProductsForm';
import EditProductForm from './pages/EditProductForm';


function App() {
  return (
    <CssBaseline>
      <Container>
        <Routes>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<ProductsList/>} />
            <Route path="/productsTable" element={<ProductsTable/>} />
            <Route path="/products/:id" element={<ProductDetails/>} />
            <Route path="/products/:id/edit" element={<EditProductForm/>} />
            <Route path="/products/:id/delete" element={<ProductDetails/>} />
            <Route path="/products/new" element={<ProductsForm />} />
        </Routes>
      </Container>
    </CssBaseline>
  );
}

export default App;
