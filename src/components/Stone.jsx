import { Box, Typography } from '@mui/material';
import { pairs } from '../utils/constants';
import { useContext, useEffect } from 'react';
import MatchGameContext from '../contexts/MatchGameContext';

const Stone = (props) => {
    const { pos: { x, y }, direction, screenIndex, stones, keyType, quesIndex } = props;

    const index = quesIndex;
    const value = pairs[screenIndex][keyType][index]

    return (
        <Box sx={{
            position: 'absolute',
            top: `${y}px`,
            [direction]: `${x}px`,
        }}>
            <Box sx={{
                background: `url(stone.svg)`,
                backgroundSize: '100%',
                backgroundAttachment: 'contain',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100px',
                width: '110px',
            }}>
                <Typography sx={{
                    fontSize: '12px',
                }}>
                    {value}
                </Typography>
            </Box>
        </Box>
    )
}

export default Stone