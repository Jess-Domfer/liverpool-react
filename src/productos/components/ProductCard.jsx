import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { LocalOffer } from "@mui/icons-material";

export const ProductCard = ({ id, title, url, price, date, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={title} subheader={date} />
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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <LocalOffer />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {price.amount}
        </Typography>
      </CardActions>
    </Card>
  );
};
