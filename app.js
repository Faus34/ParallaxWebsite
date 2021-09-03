const background = document.getElementById("background");
const firstlayer = document.getElementById("firstlayer");
const secondlayer = document.getElementById("secondlayer");
const thirdlayer = document.getElementById("thirdlayer");

const header = document.querySelector('header');
const big_tittle = document.querySelector('.big-tittle');
const shadow = document.querySelector('.shadow');
const content = document.querySelector('.content');
const section = document.querySelector('section');
const image_container = document.querySelector('.imgContainer');
const div_container = document.querySelector('.container');
const opacity = document.querySelector('.opacity');
const border =  document.querySelector('.border');

// alert(typeof opacity);
console.log( opacity)

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', ()=> {
    let scroll = window.pageYOffset; 
    let sectionY =  section.getBoundingClientRect();
        // we move each element based on the result of multiplying scroll value by speed value;
        background.style.transform = `translateY(${scroll * 0.2}px)`;
        firstlayer.style.transform = `translateY(${scroll * 0.3}px)`;
        secondlayer.style.transform = `translateY(${scroll * 0.5}px)`;
        thirdlayer.style.transform = `translateY(${scroll * 0.4}px)`;

        image_container.style.opacity = scroll / (sectionY.top + section_height); 
        div_container.style.opacity = scroll / (sectionY.top + section_height); 

        opacity.style.opacity = scroll / (sectionY.top + section_height);

        big_tittle.style.opacity = -scroll / (header_height/2) + 1;  
        shadow.style.height = `${scroll * 0.5 + 300}px`;

        content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 -50}px)`;
        image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 +50}px)`;

        border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
    }
);

