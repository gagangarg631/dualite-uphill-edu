import { Box, Typography } from '@mui/material'
import React from 'react'
import useFontMatch from '../hooks/useFontMatch'
import { lines } from '../utils/constants'

const CloudText = () => {

    const { steper: { step }} = useFontMatch();

    return (
        step >= 1 && step <= 22 && (
            <Box sx={{
                height: '250px',
                width: '300px',
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: '20px',
                margin: 'auto',
                background: 'url(cloud.png)',
                backgroundSize: '100% 100%',
                backgroundAttachment: 'contain',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography sx={{
                    width: '80%',
                    fontSize: '16px'
                }}>
                    {lines[step]}
                </Typography>
            </Box>
        )
    )
}

export default CloudText