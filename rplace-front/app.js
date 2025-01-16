const api="https://yts.mx/api/v2/list_movies.json"
async function re(){
    const  repen =await fetch(api)
    const json= repen.json()
    console.log(json.data.movies[0])
}
re()