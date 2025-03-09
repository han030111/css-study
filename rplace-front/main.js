const width=500
const height=500
const can=document.querySelector("canvas")
const ctx= can.getContext('2d')
const dal=25
can.width=width
can.height=height
const a=document.querySelector("#color_6d001a")
const b=document.querySelector("#color_be0039")
const c=document.querySelector("#color_ff4500")
const d=document.querySelector("#color_ffa800")
const e=document.querySelector("#color_ffd635")
const f=document.querySelector("#color_fff8b8")
const g=document.querySelector("#color_00a368")
const h=document.querySelector("#color_00cc78")
const i=document.querySelector("#color_7eed56")
const j=document.querySelector("#color_00756f")
const k=document.querySelector("#color_009eaa")
const l=document.querySelector("#color_00ccc0")
const ww=document.querySelector("#color_2450a4")
const n=document.querySelector("#color_3690ea")
const o=document.querySelector("#color_51e9f4")
const q=document.querySelector("#color_493ac1")
const r=document.querySelector("#color_6a5cff")
const s=document.querySelector("#color_94b3ff")
const t=document.querySelector("#color_811e9f")
const u=document.querySelector("#color_b44ac0")
const v=document.querySelector("#color_e4abff")
const w=document.querySelector("#color_de107f")
const x=document.querySelector("#color_ff3881")
const y=document.querySelector("#color_ff99aa")
const z=document.querySelector("#color_6d482f")
const aa=document.querySelector("#color_9c6926")
const ab=document.querySelector("#color_ffb470")
const ac=document.querySelector("#color_000000")
const ad=document.querySelector("#color_515252")
const ae=document.querySelector("#color_898d90")
const af=document.querySelector("#color_d4d7d9")
const ag=document.querySelector("#color_ffffff")
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
   
    maincolor="#9c6926"})
ab.addEventListener("click",()=>{
   
    maincolor="#ffb470"})
ac.addEventListener("click",()=>{
   
    maincolor="#000000"})
ad.addEventListener("click",()=>{
   
    maincolor="#515252"})
ae.addEventListener("click",()=>{
   
    maincolor="#898d90"})
af.addEventListener("click",()=>{
   
    maincolor="#d4d7d9"})
ag.addEventListener("click",()=>{
   
    maincolor="#ffffff"})
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
    console.log(data)
    return data
}
function pixel(x,y,color){
    ctx.fillStyle=color
    ctx.fillRect(x,y,dal,dal)
}
async function init(){
    const rep=await get()
    console.log(rep)
    rep.forEach(function(data) {
      pixel(data.x,data.y,data.color)
    });
}

can.addEventListener("mousedown",fill)
setInterval(init,500)
