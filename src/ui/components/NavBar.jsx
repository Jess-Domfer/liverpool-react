import { AppBar, Toolbar, IconButton, Grid, Box } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth';

export const NavBar = ({ drawerWidth = 240, actions = true, onChangeSide }) => {
	const [showSide, setShowSide] = useState(false);
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(startLogout());
	};

	const onChangeShowSide = () => {
		setShowSide(true);
		onChangeSide(showSide);
	};

	return (
		<AppBar position="fixed" xs={{}}>
			<Toolbar>
				{actions ? (
					<IconButton color="inherit" onClick={onChangeShowSide}>
						<MenuOutlined />
					</IconButton>
				) : null}

				<Grid
					container
					direction="row"
					justifyContent="space-between"
					alignItems="center">
					<Box
						component="img"
						sx={{
							height: 30,
							width: { md: 500 },
							maxHeight: { xs: 30, md: 30 },
							maxWidth: { xs: 600 }
						}}
						alt="Logo liverpool"
						src="/src/assets/images/liverpool-logo.svg"
					/>
					{actions ? (
						<IconButton color="inherit" onClick={onLogout}>
							<LogoutOutlined />
						</IconButton>
					) : null}
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
