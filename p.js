let storeimg=[ "./img1/air.jpg",
 


"./img1/jordan.jpg",
 
 

  "./img1/nitebal.jpg",
    

     "./img1/forum.jpg",
   
     "./img1/espandrille bkack rs 4.jpg",
    

     "./img1/espandrille alparag navy mariya rs 5,499.jpg",
    

     "./img1/cotton canvas rose red rs 3,999.jpg",
    

     "./img1/canvas natural rs 4,999.jpg",
    
     "./img1/alpargata rs 3.jpg",
    
]

let container = document.querySelector(".images_container");
let prebtn = document.querySelector(".btn3");
let nextbtn = document.querySelector(".btn4");

function nextshow(e){
    // console.log(e.target)
    container.innerHTML=null
        for(let i=0;i<4;i++){
            if(flag==storeimg.length){
                flag=0
                let storeimg=`
                <div>
              <img src="${storeimg[flag]}" alt="" class="img"></a>
                 </div>
        `
        container.innerHTML+=storeimg
              flag++
            }
            else{
                let storeimg=`
                <img src="${storeimg[flag]}" alt="" class="img"></a></div>
        `
             container.innerHTML+=storeimg
              flag++
            }
        }
}
function preshow(e){
   
    container.innerHTML=null
        for(let i=0;i<4;i++){
            if(flag<0){
                flag=4
                let html=`
                <div> <a href="./product.html"><img src="${storeimg[flag]}" alt="" class="img"></a></div>
        `
              container.innerHTML+=html
              flag--
            }
            else{
                let html=`
                <div> <a href="./product.html"><img src="${storeimg[flag]}" alt="" class="img"></a></div>
        `
              container.innerHTML+=html
              flag--
            }
           
        }
}
nextshow()
preshow()
nextbtn.addEventListener("click",nextshow)
prebtn.addEventListener("click",preshow)