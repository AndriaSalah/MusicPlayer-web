import Cookies from "js-cookie"
let mix = []
let rock=[],pop=[],imagineDragons=[],sadnchill=[]
export let MusicLibraries =[]

const xhr = new XMLHttpRequest();
xhr.open("GET", "http://192.168.1.10:8080/Json/library.json", false);
xhr.onload = () => {
  if (xhr.status === 200) {
    const serverResponse = JSON.parse(xhr.responseText);
    rock = serverResponse.rock
    pop = serverResponse.pop
    imagineDragons = serverResponse.imagineDragons
    sadnchill = serverResponse.sadnchill
    MusicLibraries = [rock,pop,imagineDragons,sadnchill,mix]
    getMixLibrary()
    console.log(MusicLibraries[4])
    console.log(serverResponse); // Log the entire server response object
  } else {
    console.error("Failed to load data");
  }
};
xhr.send();


  


function getMixLibrary(){
let local = Cookies.get('mixLibrary')
//checks if the mixlibarary cookie was created before so it can reload it from it , or it will create a new one
if( local == null){
for (let i = 0 ; i < MusicLibraries.length -1 ; i++){
    var randomIndexs = []
    var temp = MusicLibraries[i];
        randomIndexs = createRandomArray(MusicLibraries[i].length,3) 
        for(let y = 0 ; y < randomIndexs.length ; y++){
            mix.push(temp[randomIndexs[y]])
        }
    }  
    //takes the mix library and stringifies it to be saved as a cookie for 1 day
    Cookies.set('mixLibrary',JSON.stringify(mix) ,{expires : 1})
}
else{
    for (let i = 0 ; i < JSON.parse(local).length ; i++){
    mix[i] = JSON.parse(local)[i]
    }
}
}


function createRandomArray(range , repitions){
    if (repitions > range){
     throw console.error('Random range is not fit for the number of repitions given');
    }
    else{
     var Randomarr = []
     var Randomnum = 0;
     var isRandom = false
     for(var i = 0; i < repitions ; i++){
         isRandom = false
         while(!isRandom){
         Randomnum = (Math.floor(Math.random() * range))
                 if(!Randomarr.includes(Randomnum)){
                     Randomarr.push(Randomnum)
                     isRandom = true
                 }
             }
         }
         console.log(Randomarr)
         return Randomarr
     }
 }