const a=fetch("http://127.0.0.1:3000/")
.then(repen=>{
    return repen.json()
})
.then(data=>{
    console.log(data)
})