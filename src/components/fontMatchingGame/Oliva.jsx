import DynamicText from "../DynamicText"
import Layout from "./Layout"
import * as constants from '../../utils/constants'
import { Box } from "@mui/material"

const Oliva = () => {
    return (
        <Layout bg='url(backgrounds/oliva.png)'>
            <Box sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <DynamicText
                    fontSize={24}
                    color='#8E764A'
                    fontList={[
                        constants.FUTURA,
                        constants.ARCADECLASSIC,
                        constants.ARCHITECTS_DAUGHTER
                    ]}
                >
                    OLIVIA's
                </DynamicText>
                <DynamicText
                    fontSize={24}
                    color='#8E764A'
                    fontList={[
                        constants.SAVOYE_LET,
                        constants.PARTY_LET,
                        constants.OXANIUM
                    ]}
                >
                    tea party
                </DynamicText>
            </Box>
        </Layout>
    )
}

export default Oliva