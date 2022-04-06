import { Button } from "@mui/material";
import { withCart } from "context/cartContext";
import { NotificationManager } from "react-notifications";
import { API_URL } from "utils/constants";

const ProductSingle = ({ product, addCartItem }) => {
  const handleAdd = async (productId) => {
    try {
      const res = await fetch(`${API_URL}/addToCart`, {
        method: "POST",
        body: JSON.stringify({ productId }),
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json());

      addCartItem(productId);

      NotificationManager.success(res.responseMessage, res.response);
    } catch (error) {
      NotificationManager.error(error.responseMessage, "Error");
    }
  };

  return (
    <div className="single_product">
      <p className="product_name">{product.name}</p>

      <div className="product_img_desc_wrapper">
        <img
          className="product_image"
          src={product.imageURL}
          alt={product.name}
        />

        <div className="product_description">
          <p>{product.description}</p>
        </div>
      </div>

      <div className="product_footer">
        <span>MRP Rs. {product.price}</span>

        <Button
          variant="contained"
          color="error"
          onClick={() => handleAdd(product.id)}
        >
          Buy Now
        </Button>
      </div>

      <div className="product_footer_tab">
        <Button
          variant="contained"
          color="error"
          onClick={() => handleAdd(product.id)}
        >
          Buy Now @ Rs. {product.price}
        </Button>
      </div>

      <div className="product_details_mob">
        <img
          className="product_image"
          src={product.imageURL}
          alt={product.name}
        />

        <div className="product_desc_price_wrapper">
          <div className="product_description">
            <p>{product.description}</p>
          </div>

          <Button
            variant="contained"
            color="error"
            onClick={() => handleAdd(product.id)}
          >
            Buy Now @ Rs. {product.price}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withCart(ProductSingle);
