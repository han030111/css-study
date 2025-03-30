const width=500
const height=500
const can=document.querySelector("canvas")
const ctx= can.getContext('2d')
const dal=25
can.width=width
can.height=height
const a=document.querySelector("#bred")
const b=document.querySelector("#red")
const c=document.querySelector("#blue")
const d=document.querySelector("#orange")
const e=document.querySelector("#gold")
const f=document.querySelector("#antiwhite")
const g=document.querySelector("#ggreen")
const h=document.querySelector("#mediumgreen")
const i=document.querySelector("#white")
const j=document.querySelector("#boro")
const k=document.querySelector("#gray")
const l=document.querySelector("#black")
const ww=document.querySelector("#pink")
const n=document.querySelector("#sea")
const o=document.querySelector("#river")
const q=document.querySelector("#rightpeople")
const r=document.querySelector("#extra1")
const s=document.querySelector("#extra2")
const t=document.querySelector("#extra3")
const u=document.querySelector("#extra4")
const v=document.querySelector("#extra5")
const w=document.querySelector("#extra6")
const x=document.querySelector("#extra7")
const y=document.querySelector("#extra8")
const z=document.querySelector("#extra9")
const aa=document.querySelector("#extra10")
const ab=document.querySelector("#extra11")
const ac=document.querySelector("#extra12")
const ad=document.querySelector("#extra13")
const ae=document.querySelector("#extra14")
const af=document.querySelector("#extra15")
let maincolor="black"
a.addEventListener("click",()=>{
   
    maincolor="#6d001a"
    
})
b.addEventListener("click",()=>{
   
    maincolor="#be0039"
    
})
c.addEventListener("click",()=>{
   
    maincolor="#ff4500"
    
})
d.addEventListener("click",()=>{
   
    maincolor="#ffa800"
    
})
e.addEventListener("click",()=>{
   
    maincolor="#ffd635"
    
})
f.addEventListener("click",()=>{
   
    maincolor="#fff8b8"
    
})
g.addEventListener("click",()=>{
   
    maincolor="#00a368"
    
})
h.addEventListener("click",()=>{
   
    maincolor="#00cc78"
    
})
i.addEventListener("click",()=>{
   
    maincolor="#7eed56"
    
})
j.addEventListener("click",()=>{
   
    maincolor="#00756f"
    
})
k.addEventListener("click",()=>{
   
    maincolor="#009eaa"
    
})
l.addEventListener("click",()=>{
   
    maincolor="#00ccc0"
    
})
ww.addEventListener("click",()=>{
   
    maincolor="#2450a4"
    
})
n.addEventListener("click",()=>{
   
    maincolor="#3690ea"
    
})
o.addEventListener("click",()=>{
   
    maincolor="#51e9f4"
    
})
q.addEventListener("click",()=>{
   
    maincolor="#493ac1"
    
})
r.addEventListener("click",()=>{
   
    maincolor="#6a5cff"
    
})
s.addEventListener("click",()=>{
   
    maincolor="#94b3ff"
    
})
t.addEventListener("click",()=>{
   
    maincolor="#811e9f"
    
})
u.addEventListener("click",()=>{
   
    maincolor="#b44ac0"
    
})
v.addEventListener("click",()=>{
   
    maincolor="#e4abff"
    
})
w.addEventListener("click",()=>{
   
    maincolor="#de107f"
    
})
x.addEventListener("click",()=>{
   
    maincolor="#ff3881"
    
})
y.addEventListener("click",()=>{
   
    maincolor="#ff99aa"
    
})
z.addEventListener("click",()=>{
   
    maincolor="#6d482f"
    
})
aa.addEventListener("click",()=>{
   
    maincolor="#9c6926"
})
ab.addEventListener("click",()=>{
   
    maincolor="#ffb470"
})
ac.addEventListener("click",()=>{
   
    maincolor="#000000"
})
ad.addEventListener("click",()=>{
   
    maincolor="#515252"
})
ae.addEventListener("click",()=>{
   
    maincolor="#898d90"
})
af.addEventListener("click",()=>{
   
    maincolor="#d4d7d9"
})

function fill(event){
    ctx.fillStyle=maincolor
    let X=event.offsetX
    let Y=event.offsetY
    X-=X%dal
    Y-=Y%dal
    
    ctx.fillRect(X,Y,dal,dal)
    post(X,Y,maincolor)
}
async function post(x,y,color){
    const list={
        x:x,
        y:y,
        color:color
    }

    const rep=await fetch('http://127.0.0.1:3002', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(list),
      })}
async function get(){
    const rep=await fetch("http://127.0.0.1:3002")
    const data=await rep.json()
    return data
}
function pixel(x,y,color){
    ctx.fillStyle=color
    ctx.fillRect(x,y,dal,dal)
}
async function init(){
    const rep=await get()
    
    rep.forEach(function(data) {
      pixel(data.x,data.y,data.color)
    });
}

can.addEventListener("mousedown",fill)
setInterval(init,500)
