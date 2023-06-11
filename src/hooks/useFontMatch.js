import { useContext } from "react"
import FontContext from "../contexts/FontsContext"

export default function useFontMatch() {
    const { fontIndex, setFontIndex, steper, answer } = useContext(FontContext)

    return {
        fontIndex,
        setFontIndex,
        steper,
        answer
    }
}