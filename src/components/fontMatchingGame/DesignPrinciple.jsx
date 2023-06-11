import React from 'react'
import Layout from './Layout'
import DynamicText from '../DynamicText'
import { Typography, Box } from "@mui/material"
import * as constants from '../../utils/constants'
import FlexBox from '../FlexBox'

const DesignPrinciple = () => {
    return (
        <Layout bg='url(backgrounds/design_principal.png)' position='relative'>
            <Box sx={{
                marginTop: 7,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <DynamicText
                    color='black'
                    fontSize={24}
                    fontList={[
                        constants.KOHINOORLATIN,
                        constants.ADAMINA,
                        constants.AKAYAKANADAKA_REGULAR
                    ]}
                >
                    UNIVERSAL PRINCIPLE
                </DynamicText>
                <FlexBox gap={1} marginRight={10}>
                    <Typography>of</Typography>
                    <DynamicText
                        color='black'
                        fontSize={24}
                        fontList={[
                            constants.KOHINOORLATIN,
                            constants.KITE_ONE,
                            constants.KOHINOORLATIN
                        ]}
                    >
                        DESIGN
                    </DynamicText>
                </FlexBox>
            </Box>
        </Layout>
    )
}

export default DesignPrinciple