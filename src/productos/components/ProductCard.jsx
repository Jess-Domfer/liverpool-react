import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { LocalOffer } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, title, url, price, date, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className=" animate__fadeInUp">
      <CardHeader title={title} />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <LocalOffer />
        </IconButton>
        <Typography variant="h5" color="text.secondary" sx={{ margin: 2 }}>
          ${price.amount}.00
        </Typography>
      </CardActions>

      <CardMedia
        component="img"
        height="194"
        image={url.url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ margin: 2 }}>
        <Link to={`product/${id}`}>Más información..</Link>
      </CardActions>
    </Card>
  );
};
