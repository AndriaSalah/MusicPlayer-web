import { queuebutton } from "./MusicEngine.js"

export let htmlqueue = document.querySelector('.queue')
export let queueshown = false
let queueState = 'empty'

export function viewOnQueue(queue){
    if(queueState == 'empty'){
        htmlqueue.innerHTML = '<p>Next in Queue</p>'
        queueState = 'full'
    }
        let song = document.createElement('div')
        song.classList.add('song')
        console.log(queue.imgPath)
        if(queue.imgPath == ''){
            song.innerHTML = `<img src=/Music/Artwork/default.png alt="default">`
        }
        else{
            song.innerHTML = `<img src=${queue.imgPath} alt="song">`
        }
        song.innerHTML += 
            `
                <p id="songname">${queue.trackName}</p>
                <p id="songartist">${queue.artistName}</p>
            `
            htmlqueue.appendChild(song)
        
    }

export function showQueue(){
    
    if(!queueshown){
        queuebutton.style.transform = "rotate(90deg)"
        htmlqueue.style.visibility = 'visible'
        htmlqueue.style.opacity = 1
        queueshown = true
    }
    else{
        queuebutton.style.transform = 'rotate(0deg)'
        queueshown =  false
        htmlqueue.style.visibility = 'hidden'
        htmlqueue.style.opacity = 0
    }
}

export function updateQueueView(){
    

    let queuedSong=document.querySelector('.queue :nth-child(2)')
    if(queuedSong != null){
        htmlqueue.removeChild(queuedSong)
    }
    if(queuedSong=document.querySelector('.queue :nth-child(2)')==null){
        queueState='empty'
        htmlqueue.innerHTML = '<p>Queue is Empty</p>'
        
    }
}


