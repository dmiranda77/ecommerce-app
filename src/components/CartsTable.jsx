import { ArrowForward, Delete, Edit } from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CartsTable = ({ carts, onDeleteCart }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carts.map((cart) => (
            <TableRow
              key={cart.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {cart.title}
              </TableCell>
              <TableCell>{cart.price}</TableCell>
              <TableCell>{cart.category}</TableCell>
              <TableCell>
                <Link to={`/carts
                /${cart.id}`}>
                  <IconButton color="primary">
                    <ArrowForward />
                  </IconButton>
                </Link>
                <Link to={`/carts
                /${cart.id}/edit`}>
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                </Link>
                <IconButton
                  onClick={() => onDeletecarts
                    (cart
    .id)}
                  color="error">
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartsTable;
