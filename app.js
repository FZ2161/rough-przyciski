var roughSVG = rough.svg(document.getElementById('svg'));

var globalX=300
var globalY=300


function drawSquareDown(){
    const square = roughSVG.rectangle(globalX,globalY,100,100,{
        fill: 'rgba(255,0,200,0.6)',
        fillStyle: 'zigzag-line'    
    })
    svg.appendChild(square)

    const line = roughSVG.line(globalX+50,globalY+100,globalX+50,globalY+120)
    svg.appendChild(line)
    globalY=globalY+120
}

const addSquare = document.getElementById("addSquareDown")
addSquare.addEventListener("click", ()=>{
    drawSquareDown()
})