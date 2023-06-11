import DynamicText from '../DynamicText'
import Layout from './Layout'
import * as constants from '../../utils/constants'
import { Box } from "@mui/material"


const InviteCard = () => {
    const textStyle = {
        color: 'black',
        fontList: [
            constants.SAVOYE_LET,
            constants.KITE_ONE,
            constants.FUTURA
        ],
        fontSize: 28,
        marginTop: 8,
        textAlign: 'center'
    }

    return (
        <Layout bg='url(backgrounds/invite_card.png)'>
            <Box>
                <DynamicText {...textStyle}>
                    Olivia & Benjamin
                </DynamicText>
                <DynamicText {...textStyle} fontSize={20}>
                    JAN
                </DynamicText>
            </Box>
        </Layout>
    )
}

export default InviteCard