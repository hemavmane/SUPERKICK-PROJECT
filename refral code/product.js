// // let arr = [
// //   {
// //     img: "./img1/alpargata rs 3.jpg",
// //     Brand: "Toms",
// //     name: "ALPARGATA RECYCLED COTTON CANVAS ‘MAASTRICHTNAVY’",
// //     price: "₹3,999",
// //   },
// //   {
// //     img: "./img1/canvas natural rs 4,999.jpg",
// //     Brand: "Toms",
// //     name: "ALPARGATA HERITAGE CANVAS ‘NATURAL / PEACH’",
// //     price: "₹4,999",
// //   },
// //   {
// //     img: "./img1/cotton canvas rose red rs 3,999.jpg",
// //     Brand: "Toms",
// //     name: "ALPARGATA RECYCLED COTTON CANVAS 'ROSE RED'",
// //     price: "₹3,999",
// //   },
// //   {
// //     img: "./img1/espandrille alparag navy mariya rs 5,499.jpg",
// //     Brand: "Toms",
// //     name: "ESPADRILLE ALPARGATA ‘NAVY MARINA’",
// //     price: "₹5,499",
// //   },
// //   {
// //     img: "./img1/espandrille bkack rs 4.jpg",
// //     Brand: "Toms",
// //     name: "ESPADRILLE ALPARGATA ‘BLACK SLUBBY’",
// //     price: "₹4,999",
// //   },
// //   {
// //     img: "./img1/forum.jpg",
// //     Brand: "Adidas",
// //     name: "FORUM LUXE LOW ‘CWHITE / CRAOCH’",
// //     price: "₹11,999",
// //   },
// //   {
// //     img: "./img1/nitebal.jpg",
// //     Brand: "Adidas Original",
// //     name: "NITEBALL ‘CORE BLACK / CLOUD WHITE’",
// //     price: "₹11,999",
// //   },
// //   {
// //     img: "./img1/jordan.jpg",
// //     Brand: "Nike",
// //     name: "JORDAN 5 ‘DARK CONCORD’",
// //     price: "₹18,395",
// //   },
// //   {
// //     img: "./img1/air.jpg",
// //     Brand: "Nike",
// //     name: "AIR JORDAN 14 ‘LIGHT GINGER’",
// //     price: "₹18,395",
// //   },
// // ];

// // let container = document.querySelector(".images_container");
// // let prebtn = document.querySelector(".btn1");
// // let nextbtn = document.querySelector(".btn2");


// // let flag = 0;
// // function previous() {
// //   container.innerHTML =null;
// //   if (flag ==6 ) {
// //     flag = arr.length-1;
// //   }

// //   for (let i = flag + 6; i > flag; i--) {
// //     let html = ` <div id="images">
// //             <img id="image" src="${arr[i].img}">
// //             <div class="div1">
// //             <h2>${arr[i].Brand}</h2>
// //             <h3>${arr[i].name}</h3>
// //             <span>${arr[i].price}</span>
// //           </div>
// //           </div>`;
// //     container.innerHTML += html;
// //     console.log(html);
// //   }
// //   flag++;
// // }
// // prebtn.addEventListener("click", previous);

// // function next() {
// //   container.innerHTML = null;
// //   if (flag == 6) {
// //     flag = 0;
// //   }

// //   for (let i = flag; i < flag + 6; i++) {
// //     let html = ` <div id="images">
// //             <img id="image" src="${arr[i].img}">
// //             <div class="div1">
// //             <h2>${arr[i].Brand}</h2>
// //             <h3>${arr[i].name}</h3>
// //             <span>${arr[i].price}</span>
// //             </div>
// //             </div>`;
// //     container.innerHTML += html;
// //     console.log(html);
// //   }
// //   flag++;
// // }

// // nextbtn.addEventListener("click", next);

// // next();
// // previous();


// let arr = [
//   {
//     img: "./img1/alpargata rs 3.jpg",
//     Brand: "Toms",
//     name: "ALPARGATA RECYCLED COTTON CANVAS ‘MAASTRICHTNAVY’",
//     price: "₹3,999",
//   },
//   {
//     img: "./img1/canvas natural rs 4,999.jpg",
//     Brand: "Toms",
//     name: "ALPARGATA HERITAGE CANVAS ‘NATURAL / PEACH’",
//     price: "₹4,999",
//   },
//   {
//     img: "./img1/cotton canvas rose red rs 3,999.jpg",
//     Brand: "Toms",
//     name: "ALPARGATA RECYCLED COTTON CANVAS 'ROSE RED'",
//     price: "₹3,999",
//   },
//   {
//     img: "./img1/espandrille alparag navy mariya rs 5,499.jpg",
//     Brand: "Toms",
//     name: "ESPADRILLE ALPARGATA ‘NAVY MARINA’",
//     price: "₹5,499",
//   },
//   {
//     img: "./img1/espandrille bkack rs 4.jpg",
//     Brand: "Toms",
//     name: "ESPADRILLE ALPARGATA ‘BLACK SLUBBY’",
//     price: "₹4,999",
//   },
//   {
//     img: "./img1/forum.jpg",
//     Brand: "Adidas",
//     name: "FORUM LUXE LOW ‘CWHITE / CRAOCH’",
//     price: "₹11,999",
//   },
//   {
//     img: "./img1/nitebal.jpg",
//     Brand: "Adidas Original",
//     name: "NITEBALL ‘CORE BLACK / CLOUD WHITE’",
//     price: "₹11,999",
//   },
//   {
//     img: "./img1/jordan.jpg",
//     Brand: "Nike",
//     name: "JORDAN 5 ‘DARK CONCORD’",
//     price: "₹18,395",
//   },
//   {
//     img: "./img1/air.jpg",
//     Brand: "Nike",
//     name: "AIR JORDAN 14 ‘LIGHT GINGER’",
//     price: "₹18,395",
//   },
// ]

// let container = document.querySelector(".product_container");
// let prebtn = document.querySelector(".btn1");
// let nextbtn = document.querySelector(".btn2");

// let flag = 4;
// function showproduct() {
//   container.innerHTML = "";
//   for (let i = 0; i<4; i++) {
//     let html = ` 
//     <div class="product">
//                 <img src="${arr[i].img}" alt="" class="product_img">
//                 <p class="brand">${arr[i].Brand}</p>
//                 <p class="name">${arr[i].name}</p>
//                 <p class="price">${arr[i].price}</p>
//             </div>
//     `;
//     container.innerHTML += html;
  
//   }
// }
// showproduct()


// prebtn.addEventListener("click", next);
// nextbtn.addEventListener("click", next);

// function next() {
//   container.innerHTML = "";
//     for (let i = 0; i<4; i++) {
//       if(flag==arr.length){
//         flag=0
//         i--
//       }
//       else{
//         let html = ` 
//         <div class="product">
//                     <img src="${arr[flag].img}" alt="" class="product_img">
//                     <p class="brand">${arr[flag].Brand}</p>
//                     <p class="name">${arr[flag].name}</p>
//                     <p class="price">${arr[flag].price}</p>
//                 </div>
//         `;
//         container.innerHTML += html;
//         flag++
//       }
     
//     }
   
//   } 