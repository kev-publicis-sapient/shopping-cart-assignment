import { Button } from "@mui/material";
import ProductSingle from "../ProductSingle";

const ProductsList = ({ products }) => {
  const getProducts = () => {
    return products?.map((product) => {
      return <ProductSingle key={product.id} product={product} />;
    });
  };

  return <div className="products_list">{getProducts()}</div>;
};

export default ProductsList;
