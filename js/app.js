document.addEventListener('DOMContentLoaded', () => {

  /* SCROLL TO INTRO */

  const navInit = () => {
    const nav = document.getElementById('nav'),
          links = document.querySelectorAll('.nav_links'),
          sections = document.querySelectorAll('.section'),
          intro = document.getElementById('intro'),
          up_to_intro = document.getElementById('up_to_intro');

    if (window.innerWidth > 1023) {
      sections.forEach(section => {
        if (window.pageYOffset + document.querySelector('nav').offsetHeight + 91 >= section.offsetTop) {
          links.forEach(link => {
            link.classList.remove('active')
            if (link.dataset.section === section.dataset.section) {
              link.classList.add('active')
            }
          })
        }
        if (window.pageYOffset + document.querySelector('nav').offsetHeight + 91 < intro.offsetHeight) {
          links.forEach(link => {
            link.classList.remove('active')
          })
        }
      })
    } else {
      sections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop) {
          links.forEach(link => {
            link.classList.remove('active')
            if (link.dataset.section === section.dataset.section) {
              link.classList.add('active')
            }
          })
        }
        if (window.pageYOffset < intro.offsetHeight) {
          links.forEach(link => {
            link.classList.remove('active')
          })
        }
      })
    };

    if (window.pageYOffset > 200) {
      up_to_intro.classList.add('active');
    } else {
      up_to_intro.classList.remove('active');
    }

  }
  navInit()
  window.addEventListener('scroll', () => {
    navInit()
  })
  window.addEventListener('resize', () => {
    navInit()
  })




  /* BURGER_HIDE_ON_SCROLL */

  let lastScroll = 0;
  const burger = document.getElementById('burger'),
        defaultOffset = 200,
        scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop,
        burgerHide = () => burger.classList.contains('hide');

  window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !burgerHide() && scrollPosition() > defaultOffset) {
      burger.classList.add('hide');
    } else if (scrollPosition() < lastScroll && burgerHide()) {
      burger.classList.remove('hide');
    }
    lastScroll = scrollPosition();
  })




  /* BURGER */

  burgerActive();

  function burgerActive() {

    let burger = document.getElementById('burger'),
        nav = document.getElementById('nav'),
        body = document.getElementsByTagName('body'),
        background_block = document.getElementById('background_block'),
        nav_links = document.querySelectorAll('.nav_links');

    burger.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('active');
      nav.classList.toggle('active');
      background_block.classList.toggle('active');
      body[0].classList.toggle('block');
    })

    background_block.addEventListener('click', (event) => {
      event.currentTarget.classList.remove('active');
      nav.classList.remove('active');
      body[0].classList.remove('block');
      burger.classList.remove('active');
    })

    for (let i=0; nav_links.length > i; ++i) {
      nav_links[i].addEventListener('click', (event) => {
        event.preventDefault();
        nav.classList.remove('active');
        body[0].classList.remove('block');
        burger.classList.remove('active');
        background_block.classList.remove('active');
      })
    }

  };





  /* CONTACT_CONTENT */

  contactClick();

  function contactClick() {
    let contacts = document.querySelector('.contact_us_click'),
        contacts_content = document.querySelector('.contacts_content'),
        contacts_body = document.querySelector('.contacts');

    if (window.innerWidth < 1024) {
      contacts.addEventListener('click', () => {
        event.currentTarget.classList.toggle('active');
        contacts_body.classList.toggle('active');
        contacts_content.classList.toggle('active');
      })
    }
  }











  /* GALLERY */

  gallerySwitch();

  function gallerySwitch() {

    let gallery_head = document.querySelectorAll('.gallery_head'),
        gallery_items = document.querySelectorAll('.gallery_items');

    for (let i=0; gallery_head.length > i; ++i) {
      gallery_head[i].addEventListener('click', (event) => {
        for (let i=0; gallery_head.length > i; ++i) {
          gallery_head[i].classList.remove('active');
        }
        for(let i=0; gallery_items.length > i; ++i) {
          gallery_items[i].classList.remove('active');
        }
        gallery_items[i].classList.add('active');
        event.currentTarget.classList.add('active');
      })
    }



  }




  /* POPUP SLIDER */

  const swiperKitt = new Swiper('.slider_kittens', {
    loop: false,
    speed: 1000,
    spaceBetween: 15,
    parallax: true,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next' 
    }
  })



  popupSlider();

  function popupSlider() {
    let popup_container = document.querySelector('.popup'),
        popup_close = document.querySelector('.close_popup'),
        slider_item_kittens = document.querySelectorAll('.gallery_photos_kittens'),
        body = document.getElementsByTagName('body');

    for (let i=0; slider_item_kittens.length > i; ++i) {
      slider_item_kittens[i].addEventListener('click', (event) => {
        event.preventDefault();

        popup_container.classList.add('active');
        body[0].classList.add('block');
      })
    };

    popup_close.addEventListener('click', (event) => {
      popup_container.classList.remove('active');
      body[0].classList.remove('block');
    });
  };




})




/* DATA_SCROLL */

$(function() {

  $("[data-scroll]").click(function(event) {
    event.preventDefault();


    let blockId = $(this).data('scroll'),
        nav_links = $('.nav_links');

    if ($(window).width() > 1023) {
      let blockOffset = $(blockId).offset().top - document.querySelector('nav').offsetHeight - 89;

      $("html, body").animate ({
        scrollTop: blockOffset
      }, 900);
    } else {
      let blockOffset = $(blockId).offset().top;

      $("html, body").animate ({
        scrollTop: blockOffset
      }, 900);
    }

  });








})
