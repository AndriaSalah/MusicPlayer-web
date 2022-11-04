import { currentTrack } from "./musiclibrary"

export let volumepanel     = document.querySelector('.volume')
export let volumeseeker    = document.querySelector('.volumeSeeker')
export let volumeButton           = document.querySelector('.volumeButton')
let volumeshown            = false
let volumePanelTimer



function showvolumepanel(){
    
    if(volumeshown){
        volumeshown = false
        clearInterval(volumePanelTimer)
        volumepanel.removeAttribute('style')
        volumeButton.removeAttribute('style')
     }
    else{
        volumePanelTimer = setInterval(()=>showvolumepanel(),3000)
        volumepanel.style.visibility = 'visible'
        volumepanel.style.opacity = 1
        volumeshown = true
        volumeButton.style.backgroundColor = '#6d90c5'
        volumeButton.style.color = 'white'
    }

}

function setvolume(){
    currentTrack.volume = volumeseeker.value / 100
}





volumeButton.addEventListener('click',() =>showvolumepanel());
volumepanel.addEventListener('mouseenter',()=>{clearInterval(volumePanelTimer)})
volumepanel.addEventListener('mouseleave',()=>{volumePanelTimer = setInterval(()=>showvolumepanel(),3000)})
volumeseeker.addEventListener('input',() => setvolume());