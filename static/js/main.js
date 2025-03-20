AOS.init({
  duration: 800,
  easing: 'slide'
});

(function($) {
  'use strict';

  const fullHeight = function() {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function() {
      $('.js-fullheight').css('height', $(window).height());
    });
  };
  fullHeight();

  // loader
  const loader = function() {
    setTimeout(function() {
      if ($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  // Burger Menu
  const burgerMenu = function() {
    $('body').on('click', '.js-fh5co-nav-toggle', function(event) {
      event.preventDefault();

      if ($('#ftco-nav').is(':visible')) {
        $(this).removeClass('active');
      } else {
        $(this).addClass('active');
      }
    });
  };
  burgerMenu();

  const onePageClick = function() {
    $(document).on('click', '#ftco-nav a[href^="#"]', function(event) {
      event.preventDefault();

      const href = $.attr(this, 'href');

      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 70
      }, 500, function() {
        // window.location.hash = href;
      });
    });
  };

  onePageClick();

  $('nav .dropdown').hover(function() {
    const $this = $(this);
    // timer;
    // clearTimeout(timer);
    $this.addClass('show');
    $this.find('> a').attr('aria-expanded', true);
    // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
    $this.find('.dropdown-menu').addClass('show');
  }, function() {
    const $this = $(this);
    $this.removeClass('show');
    $this.find('> a').attr('aria-expanded', false);
    $this.find('.dropdown-menu').removeClass('show');
  });

  // scroll
  const scrollWindow = function() {
    $(window).scroll(function() {
      const $w = $(this);
      const st = $w.scrollTop();
      const navbar = $('.ftco_navbar');
      const sd = $('.js-scroll-wrap');

      if (st > 150) {
        if (!navbar.hasClass('scrolled')) {
          navbar.addClass('scrolled');
        }
      }
      if (st < 150) {
        if (navbar.hasClass('scrolled')) {
          navbar.removeClass('scrolled sleep');
        }
      }
      if (st > 350) {
        if (!navbar.hasClass('awake')) {
          navbar.addClass('awake');
        }

        if (sd.length > 0) {
          sd.addClass('sleep');
        }
      }
      if (st < 350) {
        if (navbar.hasClass('awake')) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }
        if (sd.length > 0) {
          sd.removeClass('sleep');
        }
      }
    });
  };
  scrollWindow();

  const counter = function() {
    $('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function(direction) {
      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
        const comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
        $('.number').each(function() {
          const $this = $(this);
          const num = $this.data('number');
          $this.animateNumber(
            {
              number: num,
              numberStep: comma_separator_number_step
            }, 7000
          );
        });
      }
    }, { offset: '95%' });
  };
  counter();

  const contentWayPoint = function() {
    let i = 0;
    $('.ftco-animate').waypoint(function(direction) {
      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function() {
          $('body .ftco-animate.item-animate').each(function(k) {
            const el = $(this);
            setTimeout(function() {
              const effect = el.data('animate-effect');
              if (effect === 'fadeIn') {
                el.addClass('fadeIn ftco-animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft ftco-animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight ftco-animated');
              } else {
                el.addClass('fadeInUp ftco-animated');
              }
              el.removeClass('item-animate');
            }, k * 50, 'easeInOutExpo');
          });
        }, 100);
      }
    }, { offset: '95%' });
  };
  contentWayPoint();

  const goHere = function() {
    $('.mouse-icon').on('click', function(event) {
      event.preventDefault();

      $('html,body').animate({
        scrollTop: $('.goto-here').offset().top
      }, 500, 'easeInOutExpo');

      return false;
    });
  };
  goHere();

  // $("#myScrollspy").scrollspy({ offset: -75 });

  const TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    const that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

  window.onload = function() {
    const elements = document.getElementsByClassName('txt-rotate');
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-rotate');
      const period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
    document.body.appendChild(css);
  };
})(jQuery);

// this makes the height of each page equal to the height of the window
// $('.page').css('height', $( window ).height());

// scrollspy section
(function($) {
  // variable that will hold the href attr of the links in the menu
  const sections = [];
  // variable that stores the id of the section
  let id = false;
  // variable for the selection of the anchors in the navbar
  const $navbara = $('#navi a');

  $navbara.click(function(e) {
    // prevent the page from refreshing
    e.preventDefault();
    // set the top offset animation and speed
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 180
    }, 500);
    hash($(this).attr('href'));
  });

  // select all the anchors in the navbar one after another
  $navbara.each(function() {
    // and adds them in the sections variable
    sections.push($($(this).attr('href')));
  });
  $(window).scroll(function(e) {
    // scrollTop retains the value of the scroll top with the reference at the middle of the page
    const scrollTop = $(this).scrollTop() + ($(window).height() / 2);
    // cycle through the values in sections array
    for (const i in sections) {
      const section = sections[i];
      // if scrollTop variable is bigger than the top offset of a section in the sections array then
      if (scrollTop > section.offset().top) {
        var scrolled_id = section.attr('id');
      }
    }
    if (scrolled_id !== id) {
      id = scrolled_id;
      $($navbara).removeClass('current');
      $('#navi a[href="#' + id + '"]').addClass('current');
    }
  });
})(jQuery);

hash = function(h) {
  if (history.pushState) {
    history.pushState(null, null, h);
  } else {
    location.hash = h;
  }
};

$(function() {
  $('.progress').each(function() {
    const value = $(this).attr('data-value');
    const left = $(this).find('.progress-left .progress-bar');
    const right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)');
      } else {
        right.css('transform', 'rotate(180deg)');
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)');
      }
    }
  });

  function percentageToDegrees(percentage) {
    return percentage / 100 * 360;
  }
});
