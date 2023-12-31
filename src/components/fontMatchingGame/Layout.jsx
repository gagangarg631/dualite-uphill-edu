import { Box, Button, Fade, Slide, Typography } from "@mui/material";
import { ReactComponent as DoneBtn } from "../../assets/done.svg";
import React, { useEffect, useRef, useState } from "react";
import useFontMatch from "../../hooks/useFontMatch";
import doneButton from "../../assets/done.svg";
import Image from "../Image";
import ProgressBar from "../ProgressBar";
import { lines } from "../../utils/constants";
import CloudText from "../CloudText";
import * as constants from "../../utils/constants";
import AudioPlayer from "../AudioPlayer";

const layoutStyle = {
  background: "url(Gradient.png)",
  backgroundSize: "100% 100%",
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // backgroundColor: "#7BD1BA",
  position: 'relative'
};

const gameBoxStyle = {
  marginBottom: 2,
  height: 350,
  width: 500,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  margin: "auto",
};

const win_anim_style = {
  position: "absolute",
  bottom: "60px",
  right: "0px",
  height: "200px",
  width: "180px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Layout = ({
  children,
  bg = "",
  flexAllCenter,
  flexVerticalCenter,
  flexHorizontalCenter,
  flex = {},
  ...rest
}) => {
  let extraStyle = {};

  if (flexAllCenter) {
    extraStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
  }

  if (flexVerticalCenter) {
    extraStyle = {
      display: "flex",
      alignItems: "center",
    };
  }

  if (flexHorizontalCenter) {
    extraStyle = {
      display: "flex",
      justifyContent: "center",
    };
  }

  extraStyle = { ...extraStyle, ...flex };

  const {
    steper: { setStep, step },
    answer: { isCorrect },
    correctAnswer,
    setCorrectAnswer,
    gameSoundRef,
    progress: {
      setCanProgress
    }
  } = useFontMatch();

  const [textShow, setTextShow] = useState(false);
  const [progressShow, setProgressShow] = useState(false);

  const winSoundRef = useRef(null);
  const loseSoundRef = useRef(null);
  const exampleSoundRef = useRef(null);

  const next = () => {
    if (isCorrect) {
      setTimeout(() => {
        setCanProgress(true);
        setStep(step < 22 ? step + 1 : step);
      }, 2000);
      setCorrectAnswer(true);
      if (winSoundRef.current) {
        winSoundRef.current.play();
      }
      if (exampleSoundRef.current) {
        gameSoundRef.current.pause()
        exampleSoundRef.current.play();

        setTimeout(() => {
          gameSoundRef.current.play()
        }, 2500)
      }
    } else {
      setCorrectAnswer(false);
      if (loseSoundRef.current) {
        loseSoundRef.current.play();
      }
    }
  };

  useEffect(() => {
    if (correctAnswer !== null) {
      setTimeout(() => setCorrectAnswer(null), 2500);
    }
  }, [correctAnswer])

  useEffect(() => {
    if (step === 1) {
      setTimeout(() => {
        setTextShow(true);
        setTimeout(() => {
          setTextShow(false);
          setProgressShow(true);
        }, 2000);
      }, 1000);
    }
  }, []);

  const MyProgressBar = () => {
    return (
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
          height: 40,
          width: "95%",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        <ProgressBar
          sx={{
            height: "100%",
            width: "100%",
          }}
        />
      </Box>
    );
  };

  return (
    <Box sx={layoutStyle}>
      <AudioPlayer ref={winSoundRef}  preload="auto" src='sounds/startAndCorrect.mp3' />
      <AudioPlayer ref={loseSoundRef}  preload="auto" src='sounds/incorrect-sound.mp3' />
      <AudioPlayer ref={exampleSoundRef}  preload="auto" src='sounds/exampleComplete.mp3' />

      {step === 1 ? (
        <Slide in={progressShow} direction="left" timeout={1000}>
          <Box sx={{ width: "100%" }}>
            <MyProgressBar />
          </Box>
        </Slide>
      ) : (
        <MyProgressBar />
      )}
      {step === 1 && (
        <Box sx={{ width: "99vw", position: "absolute", top: 10 }}>
          <Slide
            in={step === 1 ? textShow : false}
            direction={progressShow ? "right" : "left"}
            timeout={1000}
          >
            <Typography
              fontSize={22}
              width="50%"
              style={{
                fontFamily: constants.CooperBoldBT,
              }}
            >
              CLICK AND FIX THE CONTENT'S FONTS FOR EACH SECTION SHOWN
            </Typography>
          </Slide>
        </Box>
      )}
      <Slide marginTop={12} direction="left" in={true}>
        <Box
          sx={{
            background: bg,
            ...extraStyle,
            ...gameBoxStyle,
            ...rest,
          }}
        >
          {React.cloneElement(children, {})}
        </Box>
      </Slide>
      <Box
        onClick={next}
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
          width: "100px",
          position: "absolute",
          top: "85%",
        }}
      >
        <Image src={doneButton} />
      </Box>
      <CloudText />
      {/* <Box
        sx={{
          position: "absolute",
          bottom: "120px",
          right: "80px",
          margin: "auto",
          transform: "rotateY(180deg)",
          height: "150px",
          width: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="no_anim.png" height="300px" />
      </Box> */}
      {correctAnswer && (
        <Box sx={win_anim_style}>
          <img src="win_anim.gif" height="300px" />
          {/* <audio
            style={{
              visibility: "hidden",
              height: 0,
            }}
            controls
            ref={(ref) => (winAudioRef.current = ref)}
          >
            <source src={"sounds/startAndCorrect.mp3"} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio> */}
        </Box>
      )}
      {correctAnswer === false && (
        <Box sx={win_anim_style}>
          <img src="lose_anim.gif" height="220px" />
          {/* <audio
            style={{
              visibility: "hidden",
              height: 0,
            }}
            controls
            ref={(ref) => (audioRef.current = ref)}
          >
            <source src={"sounds/incorrect-sound.mp3"} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio> */}
        </Box>
      )}
      {correctAnswer === null && (
        <Box
          sx={{
            ...win_anim_style,
            bottom: "30px",
            transform: "rotateY(180deg)",
          }}
        >
          <img src="no_anim.png" height="250px" />
        </Box>
      )}
    </Box>
  );
};

export default Layout;
