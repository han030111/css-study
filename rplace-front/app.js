

const a =fetch("http://127.0.0.1:3000")
console.log(a)
a.then((re)=>{
    return re.json()
})
.then((da)=>{
    console.log(da)
})