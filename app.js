
//  Gallery 
const getallbtn = document.getElementById('allbtn');
const getgallerybtn = document.getElementById('gallerybtn');
const all = document.getElementById('all');
const gallery = document.getElementById('gallery');

getgallerybtn.addEventListener('click',function(){
   gallery.style.display = "block";
   getgallerybtn.style.backgroundColor = "#dfa060";
   all.style.display = "none";
   getallbtn.style.backgroundColor = "aquamarine";

});

getallbtn.addEventListener('click',function(){
    gallery.style.display = "none";
    getgallerybtn.style.backgroundColor = "aquamarine";
    all.style.display = "block";
    getallbtn.style.backgroundColor = "#dfa060";

});



var getaccotitle = document.querySelectorAll('.accodion-title');
var accodion = document.querySelectorAll('.accodion');

for(var x = 0; x < getaccotitle.length; x++){
    // console.log(getaccotitle[x])
    getaccotitle[x].addEventListener('click',function(){

        var getcontent = this.nextElementSibling;

        if(getcontent.style.height){
        getcontent.style.height = null;
            
        }else{
        getcontent.style.height = getcontent.scrollHeight + "px"

        };
    
    });
}


// lightbox
const bigcontainer = document.querySelector('.bigcontainer');
const getimg = document.querySelectorAll('.img');
const getbimg = document.querySelector('.b-img')
const esc = document.querySelector('.esc');
const prevang = document.getElementById('prevang');
const nextang = document.getElementById('nextang'); 

let curidx = 1;

for(var x = 0; x < getimg.length ; x++){
    console.log(x)
    getimg[x].addEventListener('click',function(){
        shown(this);
    })

   
    esc.addEventListener('click',function(){
        bigcontainer.style.display = "none";
    })
  
}

function shown(e){
    bigcontainer.style.display = 'block';
    // console.log(e.src)
    getbimg.src = e.src;
    curidx++;
    if(curidx > getimg.length-1 ){
        curidx = 0;
    }else if(curidx < 0){
        curidx--;
        curidx = getimg.length-1
    }
}

prevang.addEventListener('click',function(){
    shown(getimg[curidx]);
 });
 
 nextang.addEventListener('click',function(){
     shown(getimg[curidx]);
 });


 

//  Audio Part 
const getaudio = document.getElementById('audio');

const getprogresscontainer = document.getElementById('progresscontainer');
const getprogress = document.getElementById('progress');

const repeatbtn = document.getElementById('repeat');
const prevbtn = document.getElementById('prev');
const playbtn = document.getElementById('play');
const nextbtn = document.getElementById('next');
const shufflebtn = document.getElementById('shuffle');

const getstick = document.querySelector('.stick');
const getsmallcicle = document.querySelector('.smallcicle');

var audioes = ['youmakemesmile','littlestar','bymyside','christmastree','sunsetswithyou','myonlyone'];

let cursongidx = 0;

function loading() {
    getaudio.src = `./fav/${audioes[cursongidx]}.mp3`;
}

function prevsongs(){

    if(cursongidx < 0){
        cursongidx = audioes.length-1;
        
    }; 
    getaudio.src = `./fav/${audioes[cursongidx--]}.mp3`;
    playpausesongs()
}

function nextsongs(){
    console.log(cursongidx++);
    console.log(audioes.length-1)
    if(cursongidx > audioes.length-1){
        cursongidx = 0
    }
    getaudio.src = `./fav/${audioes[cursongidx]}.mp3`;  
    playpausesongs();
}

function playpausesongs(){
    if(getaudio.paused){
        getaudio.play();
        playbtn.innerHTML = `<button type="button" id="play" ><i class="fa-solid fa-pause"></i></button>`;

       getstick.style.transform = "rotate(40deg)";
       getsmallcicle.classList.add('turnningplay') ;             
    }else{
        getaudio.pause();
        playbtn.innerHTML = `<button type="button" id="play" ><i class="fa-solid fa-play"></i></button>`;
        getstick.style.transform = "rotate(0deg)";
        getsmallcicle.classList.remove('turnningplay');
    }
}





playbtn.addEventListener('click',playpausesongs);
prevbtn.addEventListener('click',prevsongs);
nextbtn.addEventListener('click',nextsongs);



 




 

 