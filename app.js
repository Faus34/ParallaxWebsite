const background = document.getElementById("background");
const firstlayer = document.getElementById("firstlayer");
const secondlayer = document.getElementById("secondlayer");
const header = document.querySelector('header');
const big_tittle = document.querySelector('.big-tittle');
const shadow = document.querySelector('.shadow');
const content = document.querySelector('.content');
const section = document.querySelector('section');
const image_container = document.querySelector('.imageContainer');
const opacity = document.querySelector('.opacity');
const border =  document.querySelector('.border');

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', ()=> {
    let scroll = window.pageYOffset; 
    let sectionY =  section.getBoundingClientRect();
        //we move each element based on the result of multiplying scroll value by speed value;
        background.style.transform = `translateY(${scroll * 0.2}px)`;
        firstlayer.style.transform = `translateY(${scroll * 0.3}px)`;
        secondlayer.style.transform = `translateY(${scroll * 0.5}px)`;

        opacity.forEach(function (element) {
            element.style.opacity = scroll / (sectionY.top + section_height);
        });

        big_tittle.style.opacity = -scroll / (header_height/2) + 1;  
        shadow.style.height = `${scroll * 0.5 + 300}px`;

        content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 -50}px)`;
        image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 +50}px)`;

        border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
    }
);

