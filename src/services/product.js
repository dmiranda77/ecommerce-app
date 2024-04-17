import http from "./http";

export function fetchProduct() {
  return http.get("/products");
}

export function fetchproductById(id) {
  return http.get(`/products/${id}`);
}

export function addproduct(product) {
  const productClone = { ...product };
  Object.keys(productClone).forEach((key) => {
    if (
      productClone[key] === "" ||
      productClone[key] === null ||
      productClone[key] === undefined
    ) {
      delete productClone[productClone];
    }
  });
  return http.post(`/products`, product);
}

export function updateproduct(id, product) {
  const productClone = { ...product };

  Object.keys(productClone).forEach((key) => {
    if (
      productClone[key] === "" ||
      productClone[key] === null ||
      productClone[key] === undefined
    ) {
      delete productClone[key];
    }
  });
  return http.put(`/products/${id}`, productClone);
}

export function deleteProduct(id) {
  return http.delete(`/products/${id}`);
}
