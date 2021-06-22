'use strict';
 
 let audioElem;

    function PlaySound() {
      audioElem = new Audio();
      audioElem.src = "image/music/whereislove.mp3";
      audioElem.play();
    }
    function StopSound(){
      audioElem.pause();
  }
   function Volume(flag) {
      if (0 < flag) {
        if (0.9 < audioElem.volume) {
          audioElem.volume = 1;
        } else {
          audioElem.volume += 0.1;
        }
      } else {
        if (audioElem.volume < 0.1) {
          audioElem.volume = 0;
        }
        else {
          audioElem.volume -= 0.1;
        }
      }
    }
  
  $(document).ready(function() {
    $('#open_nav').on('click', function() {
        $('#wrapper, #nav').toggleClass('show');
    });
});
   $(function(){
  let imgs = $("#slideshow > li");
  let imgLen = imgs.length;
  let count = 0;
  function changeImg(){
    //スライド切替のポイント（配列を順番に処理し終わったら配列の先頭に戻る計算式）
    count = (count + 1) % imgLen; 
    imgs.removeClass("showSlide").eq(count).addClass("showSlide");
  }
  setInterval(changeImg, 6000); //切替の間隔（ミリ秒）
})
   $(function () {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが500に達したらボタンを表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スルスルっとスクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
   $(function () {
  let audio = $("#audio").get(0);
  let isPlaying = false;
  $("#btn").on("click", function () {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  });
  audio.onplaying = function() {
    isPlaying = true;
  };
  audio.onpause = function() {
    isPlaying = false;
  };
});
    $(function () {
  let audio = $("#saga").get(0);
  let isPlaying = false;
  $("#asahi").on("click", function () {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  });
  audio.onplaying = function() {
    isPlaying = true;
  };
  audio.onpause = function() {
    isPlaying = false;
  };
});
     $(function () {
  let audio = $("#music").get(0);
  let isPlaying = false;
  $("#tune").on("click", function () {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  });
  audio.onplaying = function() {
    isPlaying = true;
  };
  audio.onpause = function() {
    isPlaying = false;
  };
});
    $(function () {
  let audio = $("#saga").get(0);
  let isPlaying = false;
  $("#asahi").on("click", function () {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  });
  audio.onplaying = function() {
    isPlaying = true;
  };
  audio.onpause = function() {
    isPlaying = false;
  };
});
  
//   $(function() {

//   //画像にマウスを乗せたら発動
//   $('img').hover(function() {

//     //画像のsrc属性が別画像のパスに切り替わる
//     $(this).attr('src', 'image/fragofusa.jpg');

//   //ここにはマウスを離したときの動作を記述
//   }, function() {

//     //画像のsrc属性を元の画像のパスに戻す
//     $(this).attr('src', 'image/route66.jpg');

//   });
// });

//   let audioElem;

//     function PlaySound() {
//       audioElem = new Audio();
//       audioElem.src = "whereislove.mp3";
//       audioElem.play();
//     }
//     function StopSound(){
//       audioElem.pause();
//   }
//   $(document).ready(function() {
//     $('#open_nav').on('click', function() {
//         $('#wrapper, #nav').toggleClass('show');
//     });
// });