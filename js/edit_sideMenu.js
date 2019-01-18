
 $(function(){
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

  // 點下拉箭頭展開次選單:編輯、命名、複製、刪除
  $(".more_function").click(function(){
      $(this).parent().parent().next(".subBox").stop(true, true).slideToggle({duration: '3000', queue: false});
    return false;
    });

  // link連結編輯
  $(".go_edit_link").click(function(){
      $(this).parent().parent().parent().next(".edit_link").stop(true, true).slideToggle();
    return false;
    });

  // hover? 出現提醒說明
  $(".top_headline a.note").hover(function(){
      $(this).find(".note_info").stop(true, true).fadeToggle({duration: '3000', queue: false});
    return false;
    });

  // 右邊tool：背景設定
  $(".btn_item a.section-bg").click(function(){
        $(this).parent().next(".bg-editor-Box").stop(true, true).fadeToggle(0);
    return false;
    });  //不知道為啥他點i的地方沒反應，所以又寫了一個針對i的 >"<
  $(".btn_item a.section-bg i").click(function(){
        $(this).parent().parent().next(".bg-editor-Box").stop(true, true).fadeToggle(0);
    return false;
    });

  // 右邊tool：選擇圖片
  $(".top_title .open_images").click(function(){
      $(this).parent().find( "p a").removeClass("btn_in")
      $(this).find( "p a").addClass("btn_in")
      $(this).parent().parent().find(".select-bg-videos").stop(true, true).hide();
      $(this).parent().parent().find(".select-bg-images").stop(true, true).show();
      $(this).parent().parent().find(".bg_translucent").stop(true, true).show();
    return false;
    });
  // 右邊tool：選擇影片
  $(".top_title .open_videos").click(function(){
      $(this).parent().find( "p a").removeClass("btn_in")
      $(this).find( "p a").addClass("btn_in")
      $(this).parent().parent().find(".select-bg-images").stop(true, true).hide();
      $(this).parent().parent().find(".bg_translucent").stop(true, true).hide();
      $(this).parent().parent().find(".select-bg-videos").stop(true, true).show();

    return false;
    });

  $(".add-the-video").click(function(){
      $(this).parent().next( ".upload_video").stop(true, true).fadeToggle();
    return false;
    });

 });


// 左邊選單
$(function(){
    $('a.btn_sideMenu').click(function () {
        if (!$('.dLeft').hasClass('menu-left')) {
            $('.dLeft').addClass('menu-left');
            $('#rightEditBox').removeClass('rightEditBox_w100');
        } else {
            $('.dLeft').removeClass('menu-left');
            $('#rightEditBox').addClass('rightEditBox_w100');
        }
    });
});

// 預覽
$(function(){
    $('.desktop_view').click(function () {
      $(this).parent().parent().find('a').removeClass('btn_in');
      $(this).addClass('btn_in');
       $('#preview_frame').removeClass('mobile').removeClass('tablet');
      return false;
    });
    $('.tablet_view').click(function () {
      $(this).parent().parent().find('a').removeClass('btn_in');
       $(this).addClass('btn_in');
       $('#preview_frame').removeClass('mobile');
       $('#preview_frame').addClass('tablet');
      return false;
    });
    $('.mobile_view').click(function () {
      $(this).parent().parent().find('a').removeClass('btn_in');
       $(this).addClass('btn_in');
       $('#preview_frame').removeClass('tablet');
       $('#preview_frame').addClass('mobile');
      return false;
    });
});


$(function(){
  $('.go01').click(function(){ $('html,body').animate({scrollTop:0},900);});
  $('.go02').click(function(){ $('html,body').animate({scrollTop:$('#goThe02').offset().top-60}, 800); });
  $('.go03').click(function(){ $('html,body').animate({scrollTop:$('#goThe03').offset().top-60}, 800); });
  $('.go04').click(function(){ $('html,body').animate({scrollTop:$('#goThe04').offset().top-60}, 800); });
  $('.go05').click(function(){ $('html,body').animate({scrollTop:$('#goThe05').offset().top-60}, 800); });
  $('.go06').click(function(){ $('html,body').animate({scrollTop:$('#goThe06').offset().top-60}, 800); });
  $('.go07').click(function(){ $('html,body').animate({scrollTop:$('#goThe07').offset().top-60}, 800); });
  return false;
});


$(function(){
    $('.section_list li').click(function () {
      $(this).parent().find('li').removeClass('btn_in');
      $(this).addClass('btn_in');
      return false;
    });
});
