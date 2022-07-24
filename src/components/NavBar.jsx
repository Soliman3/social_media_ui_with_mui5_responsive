import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import profileImage from '../images/1.jpg';
import React from 'react'
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
    display: 'flex',
    alignItems: 'center',
    gap: "20px"
}))

export default function NavBar() {
    return (
        <AppBar position="sticky">
            <StyledToolBar>
                <Typography variant='h5' sx={{ display: { xs: "none", sm: "block" } }}>Soliman</Typography>
                <FavoriteIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <SearchBar ><InputBase placeholder='Search..' /></SearchBar>
                <Icon>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar src={profileImage} sx={{width: 32, height:32 }}/>
                </Icon>
            </StyledToolBar>

        </AppBar>
    )
}
