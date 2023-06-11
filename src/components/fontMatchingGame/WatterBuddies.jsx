import DynamicText from "../DynamicText"
import FlexBox from "../FlexBox"
import Layout from "./Layout"
import { Box } from "@mui/material"
import { ReactComponent as PlayIcon } from "../../assets/PlayIcon.svg"
import * as constants from '../../utils/constants'

const WatterBuddies = () => {
    return (
        <Layout bg='url(backgrounds/water_buddies.png)' flexVerticalCenter>
            <Box sx={{
                marginLeft: 10
            }}>
                <DynamicText fontList={[
                    constants.LEAGUE_SPARTAN_BOLD,
                    constants.ALEF,
                    constants.COMIC_CAVES
                ]} color='#1B18F9' fontSize='22px' width='40%'>
                    Protect Our
                    Water Buddies
                </DynamicText>
                <DynamicText fontList={[
                    constants.LEAGUE_SPARTAN_BOLD,
                    constants.COMBO,
                    constants.COMBO
                ]} color='black' fontSize='10px' width='70%'>
                    You did not inherit the Earth’s water from your ancestors, you owe it to your future generations ahead.
                </DynamicText>

                <FlexBox height='30px' marginTop='30px'>
                    <FlexBox 
                        background='radial-gradient(#0368FF, #C27FCF)'
                        height='100%'
                        width='80px'
                        borderRadius='10px'
                        justifyContent='center'
                    >
                        <DynamicText fontList={[
                            constants.LEAGUE_SPARTAN_SEMIBOLD,
                            constants.COMIC_CAVES,
                            constants.HELVETICA
                        ]} color='white' fontSize='12px'>
                            Let's Begin
                        </DynamicText>
                    </FlexBox>
                    <FlexBox marginLeft='60px'>
                        <DynamicText fontList={[]} color='#1B18F9' fontSize='14px'>
                            Watch Video
                        </DynamicText>
                        <PlayIcon height='20px' />
                    </FlexBox>
                </FlexBox>
            </Box>
        </Layout>
    )
}

export default WatterBuddies