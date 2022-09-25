import { ProductCard } from "./ProductCard";
import Grid from "@mui/material/Grid";

import { useFetchProducts } from "../../hooks";
import { Loading } from "../../ui/components";
import { FormControl, Input, InputAdornment } from "@mui/material";
import { AccountCircle, Search } from "@mui/icons-material";
import { useEffect, useState } from "react";

export const ProductsList = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState(props.products);

  useEffect(() => {
    const newProducts = props.products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProducts(newProducts);
  }, [searchValue]);

  const filterBySearch = (event) => {
    const query = event.target.value;
    setSearchValue(query);
  };

  return (
    <Grid container justifyContent="center">
      <FormControl variant="standard" sx={{ m: 1, width: "45ch" }}>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          placeholder="Buscar..."
          onChange={filterBySearch}
        />
      </FormControl>
      <Grid container direction="row" justifyContent="center">
        {products.map((productoItem) => (
          <Grid item key={productoItem.id} sx={{ p: 3 }}>
            <ProductCard {...productoItem} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
