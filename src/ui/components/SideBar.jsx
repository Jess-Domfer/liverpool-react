import {
	Avatar,
	Box,
	Divider,
	Drawer,
	IconButton,
	Toolbar,
	Typography
} from '@mui/material';
import { useSelector } from 'react-redux';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';

export const SideBar = ({ open }) => {
	const { displayName } = useSelector(state => state.auth);

	const [close, setClose] = useState(open);

	const handleDrawerOpen = () => {
		setClose(true);
		open = false;
	};

	return (
		<Box component="nav">
			<Drawer open={open && !close}>
				<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
					<IconButton size="large" color="primary" onClick={handleDrawerOpen}>
						<ChevronLeftIcon fontSize="80" />
					</IconButton>
				</Box>

				<Divider />
				<Toolbar>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							p: 2
						}}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center'
							}}>
							<Avatar src="/broken-image.jpg" />
						</Box>
						<Typography variant="h6" component="div" textAlign="center">
							{displayName}
						</Typography>
					</Box>
				</Toolbar>
			</Drawer>
		</Box>
	);
};
