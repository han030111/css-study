
let width=500
let height=500
let dal=20
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
let maincolor="black"
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


boro.addEventListener("click",(event)=>{
    maincolor="#E4E4E4"
    
    console.log(event)
})
red.addEventListener("click",(event)=>{
    maincolor="red"
    
    console.log(event)
})
gray.addEventListener("click",(event)=>{
    maincolor="#888888"
    
    console.log(event)
})
bred.addEventListener("click",(event)=>{
    maincolor="#A06A42"
    
    console.log(event)
})
blue.addEventListener("click",(event)=>{
    maincolor="blue"
    
    console.log(event)
})
white.addEventListener("click",(event)=>{
    maincolor="white"
    
    console.log(event)
})
antiwhite.addEventListener("click",(event)=>{
    maincolor=" #820080"
    
    console.log(event)
})
gold.addEventListener("click",(event)=>{
    maincolor="gold"
    
    console.log(event)
})
mediumgreen.addEventListener("click",(event)=>{
    maincolor="#02BE01"
    
    console.log(event)
})
orange.addEventListener("click",(event)=>{
    maincolor="orange"
    
    console.log(event)
})
ggreen.addEventListener("click",(event)=>{
    maincolor="#94E044"
    
    console.log(event)
})
rightpeople.addEventListener("click",(event)=>{
    maincolor="#CF6EE4"
    
    console.log(event)
})
black.addEventListener("click",(event)=>{
    maincolor="black"
    
    console.log(event)
})
pink.addEventListener("click",(event)=>{
    maincolor="pink"
    
    console.log(event)
})
sea.addEventListener("click",(event)=>{
    maincolor="#0083C7"
    
    console.log(event)
})
river.addEventListener("click",(event)=>{
    maincolor="#00D3DD"
    
    console.log(event)
})
  async function get() {
    const repen = await fetch("http://3.36.70.196:3001/");
    const dat = await repen.json();
    return dat;
}

async function post(x, y, color) {
    const data = { x, y, color }; 
    try {
        
        const rep = await fetch("http://3.36.70.196:3001/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data) 
        });
        const responseData = await rep.json(); 
        
        console.log("Server response:", responseData); 
    } catch (error) {
        console.error("Error sending data:", error);
    }
}

async function fil(event) {
    offsetX = event.offsetX;
    offsetY = event.offsetY;
    offsetX = offsetX -= offsetX % dal;
    offsetY = offsetY -= offsetY % dal;
    ctx.fillStyle=maincolor
       ctx.fillRect(offsetX, offsetY, dal, dal);
    post(offsetX, offsetY, maincolor);

}

async function pixel(x, y, color) {
    x -= x % dal;
    y -= y % dal;
    ctx.fillStyle = color; // fillStyle 설정
    ctx.fillRect(x, y, dal, dal); // 픽셀 그리기
    
}

can.addEventListener("mousedown", fil);

async function init() {
    const rep = await get();
    rep.forEach(item => { 
        pixel(item.x,item.y,item.color)
    });
}
setInterval(init,100)