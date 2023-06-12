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
                correctFont={constants.KOHINOORLATIN}
                fontList={[
                    constants.FUTURA,
                    constants.KOHINOORLATIN,
                    constants.TIMES,
                ]} 

            >
                RAM BRIJ SHARMA
            </DynamicText>
        </Layout>
    )
}

export default Advocate