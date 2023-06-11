import { Box, Button, Fade, Slide, Typography } from '@mui/material'
import { ReactComponent as DoneBtn } from '../../assets/done.svg'
import React, { useEffect, useState } from 'react'
import useFontMatch from '../../hooks/useFontMatch'
import doneButton from '../../assets/done.svg'
import Image from '../Image'
import ProgressBar from '../ProgressBar'

const layoutStyle = {
  background: 'url(baseLayout.png)',
  backgroundSize: '100% 100%',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const gameBoxStyle = {
  marginBottom: 2,
  height: 350,
  width: 500,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: 'center',
}

const Layout = ({ children, bg = '', flexAllCenter, flexVerticalCenter, flexHorizontalCenter, flex = {}, ...rest }) => {

  let extraStyle = {};

  if (flexAllCenter) {
    extraStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }

  if (flexVerticalCenter) {
    extraStyle = {
      display: 'flex',
      alignItems: 'center',
    }
  }

  if (flexHorizontalCenter) {
    extraStyle = {
      display: 'flex',
      justifyContent: 'center',
    }
  }

  extraStyle = { ...extraStyle, ...flex }

  const { steper: { setStep, step }, answer: { isCorrect } } = useFontMatch()

  const [textShow, setTextShow] = useState(false);
  const [progressShow, setProgressShow] = useState(false);

  const next = () => {
    if (isCorrect) {
      setStep(step < 22 ? step + 1 : step);
    } else {
      alert('please choose correct font')
    }
  }

  useEffect(() => {
    if (step === 1) {
      setTimeout(() => {
        setTextShow(true);
        setTimeout(() => {
          setTextShow(false);
          setProgressShow(true);
        }, 2000)
      }, 1000);
    }
  }, [])

  return (
    <Box sx={layoutStyle}>
      {step === 1 ? (
        <Slide in={progressShow} direction='left' timeout={1000}>
          <Box>
            <ProgressBar />
          </Box>
        </Slide>
      ) : (
        <ProgressBar />
      )}
      {step === 1 && (
        <Box sx={{ width: '99vw', position: 'absolute', top: 10 }}>
          <Slide in={step === 1 ? textShow : false} direction={progressShow ? 'right' : 'left'} timeout={1000}>
            <Typography fontSize={22} width='50%'>
              CLICK AND FIX THE CONTENT'S FONTS FOR EACH SECTION SHOWN
            </Typography>
          </Slide>
        </Box>
      )}
      <Slide marginTop={6} direction='left' in={true}>
        <Box sx={{
          background: bg,
          ...extraStyle,
          ...gameBoxStyle,
          ...rest
        }}>
          {React.cloneElement(children, {})}
        </Box>
      </Slide>
      <Box onClick={next} sx={{
        '&:hover': {
          cursor: 'pointer'
        },
        width: '100px'
      }}>
        <Image src={doneButton} />
      </Box>
    </Box>
  )
}

export default Layout