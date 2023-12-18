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
                  typeSpeed: 5,
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
                  }, 10)
              }
          }
      })
  }, options)
  counting.forEach(anm => {
      observer2.observe(anm)
  })

  //===== gsap little animation 
  window.addEventListener('load', () => {
      console.log('page fully loaded')
      var tm = gsap.timeline()
      tm.to('.loadcontainer', {
          top: '-120%',
          duration: 0.5,
          opacity: 0,
          ease: Power4,
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
          onComplete: () => {
              if (document.body.offsetWidth > '850') {
                  gsap.from('.bookmark', {
                      y: -50,
                      duration: 1,
                      // stagger:0.3,
                      opacity: 0,
                  })
                  console.log('badhai')
              }
          }
      }).from(".imgs", {
          x: '-100%',
          delay: 0,
          ease: 'power4',
          duration: 0.2,
          repeat: -1,
          repeatDelay: 3,
          stagger: 4
      })
  })
  // ======= gsap scrolltrigger 
  gsap.from('.white', {
      scale: 0.3,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: {
          trigger: '.white',
          scroller: 'body',
          start: 'top 105%',
          end: 'top 70%',
          scrub: 2,
      }
  })
  gsap.from('.p', {
      x: '-10%',
      // duration: 0.7,
      scrollTrigger: {
          trigger: '.p',
          scroller: 'body',
          start: 'top 90%',
          end: 'top 50%',
          scrub: 2,
          webkitFilter: "blur" + 2 + "px)"
      }
  })
  gsap.from('.about img', {
      opacity: 0,
      scrollTrigger: {
          trigger: '.about img',
          scroller: 'body',
          start: 'top 70%',
          end: 'top 40%',
          scrub: 2,
          // markers:true
      }
  })
  gsap.from('.swiper-slide', {
      opacity: 0,
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
  gsap.fromTo('.mySwiper2', {
      width: '70%',
      ease: 'none',
  }, {
      width: '100%',
      scrollTrigger: {
          trigger: '#pastProjects',
          scroller: 'body',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
          // markers:true
      }
  }
  )
  gsap.from('.-box', {
      opacity: 0,
      ease: 'power1',
      duration: 0.4,
      stagger: 0.3,
      scrollTrigger: {
          trigger: '.-box',
          scroller: 'body',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 2,
      }
  })


  //========= moving btn 
  gsap.to('.Conbtn,.contactImgCon img', {
      y: '20px',
      duration: 1,
      repeat: -1,
      yoyo: true
  })

  //======== scaling p 
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
      document.documentElement.style.setProperty('--navheight', document.querySelector('nav').offsetHeight + 'px')
      if (document.body.offsetWidth <= '450') {
          document.documentElement.style.setProperty('--main-width', document.body.offsetWidth - 10 + 'px')
      }
      if (document.body.offsetWidth <= '300') {
          document.documentElement.style.setProperty('--myphoto', document.body.offsetWidth - 50 + 'px')
      }
      window.addEventListener('resize', () => {
          document.documentElement.style.setProperty('--navheight', document.querySelector('nav').offsetHeight + 'px')
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
      })
  })

  //========== seeMore element 
  const seemores = document.querySelectorAll('.seeMore')
  seemores.forEach((elm) => {
      elm.addEventListener('click', (element) => {
          console.log(element.target.previousElementSibling)
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
  var swiper = new Swiper(".mySwiper", {
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

          500: {
              slidesPerView: 2
          },

          801: {
              slidesPerView: 3
          }
      }

  });

  //========= PAST PROJECTS
  var swiper = new Swiper(".mySwiper2", {
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
          const style = "border: 1px solid green; box-shadow: 0 0 5px 2px #6eff00a6"
          inputs[0].value.length < 10 ? inputs[0].style.cssText = '' : inputs[0].style.cssText = style
          inputs[1].value.length < 10 ? inputs[1].style.cssText = '' : inputs[1].style.cssText = style
      })
  })

  //====== little form validation
  function formcheck(a) {
      const errors = document.querySelectorAll('.number-validation')
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
          }, 1000)
      }
      else if (event == 'owner') {
          navigator.clipboard.writeText(9399503463)
          setTimeout(() => {
              document.querySelector('.copytext').style.display = 'block'
          }, 100)
          setTimeout(() => {
              document.querySelector('.copytext').style.display = 'none'
          }, 1000)
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
  })
  document.querySelector('.remove').addEventListener('click', () => {
      document.querySelector('.myphoto').style.cssText = 'z-index:-2'
  })

  //======selfmade visionslider 
  let index = 0;
  // function rightslid() { index !== -2 ? index-- : ''; slideshow() }
  // function leftslid() { index !== 0 ? index++ : ''; slideshow() }
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