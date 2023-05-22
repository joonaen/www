

   var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
   var on_off=false;  //false(안오버)  true(오버)
   
       $('#headerArea').mouseenter(function(){
          // var scroll = $(window).scrollTop();
           $(this).css('background','#fff');
           $('#headerArea .logo a').addClass('on')
           $('.dropdownmenu li a').css('color','#333');
           $('.topMenu li a').addClass('subOn'); 
         
           on_off=true;
       });
   
      $('#headerArea').mouseleave(function(){
           var scroll = $(window).scrollTop();  //스크롤의 거리
        //    console.log(scroll);
           
           if(scroll<smh-120 ){  // 현재 스크롤의 위치값이 비주얼 이미지 크기보다 작을 때
               $(this).css('background','none').css('border-bottom','none'); 
               $('.dropdownmenu li a').css('color','#fff');
               $('.topMenu li a').removeClass('subOn'); 
               $('#headerArea .logo a').removeClass('on')
               

           }else{ // 현재 스크롤의 위치값이 비주얼 이미지 크기보다 클 때
               $(this).css('background','#fff').css('border-bottom','1px solid #ccc');
               $('.dropdownmenu li a').css('color','#333');
               $('#headerArea .logo a').addClass('on')
               $('.topMenu li a').addClass('subOn');  
               
           }
          on_off=false;    
      });
   
      
      //스크롤의 위치변화가 생기면 발생하는 이벤트 -> scroll
      //$(window).on('scroll',function(){ //실행코드 });
      $(window).on('scroll',function(){//스크롤의 거리가 발생하면
           var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
        //     

           if(scroll>smh-120){//스크롤300까지 내리면
               $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
               $('#headerArea .logo a').addClass('on')
               $('.dropdownmenu li a').css('color','#333');
               $('.topMenu li a').addClass('subOn'); 
         
           }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
              if(on_off==false){ //헤더에서 마우스가 벗어난 상태
                   $('#headerArea').css('background','none').css('border-bottom','none');
                   $('.dropdownmenu li a').css('color','#fff');
                   $('.topMenu li a').removeClass('subOn'); 
                   $('#headerArea .logo a').removeClass('on');
              }
           }; 
           
        });

  
    //2depth 열기/닫기
    $('.dropdownmenu').hover(
       function() { 
          $('.dropdownmenu .menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:270},'fast').clearQueue();
       },function() {
          $('.dropdownmenu .menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:120},'fast').clearQueue();
     });
    
     //1depth 효과
   //   $('.dropdownmenu .menu').hover(
   //     function() { 
   //         $('.depth1',this).css('color','red');
   //     },function() {
   //        $('.depth1',this).css('color','#333');
   //   });
     

     //tab 처리
     $('.dropdownmenu .menu .depth1').on('focus', function () {        
        $('.dropdownmenu .menu ul').slideDown('normal');
        $('#headerArea').animate({height:270},'fast').clearQueue();
     });

    $('.dropdownmenu .m6 li:last').find('a').on('blur', function () {        
        $('.dropdownmenu .menu ul').slideUp('fast');
        $('#headerArea').animate({height:120},'normal').clearQueue();
    });


    $('.menu ul li a').hover(function(){
         $(this).css('color','rgba(239,0,16,1');
    },function(){
         $(this).css('color','rgba(51,51,51,1');
    });



    //패밀리사이트

    $('.select .arrow').toggle(function(){
		$('.select .aList').slideDown('fast');
      $('.select .arrow').addClass('on');
	},function(){
        $('.select .aList').slideUp('fast');	
        $('.select .arrow').removeClass('on');
	});
   
   $('.select .arrow').on('focus', function () {        
      $('.select .aList').slideDown('fast');	
   });
   $('.select .aList li:last a').on('blur', function () {        
      $('.select .aList').slideUp('fast');
   });
   $('.select .arrow').click(function(e){
      e.preventDefault();
   });


   //상단이동 모시깽이
   $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
      var scroll = $(window).scrollTop(); //스크롤의 거리
      var winh = $(window).height()/3;

     
   

      if(scroll>winh){ //500이상의 거리가 발생되면
          $('.topMove').fadeIn('slow');
          $('.topMove i').fadeIn('slow');  //top보여라~~~~
      }else{
          $('.topMove').fadeOut('fast');
          $('.topMove i').fadeOut('fast');//top안보여라~~~~
      }
 });

  $('.topMove').click(function(e){
     e.preventDefault();
      //상단으로 스르륵 이동합니다.
     $("html,body").stop().animate({"scrollTop":0},500); 
  });

  