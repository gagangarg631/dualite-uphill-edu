import DynamicText from '../DynamicText'
import FlexBox from '../FlexBox'
import Layout from './Layout'
import * as constants from '../../utils/constants'

const Fanta = () => {
    const unleash_your_desire = [
        constants.HELVETICA,
        constants.HELVETICA,
        constants.TIMES
    ]

    const thirst = [
        constants.SAVOYE_LET,
        constants.SAVOYE_LET,
        constants.FUTURA
    ]

    return (
        <Layout bg='url(backgrounds/fanta.png)' backgroundSize='40% 100%' flexAllCenter>
            <FlexBox flexDirection='column' marginBottom='100px'>
                <DynamicText fontSize={14} fontList={unleash_your_desire} width='100%'>
                    Unleash
                </DynamicText>
                <DynamicText fontSize={14} fontList={unleash_your_desire} width='100%' marginLeft='50px'>
                    Your
                </DynamicText>
                <DynamicText fontSize={20} fontList={thirst} width='100%' marginLeft='30px'>
                    THIRST'S
                </DynamicText>
                <DynamicText fontSize={14} fontList={unleash_your_desire} marginLeft='50px'>
                    Desire
                </DynamicText>
            </FlexBox>
        </Layout>
    )
}

export default Fanta