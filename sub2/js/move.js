
    


     


        // 좌우 슬라이드

        var imgpo1=0;
        var imgpo2=0;
        var imgpo3=0;  //최초위치
        var slidesize=$('.imgInner ul li').width();
        var ind1 = 0
        var ind2 = 0
        var ind3 = 0
        var boxind = $('.busiCon').index()
        

        $('.busiCon1 .imgInner ul').after($('.busiCon1 .imgInner ul').clone());
        $('.busiCon2 .imgInner ul').after($('.busiCon2 .imgInner ul').clone());
        $('.busiCon3 .imgInner ul').after($('.busiCon3 .imgInner ul').clone());


        $('.imgSub li').removeClass('imgCurrent')
        $('.busiCon1 .imgSub li:eq(0)').addClass('imgCurrent')
        $('.busiCon2 .imgSub li:eq(0)').addClass('imgCurrent')
        $('.busiCon3 .imgSub li:eq(0)').addClass('imgCurrent')

         $('.btnOver').click(function(e){
            e.preventDefault();
            
            if($(this).is('.btn1 .overNext')){  //이전버튼 클릭
                
                
                 imgpo1-=740;  // 150씩 감소
                $('.busiCon1 .imgInner').animate({left:imgpo1}, 'slow',function(){
                   if(imgpo1<=-5180){
                        imgpo1=-2220;
                       $('.busiCon1 .imgInner').css('left',-2220);
                    }
                }).clearQueue();  
       
            }else if($(this).is('.btn1 .overPrev')){  //다음버튼 클릭
                
                  if(imgpo1>=0){
                       $('.busiCon1 .imgInner').css('left',-2960);
                       imgpo1=-2960;
                   }
        
                   imgpo1+=740; // 150씩 증가
                   $('.busiCon1 .imgInner').animate({left:imgpo1}, 'slow',
                       function(){							
                           if(imgpo1>=0){
                               $('.busiCon1 .imgInner').css('left',-2960);
                               imgpo1=-2960;
                           }
                       }).clearQueue();
                       
             }
             if($(this).is('.btn2 .overNext')){  //이전버튼 클릭
                
                
                imgpo2-=740;  // 150씩 감소
               $('.busiCon2 .imgInner').animate({left:imgpo2}, 'slow',function(){
                  if(imgpo2<=-5180){
                       imgpo2=-2220;
                      $('.busiCon2 .imgInner').css('left',-2220);
                   }
               }).clearQueue();  
      
           }else if($(this).is('.btn2 .overPrev')){  //다음버튼 클릭
               
                 if(imgpo2>=0){
                      $('.busiCon2 .imgInner').css('left',-2960);
                      imgpo2=-2960;
                  }
       
                  imgpo2+=740; // 150씩 증가
                  $('.busiCon2 .imgInner').animate({left:imgpo2}, 'slow',
                      function(){							
                          if(imgpo2>=0){
                              $('.busiCon2 .imgInner').css('left',-2960);
                              imgpo2=-2960;
                          }
                      }).clearQueue();
        
            }
            if($(this).is('.btn3 .overNext')){  //이전버튼 클릭
                
                
                imgpo3-=740;  // 150씩 감소
               $('.busiCon3 .imgInner').animate({left:imgpo3}, 'slow',function(){
                  if(imgpo3<=-5180){
                       imgpo3=-2220;
                      $('.busiCon3 .imgInner').css('left',-2220);
                   }
               }).clearQueue();  
      
           }else if($(this).is('.btn3 .overPrev')){  //다음버튼 클릭
               
                 if(imgpo3>=0){
                      $('.busiCon3 .imgInner').css('left',-2960);
                      imgpo3=-2960;
                  }
       
                  imgpo3+=740; // 150씩 증가
                  $('.busiCon3 .imgInner').animate({left:imgpo3}, 'slow',
                      function(){							
                          if(imgpo3>=0){
                              $('.busiCon3 .imgInner').css('left',-2960);
                              imgpo3=-2960;
                          }
                      }).clearQueue();
        
            }




             







             $('.busiCon1 overBtn').click(e)
             e.preventDefault();
             if($(this).is('.busiCon1 .overNext')){
                
                ind1++;
                if(ind1 == 4){ind1=0};
                $('.busiCon1 .imgSub li').removeClass('imgCurrent')
                 $('.busiCon1 .imgSub li:eq('+ind1+')').addClass('imgCurrent')
             }else if($(this).is('.busiCon1 .overPrev')){
                ind1--;
                if(ind1 == -1){ind1=3};
                $('.busiCon1 .imgSub li').removeClass('imgCurrent')
                 $('.busiCon1 .imgSub li:eq('+ind1+')').addClass('imgCurrent')
             };

             $('.busiCon2 overBtn').click(e)
             e.preventDefault();
             
             if($(this).is('.busiCon2 .overNext')){
             
                ind2++;
                if(ind2 == 4){ind2=0};
                $('.busiCon2 .imgSub li').removeClass('imgCurrent')
                 $('.busiCon2 .imgSub li:eq('+ind2+')').addClass('imgCurrent')
             }else if($(this).is('.busiCon2 .overPrev')){
             
                ind2--;
                if(ind2 == -1){ind2=3};
                $('.busiCon2 .imgSub li').removeClass('imgCurrent')
                 $('.busiCon2 .imgSub li:eq('+ind2+')').addClass('imgCurrent')
             };

             $('.busiCon3 overBtn').click(e)
             e.preventDefault();
             
             if($(this).is('.busiCon3 .overNext')){
             
                ind3++;
                if(ind3 == 4){ind3=0};
                $('.busiCon3 .imgSub li').removeClass('imgCurrent')
                 $('.busiCon3 .imgSub li:eq('+ind3+')').addClass('imgCurrent')
             }else if($(this).is('.busiCon3  .overPrev')){
             
                ind3--;
                if(ind3 == -1){ind3=3};
                $('.busiCon3 .imgSub li').removeClass('imgCurrent')
                 $('.busiCon3 .imgSub li:eq('+ind3+')').addClass('imgCurrent')
             };
           
    });


    


    $('.busiCon1 .busiMore').click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  

        $(".contlist").hide(); //모든 탭내용을 안보이게...
        $(".contlist:eq(1)").fadeIn('slow'); //클릭한 해당 탭내용만 보여라
        $('.tab').removeClass('conCurrent') //모든 탭메뉴를 비활성화
        $('.tab2').addClass('conCurrent'); // 클릭한 해당 탭메뉴만 활성화
        $("html,body").stop().animate({"scrollTop":910},500); 

    });
    $('.busiCon2 .busiMore').click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  

        $(".contlist").hide(); //모든 탭내용을 안보이게...
        $(".contlist:eq(2)").fadeIn('slow'); //클릭한 해당 탭내용만 보여라
        $('.tab').removeClass('conCurrent') //모든 탭메뉴를 비활성화
        $('.tab3').addClass('conCurrent'); // 클릭한 해당 탭메뉴만 활성화
        $("html,body").stop().animate({"scrollTop":910},500); 

    });
    $('.busiCon3 .busiMore').click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  

        $(".contlist").hide(); //모든 탭내용을 안보이게...
        $(".contlist:eq(3)").fadeIn('slow'); //클릭한 해당 탭내용만 보여라
        $('.tab').removeClass('conCurrent') //모든 탭메뉴를 비활성화
        $('.tab4').addClass('conCurrent'); // 클릭한 해당 탭메뉴만 활성화
        $("html,body").stop().animate({"scrollTop":910},500); 

    });