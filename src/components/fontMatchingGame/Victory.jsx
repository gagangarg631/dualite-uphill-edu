import DynamicText from '../DynamicText'
import Layout from './Layout'
import * as constants from '../../utils/constants'
import { Box } from "@mui/material"

const Victory = () => {
    const textStyle = {
        color: '#FFC796',
        fontList: [
            constants.TIMES,
            constants.TINOS
        ]
    }

    return (
        <Layout bg='url(backgrounds/victory.png)'>
            <Box sx={{
            }}>
                <DynamicText {...textStyle} textAlign='center' fontSize={32}>
                    VICTORY FOR
                </DynamicText>
                <DynamicText {...textStyle} textAlign='center' fontSize={20} marginRight='90px'>
                    THE PEOPLE!
                </DynamicText>
            </Box>
        </Layout>
    )
}

export default Victory