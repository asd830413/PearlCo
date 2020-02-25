

  // 1.點加入購物車有click事件，並且console.log
  // 2.把console.log的內容改成印出商品價錢
  // 3.在把價錢的變數放進tracking code
  // 加入購物車

// $('.buy-btn').siblings('.discount')

// $('.buy-btn').siblings('.discount').find('span')

// $('.buy-btn').siblings('.discount').find('span').text()
// "$1150"


$(function(){
  $('.buy-btn').click(function(){
    var product_price =$('.buy-btn').siblings('.discount').find('span').text();

    console.log(product_price.replace('$', ''));

    fbq('track', 'AddToCart', {
    value: product_price,
    currency: 'TWD',
  });
  });
});









  // $(function(){
  //   console.log('傳送聯絡事件')
  // })


// 取代
// var a = '$210'
// undefined
// a.replace('$', '')
// "210"
// a.replace('$', '999')
// "999210" //
