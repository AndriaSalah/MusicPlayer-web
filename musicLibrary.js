let currentTrack    = document.createElement('audio')
let trackseeker     = document.querySelector('.trackseeker')
let playerimg       = document.querySelector('.playerImg')
let playlist        = document.querySelector('.playlist') 
let playerTrackName = document.querySelector('.playerTrackName')
let volumepanel     = document.querySelector('.volume')
let volumeseeker    = document.querySelector('.volumeSeeker')
let currentTime     = document.querySelector('.currentTime')
let totalDuration   = document.querySelector('.totalDuration')
let volumeButton    = document.querySelector('.volumeButton')
let shuffleButton   = document.querySelector('.shuffleButton')
let shuffling = false
let rand_check = false
let currentIndex = 0
let isplaying = false
let volumeshown =false

const musiclibrary = [

    {
        imgPath   : 'Music/Artwork/1.png',
        musicPath : 'Music/Music/Believer.flac',
        artistName: 'Imagine Dragons',
        trackName : 'Believer'
    },
    {
        imgPath   : 'Music/Artwork/2.png',
        musicPath : 'Music/Music/Tiptoe.flac',
        artistName: 'Imagine Dragons',
        trackName : 'Tiptoe'
    },
    {
        imgPath   : 'Music/Artwork/2.png',
        musicPath : 'Music/Music/Radioactive.flac',
        artistName: 'Imagine Dragons',
        trackName : 'Radioactive'
    },
    {
        imgPath   : 'Music/Artwork/1.png',
        musicPath : '/Music/Music/Whatever_It_Takes.flac',
        artistName: 'Imagine Dragons',
        trackName : 'What ever it takes'
    },
    {
        imgPath   : 'Music/Artwork/2.png',
        musicPath : 'Music/Music/I_Dont _Know_Why.flac',
        artistName: 'Imagine Dragons',
        trackName : 'I Dont know why'
    },
    {
        imgPath   : 'Music/Artwork/2.png',
        musicPath : 'Music/Music/Its_Time.flac',
        artistName: 'Imagine Dragons',
        trackName : 'Its time'
    }

]
// initialising the play list and setting the volume to 20 % and loading the track from the playlist


for ( var i = 0 ; i < musiclibrary.length ; i ++) {
    var songDetails = musiclibrary[i]
    createSong(songDetails.trackName , songDetails.artistName , songDetails.imgPath , i);
    
}
currentTrack.volume = volumeseeker.value / 100


loadTrack()

//----------------------------------------------------------------------------------------------------
function createSong(songName,artistName,artPath,index){
    var song = document.createElement('div');
    song.classList.add('song');
    playlist.appendChild(song);
    var trackArt = document.createElement('img');
     trackArt.src = artPath;

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

    var playButton = document.createElement('button');;
    var playButtonImg = document.createElement('i');
    playButtonImg.classList.add("fa-solid")
    playButtonImg.classList.add("fa-play")
    playButton.appendChild(playButtonImg);
    playButton.setAttribute('onclick',`playat(${index+1})`);
    


    buttons.appendChild(addButton);
    buttons.appendChild(playButton);
    
    var linebreak = document.createElement('hr');

    song.appendChild(trackArt);
    song.appendChild(trackDetails);
    song.appendChild(buttons);
    
    
    playlist.appendChild(linebreak);

    

}    

let nowplaying      = document.querySelector('.song:nth-of-type(1)')
nowplaying.classList.add('nowplaying')


function loadTrack(){
    playerTrackName.textContent = musiclibrary[currentIndex].trackName;
    playerimg.src = musiclibrary[currentIndex].imgPath;
    currentTrack.src = musiclibrary[currentIndex].musicPath;
    currentTrack.load();
    updateTimer = setInterval(setUpdate, 1000);
    currentTrack.addEventListener('ended',next);
}
function next(){
    
    if (!shuffling){
    currentIndex < musiclibrary.length-1 ?
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
    (currentTrack.pause() , isplaying = false , playerimg.style.animationPlayState = 'paused' ):
    (currentTrack.play(), isplaying = true , playerimg.style.animationPlayState = 'running')
}

function playtrack(){
    currentTrack.play()
}

function showvolumepanel(){
    volumeshown?
    (volumepanel.style.visibility = 'hidden',volumepanel.style.opacity = 0, volumeshown = false, volumeButton.style.backgroundColor = '#6d6868') :
    (volumepanel.style.visibility = 'visible', volumepanel.style.opacity = 1,volumeshown = true,volumeButton.style.backgroundColor = 'rgb(192, 189, 189)')
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
    nowplaying.classList.remove('nowplaying');
    nowplaying = document.querySelector(`.song:nth-of-type(${index})`)
    nowplaying.classList.add('nowplaying');
    
    currentIndex = index-1;
    loadTrack();
    currentTrack.play();
}

function shuffle(){
    rand_check = false
    while(!rand_check){
    let random = Math.floor(Math.random()*(musiclibrary.length -1))
        if (currentIndex != random){
            rand_check = true
            currentIndex = random
                playat(random+1)
            }
        }

    }
function enableshuffle(){
    shuffling? (shuffling=false , shuffleButton.style.backgroundColor = '#6d6868'):
    (shuffling = true , shuffleButton.style.backgroundColor = 'rgb(192, 189, 189)')
}

function seekTo(){
    let seektoo = currentTrack.duration * (trackseeker.value / 100);
    currentTrack.currentTime = seektoo;
}
function nextPrev(direction){

    direction == 'right' ? next() : prev()
}

`<div class="song nowplaying"><img src="Music/Artwork/1.png"><div class="trackDetails"><h2>Imagine Dragons</h2><h3>Believer</h3></div><div class="buttons"><button class="addbutton"><i class="fa-solid fa-plus"></i></button><button onclick="playat(1)"><i class="fa-solid fa-play"></i></button></div></div>`