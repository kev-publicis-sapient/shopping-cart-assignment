import CategorySelector from "components/Products/CategorySelector";
import ProductsList from "components/Products/ProductsList";
import { useEffect, useState } from "react";
import { API_URL } from "utils/constants";
import "styles/products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await (await fetch(`${API_URL}/products`)).json();
    setProducts(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="products_wrapper">
      <CategorySelector />
      <ProductsList products={products} />
    </div>
  );
};

export default Products;
