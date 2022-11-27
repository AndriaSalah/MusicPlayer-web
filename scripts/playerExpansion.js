import  {  playerimg, currentTime, totalDuration }  from "./MusicEngine.js";
import  { volumepanel } from "./Volume.js";
import  { htmlqueue, queueshown, showQueue } from "./queue.js";
import { pallets } from "./ThemeManager.js";

export let expandbutton    = document.querySelector('.expand')
 let player          = document.querySelector('.player')
 let expandedplayer  = document.querySelector('.expandedplayer')
 export let body            = document.querySelector('body')
 let buttongroup     = document.querySelector('.buttongroup') 
 let expanded        = false



 function expandPlayer(expanded,mobile){
    
    if(!expanded){
        player.style.height = '100%'
        player.style.flexDirection = 'column'
        player.style.zIndex = 3
       
        expandbutton.style.transform = 'rotate(180deg)'
        pallets.style.visibility = "hidden"
        pallets.style.opacity = 0
        if (mobile){
            expandedplayer.style.flexDirection = 'row'
            body.style.position = 'fixed'
        }
        else{
            volumepanel.style.bottom = '15%'
            volumepanel.style.right = '33.5%'
            body.style.overflowY = 'hidden'
        }
    }
    else{
        player.removeAttribute('style') 
        player.style.zIndex = 3
        body.style.position= 'static' 
        if(mobile){
            body.style.position = 'static'
        }
        else{
            body.style.overflowY = ''
        }
        expandbutton.style.transform = 'rotate(0)'
        expandedplayer.removeAttribute('style') 
        volumepanel.removeAttribute('style') 
        setTimeout(()=>{
            pallets.style.visibility = "visible"
            pallets.style.opacity = 1
        },700)
        
        
    }
}

 function expandPlayerimg(expanded,mobile){
    if(!expanded){
        playerimg.style.borderRadius = '10px'
        playerimg.style.width = '20rem'
        playerimg.style.height = '20rem'
    }
    else{
        playerimg.removeAttribute('style') 
    }
}

 function expandButtons(expanded,mobile){
    if(mobile){
    if(!expanded){
        buttongroup.setAttribute('style','display : flex !important')
    }
    else{
        buttongroup.removeAttribute('style')
    }
}
}

 function expandTime(expanded,mobile){
    if(mobile){
    if(!expanded){
        currentTime.style.display='block'
        currentTime.style.marginRight='0.2rem'
        totalDuration.style.display='block'
        totalDuration.style.marginRight='1rem'
        totalDuration.style.marginLeft='0.5rem'
    }
    else{
        currentTime.removeAttribute('style') 
        totalDuration.removeAttribute('style') 
    }
}
}

function expandQueueView(expanded){
    !expanded ?
    (htmlqueue.style.bottom = '42%',htmlqueue.style.right = '37.5%'):(htmlqueue.style.bottom = '7rem',htmlqueue.style.right = '0.5rem')
}

function expand(){
    
    let mobile = window.matchMedia("(max-width: 690px)").matches
    expandPlayer(expanded,mobile)
    expandPlayerimg(expanded,mobile)
    expandButtons(expanded,mobile)
    expandTime(expanded,mobile)
    expandQueueView(expanded)
    
    if (expanded) {
        expanded = false 
        if (queueshown && mobile) {
            showQueue()
        }
    }
    else expanded = true 
}


expandbutton.addEventListener('click',()=>expand())
