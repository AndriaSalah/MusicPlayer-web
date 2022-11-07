import { currentTrack } from "./musiclibrary"
import { switchColor } from "./ThemeManager"

export let volumepanel     = document.querySelector('.volume')
export let volumeseeker    = document.querySelector('.volumeSeeker')
export let volumeButton           = document.querySelector('.volumeButton')
export let volumeshown            = false
let volumePanelTimer



function showvolumepanel(){
    
    if(volumeshown){
        volumeshown = false
        clearInterval(volumePanelTimer)
        volumepanel.style.visibility = "hidden"
        volumepanel.style.opacity = 0
        switchColor(volumeButton,"volume")
     }
    else{
        volumePanelTimer = setInterval(()=>showvolumepanel(),3000)
        volumepanel.style.visibility = 'visible'
        volumepanel.style.opacity = 1
        volumeshown = true
        switchColor(volumeButton,"volume")
    }

}

function setvolume(){
    currentTrack.volume = volumeseeker.value / 100
}





volumeButton.addEventListener('click',() =>showvolumepanel());
volumepanel.addEventListener('mouseenter',()=>{console.log('enter'), clearInterval(volumePanelTimer)})
volumepanel.addEventListener('mouseleave',()=>{volumePanelTimer = setInterval(()=>showvolumepanel(),3000)})
volumeseeker.addEventListener('touchstart',()=>{clearInterval(volumePanelTimer)},{passive : true})
volumeseeker.addEventListener('touchend',()=>{volumePanelTimer = setInterval(()=>showvolumepanel(),3000),{passive : true}})
volumeseeker.addEventListener('input',() => setvolume());