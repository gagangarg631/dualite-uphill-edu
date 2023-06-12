import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FontMatching from "./pages/FontMatching";
import MatchTheFollowing from "./pages/MatchTheFollowing";
import FontContext from "./contexts/FontsContext";
import MatchGameContext from "./contexts/MatchGameContext";
import { useState } from "react";

function App() {
  const [fontIndex, setFontIndex] = useState(0);
  const [step, setStep] = useState(1);
  const [isCorrect, setIsCorrect] = useState(false);

  const [currentOptions, setCurrentOptions] = useState([]);
  const [matchGameWin, setMatchGameWin] = useState(null);

  return (
    <FontContext.Provider value={{
      fontIndex,
      setFontIndex,
      steper: { step, setStep },
      answer: {
        isCorrect,
        setIsCorrect
      }
    }}>
      <MatchGameContext.Provider value={{
        currentOptions,
        setCurrentOptions,
        game: {
          matchGameWin,
          setMatchGameWin
        }
      }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FontMatching />} />
            <Route path="/match-the-following" element={<MatchTheFollowing />} />
          </Routes>
        </BrowserRouter>
      </MatchGameContext.Provider>
    </FontContext.Provider>
  );
}

export default App;
