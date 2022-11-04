import { MusicLibraries } from "/scripts/albums.js"
import { volumeseeker } from "./Volume.js"
import { showQueue, updateQueueView, viewOnQueue } from "./queue.js"
import { ChangeTitleColor, chooseTheme, orignalTheme, removeOldTheme, switchTheme, themeNumber } from "./ThemeManager.js"



export let currentTrack    = document.createElement('audio')
let trackseeker            = document.querySelector('.trackseeker')
export let playerimg       = document.querySelector('.playerImg')
let playlist               = document.querySelector('.playlist') 
let playerTrackName        = document.querySelector('.playerTrackName')
export let currentTime     = document.querySelector('.currentTime')
export let totalDuration   = document.querySelector('.totalDuration')
export let shuffleButton          = document.querySelector('.shuffleButton')
let playerPlayButton       = document.querySelector('.playbutton i')
export let playbutton             = document.querySelector('.playbutton')
export let prv                    = document.querySelector('.prev') 
export let nxt                    = document.querySelector('.next') 
let rocklibrary            = document.querySelector('.rock')
let poplibrary             = document.querySelector('.pop')
let mixlibrary             = document.querySelector('.dailyMix')
let imaginelibrary         = document.querySelector('.imagineDragons')
let sadnchill              = document.querySelector('.sadNchill')
export let queuebutton            = document.querySelector('.queuebutton')
let shuffling              = false
let rand_check             = false
let currentIndex           = 0
let isplaying              = false
let currentLibrary         = 4
let nowplayinglibrary      = 4
let updateTimer
let libraryspan
export let librarytitle
let oldIndex = 1
export let Queue = []
let QueueSong 
export let nowplaying
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
            updateQueueView()
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

function resetValues() {
    currentTime.textContent = "00:00";
    totalDuration.textContent = "00:00";
    trackseeker.value = 0;
  }

function highlightLibrary(){
   
    switch(nowplayinglibrary){
        case 0 :    
        if(librarytitle!=null)librarytitle.removeAttribute('style'),libraryspan.removeAttribute('style')
        librarytitle = document.querySelector('.rock #libraryTitle')
        ChangeTitleColor()
        libraryspan  = document.querySelector('.rock span')
        libraryspan.style.opacity = 1
        break
        case 1 :  
        if(librarytitle!=null)librarytitle.removeAttribute('style'),libraryspan.removeAttribute('style')
        librarytitle = document.querySelector('.pop #libraryTitle')
        ChangeTitleColor()
        libraryspan  = document.querySelector('.pop span')
        libraryspan.style.opacity = 1
        break     
        case 2 :   
        if(librarytitle!=null)librarytitle.removeAttribute('style'),libraryspan.removeAttribute('style') 
        librarytitle = document.querySelector('.imagineDragons #libraryTitle')
        ChangeTitleColor()
        libraryspan  = document.querySelector('.imagineDragons span')
        libraryspan.style.opacity = 1
        break
        case 3 : 
        if(librarytitle!=null)librarytitle.removeAttribute('style'),libraryspan.removeAttribute('style')   
        librarytitle = document.querySelector('.sadNchill #libraryTitle')
        ChangeTitleColor()
        libraryspan  = document.querySelector('.sadNchill span')
        libraryspan.style.opacity = 1
        break    
        case 4 :
        if(librarytitle!=null)librarytitle.removeAttribute('style'),libraryspan.removeAttribute('style')
        librarytitle = document.querySelector('.dailyMix #libraryTitle')
        ChangeTitleColor() 
        libraryspan  = document.querySelector('.dailyMix span')
        libraryspan.style.opacity = 1
        break     
    }
}

function next(){
    
    if(Queue.length == 0 ){
        if (!shuffling){
            if(currentIndex < MusicLibraries[currentLibrary].length -1) {
                NowPlaying(currentIndex,'remove')
                currentIndex ++ 
                nowPlayingSong.index = currentIndex
                if(currentLibrary === nowplayinglibrary){
                    NowPlaying(currentIndex + 1,'add')
                }
                loadTrack(nowplayinglibrary)
                if(isplaying){
                    currentTrack.play()
                }
                else {play()}
                oldIndex = currentIndex + 1

            }
            else {
               
                NowPlaying(currentIndex,'remove')
                currentIndex = 0 
                nowPlayingSong.index = currentIndex
                if(currentLibrary === nowplayinglibrary){
                    NowPlaying(currentIndex + 1,'add')
                }
                loadTrack(nowplayinglibrary)
                if(isplaying){
                    currentTrack.play()
                }
                else {play()}
                oldIndex = currentIndex + 1
            }
        }
        else shuffle()
    }
    else{
        
        loadTrack(null)
        if(isplaying){
            currentTrack.play()
        }
        else {play()}
    }
    

}

function prev(){
    if(Queue.length == 0 ){
        if (!shuffling){
            if(currentIndex > 0 ){
                NowPlaying(currentIndex,'remove')
                currentIndex -- 
                nowPlayingSong.index = currentIndex
                if(currentLibrary === nowplayinglibrary){
                    NowPlaying(currentIndex + 1,'add')
                }
                loadTrack(nowplayinglibrary)
                if(isplaying){
                    currentTrack.play()
                }
                else {play()}
                oldIndex = currentIndex + 1
            }
            else{
                NowPlaying(currentIndex,'remove')
                currentIndex = 0  
                if(currentLibrary === nowplayinglibrary){
                    NowPlaying(currentIndex + 1,'add')
                }
                NowPlaying(currentIndex + 1,'add')
                loadTrack(nowplayinglibrary)
                if(isplaying){
                    currentTrack.play()
                }
                else {play()}
                oldIndex = currentIndex + 1
            }
        }
    else  shuffle()
    }
    else{
        resetValues()
        currentTrack.currentTime = 0
        if(isplaying){
            currentTrack.play()
        }
        else {play()}
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



function playat(index){
    
    if(index !== oldIndex || currentLibrary !== nowplayinglibrary){
        Queue.length = 0 
        NowPlaying(index,'remove')
        NowPlaying(index,'add')
        oldIndex = index
        currentIndex = index-1;
        nowPlayingSong.index = currentIndex
        if (currentLibrary !== nowplayinglibrary ){
            nowplayinglibrary = currentLibrary 
        }
        nowPlayingSong.library = nowplayinglibrary
        loadTrack(nowplayinglibrary);
        isplaying = true
        playerPlayButton.classList.replace('fa-play','fa-pause')
        currentTrack.play();
        highlightLibrary()
    }

    else{

        play();

    }
    
}

export function NowPlaying(index,operation){
    if(operation === 'remove'){
        removeOldTheme()
        playListPlayButton.classList.replace('fa-pause','fa-play')
    }
    else {
        nowplaying = document.querySelector(`.song:nth-of-type(${index})`)
        chooseTheme()    
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
    viewOnQueue(MusicLibraries[currentLibrary][index])
}

function shuffle(){
    rand_check = false
    while(!rand_check){
    let random = Math.floor(Math.random()*MusicLibraries[nowplayinglibrary].length)
    console.log(random)
        if (currentIndex != random){
            rand_check = true
            currentIndex = random
            NowPlaying(currentIndex,'remove') 
            nowPlayingSong.index = currentIndex
            if(currentLibrary === nowplayinglibrary){
                NowPlaying(currentIndex + 1,'add')
            }
            loadTrack(nowplayinglibrary)
            if(isplaying){
                currentTrack.play()
            }
            else {play()}
            oldIndex = currentIndex + 1

            }
        }

    }

function enableshuffle(){
    shuffling? (shuffling=false , shuffleButton.removeAttribute('style')):
    (shuffling = true , shuffleButton.style.backgroundColor = '#6d90c5', shuffleButton.style.color = 'white' )
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


currentTrack.preload = 'metadata'
playbutton.addEventListener('click',() =>play());
trackseeker.addEventListener('input',() =>seekTo());
shuffleButton.addEventListener('click',() =>enableshuffle());
nxt.addEventListener('click',() =>nextPrev('right'));
prv.addEventListener('click',() =>nextPrev('left'));
rocklibrary.addEventListener('click',()=>loadLibrary(0));
poplibrary.addEventListener('click',()=>loadLibrary(1));
imaginelibrary.addEventListener('click',()=>loadLibrary(2));
mixlibrary.addEventListener('click',()=>loadLibrary(4));
sadnchill.addEventListener('click',()=>loadLibrary(3));
queuebutton.addEventListener('click', ()=> showQueue())
currentTrack.addEventListener('ended',()=>next());
window.addEventListener('unload',()=>{
    let tracktime = currentTrack.currentTime
    let previousSession = {
        nowPlayingSong,
        oldIndex,
        tracktime,
        Queue,
        QueueSong,
        volume : currentTrack.volume,
        shuffleState : shuffling,
        nowplayinglibrary,
        themeNumber
    }
    localStorage.setItem('previousSession',JSON.stringify(previousSession))
})    


function initPrevSess(){
    currentIndex = previousSession.nowPlayingSong.index
    nowPlayingSong.index = previousSession.nowPlayingSong.index
    currentLibrary = previousSession.nowPlayingSong.library 
    nowPlayingSong.library = previousSession.nowPlayingSong.library 
    oldIndex = previousSession.oldIndex
    volumeseeker.value = previousSession.volume * 100
    currentTrack.volume = volumeseeker.value / 100
    nowplayinglibrary = previousSession.nowplayinglibrary
    if(previousSession.shuffleState == true) enableshuffle()
    


}
// initialising the default playlist and setting the volume to 20 % and loading the tracks from the playlists
currentTrack.volume = volumeseeker.value / 100
let previousSession = JSON.parse(localStorage.getItem('previousSession'))
if(previousSession == null){
for ( var i = 0 ; i < MusicLibraries[4].length ; i ++) {
    var songDetails = MusicLibraries[4][i]
    createSong(songDetails.trackName , songDetails.artistName , songDetails.imgPath , i);
    highlightLibrary()
}


nowplaying = document.querySelector('.song:nth-of-type(1)')
nowplaying.classList.add('nowplayingd')
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
    nowplaying.classList.add('nowplayingd')
    playListPlayButton = document.querySelector(`.song:nth-of-type(${currentIndex+1}) button:nth-of-type(2) i`)
    currentTrack.currentTime = previousSession.tracktime
    if(QueueSong == null){
        loadTrack(currentLibrary)
        Queue = previousSession.Queue
        for (let song in Queue) {
            viewOnQueue(Queue[song])
        }
    }
    else{
        Queue = previousSession.Queue
        for (let song in Queue) {
            viewOnQueue(Queue[song])
        }
        loadTrack(null)
    }
    currentTrack.currentTime = previousSession.tracktime
    highlightLibrary()
    switchTheme(previousSession.themeNumber)
}    
//----------------------------------------------------------------------------------------------------