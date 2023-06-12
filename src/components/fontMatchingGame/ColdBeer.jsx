import DynamicText from '../DynamicText'
import Layout from './Layout'
import * as constants from '../../utils/constants'
import { Box } from '@mui/material'

const ColdBeer = () => {
    const textStyle = {
        color: 'black',
        correctFont: constants.TINOS,
        fontList: [
            constants.ARIAL,
            constants.TINOS,
        ],
    }


    return (
        <Layout bg='url(backgrounds/beer.png)'>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    height: '80%',
                    marginLeft: '20%',
                    marginTop: '6%'
                }}
            >
                <DynamicText
                    {...textStyle}
                    fontSize={36}
                    color='#FFEB5B'
                    width='30%'
                >
                    COLD
                    BEER
                </DynamicText>
                <DynamicText
                    {...textStyle}
                    fontSize={18}
                    color='white'
                    width='30%'
                >
                    you only
                    find here!
                </DynamicText>
                <DynamicText
                    {...textStyle}
                    fontSize={18}
                    color='white'
                    width='30%'
                >
                    Call the guys!
                    Come check!
                </DynamicText>
            </Box>
        </Layout>
    )
}

export default ColdBeer