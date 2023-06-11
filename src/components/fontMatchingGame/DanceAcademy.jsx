import DynamicText from '../DynamicText'
import Layout from './Layout'
import * as constants from '../../utils/constants'

const DanceAcademy = () => {
    return (
        <Layout bg='url(backgrounds/dance_academy.png)' position='relative'>
            <DynamicText
                color='white'
                fontSize={24}
                fontList={[
                    constants.INTER,
                    constants.NICO_MOJI,
                    constants.Nightmare_Story
                ]}
                position='absolute'
                right='40px'
                top='80px'
                >
                DANCE ACADEMY
            </DynamicText>
        </Layout>
    )
}

export default DanceAcademy