console.log("Welcome to spotify")
let songindex = 0;
let audioElement = new Audio('1.mp3');
// audioElement.play();
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "6.mp3", coverPath: "6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "7.mp3", coverPath: "7.jpg"}
]


masterplay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;


    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate' , ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
})

progressbar.addEventListener('change' , ()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songtimePlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songtimeplay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeAllPlays();
        songindex = parseInt(e.target.id);
        audioElement.src = `${songindex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add("fa-pause-circle");
        

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=7){
        songindex = 0
    }
    else{
        songindex += 1;
    }
    audioElement.src = `${songindex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('playname').innerHTML = songs[songindex].songName;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0
    }
    else{
        songindex -= 1;
    }
    audioElement.src = `${songindex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('playname').innerHTML = songs[songindex].songName;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})