const width=500
const height=500
const can=document.querySelector("canvas")
const ctx= can.getContext('2d')
const dal=25
can.width=width
can.height=height

let maincolor="black"


const colorMap = {
  bred: "#be0039",
  red: "#ff4500",
  blue: "#ffa800",
  orange: "#ffd635",
  gold: "#fff8b8",
  antiwhite: "#00a368",
  ggreen: "#00cc78", // HTML ID 오류 수정: ggreen
  mediumgreen: "#7eed56",
  white: "#00756f",
  boro: "#009eaa",
  gray: "#00ccc0",
  black: "#2450a4",
  pink: "#3690ea",
  sea: "#51e9f4",
  river: "#493ac1",
  rightpeople: "#6a5cff",
  whit: "#811e9f", // HTML ID 오류 수정: whit
  blac: "#b44ac0", // HTML ID 오류 수정: blac
  rive: "#e4abff", // HTML ID 오류 수정: rive
  extra1: "#94b3ff",
  extra2: "#811e9f",
  extra3: "#b44ac0",
  extra4: "#e4abff",
  extra5: "#de107f",
  extra6: "#ff3881",
  extra7: "#ff99aa",
  extra8: "#6d482f",
  extra9: "#9c6926",
  extra10: "#ffb470",
  extra11: "#000000",
  extra12: "#515252",
  extra13: "#898d90",
  extra14: "#d4d7d9",
  extra15: "#ffffff"
};

const elements = {
  a: document.getElementById("bred"), // 예시로 id가 "bred"인 요소를 a로 연결
  b: document.getElementById("red"),   // 실제 HTML 구조에 맞게 id 연결 필요
  c: document.getElementById("blue"),
  d: document.getElementById("orange"),
  e: document.getElementById("gold"),
  f: document.getElementById("antiwhite"),
  g: document.getElementById("ggreen"),
  h: document.getElementById("mediumgreen"),
  i: document.getElementById("white"),
  j: document.getElementById("boro"),
  k: document.getElementById("gray"),
  l: document.getElementById("black"),
  ww: document.getElementById("pink"),
  n: document.getElementById("sea"),
  o: document.getElementById("river"),
  q: document.getElementById("rightpeople"),
  r: document.getElementById("extra1"), // extra도 연결 시작
  s: document.getElementById("extra2"),
  t: document.getElementById("extra3"),
  u: document.getElementById("extra4"),
  v: document.getElementById("extra5"),
  w: document.getElementById("extra6"),
  x: document.getElementById("extra7"),
  y: document.getElementById("extra8"),
  z: document.getElementById("extra9"),
  aa: document.getElementById("extra10"),
  ab: document.getElementById("extra11"),
  ac: document.getElementById("extra12"),
  ad: document.getElementById("extra13"),
  ae: document.getElementById("extra14"),
  af: document.getElementById("extra15")
};

if (elements.a) {
  elements.a.addEventListener("click", () => {
    maincolor = colorMap.bred;
    
  });
}

if (elements.b) {
  elements.b.addEventListener("click", () => {
    maincolor = colorMap.red;
    
  });
}

if (elements.c) {
  elements.c.addEventListener("click", () => {
    maincolor = colorMap.blue;
    
  });
}

if (elements.d) {
  elements.d.addEventListener("click", () => {
    maincolor = colorMap.orange;
    
  });
}

if (elements.e) {
  elements.e.addEventListener("click", () => {
    maincolor = colorMap.gold;
    
  });
}

if (elements.f) {
  elements.f.addEventListener("click", () => {
    maincolor = colorMap.antiwhite;
    
  });
}

if (elements.g) {
  elements.g.addEventListener("click", () => {
    maincolor = colorMap.ggreen;
    
  });
}

if (elements.h) {
  elements.h.addEventListener("click", () => {
    maincolor = colorMap.mediumgreen;
    
  });
}

if (elements.i) {
  elements.i.addEventListener("click", () => {
    maincolor = colorMap.white;
    
  });
}

if (elements.j) {
  elements.j.addEventListener("click", () => {
    maincolor = colorMap.boro;
    
  });
}

if (elements.k) {
  elements.k.addEventListener("click", () => {
    maincolor = colorMap.gray;
    
  });
}

if (elements.l) {
  elements.l.addEventListener("click", () => {
    maincolor = colorMap.black;
    
  });
}

if (elements.ww) {
  elements.ww.addEventListener("click", () => {
    maincolor = colorMap.pink;
    
  });
}

if (elements.n) {
  elements.n.addEventListener("click", () => {
    maincolor = colorMap.sea;
    
  });
}

if (elements.o) {
  elements.o.addEventListener("click", () => {
    maincolor = colorMap.river;
    
  });
}

if (elements.q) {
  elements.q.addEventListener("click", () => {
    maincolor = colorMap.rightpeople;
    
  });
}

if (elements.r) {
  elements.r.addEventListener("click", () => {
    maincolor = colorMap.extra1;
    
  });
}

if (elements.s) {
  elements.s.addEventListener("click", () => {
    maincolor = colorMap.extra2;
    
  });
}

if (elements.t) {
  elements.t.addEventListener("click", () => {
    maincolor = colorMap.extra3;
    
  });
}

if (elements.u) {
  elements.u.addEventListener("click", () => {
    maincolor = colorMap.extra4;
    
  });
}

if (elements.v) {
  elements.v.addEventListener("click", () => {
    maincolor = colorMap.extra5;
    
  });
}

if (elements.w) {
  elements.w.addEventListener("click", () => {
    maincolor = colorMap.extra6;
    
  });
}

if (elements.x) {
  elements.x.addEventListener("click", () => {
    maincolor = colorMap.extra7;
    
  });
}

if (elements.y) {
  elements.y.addEventListener("click", () => {
    maincolor = colorMap.extra8;
    
  });
}

if (elements.z) {
  elements.z.addEventListener("click", () => {
    maincolor = colorMap.extra9;
    
  });
}

if (elements.aa) {
  elements.aa.addEventListener("click", () => {
    maincolor = colorMap.extra10;
    
  });
}

if (elements.ab) {
  elements.ab.addEventListener("click", () => {
    maincolor = colorMap.extra11;
    
  });
}

if (elements.ac) {
  elements.ac.addEventListener("click", () => {
    maincolor = colorMap.extra12;
    
  });
}

if (elements.ad) {
  elements.ad.addEventListener("click", () => {
    maincolor = colorMap.extra13;
    
  });
}

if (elements.ae) {
  elements.ae.addEventListener("click", () => {
    maincolor = colorMap.extra14;
    
  });
}

if (elements.af) {
  elements.af.addEventListener("click", () => {
    maincolor = colorMap.extra15;
    
  });
}
if (elements.a) {
    elements.a.addEventListener("touchstart", () => {
      maincolor = colorMap.bred;
      
    });
  }
  
  if (elements.b) {
    elements.b.addEventListener("touchstart", () => {
      maincolor = colorMap.red;
      
    });
  }
  
  if (elements.c) {
    elements.c.addEventListener("touchstart", () => {
      maincolor = colorMap.blue;
      
    });
  }
  
  if (elements.d) {
    elements.d.addEventListener("touchstart", () => {
      maincolor = colorMap.orange;
      
    });
  }
  
  if (elements.e) {
    elements.e.addEventListener("touchstart", () => {
      maincolor = colorMap.gold;
      
    });
  }
  
  if (elements.f) {
    elements.f.addEventListener("touchstart", () => {
      maincolor = colorMap.antiwhite;
      
    });
  }
  
  if (elements.g) {
    elements.g.addEventListener("touchstart", () => {
      maincolor = colorMap.ggreen;
      
    });
  }
  
  if (elements.h) {
    elements.h.addEventListener("touchstart", () => {
      maincolor = colorMap.mediumgreen;
      
    });
  }
  
  if (elements.i) {
    elements.i.addEventListener("touchstart", () => {
      maincolor = colorMap.white;
      
    });
  }
  
  if (elements.j) {
    elements.j.addEventListener("touchstart", () => {
      maincolor = colorMap.boro;
      
    });
  }
  
  if (elements.k) {
    elements.k.addEventListener("touchstart", () => {
      maincolor = colorMap.gray;
      
    });
  }
  
  if (elements.l) {
    elements.l.addEventListener("touchstart", () => {
      maincolor = colorMap.black;
      
    });
  }
  
  if (elements.ww) {
    elements.ww.addEventListener("touchstart", () => {
      maincolor = colorMap.pink;
      
    });
  }
  
  if (elements.n) {
    elements.n.addEventListener("touchstart", () => {
      maincolor = colorMap.sea;
      
    });
  }
  
  if (elements.o) {
    elements.o.addEventListener("touchstart", () => {
      maincolor = colorMap.river;
      
    });
  }
  
  if (elements.q) {
    elements.q.addEventListener("touchstart", () => {
      maincolor = colorMap.rightpeople;
      
    });
  }
  
  if (elements.r) {
    elements.r.addEventListener("touchstart", () => {
      maincolor = colorMap.extra1;
      
    });
  }
  
  if (elements.s) {
    elements.s.addEventListener("touchstart", () => {
      maincolor = colorMap.extra2;
      
    });
  }
  
  if (elements.t) {
    elements.t.addEventListener("touchstart", () => {
      maincolor = colorMap.extra3;
      
    });
  }
  
  if (elements.u) {
    elements.u.addEventListener("touchstart", () => {
      maincolor = colorMap.extra4;
      
    });
  }
  
  if (elements.v) {
    elements.v.addEventListener("touchstart", () => {
      maincolor = colorMap.extra5;
      
    });
  }
  
  if (elements.w) {
    elements.w.addEventListener("touchstart", () => {
      maincolor = colorMap.extra6;
      
    });
  }
  
  if (elements.x) {
    elements.x.addEventListener("touchstart", () => {
      maincolor = colorMap.extra7;
      
    });
  }
  
  if (elements.y) {
    elements.y.addEventListener("touchstart", () => {
      maincolor = colorMap.extra8;
      
    });
  }
  
  if (elements.z) {
    elements.z.addEventListener("touchstart", () => {
      maincolor = colorMap.extra9;
      
    });
  }
  
  if (elements.aa) {
    elements.aa.addEventListener("touchstart", () => {
      maincolor = colorMap.extra10;
      
    });
  }
  
  if (elements.ab) {
    elements.ab.addEventListener("touchstart", () => {
      maincolor = colorMap.extra11;
      
    });
  }
  
  if (elements.ac) {
    elements.ac.addEventListener("touchstart", () => {
      maincolor = colorMap.extra12;
      
    });
  }
  
  if (elements.ad) {
    elements.ad.addEventListener("touchstart", () => {
      maincolor = colorMap.extra13;
      
    });
  }
  
  if (elements.ae) {
    elements.ae.addEventListener("touchstart", () => {
      maincolor = colorMap.extra14;
      
    });
  }
  
  if (elements.af) {
    elements.af.addEventListener("touchstart", () => {
      maincolor = colorMap.extra15;
      
    });
  }
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
