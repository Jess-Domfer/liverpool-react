import {
  Card,
  CardMedia,
  Grid,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

export const ProductoDetail = ({
  id,
  product,
  description,
  price,
  unit,
  image
}) => {

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <Grid
      container
      className="animate__animated animate__fadeInLeft"
      direction="row"
      justifyContent="center">
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
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  Producto
                </TableCell>
                <TableCell component="th" scope="row">
                  {product}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Descripción
                </TableCell>
                <TableCell component="th" scope="row">
                  {description}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Precio
                </TableCell>
                <TableCell component="th" scope="row">
                  {`$ ${price.amount}.00`}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Unidades
                </TableCell>
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
