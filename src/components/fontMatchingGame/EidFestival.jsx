import DynamicText from '../DynamicText'
import Layout from './Layout'
import * as constants from '../../utils/constants'

const EidFestival = () => {
    const textStyle = {
        color: 'white',
        correctFont: constants.SAVOYE_LET,
        fontList: [
            constants.ARIAL,
            constants.SAVOYE_LET,
        ],
    }


    return (
        <Layout bg='url(backgrounds/eid_mubarak.png)' flexAllCenter>
            <DynamicText
                {...textStyle}
                fontSize={32}
            >
                Eid Mubarak
            </DynamicText>
        </Layout>
    )
}

export default EidFestival