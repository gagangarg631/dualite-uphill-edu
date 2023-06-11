import DynamicText from '../DynamicText'
import Layout from './Layout'
import * as constants from '../../utils/constants'

const Halloween = () => {
    const HALLOWEEN_STRIKES_FONTS = [
        constants.Nightmare_Story,
        constants.TIMES,
        constants.THE_GIRL_NEXT_DOOR
    ]

    return (
        <Layout bg='url(backgrounds/halloween.png)' flexAllCenter flex={{ flexDirection: 'column' }}>
            <>
                <DynamicText fontList={HALLOWEEN_STRIKES_FONTS} fontSize={25}>
                    HALLOWEEN
                </DynamicText>
                <DynamicText fontList={HALLOWEEN_STRIKES_FONTS} fontSize={25} marginBottom='10px'>
                    STRIKES
                </DynamicText>
                <DynamicText fontList={[
                    constants.Helvetica_Bold,
                    constants.HANDLEE,
                    constants.COMIC_CAVES
                ]} fontSize={12}>
                    MOVIE EVENT
                </DynamicText>
                <DynamicText fontList={[
                    constants.Helvetica_Bold,
                    constants.HANDLEE,
                    constants.COMIC_CAVES
                ]} fontSize={10}>
                    BY DAVID COLER
                </DynamicText>
            </>
        </Layout>
    )
}

export default Halloween