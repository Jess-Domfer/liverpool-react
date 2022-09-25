import { SearchOff } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

export const EmptyState = () => {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: '100vh', padding: 4 }}>
			<SearchOff sx={{ fontSize: 80 }} color="primary" />
			<Typography variant="h5" color="text.primary">
				No se encontrarón resultados
			</Typography>
		</Grid>
	);
};
