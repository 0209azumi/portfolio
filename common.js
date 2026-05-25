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
  
      // ★ マウスから少し離して追従（距離調整できる）
      const offset = 20; // 10〜35 くらいが上品
      $cursor.css({
        top: cursorY + offset + "px",
        left: cursorX + offset + "px"
      });
  
      requestAnimationFrame(animateCursor);
    }
    animateCursor();
  });
  