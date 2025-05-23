// page was opening anywhere so i tried this temporarily solution
window.scrollTo(0, 0)
const screenSize = gsap.matchMedia();
document.body.style.overflow = 'hidden'
//===== gsap little animation 
window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.refresh();
    window.scrollTo(0, 0)
    console.log('page fully loaded')
    var tm = gsap.timeline()
    tm.to('.loadcontainer', {
        top: '-120%',
        duration: 0.5,
        opacity: 0,
        ease: Power4,
        onComplete: () => { document.body.style.overflow = 'hidden auto'; }
    }).from('nav', {
        opacity: 0,
        duration: 0.3,
    }).from('.C-name,.socials a', {
        scale: 0,
        duration: 0.2,
        stagger: 0.1
    }).from('.logo-name img,.logo-name h2,.click', {
        ease: 'bounce',
        y: -50,
        duration: 1,
        opacity: 0,
        stagger: 0.5,
        // onComplete: () => {
        //     if (document.body.offsetWidth > '850') {

        //         gsap.from('.bookmark', {
        //             y: -50,
        //             opacity: 0,
        //             // duration: 1,
        //             stagger: 0.2,
        //             opacity: 1,
        //         })
        //         console.log('badhai')
        //     }
        // }
    }).from(".imgs", {
        x: '-100%',
        delay: 0,
        ease: 'power4',
        duration: 0.4,
        repeat: -1,
        repeatDelay: 3,
        stagger: 5
    }, 0)
})
// ======= gsap scrolltrigger 
gsap.fromTo('.white', {
    scale: 0.3,
    opacity: 0,
}, {
    scale: 1,
    opacity: 1,
    // duration: 0.7,
    scrollTrigger: {
        trigger: '.white',
        scroller: 'body',
        start: 'top 105%',
        end: 'top 70%',
        scrub: 2,
    }
})
gsap.fromTo('.p',
    { y: 100, opacity: 0, }, {
    y: 0,
    opacity: 1,
    duration: 1.2, ease: "power3.inOut",
    scrollTrigger: {
        trigger: '.p',
        // scroller: 'body',
        start: 'top 97%',
        end: 'top 97%',
        toggleActions: "play none none reverse"
    }
})
gsap.utils.toArray('.about img').forEach((element) => {
    gsap.fromTo(element, {
        opacity: 0
    }, {
        opacity: 1,
        scrollTrigger: {
            trigger: element,
            scroller: 'body',
            start: 'top 70%',
            end: 'top 50%',
            scrub: 2,
            // markers: true
        }
    })
})
gsap.fromTo('.swiper-slide', {
    opacity: 0
}, {
    opacity: 1,
    ease: 'power1',
    duration: 0.5,
    // stagger: 1,
    start: 'end',
    scrollTrigger: {
        trigger: '.swiper-slide',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 40%',
        scrub: 4,
    }
})

screenSize.add("(min-width: 641px)", () => {
    gsap.fromTo('.mySwiper2', {
        width: '70%',
        ease: 'none',
    }, {
        width: '100%',
        scrollTrigger: {
            trigger: '#pastProjects',
            scroller: 'body',
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
            // markers:true
        }
    }
    )
})
screenSize.add("(max-width: 640px)", () => {
    gsap.fromTo('.mySwiper2', {
        width: '70%',
        ease: 'none',
    }, {
        width: '95%',
        scrollTrigger: {
            trigger: '#pastProjects',
            scroller: 'body',
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
            // markers:true
        }
    }
    )
})

gsap.utils.toArray('.-box').forEach((element) => {   
    gsap.fromTo(element, {
        opacity: 0
    }, {
        opacity: 1,
        ease: 'power1',
        scrollTrigger: {
            trigger: element,
            scroller: 'body',
            start: 'top 80%',
            end: 'top 65%',
            scrub: 2,
        }
    })
})

//========= moving btn 
gsap.to('.Conbtn,.contactImgCon img', {
    y: '20px',
    duration: 1,
    repeat: -1,
    yoyo: true
})

//======== scaling p 
gsap.utils.toArray('.writing').forEach(element => {
    ScrollTrigger.create({
        trigger: element,
        toggleClass: 'writingon',
        toggleActions: 'play none none reverse'
        // start:'center center'
    })
});
gsap.from('.scale', {
    scale: 0.6,
    scrollTrigger: {
        trigger: '.scale',
        scroller: 'body',
        end: 'top 50%',
        scrub: 3,
        // markers:true
    }
})
//======== usefullinks
gsap.from('.scale2', {
    scale: 0.8,
    duration: 1,
    repeat: -1,
    yoyo: true
})


// ==================== hamburgur modification 
//==== sidebar close short function 
function clssidebar() {
    gsap.to("nav .bookmarks", {
        width: 0,
        opacity: 0,
        transition: '1s linear',
        duration: 0.5
    })
    setTimeout(() => {
        document.querySelector('nav .bookmarks').style.display = 'none'
    }, 500)
    document.querySelector('.bluriff').style.cssText = ''
}

document.querySelector('.click').addEventListener('click', () => {
    document.querySelectorAll('.bookmark').forEach((elm) => {
        elm.addEventListener('click', (e) => {
            clssidebar()
        })
    })
    // if its already opened
    if (document.querySelector('nav .bookmarks').style.display == 'block') {
        clssidebar()
        console.log('already open')
    }
    else {
        document.querySelector('nav .bookmarks').style.cssText = 'display:block;'
        gsap.from(".bookmarks", {
            ease: 'back',
            width: 0,
            opacity: 1,
            duration: 0.5,
        })
        console.log(' open')
        document.querySelector('.bluriff').style.cssText = `backdrop-filter: blur(6px); position: fixed;
  height: 100%; overflow: hidden; top: 0px; left: 0; width: 100%; z-index: 2;`
    }
})


// sidebar close
document.querySelector('.close').addEventListener('click', () => {
    clssidebar()
    // console.log('already open')
})
// blur iffect click 
document.querySelector('.bluriff').addEventListener('click', () => {
    clssidebar()
})

//========= navbar height and resize
window.addEventListener('DOMContentLoaded', () => {
    console.log(document.querySelector('nav').getBoundingClientRect())
    document.documentElement.style.setProperty('--navheight', document.querySelector('nav').getBoundingClientRect().height + 'px')
    if (document.body.offsetWidth <= '450') {
        document.documentElement.style.setProperty('--main-width', document.body.offsetWidth - 10 + 'px')
    }
    if (document.body.offsetWidth <= '300') {
        document.documentElement.style.setProperty('--myphoto', document.body.offsetWidth - 50 + 'px')
    }
    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
        document.documentElement.style.setProperty('--navheight', document.querySelector('nav').getBoundingClientRect().height + 'px')
        if (document.body.offsetWidth <= '300') {
            document.documentElement.style.setProperty('--min-width', document.querySelector('nav').offsetWidth - 40 + 'px')
            document.documentElement.style.setProperty('--myphoto', document.body.offsetWidth - 50 + 'px')
            // here we minus the padding of child 
        } else {
            document.documentElement.style.setProperty('--min-width', '300px')
        }
        if (document.body.offsetWidth <= '450') {
            document.documentElement.style.setProperty('--main-width', document.body.offsetWidth - 10 + 'px')
        }
        else {
            document.documentElement.style.setProperty('--main-width', '90vw')
        }
    })
})

//========== seeMore element 
const seemores = document.querySelectorAll('.seeMore')
seemores.forEach((elm) => {
    elm.addEventListener('click', (element) => {
        ScrollTrigger.refresh();        
        if (element.target.previousElementSibling.classList.contains('free')) {
            element.target.innerText = 'See Less...'
            element.target.previousElementSibling.classList.remove('free')
            element.target.previousElementSibling.style.cssText = 'grid-template-rows:auto;'
        }
        else {
            element.target.previousElementSibling.classList.toggle('free')
            element.target.innerText = 'See More...'
            element.target.previousElementSibling.style.cssText = 'grid-template-rows:0;'
        }
    })
})

//========= swiperjs SERVICES SWIPER
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        autoplayDisableOnInteraction: false,
        pauseOnMouseEnter: true,
        resumeOnMouseLeave: true,
        delay: 3000,
    },
    breakpoints: {
        400: {
            slidesPerView: 1,
            effect: "fade"
        },

        650: {
            slidesPerView: 2
        },

        1050: {
            slidesPerView: 3
        }
    }
});

//========= PAST PROJECTS
let swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        autoplayDisableOnInteraction: true,
        pauseOnMouseEnter: true,
        resumeOnMouseLeave: true,
        delay: 3000,
    }
});


//==== input event on inputs
document.querySelectorAll('input[type="number"]').forEach((event) => {
    event.addEventListener('input', (eve) => {
        const errors = document.querySelectorAll('.number-validation').forEach((E) => {
            E.classList.contains('d-none') ? '' : E.classList.add('d-none')
        })
        const inputs = document.querySelectorAll('.input-number');
        const style = "border: 1px solid #6eff00a6;"
        inputs[0].value.length < 10 ? inputs[0].style.cssText = '' : inputs[0].style.cssText = style
        inputs[1].value.length < 10 ? inputs[1].style.cssText = '' : inputs[1].style.cssText = style
    })
})

//====== little form validation
function formcheck(a) {
    const errors = document.querySelectorAll('.number-validation');
    const number = a.number;
    const Wnumber = a.WNumber;
    console.log(number)
    if (number.value.length < 10 || Wnumber.value.length < 10) {
        if (number.value.length < 10) {
            errors[0].classList.remove('d-none')
        } else {
            errors[1].classList.remove('d-none')
        }
        console.log('inter')
        return false
    }
    else {
        return true
    }
}


// number copy 
function numbercopy(event) {
    if (event == 'ayush') {
        navigator.clipboard.writeText(9754742477)
        setTimeout(() => {
            document.querySelector('.copytext').style.display = 'block'
        }, 100)
        setTimeout(() => {
            document.querySelector('.copytext').style.display = 'none'
        }, 2000)
    }
    else if (event == 'owner') {
        navigator.clipboard.writeText(9399503463)
        setTimeout(() => {
            document.querySelector('.copytext').style.display = 'block'
        }, 100)
        setTimeout(() => {
            document.querySelector('.copytext').style.display = 'none'
        }, 2000)
        console.log('owner')
    } else {
        console.log('nothing')
    }
}

// profile photo open 
document.querySelector('.profile').addEventListener('click', () => {
    gsap.to('.myphoto', {
        zIndex: 100,
        duration: 0.5,
        opacity: 1
    })
    document.querySelector('.myphoto').addEventListener('click', () => {
        document.querySelector('.myphoto').style.cssText = 'z-index:-2'
    })
    document.querySelector('.myphoto img').addEventListener('click', (e) => {
        e.stopPropagation()
    })
})
document.querySelector('.remove').addEventListener('click', () => {
    document.querySelector('.myphoto').style.cssText = 'z-index:-2'
})

//======selfmade visionslider 
let index = 0;
function rightslid() { index--; slideshow() }
function leftslid() { index++; slideshow() }

const arrows = document.querySelectorAll('.slid-arrow')
const aboutdivs = document.querySelectorAll('.aboutdivs')

function slideshow() {
    function gsapslide() {
        aboutdivs.forEach((divs) => {
            gsap.fromTo(divs,
                { opacity: 0, scale: 0 },
                {
                    x: `${index * 100}%`,
                    opacity: 1,
                    scale: 1
                })
        })
    }
    if (index == 0 || index == -1 || index == -2) {
        gsapslide()
    }
    else if (index == 1) {
        index = -2
        gsapslide()
    }
    else {
        index = 0
        gsapslide()
    }
    console.log(index)
}

//======== whysolar printing on scroll 
const type = document.querySelectorAll('.type')
const options = {
    threshold: 0.1
}
const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const typed = new Typed('.type', {
                strings: ["By installing solar power plant on your roof top, you'll enjoy reduced electricity bills, and free energy. Say goodbye to unpredictable energy costs and hello to long-term savings. Plus, you'll be reducing your carbon footprint, contributing to cleaner air and a healthier environment for generations to come. Join the solar revolution today and power your home or business with clean, renewable energy. Your brighter tomorrow starts with solar today join the solar revolution !"],
                startDelay: 100,
                typeSpeed: 1,
                autoInsertCss: true,
                loop: false
            });
        }
        if (entry.isIntersecting) observer3.unobserve(entry.target)
    })
}, options)
type.forEach(anm => {
    observer3.observe(anm)
})

//========= Animation on scroll 
const animated = document.querySelectorAll('.animation')
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('add', entry.isIntersecting)
    })
}, {
    threshold: 0
})
animated.forEach((anm) => {
    observer.observe(anm)
})

const inputscale = document.querySelectorAll('form input')
const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('input-scale1', entry.isIntersecting)
    })
}, {
    threshold: 0.3
})
inputscale.forEach((inpscl) => {
    observer5.observe(inpscl)
})

//====== counting on scroll
const counting = document.querySelectorAll('.count')
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let num = 0;
            let count = document.querySelector('.count')
            let cn = Number(count.innerHTML)
            if (cn < 365) {
                let interval;
                count.innerHTML = num;
                interval = setInterval(() => {
                    count.innerText = num + '+';
                    num = num + 2
                    if (num >= 366) {
                        count.innerText = 365 + '+';
                        clearInterval(interval)
                    }
                }, 5)
            }
        }
    })
}, options)
counting.forEach(anm => {
    observer2.observe(anm)
})
