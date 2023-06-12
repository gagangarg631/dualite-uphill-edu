import { useContext, useEffect, useRef } from "react";
import { pairs } from "../utils/constants";
import MatchGameContext from "../contexts/MatchGameContext";

// const lastSourceStone = {
//     y: 410,
//     x: 125
// }

const lastSourceStone = {
    y: window.innerHeight - 120,
    x: 70,
};

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
        x: lastSourceStone.x + 300,
        y: lastSourceStone.y - 240,
    },
    {
        x: lastSourceStone.x + 300,
        y: lastSourceStone.y - 120,
    },
    {
        x: lastSourceStone.x + 300,
        y: lastSourceStone.y,
    },
]




export default function useOnDraw(onDraw) {

    const canvasRef = useRef(null);
    const isDrawingRef = useRef(false);

    const mouseMoveListenerRef = useRef(null);
    const mouseDownListenerRef = useRef(null);
    const mouseUpListenerRef = useRef(null);

    const prevPointRef = useRef(null);

    const start = useRef(false);
    const end = useRef(false);

    const startIndex = useRef(null);
    const endIndex = useRef(null);

    const { currentOptions, game: { setMatchGameWin } } = useContext(MatchGameContext);

    const win = useRef(false);

    // useEffect(() => {
    //     return () => {
    //         if (mouseMoveListenerRef.current) {
    //             window.removeEventListener('mousemove', mouseMoveListenerRef.current);
    //         }
    //         if (mouseUpListenerRef.current) {
    //             window.removeEventListener('mouseup', mouseUpListenerRef.current);
    //         }
    //     }
    // }, [])


    function isSourceStone(point) {
        let result = false;

        sourceStones.some((stone, index) => {
            const xCondition = point.x > stone.x - 50 && point.x < stone.x + 50;
            const yCondition = point.y > stone.y - 40 && point.y < stone.y + 40;
            if (xCondition && yCondition) {
                result = true;
                startIndex.current = index;
                return true;
            } else {
                result = false;
            }
        })

        return result
    }

    function isTargetStone(point) {
        let result = false;

        targetStones.some((stone, index) => {
            const xCondition = point.x > stone.x - 50 && point.x < stone.x + 50;
            const yCondition = point.y > stone.y - 40 && point.y < stone.y + 40;
            if (xCondition && yCondition) {
                result = true;
                endIndex.current = index;
                return true;
            } else {
                result = false;
            }
        })

        return result
    }

    function setCanvasRef(ref) {
        if (!ref) return;
        if (canvasRef.current) {
            canvasRef.current.removeEventListener("mousedown", mouseDownListenerRef.current);
        }
        canvasRef.current = ref;
        initMouseMoveListener();
        initMouseDownListener();
        initMouseUpListener();
    }

    function initMouseMoveListener() {
        const mouseMoveListener = (e) => {
            if (isDrawingRef.current) {
                const point = computerPointInCanvas(e.clientX, e.clientY)
                const ctx = canvasRef.current.getContext('2d')
                if (onDraw) {
                    onDraw(ctx, point, prevPointRef.current)
                }
                prevPointRef.current = point
            }
        }
        mouseMoveListenerRef.current = mouseMoveListener
        window.addEventListener('mousemove', mouseMoveListener)
    }

    function initMouseUpListener() {
        if (!canvasRef.current) return;

        const listener = (e) => {
            isDrawingRef.current = false;
            prevPointRef.current = null;
            const point = computerPointInCanvas(e.clientX, e.clientY)
            isTargetStone(point)
            end.current = pairs[0].options[endIndex.current];

            win.current = currentOptions[endIndex.current] === pairs[0].options[startIndex.current];
            setMatchGameWin(win.current)
            canvasRef.current.getContext('2d').reset();
        }
        mouseUpListenerRef.current = listener;
        window.addEventListener('mouseup', listener);
    }

    function initMouseDownListener() {
        if (!canvasRef.current) return;
        start.current = true;
        const listener = (e) => {
            isDrawingRef.current = true;
            const point = computerPointInCanvas(e.clientX, e.clientY)
            isSourceStone(point)
            start.current = pairs[0].questions[startIndex.current];
            endIndex.current = null;
            win.current = false;
        }
        mouseDownListenerRef.current = listener;
        canvasRef.current.addEventListener('mousedown', listener);
    }

    function computerPointInCanvas(clientX, clientY) {
        if (canvasRef.current) {
            const boundingRect = canvasRef.current.getBoundingClientRect()
            return {
                x: clientX - boundingRect.left,
                y: clientY - boundingRect.top
            }
        } else {
            return null
        }

    }

    return {
        setCanvasRef,
    }
}