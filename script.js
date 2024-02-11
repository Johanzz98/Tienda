const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
let video = document.getElementById('vid');
let butn = document.getElementById('demo');
butn.style.background = "url(img/button/play.png) no-repeat";


if (bar){
    bar.addEventListener ('click', () =>{
        nav.classList.add('active');

    })
}

if (close) {
    close.addEventListener ('click', ()=> {
        nav.classList.remove('active');
    })
}

function Play(){
    if(video.paused){
        video.play();
        butn.style.background="url(img/button/play.png) no-repeat";
    }
    else{
        video.pause();
        butn.style.background = "url(img/button/pause.png) no-repeat";
    }
    }
