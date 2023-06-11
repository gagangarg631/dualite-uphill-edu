import DynamicText from '../DynamicText'
import Layout from './Layout'
import * as constants from '../../utils/constants'

const WomensDay = () => {
    return (
        <Layout bg='url(backgrounds/womens_day.png)' flexHorizontalCenter>
            <DynamicText
                marginTop='80px'
                color='#BD331A'
                fontSize={16}
                width='30%'
                textAlign='center'
                fontList={[
                    constants.COMBO,
                    constants.COMIC_CAVES,
                    constants.COMIC_SANS_MS
                ]}
            >
                INTERNATIONAL
                WOMEN'S DAY
            </DynamicText>
        </Layout>
    )
}

export default WomensDay