import "styles/header.css";
import { Link } from "react-router-dom";
import { withCart } from "context/cartContext";

const Header = (props) => {
  return (
    <header>
      <div className="logo_container">
        <img className="logo" src="static/images/logo.png" alt="" />
      </div>

      <nav className="nav_bar">
        <Link to={"/"}>
          <strong>Home</strong>
        </Link>

        <Link to={"/products"}>
          <strong>Products</strong>
        </Link>
      </nav>

      <div className="user_cart_info">
        <div className="user_info">
          <Link to={"/signin"}>SignIn</Link>
          <Link to={"/register"}>Register</Link>
        </div>

        <div className="cart_info" onClick={props.toggleCart}>
          <img src={"static/images/cart.svg"} alt="cart" />
          <span>0 items</span>
        </div>
      </div>
    </header>
  );
};

export default withCart(Header);
