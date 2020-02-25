// $(function(){
//   console.log($('.pearlcoPureWaterText').length);
//   $('.pearlcoPureWaterText').click(function(){
//     var text = $(this).find('h1');

//     if(text.attr('data-status') == 'fadeOut'){
//       helloFadeIn(text);
//     } else{
//       helloFadeOut(text);
//     }

//   });
//  });


// function helloFadeIn(helloText){
//   helloText.fadeIn('slow',function(){
//     $(this).attr('data-status', 'fadeIn');
//   });
// };

// function helloFadeOut(helloText){
//   helloText.fadeOut('slow',function(){
//     $(this).attr('data-status', 'fadeOut');
//   });
// };



// $('.pearlcoPureWaterText').click(function(){
//   $('h1').fadeToggle();
// });


// $(window).scroll(function (event) {
//         var scroll = $(window).scrollTop();
//         console.log(scroll)
//         Do something

//         $('.certificateIcons > img').eq(3).offset().top



//     });





$(function(){
  $('.pearlcoPureWaterText').click(function(){
    var fadeInOut = $(this).find('h1');

    if (fadeInOut.attr('data-status') == 'fadeOut'){
      helloFadeIn(fadeInOut);
    } else{
      helloFadeOut(fadeInOut);
    }
  });
});

function helloFadeIn (helloFade){
  helloFade.fadeIn('slow', function(){
    $(this).attr('data-status', 'fadeIn');
  });

}

function helloFadeOut (helloFade){
  helloFade.fadeOut('slow', function(){
     $(this).attr('data-status', 'fadeOut');
  });

}
