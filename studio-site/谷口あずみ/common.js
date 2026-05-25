$(function() {
  $('body').fadeIn(1500, function(){
    $('.hero-h1').addClass('is-show');
    setTimeout(function(){
      $('.hero-sub').addClass('is-show');
    }, 120); // 
  });
});



  $(function() {
    const $cursor = $(".cursor-follow");
  
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
  
    // マウス位置を取得
    $(window).on("mousemove", function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  
    // カーソル本体を少し遅れて追従
    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
  
      // ★ マウスから少し離して追従
      const offset = 28;
      $cursor.css({
        top: cursorY + offset + "px",
        left: cursorX + offset + "px"
      });
  
      requestAnimationFrame(animateCursor);
    }
    animateCursor();
  
//  ホバー時のカーソル変化
  $("a, button, .hover-target").on("mouseenter", function() {
    $(".cursor-follow").addClass("hover");
  });
  
  $("a, button, .hover-target").on("mouseleave", function() {
    $(".cursor-follow").removeClass("hover");
  });
  $("footer").on("mouseenter", function() {
    $(".cursor-follow").addClass("footer-zone");
  });
  
  $("footer").on("mouseleave", function() {
    $(".cursor-follow").removeClass("footer-zone");
  });
  
  });


// スクロール時に縮小
  let scrolling;

$(window).on("scroll", function () {
  $(".cursor-follow").addClass("is-scrolling");

  clearTimeout(scrolling);
  scrolling = setTimeout(function () {
    $(".cursor-follow").removeClass("is-scrolling");
  }, 180);
});



  // ナビ
  function navSet() {
    var menu = $('.nav'),
    offset = menu.offset();
    $(window).scroll(function () {
      if($(window).scrollTop() > offset.top) {
        menu.addClass('fixed');
      } else {
        menu.removeClass('fixed');
      }
    });
  }

  let windowWidth = $(window).innerWidth();
  $(function(){
    if(windowWidth > 480){
      navSet();
    }
  });
  $(window).resize(function(){
    windowWidth = $(window).innerWidth();
    if(windowWidth > 480){
      navSet();
    }
  });


// フェードイン

  document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".fadein");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1
    });

    targets.forEach(target => observer.observe(target));
});


// topに戻る

$(function () {
  const $pageTop = $('#js-pagetop');
  const $footer = $('footer'); // フッター要素を取得

  $(window).on('scroll', function () {
    const scroll = $(this).scrollTop();
    const windowHeight = $(this).height();
    const footerTop = $footer.offset().top;

    // 通常の「300pxより下で表示」
    if (scroll > 300) {
      $pageTop.addClass('is-show');
    } else {
      $pageTop.removeClass('is-show');
    }

    // ★フッターが画面に入りそうになったらボタンを消す
    if (scroll + windowHeight > footerTop) {
      $pageTop.removeClass('is-show');
    }
  });

  // トップへ戻る
  $pageTop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
  });
});


// スクロールの線
$(function(){
  const $bar = $('.scroll-progress');
  if(!$bar.length) return;

  function update(){
    const doc = document.documentElement;
    const body = document.body;

    const scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop || 0;
    const scrollHeight = Math.max(doc.scrollHeight, body.scrollHeight);
    const max = scrollHeight - window.innerHeight;

    if(max <= 0){
      $bar.css('width', '0%');
      return;
    }

    const p = (scrollTop / max) * 100;
    $bar.css('width', p + '%');
  }

  $(window).on('scroll resize', update);
  update();
});


$(function(){
  const path = location.pathname.split('/').pop() || 'index.html';

  $('.nav a').each(function(){
    const href = $(this).attr('href');
    if(!href) return;

    // ./about.html みたいな相対パスも対応
    const file = href.split('/').pop();

    if(file === path){
      $(this).addClass('is-current');
    }
  });
});



// ハンバーガーメニュー
$(function(){
  $('#js-menu').on('click', function(){
    $(this).toggleClass('is-open');
    $('header ul').toggleClass('is-open');
  });

  $('header ul a').on('click', function(){
    $('#js-menu').removeClass('is-open');
    $('header ul').removeClass('is-open');
  });
});
