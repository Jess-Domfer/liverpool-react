import { ProductCard } from "./ProductCard";
import Grid from "@mui/material/Grid";
import { getProducts } from "../helpers";
import { useEffect } from "react";
import { useState } from "react";

/* const products = [
  {
    name: "img",
    price: 50,
    description: "",
  },
  {
    name: "img1",
    price: 50,
    description: "",
  },
  {
    name: "img2",
    price: 50,
    description: "",
  },
  {
    name: "img3",
    price: 50,
    description: "",
  },
  {
    name: "img4",
    price: 50,
    description: "",
  },
]; */

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const getProductInfo = async () => {
    const newProducts = await getProducts("valorant");
    setProducts(newProducts);
  };
  useEffect(() => {
    getProductInfo();
  }, []);

  return (
    <Grid container>
      {products.map((productoItem) => (
        <Grid item key={productoItem.id} sx={{ p: 1 }}>
          <ProductCard {...productoItem} />
        </Grid>
      ))}
    </Grid>
  );
};
