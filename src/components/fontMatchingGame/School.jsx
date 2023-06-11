import Layout from './Layout'
import DynamicText from '../DynamicText'
import * as constants from '../../utils/constants'
import { Box } from "@mui/material"

const School = () => {
    const back_to_school = [
        constants.INTER,
        constants.TIMES,
        constants.JEJUHALLASAN
    ]
    const textStyle = {
        color: 'black',
        fontSize: 14,
        fontList: back_to_school
    }
    return (
        <Layout bg='url(backgrounds/school.png)' position='relative'>
            <Box sx={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <DynamicText {...textStyle}>
                    BACK
                </DynamicText>
                <DynamicText {...textStyle}>
                    TO
                </DynamicText>
                <DynamicText {...textStyle}>
                    SCHOOL
                </DynamicText>
            </Box>
        </Layout>
    )
}

export default School