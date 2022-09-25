import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { NavBar } from '../../ui/components';
import { SideBar } from '../../ui/components/SideBar';

const drawerWidth = 240;

export const ProductosLayout = ({ children }) => {
	const [showSide, setShowSide] = useState(false);

	return (
		<Box
			sx={{ display: 'flex' }}
			className="animate__animated animate__fadeIn animate__faster">
			<NavBar onChangeSide={show => setShowSide(show)} />
			<SideBar open={showSide} />
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};
