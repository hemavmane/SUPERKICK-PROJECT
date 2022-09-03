images = [
  "./img3/9.jpg",
  "./img3/8.jpg",
  "./img3/7.jpg",
  "./img3/6.jpg",
  "./img3/5.jpg",
  "./img3/4.jpg",
  "./img3/3.jpg",
  "./img3/4.jpg",
  "./img3/1.jpg",
];
let index = 0;

let banner = document.getElementById("image");
banner.src = images[0];

function show_image(initial) {
  if (initial == "left") {
    index--;
  } else {
    index++;
    index %= images.length - 1;
  }

  if (index < 0) {
    index = images.length - 1;
  }

  banner.src = images[index];
}

setInterval(show_image, 3000);

let dotbtn = document.querySelector(".dots");
let container = document.getElementById("image");

let arr = [
  ["./img3/9.jpg", "dot1"],
  ["./img3/8.jpg", "dot2"],
  ["./img3/7.jpg", "dot3"],
  ["./img3/6.jpg", "dot4"],
  ["./img3/5.jpg", "dot5"],
  ["./img3/4.jpg", "dot6"],
];

function slide(e) {
  for (let i = 0; i < arr.length; i++) {
    container.innerHTML = "";
    if (
      e.target.innerText == "dot1" ||
      e.target.innerText == "dot2" ||
      e.target.innerText == "dot3" ||
      e.target.innerText == "dot4" ||
      e.target.innerText == "dot5" ||
      e.target.innerText == "dot6"
    )
      container.innerHTML = `<div id="image">
    <span><img src="${arr[i][0]}" alt="" /></span>
    </div>`;
  }
}

dotbtn.addEventListener("click", slide);
