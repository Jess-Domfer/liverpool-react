import { ProductCard } from "./ProductCard";
import Grid from "@mui/material/Grid";

import { useFetchProducts } from "../../hooks";
import { Loading } from "../../ui/components";

export const ProductsList = () => {
  const { products, isLoading } = useFetchProducts();

  return (
    <Grid container direction="row" justifyContent="center">
      {isLoading ? (
        <Loading />
      ) : (
        products.map((productoItem) => (
          <Grid item key={productoItem.id} sx={{ p: 1 }}>
            <ProductCard {...productoItem} />
          </Grid>
        ))
      )}
    </Grid>
  );
};
