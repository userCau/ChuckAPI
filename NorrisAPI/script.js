const addpiadabt = document.querySelector('#addpiada');
const excluirtdsbt = document.querySelector('#excluirtds');
const excluirumabt = document.querySelector('#excluiruma');
const atualizarpiadabt = document.querySelector('#atualizarpiada');

addpiadabt.addEventListener('click', getData);
excluirtdsbt.addEventListener('click', excluirtds);
excluirumabt.addEventListener('click', excluiruma);
atualizarpiadabt.addEventListener('click', atualizarpiada);

async function getData() {
    try {
        const data = await fetch('https://api.chucknorris.io/jokes/random');
        const json = await data.json();
        /*console.log(json);
        console.log(json.value)
        par.textContent = json.value*/
        const newPar = document.createElement('h2');
        newPar.textContent = json.value;
        document.body.appendChild(newPar);
    } 

    catch(e) {
        console.error(e);
    }
}

function excluirtds() {
    const jokes = document.querySelectorAll('h2');
    jokes.forEach(joke => joke.remove());
}

function excluiruma() {
    const jokes = document.querySelectorAll('h2');
    if (jokes.length > 0) {
        const lastJoke = jokes[jokes.length - 1];
        lastJoke.remove();
    }
}

async function atualizarpiada () {
    const jokes = document.querySelectorAll('h2')
    if (jokes.length > 0) {
        const lastJoke = jokes[jokes.length - 1];
        try {
            const data = await fetch('https://api.chucknorris.io/jokes/random');
            const json = await data.json();
            lastJoke.textContent = json.value;
        } 

        catch(e) {
            console.error(e);
        }
    }
}