import { useEffect, useState } from "react";
import { getProducts } from "../productos/helpers";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductInfo = async () => {
    const newProducts = await getProducts("valorant");
    setProducts(newProducts);
    setIsLoading(false);
  };
  useEffect(() => {
    getProductInfo();
  }, []);

  return {
    products: products,
    isLoading: isLoading,
  };
};
