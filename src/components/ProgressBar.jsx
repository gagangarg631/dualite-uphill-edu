import { useEffect, useState } from "react";
import useFontMatch from "../hooks/useFontMatch"
import { Box, LinearProgress } from "@mui/material";

export default function ProgressBar (props) {

    const { steper: { step } } = useFontMatch()

    const [progress, setProgress] = useState(step * 5 - 5);

    const progressValue = step * 5 < 100 ? step * 5 : 100

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === progressValue) {
                    return progressValue;
                }

                return Math.min(oldProgress + 5, progressValue);
            });
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, [step]);

    return (
        <Box {...props}>
            <LinearProgress
                sx={{
                    height: '100%',
                    backgroundColor: 'white',
                    color: 'green'
                }}
                variant="determinate"
                value={progress}
            />
        </Box>
    )
}