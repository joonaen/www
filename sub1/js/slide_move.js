

              //슬라이드 메뉴 클릭시 해당 콘텐츠로 스스륵~~~ 이동
              $('.hisTop2 a').click(function(e){
                 e.preventDefault(); //href="#" 속성을 막아주는..메소드
            
                  var value=0; //이동할 스크롤의 거리

                  if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
                     value= $('#content .year1').offset().top;  // 해당 콘테츠의 상단의 거리~~
                  }else if($(this).hasClass('link2')){
                     value= $('#content .year2').offset().top; 
                  }else if($(this).hasClass('link3')){
                     value= $('#content .year3').offset().top; 
                  }else if($(this).hasClass('link4')){
                     value= $('#content .year4').offset().top; 
                  }
                  
                $("html,body").stop().animate({"scrollTop":value},1000);
              });



      // 스띠끼

      $('.hisTop2 li:eq(0)').find('a').addClass('hisCurrent');
      //첫번째 서브메뉴 활성화
      
      //첫번째 내용글 애니메이션 처리
      // var smh= $('.main').height();  //메인 비주얼의 높이
      // var h1= $('#content div:eq(1)').offset().top-600 ;
      // var h2= $('#content div:eq(2)').offset().top-600 ;
      // var h3= $('#content div:eq(3)').offset().top-1200 ;

      //스크롤의 좌표가 변하면.. 스크롤 이벤트
      $(window).on('scroll',function(){
         var scroll = $(window).scrollTop();
         //스크롤top의 좌표를 담는다
         
        //  $('.text').text(scroll);
         //스크롤 좌표의 값을 찍는다.
         
         //sticky menu 처리
         if(scroll>1400){ 
               $('.hisTop2').addClass('navOn');
               //스크롤의 거리가 350px 이상이면 서브메뉴 고정
               $('header').fadeOut('300');
               $('#wrap').css('margin-top','270px')
         }else{
               $('.hisTop2').removeClass('navOn');
               //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
               $('header').show();
               $('#wrap').css('margin-top','0')
         }
         
         
         
         $('.hisTop2 li').find('a').removeClass('hisCurrent');
         //모든 서브메뉴 비활성화~ 불꺼!!!
         
         
            //스크롤의 거리의 범위를 처리
         if(scroll>=1400 && scroll<7480){
               $('.hisTop2 li:eq(0)').find('a').addClass('hisCurrent');
               //첫번째 서브메뉴 활성화
         }else if(scroll>=7480 && scroll<12400){
               $('.hisTop2 li:eq(1)').find('a').addClass('hisCurrent');
              
         }else if(scroll>=12400 && scroll<16960){
               $('.hisTop2 li:eq(2)').find('a').addClass('hisCurrent');
               
         }else if(scroll>=16960){
               $('.hisTop2 li:eq(3)').find('a').addClass('hisCurrent');
              
         }



         if(scroll>2100){ 
            $('.his2010 .yearAll').addClass('yearCurrent');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
         }else{
            $('.his2010 .yearAll').removeClass('yearCurrent');
               //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
         }



         $('.his2010 .yearAll').removeClass('yearCurrent')
         
         if(scroll>=2100 && scroll<7200){
            $('.his2010 .hisYear1').addClass('yearCurrent');
            //첫번째 서브메뉴 활성화
         }else if(scroll>=8200 && scroll<11840){
            $('.his2010 .hisYear2').addClass('yearCurrent');
            
         }else if(scroll>=12900 && scroll<16390){
            $('.his2010 .hisYear3').addClass('yearCurrent');
               
         }else if(scroll>=17420){
            $('.his2010 .hisYear4').addClass('yearCurrent');
            
         }
        


         if(scroll>2080){ 
            $('.hisYear1 .subYear li').addClass('subCurrent');
            $('.his2010 .hisCon .month1 dl:eq(0)').addClass('monCurrent');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
         }else{
            $('.hisYear1 .subYear li').removeClass('subCurrent');
               //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
         }


         $('.hisYear1 .subYear li').removeClass('subCurrent')
         $('.history .hisCon dl').css('opacity','.3');
         if(scroll>=2080 && scroll<2400){
            $('.hisYear1 .subYear li:eq(0)').addClass('subCurrent');
            $('.hisYear1 .subYear').css('transform','translateY(0)');
            $('.history .month1 dl:eq(0)').css('opacity','1');
            //첫번째 서브메뉴 활성화
          } else if(scroll>=2400 && scroll<2650){
            $('.hisYear1 .subYear li:eq(1)').addClass('subCurrent');
            $('.hisYear1 .subYear').css('transform','translateY(-162px)');
            $('.history .month1 dl:eq(1)').css('opacity','1');
          }else if(scroll>=2650 && scroll<2950){
            $('.hisYear1 .subYear li:eq(2)').addClass('subCurrent');
            $('.hisYear1 .subYear').css('transform','translateY(-324px)');
            $('.history .month1 dl:eq(2)').css('opacity','1');
          }else if(scroll>=2950 && scroll<3450){
            $('.hisYear1 .subYear li:eq(3)').addClass('subCurrent');
            $('.hisYear1 .subYear').css('transform','translateY(-486px)');
            $('.history .month1 dl:eq(3)').css('opacity','1');
            $('.history .month1 dl:eq(4)').css('opacity','1');
          }else if(scroll>=3450 && scroll<4100){
            $('.hisYear1 .subYear li:eq(4)').addClass('subCurrent');
            $('.hisYear1 .subYear').css('transform','translateY(-648px)');
            $('.history .month1 dl:eq(5)').css('opacity','1');
          }else if(scroll>=4100   && scroll<4400){
            $('.hisYear1 .subYear li:eq(5)').addClass('subCurrent');
            $('.hisYear1 .subYear').css('transform','translateY(-810px)');
            $('.history .month1 dl:eq(6)').css('opacity','1');
          }else if(scroll>=4400 && scroll<4700){
            $('.hisYear1 .subYear li:eq(6)').addClass('subCurrent');
            $('.hisYear1 .subYear').css('transform','translateY(-972px)');
            $('.history .month1 dl:eq(7)').css('opacity','1');
          }else if(scroll>=4700 && scroll<5280){
            $('.hisYear1 .subYear li:eq(7)').addClass('subCurrent');
            $('.hisYear1 .subYear').css('transform','translateY(-1134px)');
            $('.history .month1 dl:eq(8)').css('opacity','1');
            $('.history .month1 dl:eq(9)').css('opacity','1');
          }else if(scroll>=5280 && scroll<6800){
            $('.hisYear1 .subYear li:eq(8)').addClass('subCurrent');
            $('.hisYear1 .subYear').css('transform','translateY(-1296px)');
            $('.history .month1 dl:eq(10)').css('opacity','1');
            $('.history .month1 dl:eq(11)').css('opacity','1');
            $('.history .month1 dl:eq(12)').css('opacity','1');
            $('.history .month1 dl:eq(13)').css('opacity','1');
          }else if(scroll>=6800 && scroll<7300){
            $('.hisYear1 .subYear li:eq(9)').addClass('subCurrent');
            $('.hisYear1 .subYear').css('transform','translateY(-1458px)');
            $('.history .month1 dl:eq(14)').css('opacity','1');
            $('.history .month1 dl:eq(15)').css('opacity','1');
          }



         if(scroll>8200){ 
            $('.hisYear2 .subYear li').addClass('subCurrent');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
         }else{
            $('.hisYear2 .subYear li').removeClass('subCurrent');
               //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
         }


         $('.hisYear2 .subYear li').removeClass('subCurrent')
         
         if(scroll>=8200 && scroll<9700){
            $('.hisYear2 .subYear li:eq(0)').addClass('subCurrent');
            $('.hisYear2 .subYear').css('transform','translateY(0)');
            $('.history .month2 dl:eq(0)').css('opacity','1');
            $('.history .month2 dl:eq(1)').css('opacity','1');
            $('.history .month2 dl:eq(2)').css('opacity','1');
            $('.history .month2 dl:eq(3)').css('opacity','1');
            $('.history .month2 dl:eq(4)').css('opacity','1');
            //첫번째 서브메뉴 활성화
          } else if(scroll>=9700 && scroll<11140){
            $('.hisYear2 .subYear li:eq(1)').addClass('subCurrent');
            $('.hisYear2 .subYear').css('transform','translateY(-162px)');
            $('.history .month2 dl:eq(5)').css('opacity','1');
            $('.history .month2 dl:eq(6)').css('opacity','1');
            $('.history .month2 dl:eq(7)').css('opacity','1');
            $('.history .month2 dl:eq(8)').css('opacity','1');
          }else if(scroll>=11140 && scroll<11440){
            $('.hisYear2 .subYear li:eq(2)').addClass('subCurrent');
            $('.hisYear2 .subYear').css('transform','translateY(-324px)');
            $('.history .month2 dl:eq(9)').css('opacity','1');
          }else if(scroll>=11440 && scroll<11740){
            $('.hisYear2 .subYear li:eq(3)').addClass('subCurrent');
            $('.hisYear2 .subYear').css('transform','translateY(-486px)');
            $('.history .month2 dl:eq(10)').css('opacity','1');
          }else if(scroll>=11740){
            $('.hisYear2 .subYear li:eq(4)').addClass('subCurrent');
            $('.hisYear2 .subYear').css('transform','translateY(-648px)');
            $('.history .month2 dl:eq(11)').css('opacity','1');
          }



          if(scroll>12900){ 
            $('.hisYear3 .subYear li').addClass('subCurrent');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
         }else{
            $('.hisYear3 .subYear li').removeClass('subCurrent');
               //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
         }


         $('.hisYear3 .subYear li').removeClass('subCurrent')
         
         if(scroll>=12900 && scroll<13140){
            $('.hisYear3 .subYear li:eq(0)').addClass('subCurrent');
            $('.hisYear3 .subYear').css('transform','translateY(0)');
            $('.history .month3 dl:eq(0)').css('opacity','1');
            //첫번째 서브메뉴 활성화
          } else if(scroll>=13140 && scroll<13700){
            $('.hisYear3 .subYear li:eq(1)').addClass('subCurrent');
            $('.hisYear3 .subYear').css('transform','translateY(-162px)');
            $('.history .month3 dl:eq(1)').css('opacity','1');
            $('.history .month3 dl:eq(2)').css('opacity','1');
          }else if(scroll>=13700 && scroll<14870){
            $('.hisYear3 .subYear li:eq(2)').addClass('subCurrent');
            $('.hisYear3 .subYear').css('transform','translateY(-324px)');
            $('.history .month3 dl:eq(3)').css('opacity','1');
            $('.history .month3 dl:eq(4)').css('opacity','1');
            $('.history .month3 dl:eq(5)').css('opacity','1');
          }else if(scroll>=14870 && scroll<15710){
            $('.hisYear3 .subYear li:eq(3)').addClass('subCurrent');
            $('.hisYear3 .subYear').css('transform','translateY(-486px)');
            $('.history .month3 dl:eq(6)').css('opacity','1');
            $('.history .month3 dl:eq(7)').css('opacity','1');
            $('.history .month3 dl:eq(8)').css('opacity','1');
          }else if(scroll>=15710 && scroll<16000){
            $('.hisYear3 .subYear li:eq(4)').addClass('subCurrent');
            $('.hisYear3 .subYear').css('transform','translateY(-648px)');
            $('.history .month3 dl:eq(9)').css('opacity','1');
          }else if(scroll>=16000 && scroll<16270){
            $('.hisYear3 .subYear li:eq(5)').addClass('subCurrent');
            $('.hisYear3 .subYear').css('transform','translateY(-810px)');
            $('.history .month3 dl:eq(10)').css('opacity','1');
          }else if(scroll>=16270){
            $('.hisYear3 .subYear li:eq(6)').addClass('subCurrent');
            $('.hisYear3 .subYear').css('transform','translateY(-972px)');
            $('.history .month3 dl:eq(11)').css('opacity','1');
          }






          if(scroll>17420){ 
            $('.hisYear4 .subYear li').addClass('subCurrent');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
         }else{
            $('.hisYear4 .subYear li').removeClass('subCurrent');
               //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
         }


         $('.hisYear4 .subYear li').removeClass('subCurrent')
         
         if(scroll>=17420 && scroll<17700){
            $('.hisYear4 .subYear li:eq(0)').addClass('subCurrent');
            $('.hisYear4 .subYear').css('transform','translateY(0)');
            $('.history .month4 dl:eq(0)').css('opacity','1');
            //첫번째 서브메뉴 활성화
          } else if(scroll>=17700 && scroll<17960){
            $('.hisYear4 .subYear li:eq(1)').addClass('subCurrent');
            $('.hisYear4 .subYear').css('transform','translateY(-162px)');
            $('.history .month4 dl:eq(1)').css('opacity','1');
          }else if(scroll>=17960 && scroll<18240){
            $('.hisYear4 .subYear li:eq(2)').addClass('subCurrent');
            $('.hisYear4 .subYear').css('transform','translateY(-324px)');
            $('.history .month4 dl:eq(2)').css('opacity','1');
          }else if(scroll>=18240 && scroll<18530){
            $('.hisYear4 .subYear li:eq(3)').addClass('subCurrent');
            $('.hisYear4 .subYear').css('transform','translateY(-486px)');
            $('.history .month4 dl:eq(3)').css('opacity','1');
          }else if(scroll>=18530 && scroll<18810){
            $('.hisYear4 .subYear li:eq(4)').addClass('subCurrent');
            $('.hisYear4 .subYear').css('transform','translateY(-648px)');
            $('.history .month4 dl:eq(4)').css('opacity','1');
          }else if(scroll>=18810){
            $('.hisYear4 .subYear li:eq(5)').addClass('subCurrent');
            $('.hisYear4 .subYear').css('transform','translateY(-810px)');
            $('.history .month4 dl:eq(5)').css('opacity','1');
          }





          

         








         });
     /*   
          
        //스크롤의 거리의 범위를 처리
        if(scroll>=0 && scroll<500){
            $('.subNav li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
            
            $('#content div:eq(0)').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=500 && scroll<1100){
            $('.subNav li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            
             $('#content div:eq(1)').addClass('boxMove');
        }else if(scroll>=1100 && scroll<1500){
            $('.subNav li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            
             $('#content div:eq(2)').addClass('boxMove');
        }else if(scroll>=1500){
            $('.subNav li:eq(3)').find('a').addClass('spy');
            //네번째 서브메뉴 활성화
            
             $('#content div:eq(3)').addClass('boxMove');
        }
        
    */    
        