import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import profileImage from '../images/1.jpg';
import React, { useState } from 'react'
import { Box } from '@mui/system';
import { Mail, Notifications } from '@mui/icons-material';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
})

const SearchBar = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    padding: "0px 12px",
    width: "35%",
}))
const Icon = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: "20px",
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}))

const UserIcon = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}))

export default function NavBar() {
    const [open, setOpen]= useState(false);
    return (
        <AppBar position="sticky">
            <StyledToolBar>
                <Typography variant='h5' sx={{ display: { xs: "none", sm: "block" } }}>Soliman</Typography>
                <FavoriteIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <SearchBar ><InputBase placeholder='Search..' /></SearchBar>
                <Icon  >
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar src={profileImage} sx={{ width: 32, height: 32 }} onClick={(e)=>setOpen(true)}/>
                </Icon>
                <UserIcon onClick={(e)=> setOpen(true)}>
                    <Avatar src={profileImage} sx={{ width: 32, height: 32 }} />
                    <Typography variant='span'>
                        Soliman
                    </Typography>
                </UserIcon>
            </StyledToolBar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e)=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>

        </AppBar>
    )
}
