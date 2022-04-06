import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomeBanner = (props) => {
  const { imageURL, heading, subheading, buttonText } = props;
  const navigate = useNavigate();

  return (
    <div className="home_banner">
      <div className="image_section">
        <img src={imageURL} alt="" />
      </div>

      <div className="text_section">
        <h1>{heading}</h1>

        <h3>{subheading}</h3>

        <Button
          variant="contained"
          color="error"
          onClick={() => navigate("/products")}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default HomeBanner;
