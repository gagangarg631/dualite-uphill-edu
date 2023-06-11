import { Box } from "@mui/material"

const FlexBox = (props) => {
    const { children, ...rest } = props;
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        ...rest
    }}>
        {children}
    </Box>
  )
}

export default FlexBox