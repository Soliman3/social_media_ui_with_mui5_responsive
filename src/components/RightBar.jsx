import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import friendsImage3 from "../images/3.jpg";
import friendsImage4 from "../images/4.jpg";
import friendsImage5 from "../images/5.jpg";
import friendsImage6 from "../images/6.png";
import friendsImage7 from "../images/7.jpg";
import friendsImage8 from "../images/8.jpg";
import friendsImage9 from "../images/9.jpg";


export default function RightBar() {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={300} >
                <Typography variant='h6' fontWeight={100}>
                    Online Friends
                </Typography>
                <AvatarGroup max={8}>
                    <Avatar alt="Remy Sharp" src={friendsImage3} />
                    <Avatar alt="Travis Howard" src={friendsImage4} />
                    <Avatar alt="Cindy Baker" src={friendsImage5} />
                    <Avatar alt="Agnes Walker" src={friendsImage6} />
                    <Avatar alt="Trevor Henderson" src={friendsImage7} />
                    <Avatar alt="Travis Howard" src={friendsImage8} />
                    <Avatar alt="Cindy Baker" src={friendsImage9} />
                    <Avatar alt="Agnes Walker" src={friendsImage5} />
                    <Avatar alt="Trevor Henderson" src={friendsImage5} />
                </AvatarGroup>
                <Typography gap={4} variant='h6' fontWeight={100} mb={2} mt={2}>
                    Recent Photos
                </Typography>
                <ImageList cols={3} rowHeight={140}>
                    <ImageListItem >
                        <img
                            src={friendsImage5}
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem >
                        <img
                            src={friendsImage8}
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem >
                        <img
                            src={friendsImage9}
                            alt=""
                        />
                    </ImageListItem>
                </ImageList>
                <Typography  mt={2} gap={4} variant='h6' fontWeight={100} >
                    Recent Conversations
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={friendsImage3} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src={friendsImage5} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src={friendsImage6} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}
