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
        return Randomarr
    }
}
    let arr = createRandomArray(10,20)
    console.log(arr)

