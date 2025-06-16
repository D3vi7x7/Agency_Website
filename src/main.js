window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

import './style.css'
import {animate} from 'animejs';


document.body.classList.add('noscroll');

gsap.to(".loader .bar",{
    delay: 5,
    height: 0,
    stagger: 0.05,
    duration: 1
})

let newText = new SplitText(".landing_body .body .first",{type:"chars"});
let chars = newText.chars;

gsap.from(chars, {
    delay: 6,
    opacity: 0,
    yPercent: 130,
    stagger:0.02,
    ease: "back.out",
    duration: 0.7
})

let newText2 = new SplitText(".landing_body .body .second",{type:"chars"});
let chars2 = newText2.chars;

gsap.from(chars2, {
    delay: 6,
    opacity: 0,
    yPercent: 150,
    stagger:0.02,
    ease: "back.out",
    duration: 0.7
})

let newText3 = new SplitText(".landing_body .body .third",{type:"chars"});
let chars3 = newText3.chars;

gsap.from(chars3, {
    delay: 6,
    opacity: 0,
    yPercent: 150,
    stagger:0.02,
    ease: "back.out",
    duration: 0.7
})

let newText4 = new SplitText(".load_header h1",{type:"chars"});
let chars4 = newText4.chars;

gsap.from(chars4, {
    delay: 1.5,
    opacity: 0,
    yPercent: 150,
    stagger:0.02,
    ease: "back.out",
    duration: 0.7
})

setTimeout(() => {
  document.body.classList.remove('noscroll');
}, 6000);

gsap.to(chars4, {
    delay: 4,
    opacity: 0,
    letterSpacing: "100px",
    ease:"out",
    duration: 0.8
})


const cur = document.querySelector(".circle");

const mouse = {x:0,y:0};
const circle = {x:0,y:0};

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
})

const speed = 0.17;
const tick = () => {
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;

    cur.style.transform = `translate(${circle.x}px,${circle.y}px)`

    window.requestAnimationFrame(tick);
}

tick();

const wrapper = document.getElementById("tiles");

let columns = 0,
    rows = 0,
    toggled = false;



const createTile = index => {
  const tile = document.createElement("div");
  
  tile.classList.add("tile");
  
  return tile;
}

const createTiles = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
}

const createGrid = () => {
  wrapper.innerHTML = "";
  
  const size = document.body.clientWidth > 800 ? 100 : 50;
  
  columns = Math.floor(document.body.clientWidth / size);
  rows = Math.floor(document.body.clientHeight / size);
  
  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);
  
  createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();


// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});