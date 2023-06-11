import FlexBox from '../FlexBox'
import { Button, Typography } from '@mui/material'
import * as constants from '../../utils/constants'
import DynamicText from '../DynamicText'
import Layout from './Layout'

const CustomButton = () => {
    return (
        <Button variant='contained' sx={{ backgroundColor: '#FB88C8' }}>
            <Typography sx={{ color: 'black' }}>Collect</Typography>
        </Button>
    )
}

const NFTS = () => {
    return (
        <Layout bg='url(backgrounds/nfts.png)'>
            <DynamicText
                fontList={[
                    constants.FUTURA,
                    constants.PONTANO_SANS,
                    constants.TIMES
                ]}
                fontSize={30}
                width={200}
                padding='40px 50px'
            >
                Discover, Sell & Collect Rare NFTs
            </DynamicText>
        </Layout>
    )
}

export default NFTS