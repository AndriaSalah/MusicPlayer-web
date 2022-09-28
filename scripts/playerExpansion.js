import  {player, body, buttongroup, volumepanel, playerimg, currentTime, totalDuration , expandedplayer, expandbutton}  from "./musiclibrary.js";

export function expandPlayer(expanded,mobile){
    
    if(!expanded){
    player.style.height = '100%'
    // player.style.position = 'absolute'
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
        player.style.height = '13vh'
        // player.style.position = 'sticky'
        player.style.flexDirection = 'row'
        player.style.zIndex = 3
        body.style.overflowY = 'unset'
        expandbutton.style.transform = 'rotate(0deg)'
        if (mobile){
            expandedplayer.style.flexDirection = 'row-reverse'
            }
            else{
                volumepanel.style.bottom = '6rem'
                volumepanel.style.right = '0.5rem'
            }
    }
}

export function expandPlayerimg(expanded,mobile){
    if(!expanded){
        playerimg.style.borderRadius = '10px'
        playerimg.style.width = '20rem'
        playerimg.style.height = '20rem'
    }
    else{
        if(!mobile){
            playerimg.style.width = '9vh'
            playerimg.style.height = '9vh'
        }
        else{
            playerimg.style.width = '5vh'
            playerimg.style.height = '5vh'
        }
        playerimg.style.borderRadius = '100%'
    }
}

export function expandButtons(expanded,mobile){
    if(mobile){
    if(!expanded){
        buttongroup.style.display = 'flex'
    }
    else{
        buttongroup.style.display = 'none'
    }
}
}

export function expandTime(expanded,mobile){
    if(mobile){
    if(!expanded){
        currentTime.style.display='block'
        totalDuration.style.display='block'
    }
    else{
        currentTime.style.display='none'
        totalDuration.style.display='none'
    }
}
}
