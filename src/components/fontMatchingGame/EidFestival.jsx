import DynamicText from '../DynamicText'
import Layout from './Layout'
import * as constants from '../../utils/constants'

const EidFestival = () => {
    const textStyle = {
        color: 'white',
        fontList: [
            constants.SAVOYE_LET,
            constants.ARIAL,
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