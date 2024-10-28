const generateBtn = document.querySelector('.generate-btn');
const image = document.querySelector('img');
const titleText = document.querySelector('#text');
const authorText = document.querySelector('#author');


function fetchMeme(){
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res)=>res.json())
    .then((data)=>{
        const {author, title, url} = data;
        image.src = url;
        titleText.innerText = title;
        authorText.innerText = `Meme by: ${author}`;
    })
}

fetchMeme();

generateBtn.addEventListener('click', ()=>{
    fetchMeme()
})
