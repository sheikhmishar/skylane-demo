window.onload = function () {
  let bar = document.querySelectorAll('.bar');
  bar.forEach((progress) => {
    let value = progress.getAttribute('data-value');
    progress.style.width = `${value}%`;
    let count = 0;
    let progressAnimation = setInterval(() => {
      count++;
      progress.setAttribute('data-text', `${count}%`);
      if (count >= value) {
        clearInterval(progressAnimation);
      }
    }, 15);
  });
};

// navbar sticky 
const navel = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (scrollY < 56) {
    navel.classList.remove("navbar-scrolled");
    navel.classList.add("navbar-margin");
  }

  if (window.scrollY > 60) {
    console.log("clicked");
    navel.classList.add("navbar-scrolled");
    navel.classList.remove("navbar-margin");
  }
});

// navbar sticky for mobile
const navele = document.querySelector(".nav-ele");
window.addEventListener("scroll", () => {
  if (scrollY < 56) {
    navele.classList.remove("navbar-scroll-mob");
    navele.classList.add("navbar-mob");
  }

  if (window.scrollY > 60) {
    console.log("clicked mobile");
    navele.classList.add("navbar-scroll-mob");
    navele.classList.remove("navbar-mob");
  }
});

$(document).ready(function(){
    // Initialize the Slick Carousel      
    $('.responsive').slick({
dots: true,
infinite: true,
speed: 300,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
arrows: false,
autoplaySpeed: 2000,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});
  });

  $(document).ready(function(){
    // Initialize the Slick Carousel      
    $('.testimonial').slick({
dots: true,
infinite: true,
speed: 300,
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
arrows: false,
autoplaySpeed: 2000,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});
  });

  $(document).ready(function(){
    // Initialize the Slick Carousel      
    $('.univ').slick({
dots: false,
infinite: true,
speed: 300,
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
arrows: false,
autoplaySpeed: 2000,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});
  });