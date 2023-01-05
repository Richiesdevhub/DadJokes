const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokebtn')

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke(){
    const config = {
        headers:{
            'Accept':'application/json' 
        }
    }
    //USING ASYNC AWAIT
    const res = await fetch('https://icanhazdadjoke.com/', config)

    const data = await res.json();

    jokeEl.innerHTML = data.joke;

    //USING DOT THEN
    // fetch('https://icanhazdadjoke.com/', config)
    // .then((res)=>res.json())
    // .then((data)=>{
    //     jokeEl.innerHTML = data.joke;
    // })
}

