var roughSVG = rough.svg(document.getElementById('svg'));

var globalX=300
var globalY=300

const startSquare = roughSVG.rectangle(globalX,globalY,100,100,{
    fill: 'rgba(0,102,255,0.6)',
    fillStyle: 'zigzag-line'    
})
svg.appendChild(startSquare)


function drawSquareDown(){
    const line = roughSVG.line(globalX+50,globalY+100,globalX+50,globalY+120)
    svg.appendChild(line)
    globalY=globalY+120
    const square = roughSVG.rectangle(globalX,globalY,100,100,{
        fill: 'rgba(255,0,200,0.6)',
        fillStyle: 'zigzag-line'    
    })
    svg.appendChild(square)
}

function drawSquareUp(){
    var StartX = globalX+50
    var StartY = globalY
    var endX = StartX
    var endY = globalY-20
    const line = roughSVG.line(StartX,StartY,endX,endY)
    svg.appendChild(line)
    globalY=globalY-120
    const square = roughSVG.rectangle(globalX,globalY,100,100,{
        fill: 'rgba(255,0,200,0.6)',
        fillStyle: 'zigzag-line'    
    })
    svg.appendChild(square)
}

function drawSquareLeft(){
    var StartX = globalX
    var StartY = globalY+50
    var endX = StartX-20
    var endY = StartY
    const line = roughSVG.line(StartX,StartY,endX,endY)
    svg.appendChild(line)
    globalX=globalX-120
    const square = roughSVG.rectangle(globalX,globalY,100,100,{
        fill: 'rgba(255,0,200,0.6)',
        fillStyle: 'zigzag-line'    
    })
    svg.appendChild(square)
}

function drawSquareRight(){
    var StartX = globalX+100
    var StartY = globalY+50
    var endX = StartX+20
    var endY = StartY
    const line = roughSVG.line(StartX,StartY,endX,endY)
    svg.appendChild(line)
    globalX=globalX+120
    const square = roughSVG.rectangle(globalX,globalY,100,100,{
        fill: 'rgba(255,0,200,0.6)',
        fillStyle: 'zigzag-line'    
    })
    svg.appendChild(square)
}

const addSquare = document.getElementById("addSquareDown")
addSquare.addEventListener("click", ()=>{
    drawSquareDown()
})
const addSquareUp = document.getElementById("addSquareUp")
addSquareUp.addEventListener("click", ()=>{
    drawSquareUp()
})
const addSquareLeft = document.getElementById("addSquareLeft")
addSquareLeft.addEventListener("click", ()=>{
    drawSquareLeft()
})
const addSquareRight = document.getElementById("addSquareRight")
addSquareRight.addEventListener("click", ()=>{
    drawSquareRight()
})