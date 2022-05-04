// https://www.youtube.com/watch?v=T1rLPD0zDB4

const makeBigger = () => {
   let first = document.querySelector("div.content");
   let size1 = window.getComputedStyle(first, null).getPropertyValue("font-size");
   size1 = parseFloat(size1);
   first.style.fontSize = (size1 + 5) + "px";
   let second = document.querySelector("h1");
   let size2 = window.getComputedStyle(second, null).getPropertyValue("font-size");
   size2 = parseFloat(size2);
   second.style.fontSize = (size2 + 5) + "px";
   // alert('make bigger!');
};

const makeSmaller = () => {
   let first = document.querySelector("div.content");
   let size1 = window.getComputedStyle(first, null).getPropertyValue("font-size");
   size1 = parseFloat(size1);
   first.style.fontSize = (size1 - 5) + "px";
   let second = document.querySelector("h1");
   let size2 = window.getComputedStyle(second, null).getPropertyValue("font-size");
   size2 = parseFloat(size2);
   second.style.fontSize = (size2 - 5) + "px";
   // alert('make smaller!');
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

