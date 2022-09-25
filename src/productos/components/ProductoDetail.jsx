import {
  Card,
  CardMedia,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const ProductoDetail = ({
  id,
  product,
  description,
  price,
  unit,
  image,
}) => {
  return (
    <Grid
      container
      className="animate__animated animate__fadeInLeft"
      direction="row"
      justifyContent="center"
    >
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="500"
            image={image}
            alt="Paella dish"
          />
        </Card>
      </Grid>
      <Grid item sx={{ margin: 5 }}>
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead></TableHead>
            <TableBody>
              <TableRow>
                Producto
                <TableCell component="th" scope="row">
                  {product}
                </TableCell>
              </TableRow>
              <TableRow>
                Descripción
                <TableCell component="th" scope="row">
                  {description}
                </TableCell>
              </TableRow>
              <TableRow>
                Precio
                <TableCell component="th" scope="row">
                  {price.amount}
                </TableCell>
              </TableRow>
              <TableRow>
                Unidades
                <TableCell component="th" scope="row">
                  {unit}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
