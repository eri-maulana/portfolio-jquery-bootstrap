// event saat link di klik
//   $(".page-scroll").on("click", function(e){
//    // ambil isi href
//    var tujuan = $(this).attr("href");
   
//    // ambil element yang bersangkutan
//    var elemenTujuan = $(tujuan);

//    // pindahkan Scroll
//    $("body").animate({
//       scrollTop: elemenTujuan.offset().top - 200
//    }, 1500,"easeOutBounce");

//    // e.preventDefault();
   
// });

// About
$(window).on('load', function(){
   $('.pKiri').addClass('pMuncul');
   $('.pKanan').addClass('pMuncul');
});

// parallax
$(window).scroll(function () {
   var wScroll = $(this).scrollTop();

   // jumbotron
   $('.jumbotron img').css({
      'transform': 'translate(0px, ' + wScroll/4 + '%)',
   })
   $('.jumbotron h1').css({
      'transform': 'translate(0px, ' + wScroll/2 + '%)',
   })
   $('.jumbotron p').css({
      'transform': 'translate(0px, ' + wScroll/1.2 + '%)',
   })

   // portfolio
   if ( wScroll > $('.portfolio').offset().top - 200) {
      $('.portfolio .img-thumbnail').each(function (i) {
         setTimeout(function () {
            $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
         }, 500 * i);
      });
   }

});