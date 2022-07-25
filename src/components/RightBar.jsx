import { Box, Typography } from '@mui/material'
import React from 'react'

export default function RightBar() {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" >
                <Typography variant='h2'>
                    RightBar
                </Typography>

            </Box>
        </Box>
    )
}
