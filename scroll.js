function Myslider_init() {
    const swiper = new Swiper('.my-slider-1 .swiper-container', {
      slidesPerView: 1,
      navigation: {
        prevEl: '.my-slider-1__nav-btn-left',
        nextEl: '.my-slider-1__nav-btn-right',
      },
      pagination: {
        el: '.my-slider-1__pagination',
        clickable: true,
        renderBullet: function(index, className) {
          let url = "";
          if(index == 0) {
            url = '<img src="https://picsum.photos/id/445/100/100">';
          } else if ( index == 1 ) {
            url = '<img src="https://picsum.photos/id/862/100/100">';
          } else if ( index == 2 ) {
            url = '<img src="https://picsum.photos/id/365/100/100">';
          } else if ( index == 3 ) {
            url = '<img src="https://picsum.photos/id/558/100/100">';
          } else if ( index == 4 ) {
            url = '<img src="https://picsum.photos/id/74/100/100">';
          } else if ( index == 5 ) {
            url = '<img src="https://picsum.photos/id/85/100/100">';
          } else if ( index == 6 ) {
            url = '<img src="https://picsum.photos/id/455/100/100">';
          } else if ( index == 7 ) {
            url = '<img src="https://picsum.photos/id/361/100/100">';
          }
          return '<div class="' + className + '">' + url + '</div>';
        }
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: false,
    });
  }
  
  Myslider_init();
  
  // gsap scrollTrigger
  
  function ProdList_init() {
    let x = 400;
    for(let i = 1; i <= 10; i++ ) {
      if(i > 4 && i < 9) {
        x = -400;
      } else {
        x = 400;
      }
      gsap.from(".prod-list > ul > li:nth-child(" + i + ")", {
        duration: 4,
        x: x,
        opacity: 0,
        ease: "circ.out",
        scrollTrigger: {
          start: "top+=100px 100%-=150px",
          end: "top 100%-=200px",
          trigger: ".prod-list > ul > li:nth-child(" + i + ")",
          // markers: true,
          scrub: 2,
        }
      })
    }
  }
  
  ProdList_init();