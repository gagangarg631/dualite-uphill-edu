import Layout from './Layout'
import DynamicText from '../DynamicText'
import { Box } from '@mui/material'
import * as constants from '../../utils/constants'

const GrastroHealth = () => {
    const gastro_health_font = [
        constants.TIMES_NEW_ROMAN,
        constants.TENOR_SANS,
        constants.FUTURA_MEDIUM
    ]

    return (
        <Layout flexVerticalCenter bg='url(backgrounds/gastro_health.png)'>
            <Box sx={{
                paddingLeft: 5
            }}>
                <DynamicText fontSize={30} fontList={gastro_health_font}>
                    GASTRO
                </DynamicText>
                <DynamicText
                    paddingLeft={7}
                    fontSize={30}
                    fontList={gastro_health_font}>
                    HEALTH
                </DynamicText>
                <DynamicText
                    paddingLeft={7}
                    fontSize={30}
                    fontList={[
                        constants.POPPINS,
                        constants.ARIAL,
                        constants.SAVOYE_LET
                    ]}>
                    Lite
                </DynamicText>
            </Box>
        </Layout>
    )
}

export default GrastroHealth