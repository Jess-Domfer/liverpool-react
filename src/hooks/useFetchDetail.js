import { useEffect, useState } from "react";
import { getProductById } from "../productos/helpers/getProductById";

export const useFetchDetail = (id) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductDetail = async () => {
    const newProduct = await getProductById(id);
    setProduct(newProduct);
    setIsLoading(false);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return {
    product: product,
    isLoading: isLoading,
  };
};
