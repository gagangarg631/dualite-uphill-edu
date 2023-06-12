import FlexBox from "../FlexBox";

import * as constants from "../../utils/constants";
import DynamicText from "../DynamicText";
import Layout from "./Layout";
import useFontMatch from "../../hooks/useFontMatch";
import { Box, Button, Fade, Slide, Typography } from "@mui/material";
import startButton from "../../assets/start.svg";
import Image from "../Image";

const styles = {
  boundary: {
    background: "url(backgrounds/Gradient1.png)",
    height: "100vh",
    width: "100vw",
    backgroundSize: "100%",
    backgroundAttachment: "contain",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

const Gradient = () => {
  const {
    steper: { setStep, step },
    answer: { isCorrect },
    gameSoundRef
  } = useFontMatch();

  return (
    <Box sx={styles.boundary}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '300px',
        paddingTop: 16
      }}>
        <Typography
          style={{
            fontFamily: constants.CooperBoldBT,
            fontSize: "36px",
            color: 'white'
          }}
        >
          CLICK-and-FIX
        </Typography>
        <Box
          onClick={() => {
            setStep(1);
            if (gameSoundRef.current) {
              gameSoundRef.current.play();
            }
          }}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
            width: "100px",
          }}
        >
          <Image src={startButton} />
        </Box>
      </Box>
    </Box>
  );
};
export default Gradient;
