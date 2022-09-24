import { MusicLibraries } from "./Albums.js"
import { expandButtons, expandPlayer, expandPlayerimg, expandTime } from "./playerExpansion.js"


let currentTrack           = document.createElement('audio')
let trackseeker            = document.querySelector('.trackseeker')
export let playerimg       = document.querySelector('.playerImg')
let playlist               = document.querySelector('.playlist') 
let playerTrackName        = document.querySelector('.playerTrackName')
let volumepanel            = document.querySelector('.volume')
let volumeseeker           = document.querySelector('.volumeSeeker')
export let currentTime     = document.querySelector('.currentTime')
export let totalDuration   = document.querySelector('.totalDuration')
let volumeButton           = document.querySelector('.volumeButton')
let shuffleButton          = document.querySelector('.shuffleButton')
let playbuttonimg          = document.querySelector('.playbutton i')
let playbutton             = document.querySelector('.playbutton')
let prv                    = document.querySelector('.prev') 
let nxt                    = document.querySelector('.next') 
let rocklibrary            = document.querySelector('.one')
let poplibrary             = document.querySelector('.two')
let imaginelibrary         = document.querySelector('.four')
let mixlibrary             = document.querySelector('.three')
let sadnchill              = document.querySelector('.five')
export let expandbutton    = document.querySelector('.expand')
export let player          = document.querySelector('.player')
export let expandedplayer  = document.querySelector('.expandedplayer')
export let body            = document.querySelector('body')
export let buttongroup     = document.querySelector('.buttongroup') 
export let expanded        = false
let shuffling              = false
let rand_check             = false
let currentIndex           = 0
let isplaying              = false
let volumeshown            = false
let currentLibrary 
let updateTimer


console.log(buttongroup)

function createSong(songName,artistName,artPath,index){
    var song = document.createElement('div');
    song.classList.add('song');
    playlist.appendChild(song);

    var trackArt = document.createElement('img');
    if (artPath != ''){
     trackArt.src = artPath;
    }
    else trackArt.src = '/Music/Artwork/default.png'

    var trackDetails = document.createElement('div');
    trackDetails.classList.add('trackDetails');

    var trackArtist = document.createElement('h2')
    trackArtist.textContent = artistName;

    var trackname = document.createElement('h3');
    trackname.textContent = songName;

    trackDetails.appendChild(trackArtist);
    trackDetails.appendChild(trackname);

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    
    
    var addButton = document.createElement('button');
    addButton.classList.add('addbutton');
    var addbuttonImg = document.createElement('i')
    addbuttonImg.classList.add("fa-solid")
    addbuttonImg.classList.add("fa-plus")
    addButton.appendChild(addbuttonImg)

    var playButtonimg = document.createElement('button');;
    var playButtonimgImg = document.createElement('i');
    playButtonimgImg.classList.add("fa-solid")
    playButtonimgImg.classList.add("fa-play")
    playButtonimg.appendChild(playButtonimgImg);
    playButtonimg.addEventListener('click',() => playat(index+1));
    


    buttons.appendChild(addButton);
    buttons.appendChild(playButtonimg);
    
    var linebreak = document.createElement('hr');

    song.appendChild(trackArt);
    song.appendChild(trackDetails);
    song.appendChild(buttons);
    
    
    playlist.appendChild(linebreak);

    

}    




function loadTrack(libraryNumber = 4){
    clearInterval(updateTimer);
    resetValues();

    playerTrackName.textContent = MusicLibraries[libraryNumber][currentIndex].trackName;
    if(MusicLibraries[libraryNumber][currentIndex].imgPath != ''){
        playerimg.src = MusicLibraries[libraryNumber][currentIndex].imgPath;
    }
        else playerimg.src="Music/Artwork/default.png"
    currentTrack.src = MusicLibraries[libraryNumber][currentIndex].musicPath;
    currentTrack.load();
    updateTimer = setInterval(setUpdate, 1000);
    currentTrack.addEventListener('ended',next);
}
function resetValues() {
    currentTime.textContent = "00:00";
    totalDuration.textContent = "00:00";
    trackseeker.value = 0;
  }
function next(){
    
    if (!shuffling){
    currentIndex < MusicLibraries[4].length-1 ?
    (currentIndex ++ , playat(currentIndex+1)) : (currentIndex = 0 , playat(currentIndex+1))
    }
    else shuffle()

}

function prev(){
    
    if (!shuffling){
    currentIndex > 0  ?
    (currentIndex -- , playat(currentIndex+1)) : (currentIndex = 0 , playat(currentIndex+1))
    }
    else shuffle()

}

function play(){
    isplaying?
    (currentTrack.pause() , isplaying = false , playerimg.style.animationPlayState = 'paused',playbuttonimg.classList.replace('fa-pause','fa-play')
    ):
    (currentTrack.play(), isplaying = true , playerimg.style.animationPlayState = 'running',playbuttonimg.classList.replace('fa-play','fa-pause'))
}


function showvolumepanel(){
    console.log('clicked')
    volumeshown?
    (volumepanel.style.visibility = 'hidden',volumepanel.style.opacity = 0, volumeshown = false, volumeButton.style.backgroundColor = '#cccccc') :
    (volumepanel.style.visibility = 'visible', volumepanel.style.opacity = 1,volumeshown = true,volumeButton.style.backgroundColor = 'rgb(149 163 222)')
}


function setvolume(){
    currentTrack.volume = volumeseeker.value / 100
}

function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(currentTrack.duration)){
        seekPosition = currentTrack.currentTime * (100 / currentTrack.duration);
        trackseeker.value = seekPosition;
        let currentMinutes = Math.floor(currentTrack.currentTime / 60);
        let currentSeconds = Math.floor(currentTrack.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(currentTrack.duration / 60);
        let durationSeconds = Math.floor(currentTrack.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        currentTime.textContent = currentMinutes + ":" + currentSeconds;
        totalDuration.textContent = durationMinutes + ":" + durationSeconds;
    }
}


function playat(index){
    playListPlayButton.classList.replace('fa-pause','fa-play')
    nowplaying.classList.remove('nowplaying');
    nowplaying = document.querySelector(`.song:nth-of-type(${index})`)
    nowplaying.classList.add('nowplaying');
    playListPlayButton = document.querySelector(`.song:nth-of-type(${index}) button:nth-of-type(2) i`)
    playListPlayButton.classList.replace('fa-play','fa-pause')
    
    
    currentIndex = index-1;
    loadTrack(currentLibrary);
    isplaying = true
    playbuttonimg.classList.replace('fa-play','fa-pause')
    playerimg.style.animationPlayState = 'running'
    currentTrack.play();
}

function shuffle(){
    rand_check = false
    while(!rand_check){
    let random = Math.floor(Math.random()*(MusicLibraries[4].length -1))
        if (currentIndex != random){
            rand_check = true
            currentIndex = random
                playat(random+1)
            }
        }

    }
function enableshuffle(){
    shuffling? (shuffling=false , shuffleButton.style.backgroundColor = '#cccccc'):
    (shuffling = true , shuffleButton.style.backgroundColor = 'rgb(149 163 222)')
}

function seekTo(){
    let seektoo = currentTrack.duration * (trackseeker.value / 100);
    currentTrack.currentTime = seektoo;
}
function nextPrev(direction){

    direction == 'right' ? next() : prev()
}

function loadLibrary(libraryNumber){
    playlist.innerHTML=''
    currentIndex = 0
    currentLibrary = libraryNumber;
    for ( var i = 0 ; i < MusicLibraries[libraryNumber].length ; i ++) {
        var songDetails = MusicLibraries[libraryNumber][i]
        console.log(songDetails)
        createSong(songDetails.trackName , songDetails.artistName , songDetails.imgPath , i);
        
    }
    loadTrack(libraryNumber)
}

function expand(){
    let mobile = window.matchMedia("(max-width: 690px)").matches

    expandPlayer(expanded,mobile)
    expandPlayerimg(expanded,mobile)
    expandButtons(expanded,mobile)
    expandTime(expanded,mobile)
    expanded ? expanded = false : expanded = true 
}


currentTrack.preload = 'metadata'
playbutton.addEventListener('click',() =>play());
trackseeker.addEventListener('input',() =>seekTo());
shuffleButton.addEventListener('click',() =>enableshuffle());
nxt.addEventListener('click',() =>nextPrev('right'));
prv.addEventListener('click',() =>nextPrev('left'));
volumeButton.addEventListener('click',() =>showvolumepanel());
volumeseeker.addEventListener('input',() => setvolume());
volumeseeker.addEventListener('mouseout',()=>{setTimeout(()=>{volumepanel.style.visibility = 'hidden'
                                            volumepanel.style.opacity = 0
                                            volumeshown = false
                                            volumeButton.style.backgroundColor = '#cccccc'},3000)
                                        })
rocklibrary.addEventListener('click',()=>loadLibrary(0));
poplibrary.addEventListener('click',()=>loadLibrary(1));
imaginelibrary.addEventListener('click',()=>loadLibrary(2));
mixlibrary.addEventListener('click',()=>loadLibrary(4));
sadnchill.addEventListener('click',()=>loadLibrary(3));
expandbutton.addEventListener('click',()=>expand())
    


// initialising the defaukt playlist and setting the volume to 20 % and loading the tracks from the playlists
for ( var i = 0 ; i < MusicLibraries[4].length ; i ++) {
    var songDetails = MusicLibraries[4][i]
    console.log(songDetails)
    createSong(songDetails.trackName , songDetails.artistName , songDetails.imgPath , i);
    
}
currentTrack.volume = volumeseeker.value / 100

let nowplaying = document.querySelector('.song:nth-of-type(1)')
nowplaying.classList.add('nowplaying')
let playListPlayButton = document.querySelector(`.song:nth-of-type(1) button:nth-of-type(2) i`)
loadTrack()


//----------------------------------------------------------------------------------------------------