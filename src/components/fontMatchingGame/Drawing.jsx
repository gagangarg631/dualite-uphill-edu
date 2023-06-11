import React from 'react'
import Layout from './Layout'
import * as constants from '../../utils/constants'
import DynamicText from '../DynamicText'
import { Box } from "@mui/material"
import FlexBox from '../FlexBox'

const Drawing = () => {
    const open_now = [
        constants.FUTURA,
        constants.COMBO,
        constants.FLAMENCO
    ]
    return (
        <Layout bg='url(backgrounds/drawing.png)' flexAllCenter>
            <FlexBox flexDirection='column' paddingTop='120px'>
                <DynamicText color='#FF2700' fontSize={16} fontList={open_now}>
                    now
                </DynamicText>
                <DynamicText color='#FF2700' fontSize={16} fontList={open_now}>
                    open
                </DynamicText>
            </FlexBox>
        </Layout>
    )
}

export default Drawing