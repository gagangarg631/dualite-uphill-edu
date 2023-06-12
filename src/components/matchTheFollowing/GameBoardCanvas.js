
import { Box } from '@mui/material'
import Canvas from '../../assets/Canvas'
import ProgressBar from '../ProgressBar'
import { getPercent } from '../../utils/helper'
import { moods, pairs } from '../../utils/constants'
import * as constants from '../../utils/constants'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Stone from '../Stone'
import MatchGameContext from '../../contexts/MatchGameContext'

const layoutStyle = {
    height: '100vh',
    width: '100vw',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
}

const gameStyle = {
    height: `100vh`,
    width: `100vw`,
    background: 'url(fontMatchingBg.png)',
    // backgroundSize: '100% 100%',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
}

const lastSourceStone = {
    y: 360,
    x: 70
}

const sourceStones = [
    {
        x: lastSourceStone.x,
        y: lastSourceStone.y - 240,
    },
    {
        x: lastSourceStone.x,
        y: lastSourceStone.y - 120
    },
    {
        x: lastSourceStone.x,
        y: lastSourceStone.y
    },
]

const targetStones = [
    {
        x: lastSourceStone.x,
        y: lastSourceStone.y - 240,
    },
    {
        x: lastSourceStone.x,
        y: lastSourceStone.y - 120
    },
    {
        x: lastSourceStone.x,
        y: lastSourceStone.y
    },
]

const win_anim_style = {
    position: 'absolute',
    bottom: '60px',
    right: '0px',
    height: '200px',
    width: '180px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}


const GameBoardCanvas = () => {

    const [screenIndex, setScreenIndex] = useState(0);

    const [optionsIndexes, setOptionsIndexes] = useState([1, 2, 0]);

    const { currentOptions, setCurrentOptions, game: { matchGameWin, setMatchGameWin } } = useContext(MatchGameContext);

    const audioRef = useRef(null);
    const winAudioRef = useRef(null);
    const playing = useRef(false);
    const sound = useRef('');

    function generateIndexes() {
        while (optionsIndexes.length < 3) {
            const rValue = Math.floor(Math.random() * 3);
            if (!optionsIndexes.includes(rValue)) {
                setOptionsIndexes([...optionsIndexes, rValue]);
            }
        }
    }

    async function playAudio() {
        if (audioRef.current?.paused && !playing.current) {
            return audioRef.current?.play();
        }
    }

    // Pause video function
    function pauseAudio() {
        if (!audioRef.current?.paused && playing.current) {
            audioRef.current?.pause();
        }
    }

    useEffect(() => {
        // if (audioRef.current) {
        //     function playing() {
        //         playing.current = true;
        //     }
        //     audioRef.current.addEventListener('playing', playing)
        //     function pause() {
        //         playing.current = false;
        //     };
        //     audioRef.current.addEventListener('pause', pause)
        // }
        // winAudioRef.current?.addEventListener('canplaythrough', function() {
        //     winAudioRef.current?.play();
        // })
        winAudioRef.current?.load();
    }, [winAudioRef.current])

    useEffect(() => {
        // audioRef.current?.addEventListener('canplaythrough', function() {
        //     console.log('e')
        //     audioRef.current?.play();
        // })

        audioRef.current?.load();
    }, [audioRef.current])

    useEffect(() => {
        if (matchGameWin) {
            // winAudioRef.current?.load();
            winAudioRef.current?.play();

        } else if (matchGameWin === false) {
            // audioRef.current?.load();
            audioRef.current?.play();
        }

        if (matchGameWin !== null) {
            setTimeout(() => {
                setMatchGameWin(null);
            }, 2500)
        }

    }, [matchGameWin])

    useEffect(() => {
        setCurrentOptions([
            pairs[0].options[optionsIndexes[0]],
            pairs[0].options[optionsIndexes[1]],
            pairs[0].options[optionsIndexes[2]],
        ])
    }, [optionsIndexes])

    return (
        <Box sx={layoutStyle}>
            <Box sx={{
                width: '90%',
            }}>
                <ProgressBar sx={{
                    height: `${getPercent(window.innerHeight, 7)}px`,
                    width: '100%',
                }} />
            </Box>
            <Box sx={gameStyle}>
                <Box sx={{
                    height: '100%',
                    width: '500px',
                    position: 'relative'
                }}>

                    <Stone quesIndex={0} screenIndex={screenIndex} keyType='questions' direction='left' pos={sourceStones[0]} />
                    <Stone quesIndex={1} screenIndex={screenIndex} keyType='questions' direction='left' pos={sourceStones[1]} />
                    <Stone quesIndex={2} screenIndex={screenIndex} keyType='questions' direction='left' pos={sourceStones[2]} />
                    <Stone quesIndex={optionsIndexes[0]} screenIndex={screenIndex} keyType='options' direction='right' pos={targetStones[0]} />
                    <Stone quesIndex={optionsIndexes[1]} screenIndex={screenIndex} keyType='options' direction='right' pos={targetStones[1]} />
                    <Stone quesIndex={optionsIndexes[2]} screenIndex={screenIndex} keyType='options' direction='right' pos={targetStones[2]} />

                    <Canvas
                        height={`${getPercent(window.innerHeight, 90)}px`}
                        width='500px'
                    />
                </Box>
            </Box>
            {matchGameWin && (
                <Box sx={win_anim_style}>
                    <img
                        src='win_anim.gif'
                        height='300px'
                    />
                    <audio style={{
                        visibility: 'hidden',
                        height: 0
                    }} controls ref={(ref) => winAudioRef.current = ref}>
                        <source src={'sounds/startAndCorrect.mp3'} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                </Box>
            )}
            {matchGameWin === false && (
                <Box sx={win_anim_style}>
                    <img
                        src='lose_anim.gif'
                        height='220px'
                    />
                    <audio style={{
                        visibility: 'hidden',
                        height: 0
                    }} controls ref={(ref) => audioRef.current = ref}>
                        <source src={'sounds/incorrect-sound.mp3'} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                </Box>
            )}
            {matchGameWin === null && (
                <Box sx={{
                    ...win_anim_style,
                    bottom: '30px',
                    transform: 'rotateY(180deg)'
                }}>
                    <img
                        src='no_anim.png'
                        height='250px'
                    />
                </Box>
            )}
        </Box>
    )
}

export default GameBoardCanvas