const translate = document.querySelectorAll("translate")

console.log(translate,typeof translate,translate[0])


window.addEventListener('scroll', ()=> {
    let scroll = window.pageYOffset; 
    //console.log(scroll) ---> scroll value
    translate.forEach(element => {
        let speed = element.dataset.speed;
        console.log(element,speed,scroll,speed*scroll)
        //we move each element based on the result of multiplying scroll value by speed value;
        element.style.transform = `translateY(${scroll * speed}px)`;

    });
});

//753