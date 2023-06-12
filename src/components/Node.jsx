import { Box } from '@mui/material'

const Node = ({ sx }) => {
  return (
    <Box sx={{
        height: '90px',
        width: '120px',
        border: '1px solid black',
        position: 'absolute',
        ...sx
    }}>

    </Box>
  )
}

export default Node