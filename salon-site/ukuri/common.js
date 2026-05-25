$(function () {

  /* ---------- header scroll hide ---------- */
  let lastScrollTop = 0;

  $(window).on('scroll', function () {
    const current = $(this).scrollTop();

    if (current > lastScrollTop && current > 180) {
      $('header').addClass('is-hidden');
    } else {
      $('header').removeClass('is-hidden');
    }
    lastScrollTop = current;
  });


  /* ---------- nav underline ---------- */
  const NAV_DURATION = 850;

  $('.header-nav a')
    .on('mouseenter', function () {
      $(this).removeClass('is-out is-reset').addClass('is-in');
    })
    .on('mouseleave', function () {
      const $a = $(this);
      $a.removeClass('is-in is-reset').addClass('is-out');

      setTimeout(() => {
        $a.addClass('is-reset');
        $a[0].offsetHeight;
        $a.removeClass('is-out is-reset');
      }, NAV_DURATION);
    });


  /* ---------- page top ---------- */
  const $pagetop = $('#js-pagetop');
  const $footer = $('.site-footer');

  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();
    const windowHeight = $(this).height();
    const footerTop = $footer.offset().top;

    if (scrollTop > 400 && scrollTop + windowHeight < footerTop) {
      $pagetop.addClass('is-show');
    } else {
      $pagetop.removeClass('is-show');
    }
  });

  $pagetop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
  });


  /* ---------- page transition (fade OUT only / no flicker) ---------- */
  const $cover = $('.page-transition');
  const $logo  = $('.transition-logo');
  const TRANSITION_DURATION = 800;

  $(document).on('click', 'a', function (e) {
    const href = $(this).attr('href');

    if (
      !href ||
      href === '#' ||
      $(this).attr('target') === '_blank' ||
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#')
    ) return;

    e.preventDefault();

    // 二重クリック防止
    if ($cover.hasClass('is-active')) return;

    $cover.addClass('is-active');
    $logo.addClass('is-active');

    setTimeout(() => {
      window.location.href = href;
    }, TRANSITION_DURATION);
  });

});
