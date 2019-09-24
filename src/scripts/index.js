import '../styles/index.scss';
// import normalizeWheel from 'normalize-wheel';

const data = [{
        meta: '___Work',
        content: "We will not be consumers anymore",
        button: "DISCOVER WIBEEE",
        img: "/src/assets/images/image-1.jpg"
    },
    {
        meta: '___Home',
        content: "Join us in our journey",
        button: "SOME SAMPLE BUTTON",
        img: "/src/assets/images/image-2.jpg"
    },
    {
        meta: '___Party',
        content: "Some fun fact here",
        button: "A FUN BUTTON",
        img: "/src/assets/images/image-3.jpg"
    }
];

let counter = 0;
let firstLaunch = true;
let scroll = true;
let timeout = false;

// elements
const toggle = document.querySelector('.toggle');
const full_menu = document.querySelector('.full-menu');
const hero = document.querySelector('.hero');
const fa = document.querySelector('.fa');
const mouse = document.querySelector('.mouse-icon');

const meta = document.querySelector('.meta');
const content = document.querySelector('.content');
const button = document.querySelector('.button');

let ind_1 = document.querySelector('.indicator .one');
let ind_2 = document.querySelector('.indicator .two');
let ind_3 = document.querySelector('.indicator .three');

let image = document.querySelector('.image');
let bg_image = document.querySelector('.bg-image');


function resetClass(){
    image.classList.remove('slideUp');
    image.classList.remove('slideDown');
    bg_image.classList.remove('fadeOut');
    hero.classList.remove('hero-on');
    hero.classList.remove('hero-off');
}

toggle.addEventListener('click', () => {
    resetClass();
    if (firstLaunch) {
        full_menu.classList.add('active');
        hero.classList.add('hero-on');
        firstLaunch = false;
        toggle.innerHTML = `CLOSE&nbsp;&nbsp;<i class="fa fa-times"></i>`;
        fa.classList.add('cross-on');

    } else if(full_menu.classList.contains('active')){
        full_menu.classList.remove('active');
        full_menu.classList.add('disabled');
        hero.classList.add('hero-off');
        toggle.innerHTML = `MENU&nbsp;&nbsp;<i class="fa fa-angle-double-down"></i>`;
    } else {
        full_menu.classList.remove('disabled');
        full_menu.classList.add('active');
        hero.classList.add('hero-on');
        toggle.innerHTML = `CLOSE&nbsp;&nbsp;<i class="fa fa-times"></i>`;
    }
});



function scrollIndicator(event) {
    // const normalized = normalizeWheel(event);
    // console.log(normalized);
    // console.log('%cDelta Y','color: orange;font-size:24px; font-weight:bold;',event.deltaY);
    if(scroll){
        mouse.classList.remove('mouse'); 
        console.log(image.children);
        resetClass();
        // console.log(counter);
        scroll = false;
        window.requestAnimationFrame(function () {
            if(event.deltaY > 0){
                console.log('scroll Down');
                bg_image.style.backgroundImage = `linear-gradient(to bottom, rgba(53, 33, 35, 0.7), rgba(24, 24, 24, 0.2),rgba(34, 34, 34, 0.8)),url(${data[counter].img})`;
                
                counter++;
                if (counter > 2) counter = 0;

                window.setTimeout(() =>{
                    meta.innerHTML = data[counter].meta;
                    content.innerHTML = data[counter].content;
                    button.innerHTML = data[counter].button;
                    image.style.backgroundImage = `linear-gradient(to bottom, rgba(53, 33, 35, 0.7), rgba(24, 24, 24, 0.2),rgba(34, 34, 34, 0.8)),url(${data[counter].img})`;
                    image.classList.add('slideUp');
                    bg_image.classList.add('fadeOut');
                },10);

                switch (counter) {
                    case 0:
                        ind_1.classList.add('active');
                        ind_2.classList.remove('active');
                        ind_3.classList.remove('active');
                        break;
                    case 1:
                        ind_1.classList.remove('active');
                        ind_2.classList.add('active');
                        ind_3.classList.remove('active');
                        break;
                    case 2:
                        ind_1.classList.remove('active');
                        ind_2.classList.remove('active');
                        ind_3.classList.add('active');
                        break;
                }
                
            } else if (event.deltaY < 0){
                console.log('scroll Up');
                bg_image.style.backgroundImage = `linear-gradient(to bottom, rgba(53, 33, 35, 0.7), rgba(24, 24, 24, 0.2),rgba(34, 34, 34, 0.8)),url(${data[counter].img})`;

                counter--;
                if (counter < 0) counter = 2;

                window.setTimeout(() =>{
                    meta.innerHTML = data[counter].meta;
                    content.innerHTML = data[counter].content;
                    button.innerHTML = data[counter].button;
                    image.style.backgroundImage = `linear-gradient(to bottom, rgba(53, 33, 35, 0.7), rgba(24, 24, 24, 0.2),rgba(34, 34, 34, 0.8)),url(${data[counter].img})`;
                    image.classList.add('slideDown');
                    bg_image.classList.add('fadeOut');
                },10);
                switch (counter) {
                    case 0:
                        ind_1.classList.add('active');
                        ind_2.classList.remove('active');
                        ind_3.classList.remove('active');
                        break;
                    case 1:
                        ind_1.classList.remove('active');
                        ind_2.classList.add('active');
                        ind_3.classList.remove('active');
                        break;
                    case 2:
                        ind_1.classList.remove('active');
                        ind_2.classList.remove('active');
                        ind_3.classList.add('active');
                        break;
                }
            }
            
            
            timeout = window.setTimeout(()=>{
                console.log('Timed out');
                scroll = true;
            },1500);
        });
        
    }
    
}

window.addEventListener('load', function () {
    console.log(window.innerWidth);
    if(window.innerWidth > 768 ) mouse.classList.add('mouse');
    
    // hero.addEventListener('wheel', _.debounce(scrollIndicator,350,{ leading: true }));
    hero.addEventListener('wheel',scrollIndicator,true);
});
