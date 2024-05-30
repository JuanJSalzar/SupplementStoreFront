import React from "react";
import "./addProduct.scss";
import { TextField, Button } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { IProduct } from "../../types/IProduct";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../constants/url.constants";

const AddProduct: React.FC = () => {
  const [product, setProduct] = React.useState<Partial<IProduct>>({
    title: "",
    brand: "",
  });
  const redirect = useNavigate();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleSaveButtonClick = () => {
    if (product.title === "" || product.brand === "") {
      alert("Please fill in all fields");
      return;
    }

    const data: Partial<IProduct> = {
      brand: product.brand,
      title: product.title,
    };

    axios
      .post(baseUrl, data)
      .then((response) =>
        redirect("/products", {
          state: { message: "Product created successfully" },
        })
      )
      .catch((error) => alert("An error occurred"));
  };

  const handleCancelButtonClick = () => {
    redirect("/products");
  };

  return (
    <div className="add-Product">
      <h2>Add New Product</h2>
      <TextField
        autoComplete="off"
        label="Brand"
        variant="outlined"
        name="brand"
        value={product.brand}
        onChange={changeHandler}
      />
      <TextField
        autoComplete="off"
        label="Title"
        variant="outlined"
        name="title"
        value={product.title}
        onChange={changeHandler}
      />
      <div className="button-separator">
        <div>
          <Button
            variant="outlined"
            color="success"
            onClick={handleSaveButtonClick}
          >
            <SaveOutlinedIcon />
            Save
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            color="error"
            onClick={handleCancelButtonClick}
          >
            <ClearOutlinedIcon /> Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
