import useOnDraw from "../hooks/useOnDraw"

const Canvas = ({ height, width }) => {

    function onDraw(ctx, point, prevPoint) {
        // console.log(isTargetStone(point))
        // console.log(point)
        drawLine(prevPoint, point, ctx, 'blue', 10);
    }

    function drawLine(
        start,
        end,
        ctx,
        color,
        width
    ) {
        start = start ?? end;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.beginPath()
        ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI)
        ctx.fill()
    }

    const { setCanvasRef } = useOnDraw(onDraw)

    // console.log(start,end);

    return (
        <canvas height={height} width={width} style={canvasStyle} ref={setCanvasRef} />
    )
}

export default Canvas

const canvasStyle = {
    position: 'absolute',
    border: '1px solid black'
}