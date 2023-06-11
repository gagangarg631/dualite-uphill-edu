import Layout from "./Layout"
import DynamicText from "../DynamicText"
import * as constants from '../../utils/constants'

const Advocate = () => {
    return (
        <Layout bg='url(backgrounds/advocate.png)' flexAllCenter>
            <DynamicText
                fontSize={24}
                color='black'
                marginBottom='10px'
                marginLeft='100px'
                fontList={[
                    constants.KOHINOORLATIN,
                    constants.TIMES,
                    constants.FUTURA
                ]} 

            >
                RAM BRIJ SHARMA
            </DynamicText>
        </Layout>
    )
}

export default Advocate