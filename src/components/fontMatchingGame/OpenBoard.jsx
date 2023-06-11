import DynamicText from '../DynamicText'
import Layout from './Layout'
import * as constants from '../../utils/constants'
import { Box } from "@mui/material"

const OpenBoard = () => {
    const props = {
        color: 'black',
        fontList: [
            constants.SAVOYE_LET,
            constants.FUTURA,
            constants.FUTURA
        ],
        textAlign: 'center',
        correctFont: constants.FUTURA
    }

    return (
        <Layout bg='url(backgrounds/open_board.png)' flexAllCenter>
            <Box>
                <DynamicText {...props} fontSize={26}>
                    come in, we're
                </DynamicText>
                <DynamicText {...props} fontSize={76}>
                    OPEN
                </DynamicText>
            </Box>
        </Layout>
    )
}

export default OpenBoard