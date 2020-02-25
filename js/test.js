$(function(){ // = document ready
  console.log( $(".pearlcoPureWaterText").length )

});


// $(function(){

// });





// console.log('load1')

// $(function(){
//   // $( '.pearlcoPureWaterText' ).click(function() {
//   //   $( 'h1' ).fadeOut( 'slow', function() {
//   //     textEffect();
//   //   });
//   // });

//   $(document).on('click', function(){
//     textEffect()
//   });


//   $(document).off('click', function(){
//     textEffect()
//   });

// });



// function textEffect(){


//   $('.pearlcoPureWaterText').click(function(){
//     $('h1').fadeOut( 'slow', function() {
//       console.log('hi')
//       textEffect();
//     });
//   });
// }

// console.log('load2')
// $()
// function(){}
// function(){

// }

// $(function(){

// })

// $(function(){
//   $('.pearlcoPureWaterText').click(function(){
//     $('h1').fadeToggle()
//   });
// });


//FADE IN +　FADE OUT//
$(function(){
  $('.pearlcoPureWaterText').click(function(){
    var item = $(this).find('h1');

    if( item.attr('data-status') == 'fadeOut' ){
      helloFadeIn(item)
    }else{
      helloFadeOut(item)
    }

  });
});



function helloFadeIn(helloitem){
  helloitem.fadeIn('slow', function(){
    $(this).attr('data-status', 'fadeIn');
  });
}

function helloFadeOut(helloitem){
  $(helloitem).fadeOut('slow', function(){
    $('h1').attr('data-status', 'fadeOut');
  });
}




window.location.

function
get data-tag text
this

click
hover
scroll -> 讓水變得更加甘甜順口 (console.log(hello1))

歐洲母親幼童研究所測試通過 (console.log(hello2))

17 © PearlCo Taiwan (console.log(hello3))
