import  {player, body, buttongroup, volumepanel, playerimg, currentTime, totalDuration , expandedplayer, expandbutton}  from "./musiclibrary.js";

export function expandPlayer(expanded,mobile){
    
    if(!expanded){
        player.style.height = '100%'
        player.style.flexDirection = 'column'
        player.style.zIndex = 3
        body.style.overflowY = 'hidden'
        expandbutton.style.transform = 'rotate(180deg)'

        if (mobile){
            expandedplayer.style.flexDirection = 'row'
            volumepanel.style.bottom = '13%'
            volumepanel.style.right = '34%'
        }
        else{
            volumepanel.style.bottom = '15%'
            volumepanel.style.right = '33.5%'
        }
    }
    else{
        player.removeAttribute('style') 
        player.style.zIndex = 3
        body.removeAttribute('style') 
        expandbutton.removeAttribute('style') 
        expandedplayer.removeAttribute('style') 
        volumepanel.removeAttribute('style') 
            
        
    }
}

export function expandPlayerimg(expanded,mobile){
    if(!expanded){
        playerimg.style.borderRadius = '10px'
        playerimg.style.width = '20rem'
        playerimg.style.height = '20rem'
    }
    else{
        playerimg.removeAttribute('style') 
    }
}

export function expandButtons(expanded,mobile){
    if(mobile){
    if(!expanded){
        buttongroup.setAttribute('style','display : flex !important')
    }
    else{
        buttongroup.removeAttribute('style')
    }
}
}

export function expandTime(expanded,mobile){
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
