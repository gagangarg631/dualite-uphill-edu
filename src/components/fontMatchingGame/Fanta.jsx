import DynamicText from '../DynamicText'
import FlexBox from '../FlexBox'
import Layout from './Layout'
import * as constants from '../../utils/constants'

const Fanta = () => {
    const unleash_your_desire_props = {
        fontSize: 14,
        width: '100%',
        correctFont: constants.HELVETICA,
        fontList: [
            constants.HELVETICA,
            constants.HELVETICA,
            constants.TIMES
        ]
    }

    const thirst_props = {
        fontSize: 20,
        width: '100%',
        correctFont: constants.SAVOYE_LET,
        fontList: [
            constants.SAVOYE_LET,
            constants.SAVOYE_LET,
            constants.FUTURA
        ]
    }

    return (
        <Layout bg='url(backgrounds/fanta.png)' backgroundSize='40% 100%' flexAllCenter>
            <FlexBox flexDirection='column' marginBottom='100px'>
                <DynamicText {...unleash_your_desire_props}>
                    Unleash
                </DynamicText>
                <DynamicText {...unleash_your_desire_props} marginLeft='50px'>
                    Your
                </DynamicText>
                <DynamicText {...thirst_props} marginLeft='30px'>
                    THIRST'S
                </DynamicText>
                <DynamicText {...unleash_your_desire_props} marginLeft='50px'>
                    Desire
                </DynamicText>
            </FlexBox>
        </Layout>
    )
}

export default Fanta