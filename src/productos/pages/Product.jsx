import { useParams } from 'react-router-dom';
import { useFetchDetail } from '../../hooks';
import { Loading } from '../../ui/components';
import { ProductoDetail } from '../components';
import { ProductosLayout } from '../layout/ProductosLayout';

export const Product = () => {
	const { id } = useParams();

	const { product, isLoading } = useFetchDetail(id);

	return (
		<ProductosLayout>
			{isLoading ? <Loading /> : <ProductoDetail {...product} />}
		</ProductosLayout>
	);
};
