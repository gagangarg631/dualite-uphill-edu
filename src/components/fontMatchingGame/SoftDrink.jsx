import DynamicText from '../DynamicText'
import Layout from './Layout'
import * as constants from '../../utils/constants'

const SoftDrink = () => {
    const textStyle = {
        color: 'black',
        fontList: [
            constants.TINOS,
            constants.ARIAL,
        ],
    }


    return (
        <Layout bg='url(backgrounds/soft_drink.png)' position='relative'>
            <DynamicText
                {...textStyle}
                fontSize={24}
                position='absolute'
                right='95px'
                top='85px'
                transform='rotate(-24deg)'
            >
                NEW DRINK
            </DynamicText>
        </Layout>
    )
}

export default SoftDrink