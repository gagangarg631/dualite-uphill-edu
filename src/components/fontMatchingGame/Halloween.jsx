import DynamicText from '../DynamicText'
import Layout from './Layout'
import * as constants from '../../utils/constants'

const Halloween = () => {
    const HALLOWEEN_STRIKES_Props = {
        fontSize: 25,
        correctFont: constants.Nightmare_Story,
        fontList: [
            constants.Nightmare_Story,
            constants.TIMES,
            constants.THE_GIRL_NEXT_DOOR
        ]
    }

    return (
        <Layout bg='url(backgrounds/halloween.png)' flexAllCenter flex={{ flexDirection: 'column' }}>
            <>
                <DynamicText {...HALLOWEEN_STRIKES_Props}>
                    HALLOWEEN
                </DynamicText>
                <DynamicText {...HALLOWEEN_STRIKES_Props} marginBottom='10px'>
                    STRIKES
                </DynamicText>
                <DynamicText correctFont={constants.Helvetica_Bold} fontList={[
                    constants.Helvetica_Bold,
                    constants.COMIC_CAVES,
                    constants.HANDLEE,
                ]} fontSize={12}>
                    MOVIE EVENT
                </DynamicText>
                <DynamicText correctFont={constants.Helvetica_Bold} fontList={[
                    constants.HANDLEE,
                    constants.Helvetica_Bold,
                    constants.COMIC_CAVES
                ]} fontSize={10}>
                    BY DAVID COLER
                </DynamicText>
            </>
        </Layout>
    )
}

export default Halloween