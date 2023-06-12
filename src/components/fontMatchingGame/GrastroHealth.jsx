import Layout from './Layout'
import DynamicText from '../DynamicText'
import { Box } from '@mui/material'
import * as constants from '../../utils/constants'

const GrastroHealth = () => {
    const gastro_health_props = {
        fontSize: 30,
        correctFont: constants.TIMES_NEW_ROMAN,
        fontList: [
            constants.TENOR_SANS,
            constants.TIMES_NEW_ROMAN,
            constants.FUTURA_MEDIUM
        ]
    }

    return (
        <Layout flexVerticalCenter bg='url(backgrounds/gastro_health.png)'>
            <Box sx={{
                paddingLeft: 5
            }}>
                <DynamicText {...gastro_health_props}>
                    GASTRO
                </DynamicText>
                <DynamicText
                    {...gastro_health_props}
                    paddingLeft={7}
                >
                    HEALTH
                </DynamicText>
                <DynamicText
                    fontSize={30}
                    correctFont={constants.POPPINS}
                    fontList={[
                        constants.ARIAL,
                        constants.SAVOYE_LET,
                        constants.POPPINS,
                    ]}
                    paddingLeft={7}>
                    Lite
                </DynamicText>
            </Box>
        </Layout>
    )
}

export default GrastroHealth