import { Button } from "@mui/material";
import { withCart } from "context/cartContext";
import "styles/cart.css";

const Cart = (props) => {
  if (!props?.isCartOpen) return null;

  return (
    <div className="cart_wrapper">
      <div className="cart_container">
        <div className="cart_header">
          <div>My Cart (0 item(s))</div>

          <i className="fa fa-times" onClick={props.toggleCart} />
        </div>

        <div className="cart_items">
          <div className="cart_single_item">
            <img
              src="static/images/products/fruit-n-veg/apple.jpg"
              alt="product_image"
            />

            <div className="item_info">
              <p className="item_name">Apple Washington</p>
              <p className="item_qty_price_container">
                <span className="item_qty_container">
                  <i className="fa fa-minus" />
                  <span className="item_qty">5</span>
                  <i className="fa fa-plus" />
                </span>

                <i className="fa fa-times times" />

                <span className="item_price">Rs.187</span>
              </p>
            </div>

            <div className="item_total">
              <span>Rs.187</span>
            </div>
          </div>
        </div>

        <div className="low_price_banner">
          <img src="static/images/lowest-price.png" alt="" />
          <span>You won't find it cheaper anywhere</span>
        </div>

        <div className="cart_footer">
          <p className="promo_disclaimer">
            Promo code can be applied on payment page
          </p>

          <div className="cart_total_container">
            <Button variant="contained" color="error">
              <span className="checkout_cta_text">Proceed to Checkout</span>
              <span className="cart_total_price">Rs. 178</span>
              <i className="fa fa-chevron-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withCart(Cart);
