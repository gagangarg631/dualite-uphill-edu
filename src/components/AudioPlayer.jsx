import { forwardRef } from "react";


const AudioPlayer = forwardRef((props, ref) => {
    const { src, ...rest } = props;
    return (
        <audio {...rest} ref={ref}>
            <source src={src} type="audio/mp3" />
        </audio>
    )
})

export default AudioPlayer;