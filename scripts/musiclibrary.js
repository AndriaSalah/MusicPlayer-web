import { MusicLibraries } from "/scripts/albums.js"
import { expandButtons, expandPlayer, expandPlayerimg, expandTime } from "./playerExpansion.js"



let currentTrack           = document.createElement('audio')
let trackseeker            = document.querySelector('.trackseeker')
export let playerimg       = document.querySelector('.playerImg')
let playlist               = document.querySelector('.playlist') 
let playerTrackName        = document.querySelector('.playerTrackName')
export let volumepanel     = document.querySelector('.volume')
let volumeseeker           = document.querySelector('.volumeSeeker')
export let currentTime     = document.querySelector('.currentTime')
export let totalDuration   = document.querySelector('.totalDuration')
let volumeButton           = document.querySelector('.volumeButton')
let shuffleButton          = document.querySelector('.shuffleButton')
let playerPlayButton       = document.querySelector('.playbutton i')
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
let currentLibrary         = 4
let updateTimer
let volumePanelTimer
let oldIndex = 1
let Queue = []
let QueueSong 
let nowplaying
let playListPlayButton
let nowPlayingSong = {index : 0 ,library : 4}

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

    var trackArtist = document.createElement('h3')
    trackArtist.textContent = artistName;

    var trackname = document.createElement('h2');
    trackname.textContent = songName;

    trackDetails.appendChild(trackname);
    trackDetails.appendChild(trackArtist);
    

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    
    
    var addButton = document.createElement('button');
    addButton.classList.add('addbutton');
    var addbuttonImg = document.createElement('i')
    addbuttonImg.classList.add("fa-solid")
    addbuttonImg.classList.add("fa-plus")
    addButton.appendChild(addbuttonImg)
    addButton.addEventListener('click',() => addToQueue(index));
    var PLplayButton = document.createElement('button');;
    var PLplayButtonImg = document.createElement('i');
    PLplayButtonImg.classList.add("fa-solid")
    PLplayButtonImg.classList.add("fa-play")
    PLplayButton.appendChild(PLplayButtonImg);
    PLplayButton.addEventListener('click',() => playat(index+1));
    


    buttons.appendChild(addButton);
    buttons.appendChild(PLplayButton);
    
    var linebreak = document.createElement('hr');

    song.appendChild(trackArt);
    song.appendChild(trackDetails);
    song.appendChild(buttons);
    
    
    playlist.appendChild(linebreak);

    

}    

function loadTrack(libraryNumber = 4){
    clearInterval(updateTimer);
    resetValues();
    if(Queue.length == 0){
        playerTrackName.textContent = MusicLibraries[libraryNumber][currentIndex].trackName;
        currentTrack.src = MusicLibraries[libraryNumber][currentIndex].musicPath;
        if(MusicLibraries[libraryNumber][currentIndex].imgPath != ''){
            playerimg.src = MusicLibraries[libraryNumber][currentIndex].imgPath;
        }
        else playerimg.src="Music/Artwork/default.png"
    }
    else{          
        console.log(Queue)
        if(QueueSong == null ){
            QueueSong = Queue.shift();
        }
        playerTrackName.textContent = QueueSong.trackName;
        currentTrack.src = QueueSong.musicPath;
        if(QueueSong.imgPath != ''){
            playerimg.src =QueueSong.imgPath;
        }
            else playerimg.src="Music/Artwork/default.png"
            console.log(Queue)
            console.log(QueueSong)
           
    }
    currentTrack.load();
    updateTimer = setInterval(setUpdate, 1000);
}
function resetValues() {
    currentTime.textContent = "00:00";
    totalDuration.textContent = "00:00";
    trackseeker.value = 0;
  }
function next(){
    
    if(Queue.length == 0 ){
        if (!shuffling){
            if(currentIndex < MusicLibraries[currentLibrary].length -1) {
                currentIndex ++ , playat(currentIndex+1)
            }
            else {
                currentIndex = 0 
                playat(currentIndex+1)
            }
        }
        else shuffle()
    }
    else{
        loadTrack(null)
        currentTrack.play();
    }
    

}

function prev(){
    if(Queue.length == 0 ){
        if (!shuffling){
        currentIndex > 0  ?
        (currentIndex -- , playat(currentIndex+1)) : (currentIndex = 0 , playat(currentIndex+1))
        }
    else  shuffle()
    }
    else{
        loadTrack(null)
        currentTrack.play();
    }

}

function play(){
    isplaying?
    (
        currentTrack.pause() ,
        isplaying = false ,
        playerPlayButton.classList.replace('fa-pause','fa-play'),
        playListPlayButton.classList.replace('fa-pause','fa-play')
    ):
    
    (
        currentTrack.play(),
        isplaying = true ,
        playerPlayButton.classList.replace('fa-play','fa-pause'),
        playListPlayButton.classList.replace('fa-play','fa-pause')
    )
}


function showvolumepanel(){
    if(volumeshown){
        volumepanel.style.visibility = 'hidden'
        clearInterval(volumePanelTimer)
        volumepanel.style.opacity = 0
        volumeshown = false
        volumeButton.style.backgroundColor = '#cccccc'
     }
    else{
        volumePanelTimer = setInterval(()=>showvolumepanel(),3000)
        volumepanel.style.visibility = 'visible'
        volumepanel.style.opacity = 1
        volumeshown = true
        volumeButton.style.backgroundColor = 'rgb(149 163 222)'
    }

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
    
    if(index !== oldIndex){
        Queue.length = 0 
        NowPlaying(index,'remove')
        NowPlaying(index,'add')
        oldIndex = index
        currentIndex = index-1;
        nowPlayingSong.index = currentIndex
        nowPlayingSong.library = currentLibrary
        loadTrack(currentLibrary);
        isplaying = true
        playerPlayButton.classList.replace('fa-play','fa-pause')
        currentTrack.play();
    }

    else play();
}

function NowPlaying(index,operation){
    if(operation === 'remove'){
        nowplaying.classList.remove('nowplaying');
        playListPlayButton.classList.replace('fa-pause','fa-play')
    }
    else {
        nowplaying = document.querySelector(`.song:nth-of-type(${index})`)
        nowplaying.classList.add('nowplaying');
        playListPlayButton = document.querySelector(`.song:nth-of-type(${index}) button:nth-of-type(2) i`)
        playListPlayButton.classList.replace('fa-play','fa-pause')
    }        
}

function addToQueue(index){
Queue.push(MusicLibraries[currentLibrary][index]) 
    jSuites.notification({
        name: 'Queue',
        message: 'Added song Successfully',
    })

}

function shuffle(){
    rand_check = false
    while(!rand_check){
    let random = Math.floor(Math.random()*(MusicLibraries[3].length -1))
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
    QueueSong = null
    direction == 'right' ? next() : prev()
}

function loadLibrary(libraryNumber){
    
    playlist.innerHTML=''
    currentLibrary = libraryNumber;
    for ( var i = 0 ; i < MusicLibraries[libraryNumber].length ; i ++) {
        var songDetails = MusicLibraries[libraryNumber][i]
        createSong(songDetails.trackName , songDetails.artistName , songDetails.imgPath , i);
        
    }
    if(nowPlayingSong.library === currentLibrary){
        NowPlaying(nowPlayingSong.index+1 , 'add')
    }
    
    
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
volumepanel.addEventListener('mouseenter',()=>{clearInterval(volumePanelTimer)})
volumepanel.addEventListener('mouseleave',()=>{volumePanelTimer = setInterval(()=>showvolumepanel(),3000)})
volumeseeker.addEventListener('input',() => setvolume());
rocklibrary.addEventListener('click',()=>loadLibrary(0));
poplibrary.addEventListener('click',()=>loadLibrary(1));
imaginelibrary.addEventListener('click',()=>loadLibrary(2));
mixlibrary.addEventListener('click',()=>loadLibrary(4));
sadnchill.addEventListener('click',()=>loadLibrary(3));
expandbutton.addEventListener('click',()=>expand())
currentTrack.addEventListener('ended',next);
window.addEventListener('unload',()=>{
    let tracktime = currentTrack.currentTime
    let previousSession = {
        nowPlayingSong,
        oldIndex,
        tracktime,
        Queue,
        QueueSong
    }
    localStorage.setItem('previousSession',JSON.stringify(previousSession))
})    


function initPrevSess(){
    currentIndex = previousSession.nowPlayingSong.index
    nowPlayingSong.index = previousSession.nowPlayingSong.index
    currentLibrary = previousSession.nowPlayingSong.library 
    nowPlayingSong.library = previousSession.nowPlayingSong.library 
    oldIndex = previousSession.oldIndex
}
// initialising the defaukt playlist and setting the volume to 20 % and loading the tracks from the playlists
currentTrack.volume = volumeseeker.value / 100
let previousSession = JSON.parse(localStorage.getItem('previousSession'))
if(previousSession == null){
for ( var i = 0 ; i < MusicLibraries[4].length ; i ++) {
    var songDetails = MusicLibraries[4][i]
    createSong(songDetails.trackName , songDetails.artistName , songDetails.imgPath , i);
    
}


nowplaying = document.querySelector('.song:nth-of-type(1)')
nowplaying.classList.add('nowplaying')
playListPlayButton = document.querySelector(`.song:nth-of-type(1) button:nth-of-type(2) i`)
loadTrack()

}

else{
    initPrevSess()    
    for ( var i = 0 ; i < MusicLibraries[currentLibrary].length ; i ++) {
        var songDetails = MusicLibraries[currentLibrary][i]
        createSong(songDetails.trackName , songDetails.artistName , songDetails.imgPath , i);
        
    }
    
    QueueSong = previousSession.QueueSong
    nowplaying = document.querySelector(`.song:nth-of-type(${currentIndex+1})`)
    nowplaying.classList.add('nowplaying')
    playListPlayButton = document.querySelector(`.song:nth-of-type(${currentIndex+1}) button:nth-of-type(2) i`)
    currentTrack.currentTime = previousSession.tracktime
    if(QueueSong == null){
        loadTrack(currentLibrary)
        Queue = previousSession.Queue
    }
    else{
        Queue = previousSession.Queue
        loadTrack(null)
    }
    currentTrack.currentTime = previousSession.tracktime
}    
//----------------------------------------------------------------------------------------------------