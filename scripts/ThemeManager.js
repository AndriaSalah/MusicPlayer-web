import { librarytitle, nowplaying, NowPlaying, nxt, playbutton, prv, queuebutton, shuffleButton, shuffling } from "./musiclibrary"
import { body, expandbutton } from "./playerExpansion"
import { volumeButton, volumepanel } from "./Volume"
import { htmlqueue } from "./queue"

let palleteButton  = document.querySelector(".palletButton")
let colorButton0   = document.querySelector(".player .pallets .colorButton:nth-child(2)")
let colorButton1   = document.querySelector(".player .pallets .colorButton:nth-child(3)")
let colorButton2   = document.querySelector(".player .pallets .colorButton:nth-child(4)")
let colorButton3   = document.querySelector(".player .pallets .colorButton:nth-child(5)")
let pseudoColors   = document.querySelector(":root")
export let pallets        = document.querySelector(".pallets")
export let orignalTheme = 0
let expanded = false
export let themeNumber = 0

palleteButton.addEventListener('click',()=>expand())
colorButton0.addEventListener('click',()=> switchTheme(0))
colorButton1.addEventListener('click',()=> switchTheme(1))
colorButton2.addEventListener('click',()=> switchTheme(2))
colorButton3.addEventListener('click',()=> switchTheme(3))


let colorLibrary=[
    {
        //default
        BodyColor: "#24293E",
        accentColor:"#6d90c5",
        trackthumb:"#6d90c5",
        hover:"#8cacdd63"
    }
    ,
    {
        //red
        BodyColor: "#3e2424",
        accentColor:"#c5826d",
        trackthumb:"#dea8a8",
        hover:"#dd8c8c63"

    }
    ,
    {
        //purple
        BodyColor: "#37243e",
        accentColor:"#a36dc5",
        trackthumb:"#c9a8de",
        hover: "#ca8cdd63"
    }
    ,
    {
        //black
        BodyColor: "#1b1b1b",
        accentColor:"#858585 ",
        trackthumb:"#cccccc",
        hover:"#78747463"
        
    }
]

function expand(){
    if(!expanded){
    pallets.style.height = "17rem"

    setTimeout(()=>{ 
        colorButton0.style.position = "static"
        colorButton1.style.position = "static"
        colorButton2.style.position = "static"
        colorButton3.style.position = "static"
        colorButton0.style.visibility = "visible"
        colorButton0.style.opacity = 1
       // colorButton0.style.position = "static"
    
        colorButton1.style.visibility = "visible"
        colorButton1.style.opacity = 1
        //colorButton1.style.position = "static"
    
        colorButton2.style.visibility = "visible"
        colorButton2.style.opacity = 1
        //colorButton2.style.position = "static"
    
        colorButton3.style.visibility = "visible"
        colorButton3.style.opacity = 1
        //colorButton3.style.position = "static"
    },150)



    
    

   
    expanded = true
    }
    else{
        expanded = false
        pallets.style.height = "3.5rem"
        colorButton0.removeAttribute('Style')
        colorButton1.removeAttribute('Style')
        colorButton2.removeAttribute('Style')
        colorButton3.removeAttribute('Style')
       
    }

}

export function switchTheme(theme){
    
        RemoveActiveTheme(orignalTheme)
        addActiveTheme(theme)
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
                switchColor(pseudoColors,"pseudo")
                palleteButton.style.backgroundColor = colorLibrary[themeNumber].trackthumb
                pallets.style.backgroundColor = colorLibrary[themeNumber].trackthumb
                updateNowPlaying()
                ChangeTitleColor()
             
    }

export function switchColor(element,type){
        if(type === "body" || type === "Body"){
            element.style.backgroundColor = colorLibrary[themeNumber].BodyColor
        }
        else if(type === "background" || type === "bg"){
            element.style.backgroundColor = colorLibrary[themeNumber].accentColor
        }
        else if (type==="accent"||type==="Accent"){
            element.style.color = colorLibrary[themeNumber].accentColor
        }
        else if (type === "border"){
            element.style.borderBottom = `solid 10px ${colorLibrary[themeNumber].accentColor}`
        }
        else if (type === "pseudo"){
            element.style.setProperty("--hover",colorLibrary[themeNumber].hover)
            element.style.setProperty("--trackBar",colorLibrary[themeNumber].accentColor)
            element.style.setProperty("--trackThumb",colorLibrary[themeNumber].trackthumb)
        }
        else if(type === "shuffle"){
            if(shuffling){
                element.style.backgroundColor = colorLibrary[themeNumber].accentColor
                 element.style.color = "white"
            }
            else {
                element.style.color = colorLibrary[themeNumber].accentColor
                element.style.backgroundColor = ""
                }
            }

            else throw console.error("element is not defined in this function");
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

function addActiveTheme(themeNumber){
    switch(themeNumber){
        case 0 :
            colorButton0.classList.add("activeTheme")
            break
        case 1 :    
            colorButton1.classList.add("activeTheme")
            break
        case 2 :    
            colorButton2.classList.add("activeTheme")
            break
        case 3 :    
            colorButton3.classList.add("activeTheme")  
            break 
    }
}

function RemoveActiveTheme(){
    switch(themeNumber){
        case 0 :
            colorButton0.classList.remove("activeTheme")
            break
        case 1 :    
            colorButton1.classList.remove("activeTheme")
            break
        case 2 :    
            colorButton2.classList.remove("activeTheme")
            break
        case 3 :    
            colorButton3.classList.remove("activeTheme")  
            break 
    }
}