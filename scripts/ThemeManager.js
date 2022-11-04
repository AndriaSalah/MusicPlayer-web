import { librarytitle, nowplaying, NowPlaying, nxt, playbutton, prv, queuebutton, shuffleButton } from "./musiclibrary"
import { body, expandbutton } from "./playerExpansion"
import { volumeButton, volumepanel } from "./Volume"
import { htmlqueue } from "./queue"

let palleteButton = document.querySelector(".palletButton")
let pallets       = document.querySelector(".pallets")
let colorButton1   = document.querySelector(".player .pallets .colorButton:nth-child(2)")
let colorButton2   = document.querySelector(".player .pallets .colorButton:nth-child(3)")
let colorButton3   = document.querySelector(".player .pallets .colorButton:nth-child(4)")

export let orignalTheme = 0
let expanded = false
export let themeNumber = 0
palleteButton.addEventListener('click',()=>expand())
colorButton1.addEventListener('click',()=> switchTheme(1,colorButton1))
colorButton2.addEventListener('click',()=> switchTheme(2,colorButton2))
colorButton3.addEventListener('click',()=> switchTheme(3,colorButton3))


let colorLibrary=[
    {
        //default
        BodyColor: "#24293E",
        accentColor:"#6d90c5",
        playerColor:"#6d90c5"
    }
    ,
    {
        //red
        BodyColor: "#3e2424",
        accentColor:"#c5826d",
        playerColor:"#c5826d"

    }
    ,
    {
        //purple
        BodyColor: "#37243e",
        accentColor:"#a36dc5",
        playerColor:"#a36dc5"
    }
    ,
    {
        //black
        BodyColor: "#1b1b1b",
        accentColor:"#858585 ",
        playerColor:"#858585"
    }
]

function expand(){
    if(!expanded){
    colorButton1.style.visibility = "visible"
    colorButton2.style.visibility = "visible"
    colorButton3.style.visibility = "visible"
    colorButton1.style.opacity = 1
    colorButton2.style.opacity = 1
    colorButton3.style.opacity = 1
    expanded = true
    }
    else{
        expanded = false
        colorButton1.removeAttribute('Style')
        colorButton2.removeAttribute('Style')
        colorButton3.removeAttribute('Style')
    }

}

export function switchTheme(theme){
        debugger
        switch(theme){
            case 1:
                orignalTheme = themeNumber
                themeNumber = theme
                switchColor(body,"body")
                switchColor(htmlqueue,"border")
                switchColor(shuffleButton,"accent")
                switchColor(playbutton,"accent")
                switchColor(prv,"accent")
                switchColor(nxt,"accent")
                switchColor(queuebutton,"accent")
                switchColor(volumeButton,"accent")
                switchColor(volumepanel,"body")
                switchColor(expandbutton,"accent")
                updateNowPlaying()
                ChangeTitleColor()
                break
            case 2:
                orignalTheme = themeNumber
                themeNumber = theme
                switchColor(body,"body")
                switchColor(htmlqueue,"border")
                switchColor(shuffleButton,"accent")
                switchColor(playbutton,"accent")
                switchColor(prv,"accent")
                switchColor(nxt,"accent")
                switchColor(queuebutton,"accent")
                switchColor(volumeButton,"accent")
                switchColor(volumepanel,"body")
                switchColor(expandbutton,"accent")
                updateNowPlaying()
                ChangeTitleColor()
                break
            case 3:
                orignalTheme = themeNumber
                themeNumber = theme
                switchColor(body,"body")
                switchColor(htmlqueue,"border")
                switchColor(shuffleButton,"accent")
                switchColor(playbutton,"accent")
                switchColor(prv,"accent")
                switchColor(nxt,"accent")
                switchColor(queuebutton,"accent")
                switchColor(volumeButton,"accent")
                switchColor(volumepanel,"body")
                switchColor(expandbutton,"accent")
                updateNowPlaying()
                ChangeTitleColor()
                
                break
            }

    }

function switchColor(element,type){
        if(type === "body" || type === "Body"){
            element.style.backgroundColor = colorLibrary[themeNumber].BodyColor
        }
            else if (type==="accent"||type==="Accent"){
            element.style.color = colorLibrary[themeNumber].accentColor
            }
            else if (type === "border"){
                element.style.borderBottom = `solid 10px ${colorLibrary[themeNumber].accentColor}`
            }
        }
    
export function updateNowPlaying(){
        removeOldTheme()
        chooseTheme()
    }

export function removeOldTheme(){
        switch(orignalTheme){
            case 0 : 
                nowplaying.classList.remove('nowplayingd');
                break
            case 1 : 
                nowplaying.classList.remove('nowplayingR');
                break
            case 2 :
                nowplaying.classList.remove('nowplayingP');
                break
            case 3 :
                nowplaying.classList.remove('nowplayingB');
                break    
        }
        
    }
export function chooseTheme(){
        switch(themeNumber){
            case 0 : 
                nowplaying.classList.add('nowplayingd');
                break
            case 1 : 
                nowplaying.classList.add('nowplayingR');
                break
            case 2 :
                nowplaying.classList.add('nowplayingP');
                break
            case 3 :
                nowplaying.classList.add('nowplayingB'); 
                break   
        }
        orignalTheme = themeNumber
    }
export function ChangeTitleColor(){
    switch(themeNumber){
        case 0 :
            librarytitle.style.color = '#6d90c5'
            break
        case 1 :    
            librarytitle.style.color = '#c5826d'
            break
        case 2 :    
            librarytitle.style.color = '#a36dc5'
            break
        case 3 :    
            librarytitle.style.color = '#858585'   
            break 
    }
}