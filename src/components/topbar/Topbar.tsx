import AppBar from '@mui/material/AppBar';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear';
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
import { useDispatch } from 'react-redux';
import { clearField, searchFilter } from '../../state/searchFilter/searchFilterSlice';
import { newRecord } from '../../state/list/listSlice';


function Topbar() {
    const dispatch = useDispatch();

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [inputSearchBar, setInputSearchBar] = React.useState<string>("");

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleNewRecord = () => {
        dispatch(newRecord());
        setAnchorElUser(null);
    };

    const handleInputSearchBar = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputSearchBar(event.target.value);
    };

    const handleSearch = () => {
        dispatch(searchFilter(inputSearchBar.toLocaleLowerCase()));
    };

    const handleKeyEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatch(searchFilter(inputSearchBar.toLocaleLowerCase()));
        };
    }

    const handleClearSearch = () => {
        setInputSearchBar("");
        dispatch(clearField());
    }

    return (
        <AppBar position="static">
            <Toolbar className="Toolbar">
                <img src={logo} alt="logo" className="logo" />
                <Input
                    id="input-with-icon-adornment"
                    disableUnderline={true}
                    placeholder="Zoeken"
                    className="Search-Input"
                    sx={{ color: '#A3A3A3' }} // override manual not working in scss
                    onChange={handleInputSearchBar}
                    onKeyDown={handleKeyEvent}
                    value={inputSearchBar}
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton onClick={handleSearch} aria-label="upload-picture" component="label">
                                <SearchIcon className="Search-Icon" />
                            </IconButton>
                        </InputAdornment>
                    }
                    endAdornment={inputSearchBar.length >= 1 ?
                        <InputAdornment position="start">
                            <IconButton onClick={handleClearSearch} aria-label="upload-picture" component="label">
                                <ClearIcon className="Search-Icon" />
                            </IconButton>
                        </InputAdornment>
                        : null
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
                        <MenuItem onClick={handleNewRecord}>
                            <Typography textAlign="center">New Achievment</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Topbar;
