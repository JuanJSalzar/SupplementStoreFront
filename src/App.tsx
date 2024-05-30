import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/home.page";
import Products from "./pages/Products/products.page";
import AddProduct from "./pages/AddProduct/addProduct.page";
import EditProduct from "./pages/EditProduct/editProduct.page";
import DeleteProduct from "./pages/DeleteProduct/deleteProduct.page";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />

      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products">
            <Route index element={<Products />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
            <Route path="delete/:id" element={<DeleteProduct />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
