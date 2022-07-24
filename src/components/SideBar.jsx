import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function SideBar() {
    return (
        <Box  flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            SideBar
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#homepage'>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="HomePage" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#list'>
                        <ListItemIcon>
                            <AutoStoriesIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#list'>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#list'>
                        <ListItemIcon>
                            <GroupsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#list'>
                        <ListItemIcon>
                            <PeopleAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#list'>
                        <ListItemIcon>
                            <StoreIcon />
                        </ListItemIcon>
                        <ListItemText primary="MarketPlace" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#list'>
                        <ListItemIcon>
                            <SettingsSuggestIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#list'>
                        <ListItemIcon>
                            <DarkModeIcon />
                        </ListItemIcon>
                        <Switch/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}
