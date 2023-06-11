import DynamicText from '../DynamicText'
import Layout from './Layout'
import * as constants from '../../utils/constants'
import { Box } from "@mui/material"

const WorldOceanDay = () => {
    const textStyle = {
        fontSize: 22,
        fontList: [
            constants.POPPINS,
            constants.FUTURA
        ]
    }
    return (
        <Layout bg='url(backgrounds/wod.png)' flexVerticalCenter flex={{
            justifyContent: 'flex-end'
        }}>
            <Box sx={{
                marginRight: '120px'
            }}>
                <DynamicText {...textStyle} color='#014097'>
                    8TH JUNE
                </DynamicText>
                <DynamicText {...textStyle} color='#014097'>
                    WORLD
                </DynamicText>
                <DynamicText {...textStyle} color='#014097'>
                    OCEAN
                </DynamicText>
                <DynamicText {...textStyle} color='#014097'>
                    DAY
                </DynamicText>
            </Box>
        </Layout>
    )
}

export default WorldOceanDay