let width=500
let height=500
let dal=10
let can=document.querySelector("canvas")
let red=document.querySelector("#red")
let bred=document.querySelector("#bred")
let blue=document.querySelector("#blue")
let orange=document.querySelector("#orange")
let gold=document.querySelector("#gold")
let gray=document.querySelector("#gray")
let white=document.querySelector("#white")
let antiwhite=document.querySelector("#antiwhite")
let ggreen=document.querySelector("#ggreen")
let black=document.querySelector("#black")
let pink=document.querySelector("#pink")
let sea=document.querySelector("#sea")
let river=document.querySelector("#river")
let rightpeople=document.querySelector("#rightpeople")
let mediumgreen=document.querySelector("#mediumgreen")
let ctx=can.getContext("2d")
can.width=width
console.log(red)
can.height=height
ctx.strokeStyle="white"
for(let x=0;x<width/dal;x++){
    ctx.beginPath()
    ctx.moveTo(0,x*dal)
    ctx.lineTo(height,x*dal)
    ctx.stroke()
}
for(let y=0;y<width/dal;y++){
    ctx.beginPath()
    ctx.moveTo(y*dal,0)
    ctx.lineTo(y*dal,width)
    ctx.stroke()}

function fil(event){
    offsetX=event.offsetX
    offsetY=event.offsetY
    offsetX=offsetX-=offsetX%dal
    offsetY=offsetY-=offsetY%dal
    ctx.fillRect(offsetX,offsetY,dal,dal)
    
}
boro.addEventListener("click",(event)=>{
    ctx.fillStyle="#E4E4E4"
    console.log(event)
})
red.addEventListener("click",(event)=>{
    ctx.fillStyle="red"
    console.log(event)
})
gray.addEventListener("click",(event)=>{
    ctx.fillStyle="#888888"
    console.log(event)
})
bred.addEventListener("click",(event)=>{
    ctx.fillStyle="#A06A42"
    console.log(event)
})
blue.addEventListener("click",(event)=>{
    ctx.fillStyle="blue"
    console.log(event)
})
white.addEventListener("click",(event)=>{
    ctx.fillStyle="white"
    console.log(event)
})
antiwhite.addEventListener("click",(event)=>{
    ctx.fillStyle=" #820080"
    console.log(event)
})
gold.addEventListener("click",(event)=>{
    ctx.fillStyle="gold"
    console.log(event)
})
mediumgreen.addEventListener("click",(event)=>{
    ctx.fillStyle="#02BE01"
    console.log(event)
})
orange.addEventListener("click",(event)=>{
    ctx.fillStyle="orange"
    console.log(event)
})
ggreen.addEventListener("click",(event)=>{
    ctx.fillStyle="#94E044"
    console.log(event)
})
rightpeople.addEventListener("click",(event)=>{
    ctx.fillStyle="#CF6EE4"
    console.log(event)
})
black.addEventListener("click",(event)=>{
    ctx.fillStyle="black"
    console.log(event)
})
pink.addEventListener("click",(event)=>{
    ctx.fillStyle="pink"
    console.log(event)
})
sea.addEventListener("click",(event)=>{
    ctx.fillStyle="#0083C7"
    console.log(event)
})
river.addEventListener("click",(event)=>{
    ctx.fillStyle="#00D3DD"
    console.log(event)
})
can.addEventListener("mousedown",fil)
function draw(x,y,color){
    ctx.fillStyle=color
    ctx.fillRect(x,y,dal,dal)
    console.log(x,y,color)
}

async function a() {
    const re  =await fetch("http://127.0.0.1:3000")
    const    a=await re.json()
    draw(a.x,a.y,a.color)
}
a()

