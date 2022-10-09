import AppBar from '@mui/material/AppBar';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search'
import './styled/Topbar.scss';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import React from 'react';
import logo from '../../data/images/nobears.png'


function Topbar() {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed">
            <Toolbar className="Toolbar">
                <img src={logo} alt="logo" className="logo" />
                <Input
                    id="input-with-icon-adornment"
                    disableUnderline={true}
                    placeholder="Zoeken"
                    className="Search-Input"
                    sx={{ color: '#A3A3A3'}} // override manual not working in scss
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton aria-label="upload-picture" component="label">
                                <SearchIcon className="Search-Icon" />
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <ChatIcon sx={{ fontSize: { xs: '27px', md: '33px' } }} className="Icon" />
                <NotificationsIcon sx={{ fontSize: { xs: '27px', md: '33px' } }} className="Icon" />
                <Box sx={{ mr: { xs: '0px', md: '40px' } }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Leon" src="../../data/images/test" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
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
                        <MenuItem onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">New Achievment</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Topbar;
