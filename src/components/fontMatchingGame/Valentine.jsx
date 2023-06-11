import React from 'react'
import Layout from './Layout'
import * as constants from '../../utils/constants'
import DynamicText from '../DynamicText'

const Valentine = () => {
    return (
        <Layout flexAllCenter bg='url(s4_bg.png)' flex={{ flexDirection: 'column' }}>
            <>
                <DynamicText textAlign='center' fontSize={40} fontList={['f4', 'f5', 'f6']}>Valentines</DynamicText>
                <DynamicText textAlign='center' fontSize={40} fontList={['f4', 'f5', 'f6']}>Day</DynamicText>
            </>
        </Layout>
    )
}

export default Valentine