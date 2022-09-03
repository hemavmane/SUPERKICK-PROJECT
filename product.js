let arr = [
  {
    img: "./img1/alpargata rs 3.jpg",
    Brand: "Toms",
    name: "ALPARGATA RECYCLED COTTON CANVAS ‘MAASTRICHTNAVY’",
    price: "₹3,999",
  },
  {
    img: "./img1/canvas natural rs 4,999.jpg",
    Brand: "Toms",
    name: "ALPARGATA HERITAGE CANVAS ‘NATURAL / PEACH’",
    price: "₹4,999",
  },
  {
    img: "./img1/cotton canvas rose red rs 3,999.jpg",
    Brand: "Toms",
    name: "ALPARGATA RECYCLED COTTON CANVAS 'ROSE RED'",
    price: "₹3,999",
  },
  {
    img: "./img1/espandrille alparag navy mariya rs 5,499.jpg",
    Brand: "Toms",
    name: "ESPADRILLE ALPARGATA ‘NAVY MARINA’",
    price: "₹5,499",
  },
  {
    img: "./img1/espandrille bkack rs 4.jpg",
    Brand: "Toms",
    name: "ESPADRILLE ALPARGATA ‘BLACK SLUBBY’",
    price: "₹4,999",
  },
  {
    img: "./img1/forum.jpg",
    Brand: "Adidas",
    name: "FORUM LUXE LOW ‘CWHITE / CRAOCH’",
    price: "₹11,999",
  },
  {
    img: "./img1/nitebal.jpg",
    Brand: "Adidas Original",
    name: "NITEBALL ‘CORE BLACK / CLOUD WHITE’",
    price: "₹11,999",
  },
  {
    img: "./img1/jordan.jpg",
    Brand: "Nike",
    name: "JORDAN 5 ‘DARK CONCORD’",
    price: "₹18,395",
  },
  {
    img: "./img1/air.jpg",
    Brand: "Nike",
    name: "AIR JORDAN 14 ‘LIGHT GINGER’",
    price: "₹18,395",
  },
];

let container = document.querySelector(".images_container");
let prebtn = document.querySelector(".btn1");
let nextbtn = document.querySelector(".btn2");

let prev = document.createElement("button");
let flag = 0;
function previous() {
  container.innerHTML = "";
  if (flag == 4) {
    flag = 1;
  }

  for (let i = flag + 4; i > flag; i--) {
    let html = ` <div id="images">
            <img id="image" src="${arr[i].img}">
            <div class="div1">
            <h2>${arr[i].Brand}</h2>
            <h3>${arr[i].name}</h3>
            <span>${arr[i].price}</span>
           </div>
            </div>`;
    container.innerHTML += html;
    console.log(html);
  }
  flag++;
}
prebtn.addEventListener("click", previous);

function next() {
  container.innerHTML = "";
  if (flag == 4) {
    flag = 1;
  }

  for (let i = flag; i < flag + 4; i++) {
    let html = ` <div id="images">
            <img id="image" src="${arr[i].img}">
            <h2>${arr[i].Brand}</h2>
            <span>${arr[i].name}</span>
            <p>${arr[i].price}</p>
            </div>`;
    container.innerHTML += html;
    console.log(html);
  }
  flag++;
}

nextbtn.addEventListener("click", next);

next();
previous();


