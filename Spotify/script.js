console.log("Welcome to spotify");

let songindex=0;
let audioElment = new Audio('on-on.mp3');
let masterplay = document.getElementById('masterPlay');
let progressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');

let songs = [
    {songname:"let me lov you",filepath:"songs/on-on.mp3",coverpath:"cover/ncs.jpg"},
    {songname:"let me lov you",filepath:"songs/1.mp3",coverpath:"cover/7.jpg"},
    {songname:"let me lov you",filepath:"songs/2.mp3",coverpath:"cover/8.png"},
    {songname:"let me lov you",filepath:"songs/3.mp3",coverpath:"cover/81.jpg"},
    
]


masterplay.addEventListener('click',()=>{
    if(audioElment.paused || audioElment.currentTime<=0){
        audioElment.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElment.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity =0;
    }
})

audioElment.addEventListener('timeupdate',()=>{
    progress =parseInt((audioElment.currentTime / audioElment.duration)*100);
    
    progressbar.value = progress;
})
audioElment.addEventListener('change',()=>{
    audioElment.currentTime = progressbar.value * audioElment.duration/100; 

})