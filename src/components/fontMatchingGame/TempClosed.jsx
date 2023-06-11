import Layout from './Layout'
import DynamicText from '../DynamicText'
import * as constants from '../../utils/constants'
import { Box } from "@mui/material"

const TempClosed = () => {
    const fontFamilies = [
        constants.ARIAL,
        constants.INIKA,
        constants.JOSEFIN_SANS,
    ]

    return (
        <Layout bg='url(backgrounds/temp_closed.png)'>
            <Box sx={{
                marginTop: 12,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1
            }}>
                <DynamicText
                    color='#8E483C'
                    fontSize={12}
                    textAlign='center'
                    fontList={fontFamilies}
                    width='30%'
                >
                    SORRY - WE ARE
                    TEMPORARILY
                </DynamicText>
                <DynamicText
                    color='#8E483C'
                    fontSize={12}
                    textAlign='center'
                    fontList={fontFamilies}
                    width='30%'
                >
                    CLOSED
                </DynamicText>
                <DynamicText
                    color='#6A7A7A'
                    fontSize={10}
                    textAlign='center'
                    fontList={fontFamilies}
                    width='26%'
                >
                    THIS IS TO PROTECT THE
                    HEALTH OF OUR GUESTS AND
                    TEAM
                </DynamicText>
            </Box>
        </Layout>
    )
}

export default TempClosed