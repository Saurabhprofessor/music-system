console.log("welcome to spotify")
let song=[
    {songname:'wow-dino james', filepath:'woh_song.mp3'},
    {songname:'O Mahii', filepath:'O_mahi_song.mp3'},
    {songname:'kamsin kali', filepath:'Kamsin Kali song.mp3'},
    {songname:'khaali botal', filepath:'Khaali Botal song.mp3'},
    {songname:'ranga ranga', filepath:'Ranga Ranga song.mp3'},

]

songindex=0;
let audioElement=new Audio('woh_song.mp3');

let playing = false;

let masterplay = document.getElementById("masterplay");
let progressbar = document.getElementById("musicrange");
let btnforw=document.getElementById("forwordplay");
let btnPrev=document.getElementById("backwordplay");
let gif=document.getElementById("gif");
let playsong=document.getElementsByClassName("playsong");
let mastersong=document.getElementById("mastersong");
let musicrange=document.getElementById("musicrange")



masterplay.addEventListener("click", ()=>{
    if(playing){
        audioElement.pause();
        playing = false;
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
    else{
        playing = true;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
})


audioElement.addEventListener("timeupdate", ()=>{
    var progress = parseInt(audioElement.currentTime/audioElement.duration *100);
    progressbar.value = progress;
    // console.log(audioElement.currentTime)
    // console.log(audioElement.duration)

})

  
progressbar.addEventListener("change", (e)=>{
    console.log(e.target.value);
    progressbar.value = e.target.value;
    var seek = (e.target.value/100) * audioElement.duration;
    // console.log(audioElement.currentTime)
    audioElement.currentTime = seek;
})

console.log(audioElement.currentTime);
// audioElement.play();

btnforw.addEventListener("click", ()=>{
 songindex+=1;
 if (songindex >= song.length){
    songindex = 0;
    gif.style.opacity=1;
 }
    audioElement.pause()
    gif.style.opacity=0;
    audioElement = new Audio(song[songindex].filepath);
    document.getElementById("songinfo").innerText=song[songindex].songname;
    audioElement.play();
    gif.style.opacity=1;
    musicrange.value=0;
    document.getElementById('songinfo').innerText = song[songindex].songname;
    gif.style.opacity=1;
})
btnPrev.addEventListener('click', ()=>{
    songindex-=1;
    
    audioElement.pause();
    audioElement=new Audio(song[songindex].filepath);
    audioElement.play();
    musicrange.value=0;
    document.getElementById("songinfo").innerText=song[songindex].songname;
    gif.style.opacity=1;
})



const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('playsong')).forEach(element => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
        
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
        
    });
};

Array.from(document.getElementsByClassName('playsong')).forEach(element => {
    element.addEventListener("click", (event) => {
        makeAllPlay(); 
        songindex = parseInt(event.target.id); 
        event.target.classList.remove('fa-circle-play');
        event.target.classList.add('fa-circle-pause');
        audioElement.src = song[songindex].filepath;
        console.log(audioElement.paused);
        audioElement.play();
        gif.style.opacity=1;
       mastersong.innerText=song[songindex].songname;

    });
});
masterplay.addEventListener("click",()=>{
    
})


