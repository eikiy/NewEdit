$(function(){
　$(window).load(function(){
　　$(window).bind('scroll resize', function(){
　　var $this = $(this);
　　var $this_Top=$this.scrollTop();
  var $this_Top2=$this.scrollTop();
　　//當高度小於
　　if($this_Top > 400){
  $('.top-header').addClass('top-header-bg')
  // $('.top-bar').stop(true, true).fadeOut(0);
　　　}
　　　　if($this_Top < 400){
　　　　$('.top-header').removeClass('top-header-bg');
　　　 }
  if($this_Top2 > 180){
  $('.TopH2').addClass('top-header-bg')
  // $('.top-bar').stop(true, true).fadeOut(0);
　　　}
　　　　if($this_Top2 < 180){
　　　　$('.TopH2').removeClass('top-header-bg');
　　　 }
　　}).scroll();
　});
});


//點右邊top
 $(function(){
  $(window).scroll(function(){
    var HEIGHT = $(window).scrollTop() + $(window).innerHeight()-110;
    if( $(window).scrollTop() > 400 ){
      $("#TOP").stop(true,false).animate({top:HEIGHT},500);
    }else{
      $("#TOP").stop(true,false).animate({bottom:-60},900);
    }
  });
  $("#TOP").click(function goTop(){
    $("html,body").stop(true,false).animate({scrollTop:0},900);
  });
  return false;
 });

 $(function(){
  //語系
  $("ul.userBox li.language").hover(function(){
        $(this).find(".theUserBox").stop(true, true).fadeToggle(0);
    return false;
    });

  // 通知
  $("ul.userBox li.noticeBox").click(function(){
        $(this).find(".notificationBox").stop(true, true).fadeToggle(0);
    return false;
    });

  // user頭照
  $("ul.userBox li.profile_photo").click(function(){
        $(this).find(".theUserBox").stop(true, true).fadeToggle(0);
    return false;
    });

 });

