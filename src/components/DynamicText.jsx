import { Typography } from "@mui/material"
import useFontMatch from "../hooks/useFontMatch"
import { useEffect } from "react"

const textStyle = {
  fontSize: 40,
  color: 'white',
  '&:hover': {
    cursor: 'pointer'
  },
  userSelect: 'none',
}

const DynamicText = ({ children, fontList, nextfont, correctFont, ...rest }) => {

  const { fontIndex, setFontIndex, answer: { setIsCorrect } } = useFontMatch()

  const checkAnswer = () => {
    setIsCorrect(
      correctFont ? (
        correctFont === fontList[fontIndex]
      ) : (
        fontIndex === 0
      )
    )
  }

  useEffect(() => {
    checkAnswer()
  }, [fontIndex])

  useEffect(() => {
    setFontIndex(0)
    checkAnswer()
  }, [])

  return (
    <Typography onClick={() => setFontIndex(fontIndex < fontList.length - 1 ? fontIndex + 1 : 0)} sx={{
      fontFamily: fontList[fontIndex], ...{
        ...textStyle,
        ...rest,
      }
    }}>{children}</Typography>
  )
}

export default DynamicText