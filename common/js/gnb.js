
let smh = document.querySelector('.visual').offsetHeight;
let on_off = false;
let headArea = document.querySelector('#headerArea');
let headlogo = document.querySelector('#headerArea .logo a');
let dropdown = document.querySelectorAll('.dropdownmenu li h3 a');
let member = document.querySelectorAll('.topMenu li a');
let dropnav = document.querySelectorAll('.dropdownmenu .menu ul');
let drophover = document.querySelectorAll('.dropdownmenu .menu .drop li a');
let lastli = document.querySelectorAll('.dropdownmenu .m6 li a');
let sitearrow = document.querySelector('.select .arrow');
let sitein = document.querySelector('.select .aList');
let sitefocus = document.querySelectorAll('.select .aList li a');



   headArea.addEventListener('mouseover',function(){
   headArea.style.background='#fff';
   headArea.style.borderBottom='1px solid #ccc';
   headlogo.classList.add('on');
   for(let i=0; i<dropdown.length; i++){
      dropdown[i].style.color='#333';
   }
   for(let i=0; i<member.length; i++){
      member[i].classList.add('subOn');
   }
   on_off = true;
})
headArea.addEventListener('mouseleave',function(){
   let schead = window.scrollY;
   if(schead<smh-120){
      headArea.style.background='none';
      headArea.style.borderBottom='none';
      headlogo.classList.remove('on');
      for(let i=0; i<dropdown.length; i++){
         dropdown[i].style.color='#fff';
      }
      for(let i=0; i<member.length; i++){
         member[i].classList.remove('subOn');
      }
   }else{
      headArea.style.background='#fff';
      headArea.style.borderBottom='1px solid #ccc';
      headlogo.classList.add('on');
      for(let i=0; i<dropdown.length; i++){
         dropdown[i].style.color='#333';
      }
      for(let i=0; i<member.length; i++){
         member[i].classList.add('subOn');
      }
   }
      
      
   on_off = false;
})

document.addEventListener('scroll',function(){
   let schead = window.scrollY;
   if(schead>smh-120){
      headArea.style.background='#fff';
      headArea.style.borderBottom='1px solid #ccc';
      headlogo.classList.add('on');
      for(let i=0; i<dropdown.length; i++){
         dropdown[i].style.color='#333';
      }
      for(let i=0; i<member.length; i++){
         member[i].classList.add('subOn');
      }
   }else{
      if(on_off==false){
         headArea.style.background='none';
         headArea.style.borderBottom='none';
         headlogo.classList.remove('on');
         for(let i=0; i<dropdown.length; i++){
            dropdown[i].style.color='#fff';
         }
         for(let i=0; i<member.length; i++){
            member[i].classList.remove('subOn');
         }
      }
   }
      
})

document.querySelector('.dropdownmenu').addEventListener('mouseover',function(){
   for(let i=0; i<dropnav.length; i++){
      dropnav[i].classList.add('drop');
   }
   headArea.style.height='270px'
})
document.querySelector('.dropdownmenu').addEventListener('mouseleave',function(){
   for(let i=0; i<dropnav.length; i++){
      dropnav[i].classList.remove('drop');
   }
   headArea.style.height='130px'
})

   // var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
   // var on_off=false;  //false(안오버)  true(오버)
   
   //     $('#headerArea').mouseenter(function(){
   //        // var scroll = $(window).scrollTop();
   //         $(this).css('background','#fff');
   //         $('#headerArea .logo a').addClass('on')
   //         $('.dropdownmenu li a').css('color','#333');
   //         $('.topMenu li a').addClass('subOn'); 
         
   //         on_off=true;
   //     });
   
   //    $('#headerArea').mouseleave(function(){
   //         var scroll = $(window).scrollTop();  //스크롤의 거리
   //      //    console.log(scroll);
           
   //         if(scroll<smh-120 ){  // 현재 스크롤의 위치값이 비주얼 이미지 크기보다 작을 때
   //             $(this).css('background','none').css('border-bottom','none'); 
   //             $('.dropdownmenu li a').css('color','#fff');
   //             $('.topMenu li a').removeClass('subOn'); 
   //             $('#headerArea .logo a').removeClass('on')
               

   //         }else{ // 현재 스크롤의 위치값이 비주얼 이미지 크기보다 클 때
   //             $(this).css('background','#fff').css('border-bottom','1px solid #ccc');
   //             $('.dropdownmenu li a').css('color','#333');
   //             $('#headerArea .logo a').addClass('on')
   //             $('.topMenu li a').addClass('subOn');  
               
   //         }
   //        on_off=false;    
   //    });
   
      
   //    //스크롤의 위치변화가 생기면 발생하는 이벤트 -> scroll
   //    //$(window).on('scroll',function(){ //실행코드 });
   //    $(window).on('scroll',function(){//스크롤의 거리가 발생하면
   //         var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
   //      //     

   //         if(scroll>smh-120){//스크롤300까지 내리면
   //             $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
   //             $('#headerArea .logo a').addClass('on')
   //             $('.dropdownmenu li a').css('color','#333');
   //             $('.topMenu li a').addClass('subOn'); 
         
   //         }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
   //            if(on_off==false){ //헤더에서 마우스가 벗어난 상태
   //                 $('#headerArea').css('background','none').css('border-bottom','none');
   //                 $('.dropdownmenu li a').css('color','#fff');
   //                 $('.topMenu li a').removeClass('subOn'); 
   //                 $('#headerArea .logo a').removeClass('on');
   //            }
   //         }; 
           
   //      });

  
   //  //2depth 열기/닫기
   //  $('.dropdownmenu').hover(
   //     function() { 
   //        $('.dropdownmenu .menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
   //        $('#headerArea').animate({height:270},'fast').clearQueue();
   //     },function() {
   //        $('.dropdownmenu .menu ul').hide(); //모든 서브를 다 닫아라
   //        $('#headerArea').animate({height:120},'fast').clearQueue();
   //   });
    
     //1depth 효과
   //   $('.dropdownmenu .menu').hover(
   //     function() { 
   //         $('.depth1',this).css('color','red');
   //     },function() {
   //        $('.depth1',this).css('color','#333');
   //   });
     

     //tab 처리
     document.querySelector('.dropdownmenu .menu .depth1').addEventListener('focus',function(){
      for(let i=0; i<dropnav.length; i++){
         dropnav[i].classList.add('drop');
         dropdown[i].style.color='#333'
      }
      for(let i=0; i<member.length; i++){
         member[i].classList.add('subOn')
      }
      headArea.style.height='270px'
      headArea.style.background='#fff'
      headlogo.classList.add('on');
   
      })
      
      
      lastli.forEach(function(){
         lastli[3].addEventListener('blur',function(){
            for(let i=0; i<dropnav.length; i++){
               dropnav[i].classList.remove('drop');
               dropdown[i].style.color='#fff'
            }
            for(let i=0; i<member.length; i++){
               member[i].classList.remove('subOn')
            }
            headArea.style.height='130px'
            headArea.style.background='none'
            headlogo.classList.remove('on');
         })
      })
   //   $('.dropdownmenu .menu .depth1').on('focus', function () {        
   //      $('.dropdownmenu .menu ul').slideDown('normal');
   //      $('#headArea').css('height','270px');
   //   });

   //  $('.dropdownmenu .m6 li:last').find('a').on('blur', function () {        
   //      $('.dropdownmenu .menu ul').slideUp('fast');
   //      $('#headArea').css('height','130px');
   //  });


   //  $('.menu ul li a').hover(function(){
   //       $(this).css('color','rgba(239,0,16,1');
   //  },function(){
   //       $(this).css('color','rgba(51,51,51,1');
   //  });



   //패밀리사이트
sitearrow.addEventListener('click',function(e){
   e.preventDefault();
   if(on_off==true){
      sitein.style.height='225px'
      sitearrow.classList.add('on')
      on_off=false;
   }else if(on_off==false){
      sitein.style.height='0'
      sitearrow.classList.remove('on')
      on_off=true;
   }
})
// 탭포커스
sitearrow.addEventListener('focus',function(){
   if(on_off==false){
      sitein.style.height='225px'
      sitearrow.classList.add('on')
      on_off=true;
      console.log(on_off)
   }
})
sitefocus.forEach(function(){
   sitefocus[4].addEventListener('blur',function(){
      if(on_off==true){
         sitein.style.height='0'
         sitearrow.classList.remove('on')
         on_off=false;
      }
   })
})

   //  $('.select .arrow').toggle(function(){
	// 	$('.select .aList').slideDown('fast');
   //    $('.select .arrow').addClass('on');
	// },function(){
   //      $('.select .aList').slideUp('fast');	
   //      $('.select .arrow').removeClass('on');
	// });
   
   // $('.select .arrow').on('focus', function () {        
   //    $('.select .aList').slideDown('fast');	
   // });
   // $('.select .aList li:last a').on('blur', function () {        
   //    $('.select .aList').slideUp('fast');
   // });
   // $('.select .arrow').click(function(e){
   //    e.preventDefault();
   // });


   //상단이동 

   window.addEventListener('scroll',function(){
      let schead = window.scrollY;
      let winh = window.screen.availHeight/3;
      console.log(winh)
      if(schead>winh){
         document.querySelector('.topMove').classList.add('on');
         document.querySelector('.topMove').classList.remove('none');
         document.querySelector('.topMove').classList.remove('moveTop');
      }else{
         document.querySelector('.topMove').classList.remove('on');
         document.querySelector('.topMove').classList.add('none');
      }
   })
   
   document.querySelector('.topMove').addEventListener('click',function(e){
      e.preventDefault();
      window.scroll({
         top:0,
         behavior:'smooth'
      });
   })

//    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
//       var scroll = $(window).scrollTop(); //스크롤의 거리
//       var winh = $(window).height()/3;

     
   

//       if(scroll>winh){ //500이상의 거리가 발생되면
//           $('.topMove').fadeIn('slow');
//           $('.topMove i').fadeIn('slow');  //top보여라~~~~
//       }else{
//           $('.topMove').fadeOut('fast');
//           $('.topMove i').fadeOut('fast');//top안보여라~~~~
//       }
//  });

//   $('.topMove').click(function(e){
//      e.preventDefault();
//       //상단으로 스르륵 이동합니다.
//      $("html,body").stop().animate({"scrollTop":0},500); 
//   });

  