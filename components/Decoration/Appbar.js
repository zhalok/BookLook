import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

const pages = [
	{ name: 'Books', link: '/books' },
	{ name: 'Contribute', link: '/upload' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Appbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
					>
						<Link href='/'>
							<a>BookLook</a>
						</Link>
					</Typography>

					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
					>
						LOGO
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page, index) => (
							<Link href={page.link}>
								<a>
									<Button
										key={index}
										onClick={handleCloseNavMenu}
										sx={{ my: 2, color: 'white', display: 'block' }}
									>
										{page.name}
									</Button>
								</a>
							</Link>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Appbar;
