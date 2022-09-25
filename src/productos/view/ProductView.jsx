import { Grid } from '@mui/material';
import { useFetchProducts } from '../../hooks';
import { Loading } from '../../ui/components';
import { ProductsList } from '../components';

export const ProductView = () => {
	const { products, isLoading } = useFetchProducts();

	return (
		<Grid
			container
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			sx={{ mb: 1 }}>
			{isLoading ? <Loading /> : <ProductsList products={products} />}
		</Grid>
	);
};
