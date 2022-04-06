import { Link } from "react-router-dom";
import { useState } from "react";
import { withCart } from "context/cartContext";

const CategorySelector = (props) => {
  return (
    <div className="categories_wrapper">
      <ul className="categories_list">
        <li className="category_name">
          <Link to={"fruit-and-veg"}>Fruits &amp; Vegetables</Link>
        </li>
        <li className="category_name">
          <Link to={"bakery-cakes-dairy"}>Bakery Cakes and Dairy</Link>
        </li>
        <li className="category_name">
          <Link to={"beverages"}>Beverages</Link>
        </li>
        <li className="category_name">
          <Link to={"beauty-hygiene"}>Beauty and Hygiene</Link>
        </li>
        <li className="category_name">
          <Link to={"baby-care"}>Baby Care</Link>
        </li>
      </ul>

      <div
        className={`dropdown bs_navbar ${
          props.isCartOpen && "hide_categories"
        }`}
      >
        <a href="#" className="bs_navbar_toggle" data-bs-toggle="dropdown">
          <span>Categories</span>
          <i className="fa fa-chevron-down" />
        </a>
        <div className="dropdown-menu bs_navbar_menu">
          <Link className="dropdown-item bs_navbar_item" to={"fruit-and-veg"}>
            Fruits &amp; Vegetables
          </Link>
          <Link
            className="dropdown-item bs_navbar_item"
            to={"bakery-cakes-dairy"}
          >
            Bakery Cakes and Dairy
          </Link>
          <Link className="dropdown-item bs_navbar_item" to={"beverages"}>
            Beverages
          </Link>
          <Link className="dropdown-item bs_navbar_item" to={"beauty-hygiene"}>
            Beauty and Hygiene
          </Link>
          <Link className="dropdown-item bs_navbar_item" to={"baby-care"}>
            Baby Care
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withCart(CategorySelector);
