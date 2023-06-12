import FlexBox from "../FlexBox";

import * as constants from "../../utils/constants";
import DynamicText from "../DynamicText";
import Layout from "./Layout";
import useFontMatch from "../../hooks/useFontMatch";
import { Box, Button, Fade, Slide, Typography } from "@mui/material";
import startButton from "../../assets/start.svg";
import Image from "../Image";

const Gradient = () => {
  const {
    steper: { setStep, step },
    answer: { isCorrect },
  } = useFontMatch();

  return (
    // <Layout>
    //   <DynamicText
    //     fontList={[constants.FUTURA, constants.PONTANO_SANS, constants.TIMES]}
    //     fontSize={30}
    //     width={200}
    //     padding="40px 50px"
    //   >
    //     Discover, Sell & Collect Rare NFTs
    //   </DynamicText>
    // </Layout>
    <Box
      sx={{
        background: "url(backgrounds/Gradient1.png)",
        // top: "20px",
        // left: "20px",
        height: "100vh",
        width: "100vw",
        backgroundSize: "100%",
        backgroundAttachment: "contain",
      }}
    >
      <Typography
        fontSize={22}
        width="50%"
        margin="auto,"
        position="absolute"
        top="50%"
        left="45%"
        style={{
          fontFamily: constants.CooperBoldBT,
          fontSize: "35px",
        }}
      >
        Click And Fix
      </Typography>
      <Box
        onClick={() => setStep(1)}
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
          width: "100px",
          position: "absolute",
          left: "50%",
          top: "75%",
        }}
      >
        <Image src={startButton} />
      </Box>
    </Box>
  );
};
export default Gradient;
