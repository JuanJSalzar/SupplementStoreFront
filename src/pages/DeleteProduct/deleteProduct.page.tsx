import React from "react";
import "./deleteProduct.scss";

import { Button } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../constants/url.constants";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteProduct: React.FC = () => {
  const redirect = useNavigate();
  const { id } = useParams();

  const handleDeleteButtonClick = () => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((response) =>
        redirect("/products", {
          state: { message: "Product deleted successfully" },
        })
      )
      .catch((error) => alert("An error occurred"));
  };

  const handleCancelButtonClick = () => {
    redirect("/products");
  };

  return (
    <div className="delete-Product">
      <h4>Are you sure you want to delete this product?</h4>
      <div className="button-separator">
        <div>
          <Button
            variant="outlined"
            color="error"
            onClick={handleDeleteButtonClick}
          >
            <DeleteIcon />
            Delete it
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleCancelButtonClick}
          >
            <ClearOutlinedIcon /> Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
