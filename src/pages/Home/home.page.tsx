import "./home.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
//import image
import muscleup from "../../assets/images/MuscleLogo.webp";

const Home = () => {
  const redirect = useNavigate();
  return (
    <div className="home">
      <h1>Welcome to MuscleUp Supplements</h1>
      <Button
        variant="outlined"
        color="error"
        onClick={() => redirect("/products")}
      >
        Product List
      </Button>
      <img src={muscleup} alt="Main" />
    </div>
  );
};

export default Home;
