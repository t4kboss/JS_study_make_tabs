"use strict";

const btn = document.querySelector(".btn");
let timerId,
  i = 0;

function myAnimation() {
  const el = document.querySelector(".box");
  let pos = 0;

  const id = setInterval(frame, 5);

  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      el.style.top = pos + "px";
      el.style.left = pos + "px";
    }
  }
}

btn.addEventListener("click", myAnimation);

// function logger() {
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log("text");
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log("hello");
//   id = setTimeout(log, 500);
// }, 500);
