




var getaccotitle = document.querySelectorAll('.accodion-title');
var accodion = document.querySelectorAll('.accodion');

for(var x = 0; x < getaccotitle.length; x++){
    // console.log(getaccotitle[x])

    getaccotitle[x].addEventListener('click',function(){
        // console.log('hi')

        var getcontent = this.nextElementSibling;
        // console.log(getcontent);

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
    }
   
}




nextang.addEventListener('click',function(){
    shown(getimg[curidx])

})



 




 

 