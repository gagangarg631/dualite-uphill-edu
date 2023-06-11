import Layout from './Layout'
import DynamicText from '../DynamicText'
import * as constants from '../../utils/constants'
import { Box } from "@mui/material"

const Calling = () => {
    const textStyle = {
        color: 'black',
        width: '24%',
        position: 'absolute',
        textAlign: 'center',
        fontList: [
            constants.COMIC_CAVES,
            constants.FUTURA,
            constants.COMIC_SANS_MS
        ]
    }
    return (
        <Layout bg='url(backgrounds/calling.png)' position='relative'>
            <>
                <DynamicText {...{
                    ...textStyle,
                    fontSize: 18,
                    top: 40,
                    left: 100,
                    width: '22%'
                }}>
                    HOW CAN I HELP YOU?
                </DynamicText>
                <DynamicText {...{
                    ...textStyle,
                    fontSize: 16,
                    top: 170,
                    left: 140,
                    width: '20%'
                }}>
                    I CAN'T BELIEVE IT!
                </DynamicText>
                <DynamicText {...{
                    ...textStyle,
                    fontSize: 12,
                    bottom: 70,
                    left: 215,
                    width: '18%',
                }}>
                    DON'T WORRY, IT'S PERFECT!
                </DynamicText>
            </>
        </Layout>
    )
}

export default Calling