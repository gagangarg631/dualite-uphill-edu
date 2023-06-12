import React from 'react'
import Layout from './Layout'
import * as constants from '../../utils/constants'
import DynamicText from '../DynamicText'
import { Box } from "@mui/material"
import FlexBox from '../FlexBox'

const Drawing = () => {
    const props = {
        fontSize: 16,
        color: '#FF2700',
        correctFont: constants.FUTURA,
        fontList: [
            constants.COMBO,
            constants.FUTURA,
            constants.FLAMENCO
        ]
    }
    return (
        <Layout bg='url(backgrounds/drawing.png)' flexAllCenter>
            <FlexBox flexDirection='column' paddingTop='120px'>
                <DynamicText {...props}>
                    now
                </DynamicText>
                <DynamicText {...props}>
                    open
                </DynamicText>
            </FlexBox>
        </Layout>
    )
}

export default Drawing