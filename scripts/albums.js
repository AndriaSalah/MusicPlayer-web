import Cookies from "js-cookie"

let rock = [
    
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1ZIuCVaV96VB3iaXIxFgz5bwPUa1f57RM',
        artistName: 'Breaking Benjamin',
        trackName : 'The Diary of Jane'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=14biyVBTaEHnR7nToW2D4QjiuIIk0y448',
        artistName: 'Hidden citizen',
        trackName : 'Paint It Black'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1A99MZWZ5asXJjrt_2JGrW2aBMjxJ2Tnx',
        artistName: 'Evanescence',
        trackName : 'HI-LO'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1EYg9lTauY4qtGDS4rW_3a61Thn0O5Lvw',
        artistName: 'Florence + The Machine',
        trackName : 'Cosmic love'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1YWH1CTtIMEgo2KrG4xya2CGirEobXsbz',
        artistName: 'Florence + The Machine',
        trackName : 'Delilah'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1FArZkVDGxAFi7Hw69e1OfgArDer_WLBX',
        artistName: 'Florence + The Machine',
        trackName : 'Dog Days Are Over'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1etwWfVGxsESfrIxIaL-0fo-r0km2t_XF',
        artistName: 'Florence + The Machine',
        trackName : 'What Kind Of Man'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1EDQSMv1riu-jES_sFNHxoQMgXLyd_2k2',
        artistName: 'Michael Schulte',
        trackName : 'Falling Apart'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1DWzc7TbB4dJvdokXWmrmC-6EUVFR808K',
        artistName: 'Post Malone',
        trackName : 'Take What You Want'
    },
    
]

let pop =[
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1Eoz4lNy9doY117n7ZLWQlVf4qjbNCMVS',
        artistName: 'Alexander Raybak',
        trackName : 'Fairy Tale'
    }, 
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1kAtO8P1uq8IZdbCTUg8mJY6x0yVqw9x8',
        artistName: 'Banners',
        trackName : 'Someone To You'
    }, 
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1qAL7fbXuqO8alW3u3vtXSP2j5qS_gixl',
        artistName: 'Bishop Briggs',
        trackName : 'Jekyll Hide'
    }, 
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1g-COAaCv1j8BYnBqmgH_GlfJuin6NGPf',
        artistName: 'Casanova Heroes',
        trackName : 'In Hiding'
    }, 
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1xzdAf02KbMb8dSaPxCz9UnolZVdrKS6o',
        artistName: 'Duncan Laurence',
        trackName : 'Arcade'
    }, 
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1mqpbwFcWEJ2yWaEE9hwDWimdOVJa9EHg',
        artistName: 'Estelle',
        trackName : 'American Boy'
    }, 
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1GmS3vvvCVjqTCVuvUmBIKR8kgFXQBF8O',
        artistName: 'Fouzia',
        trackName : 'This Mountain'
    }, 
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1_dRGEN9_WeFbgGSw4bunG5gpMtFTqKS_',
        artistName: 'Maroon 5',
        trackName : 'My Heart stereo'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1Q6oX_ZWnspxyxBU4VodfSLLAS69tCTyR',
        artistName: 'Kodaline',
        trackName : 'Brother'
    },  
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1GOJmV3C23NtbM9SpnluTkGp8UXR_9yeE',
        artistName: 'Riot Games',
        trackName : 'Warriors'
    }, 
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1kGbgscEp2D2RSENK4hjcP3a95ytBzyjS',
        artistName: 'Bruno Mars',
        trackName : 'Uptown Funk'
    },   
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1JBh-BYg9Toc5dToAKJ8HqUmPmG4OM8VW',
        artistName: 'Masked Wolf',
        trackName : 'Astronaut in the ocean'
    },   
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1N9XgxTHLN8JqFfPe6YUpbJyvCWb7TxKd',
        artistName: 'Mike posner',
        trackName : 'Cooler Than Me'
    },   
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1EuGoOCAk88ztLff1L0upod7EG-In8mz8',
        artistName: 'Oliver Riot',
        trackName : 'Alcatraz'
    },  
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1DuqWdBtmjA76cm2lTKf_JGX5qylEZobs',
        artistName: 'Olivia Rodrigo',
        trackName : 'Drivers license '
    },  
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1K3gVwWJA5-gHjeMPFQcg_y3K7hCl0-2C',
        artistName: 'OneRepublic',
        trackName : 'Counting Stars'
    },  
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1IVLlpfzD_7It2i03hTTEINyeH-gZLjuH',
        artistName: 'Papa Roach',
        trackName : 'Falling Apart'
    },  
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1TTErHRhcoc3GmyfpyYkHPz2OHDMkii13',
        artistName: 'Rag n Bone Man',
        trackName : 'Fade To Nothing'
    },  
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=13-qwchEBCnmaJg6cysV-lujio39VbCEb',
        artistName: 'The Neighbourhood',
        trackName : 'Sweater Weather'
    },  

    
]
let mix = []
const imagineDragons = [

    {
        imgPath   : 'Music/Artwork/1.png',
        musicPath : 'https://drive.google.com/uc?id=1Jm7IqCOg70Rw2LXmQObz919m2SDuWkH1',
        artistName: 'Imagine Dragons',
        trackName : 'Believer'
    },
    {
        imgPath   : 'Music/Artwork/2.png',
        musicPath : 'https://drive.google.com/uc?id=1q3Yn5FFfytkHFJAlJyrpE_9nG1y2iJWQ',
        artistName: 'Imagine Dragons',
        trackName : 'Tiptoe'
    },
    {
        imgPath   : 'Music/Artwork/2.png',
        musicPath : 'https://drive.google.com/uc?id=1SuV93AH5g4apAH3NZr1Jqee27NRkE87s',
        artistName: 'Imagine Dragons',
        trackName : 'Radioactive'
    },
    {
        imgPath   : 'Music/Artwork/1.png',
        musicPath : 'https://drive.google.com/uc?id=19i7KUymG01r_RNYWnWqSrjUn13c2csSc',
        artistName: 'Imagine Dragons',
        trackName : 'What ever it takes'
    },
    {
        imgPath   : 'Music/Artwork/2.png',
        musicPath : 'https://drive.google.com/uc?id=1FQz4jYZiUW0n8OSDZb5y_a1jaShvoVc-',
        artistName: 'Imagine Dragons',
        trackName : 'I Dont know why'
    },
    {
        imgPath   : 'Music/Artwork/2.png',
        musicPath : 'https://drive.google.com/uc?id=1M2OtK7Py_ufrGBTPOQUiCMka6CYBDd4l',
        artistName: 'Imagine Dragons',
        trackName : 'Its time'
    }

]
const sadnchill = [
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1J3Zz7kBiZNg-exXoKIR5VbkvuFXGEelc',
        artistName: 'Agar Agar',
        trackName : 'Prettiest Virgin'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1q41okXRfpmuoC7QRQhlI1R0GYafZ9Vyr',
        artistName: 'Alev Lenz',
        trackName : 'May the Angels'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1-GZLZof-NQNyvQ4X7OlYIGNgxNRfBPRy',
        artistName: 'Angèle',
        trackName : 'Ta Reine'
    },

    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1Qiw-PIZv6BpUg-nbRFSW7Lknc5HRgGWb',
        artistName: 'Anson Seabra',
        trackName : `I Can't Carry This Anymore`
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1S2CoNUd1i5lFeVtTe6d5GJjDOiWFK9BF',
        artistName: 'Axel Flóvent',
        trackName : 'Forest Fires'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1_qMVlmWIvsD5JvKG-DXYfmbG0PV29Jaa',
        artistName: 'Casey Edwards',
        trackName : 'Bury The Light'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1w0UrNtOBIZZi_lFhfx18gNC7w-39wqaL',
        artistName: 'Charlotte Lawrence',
        trackName : `Joke's On You`
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1ON6RKj1k_WogVKTjdGUxvyF3w04XlGs7',
        artistName: 'Flora Cash',
        trackName : '18 Dollars'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1cv142iN0zVcaz3aVLfoBCUtA0u5aYJLB',
        artistName: 'Flora Cash',
        trackName : 'Atone'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1-TAp6-uj2UFEXSHE2tL_f_Ki0RPIW6OK',
        artistName: 'Flora Cash',
        trackName : 'Still Alive'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1CMjffS2wJ-Q52-SPFrcspyAEA-zf1Lfi',
        artistName: 'Flora Cash',
        trackName : 'The Bad Boys'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1QXG8fPwPuOeq27FUkHBe_m3X3PxQjnYd',
        artistName: 'Flora Cash',
        trackName : 'You love Me'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1wxOP8amBse7BKUo9bmADBfHuQMPV67LY',
        artistName: 'Flora Cash',
        trackName : 'Born In The Slumber'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=18d23Qt2aFYlVeAxK0jtqyo_7vhopQN6N',
        artistName: 'Flora Cash',
        trackName : 'Whoa My'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1vnlDEtJhRbW6j-rlT0uSCk9TZ0_CzDQb',
        artistName: 'Flora Cash',
        trackName : `You're Somebody Else`
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1TqBlt1iC5XwRpE4Bnmm3XvSSGJDcumf5',
        artistName: 'Count Basie',
        trackName : 'Fly Me To The Moon'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1-yRl1UOPByIHrEF7wwoszptYdaZuvST1',
        artistName: 'Ghostly Kisses',
        trackName : 'Empty note'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1UDvsfbGcf32kxFyJ40PujV8-dQJb9hVa',
        artistName: 'Hozier',
        trackName : 'In The Woods Some Where'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=19FsfU-d2guUPIZj-CgkvmcGwqLlWJEp3',
        artistName: 'Jill Andrews',
        trackName : 'Lost it All'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1mvXKULGRIvwQeKbPGp5oWb-FjvnTcXEz',
        artistName: 'Lana Del Rey',
        trackName : 'Happiness is a Butterfly'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1oGx8ER_EHcmDfGrSu1JgQb7lfXXlh_qL',
        artistName: 'Lana Del Rey',
        trackName : 'Cruel World'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1c99ZsoxyUledgWJmIkpdGFq3k7XJXhq9',
        artistName: 'Manchester Orchestra',
        trackName : 'The Silence'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1necDMfREIldmiPIfNl85WpMGyBCC5IhF',
        artistName: 'Mountains Of The Moon',
        trackName : 'Caterpillar'
    },   
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1es32pxjqdNuTiJlOzBBTngVFGS8XFBB1',
        artistName: 'Mountains Of The Moon',
        trackName : 'Over Grown'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1yk3Q57N9qhwV-40ZhOxZctQR4nPbfnKQ',
        artistName: 'Post Malone',
        trackName : 'Feeling Whitney'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1OvlJ_RM6Ow9tm7HX4pR6XNr7Kz1121E3',
        artistName: 'Powfu',
        trackName : 'Death Bed'
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1AkGkAAypGdw7EmVcd_35YLlCOM7wTH0Q',
        artistName: 'Rick and Morty',
        trackName : `Don't Look Back `
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1bDgD3r2vbTZbZfS_IVrx8d8piS1p5dX9',
        artistName: 'Sam Airey',
        trackName : `Stars`
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1RZsuNlmDzKIC90zFQxuF9LJq66dnYR2C',
        artistName: 'Savera',
        trackName : `Swim`
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1RkwZy_8BAOkJwsAqDmmjDXL8vCZPI5ub',
        artistName: 'Seafret',
        trackName : `Give Me Something`
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1o2DxV19BfinyRtIjWhExIF0133j-ASUI',
        artistName: 'Seafret',
        trackName : `Girl I Wish I Didn't Know`
    },
    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1gtXrNSEBQMjMIgfjqzc4eLZ96FTNqX2E',
        artistName: 'SYML',
        trackName : `The Bird`
    },

    {
        imgPath   : '',
        musicPath : 'https://drive.google.com/uc?id=1SXixcH1D7NroLSMYoY2bS7h3TBzIc7eQ',
        artistName: 'Tamino',
        trackName : `Habibi`
    },



]
export let MusicLibraries = [rock,pop,imagineDragons,sadnchill,mix]

let local = Cookies.get('mixLibrary')

if( local == null){
for (let i = 0 ; i < MusicLibraries.length -1 ; i++){
    var randomIndexs = []
    var temp = MusicLibraries[i];
        randomIndexs = createRandomArray(MusicLibraries[i].length,3) 
        for(let y = 0 ; y < randomIndexs.length ; y++){
            mix.push(temp[randomIndexs[y]])
        }
    }  
    Cookies.set('mixLibrary',JSON.stringify(mix) ,{expires : 1})
}
else{
    for (let i = 0 ; i < JSON.parse(local).length ; i++){
    mix[i] = JSON.parse(local)[i]
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