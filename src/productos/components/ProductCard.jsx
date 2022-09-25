import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { LocalOffer } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ id, title, url, price, date, description }) => {
	const navigate = useNavigate();

	const onNavigate = () => {
		navigate(`product/${id}`);
	};
	return (
		<Card sx={{ maxWidth: 345 }} className=" animate__fadeInUp">
			<CardHeader title={title} />
			<CardActions disableSpacing sx={{ margin: 1 }}>
				<LocalOffer color="primary" />
				<Typography variant="h5" color="text.secondary">
					${price.amount}.00
				</Typography>
			</CardActions>

			<CardMedia component="img" height="194" image={url.url} alt={title} />
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing sx={{ margin: 2 }}>
				<Button variant="outlined" color="primary" onClick={onNavigate}>
					Más información...
				</Button>
			</CardActions>
		</Card>
	);
};
