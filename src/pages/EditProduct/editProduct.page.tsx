import "./editProduct.scss";
import { TextField, Button } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { IProduct } from "../../types/IProduct";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../constants/url.constants";
import React from "react";

const EditProduct: React.FC = () => {
  const [product, setProduct] = React.useState<Partial<IProduct>>({
    title: "",
    brand: "",
  });
  const redirect = useNavigate();
  const { id } = useParams();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  React.useEffect(() => {
    axios.get<IProduct>(`${baseUrl}/${id}`).then((response) =>
      setProduct({
        title: response.data.title,
        brand: response.data.brand,
      })
    );
  }, []);

  const handleSaveButtonClick = () => {
    if (product.title === "" || product.brand === "") {
      alert("Please fill all fields");
      return;
    }

    const data: Partial<IProduct> = {
      brand: product.brand,
      title: product.title,
    };

    axios
      .put(`${baseUrl}/${id}`, data)
      .then((response) =>
        redirect("/products", {
          state: { message: "Product updated successfully" },
        })
      )
      .catch((error) => alert("An error occurred"));
  };

  const handleCancelButtonClick = () => {
    redirect("/products");
  };

  return (
    <div className="edit-Product">
      <h2>Edit Product</h2>
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

export default EditProduct;
