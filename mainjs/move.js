// 메인비주얼

var timeonoff; // 타이머 처리
    var imageCount = 3; // 슬라이드 이미지 총개수
    var cnt = 1; // 이미지 순서 1 2 3 4 5 1 2 3 4 5....
    var onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때
    var timer = 5000; // 시간 설정

    $('.btn1').addClass('on'); // 첫번째 불렛 on
    $('.gallery .link1').show(); // 첫번째 이미지 on
    
    // 자동 롤링
    function moveg(){
        if(cnt == imageCount+1){ cnt=1; }
        if(cnt == imageCount){ cnt=0; } // 카운트 초기화
      
        cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
        $('.gallery li').hide(); // 모든 이미지 off
        $('.gallery .link'+cnt).fadeIn('slow'); // 해당 이미지만 on
      
        $('.mbutton').removeClass('on'); // 모든 버튼 off
        $('.btn'+cnt).addClass('on'); // 해당 버튼만 on
       
        if(cnt == imageCount){ cnt=0; }  //카운트의 초기화 0
    }
    timeonoff= setInterval( moveg , timer);
   

    // 버튼 제어
    $('.mbutton').click(function(){  //각각의 버튼 클릭시
        clearInterval(timeonoff); //타이머 중지     
	 
	    $('.gallery li').hide(); // 모든 이미지 off
        
        for(var i=0; i<=imageCount; i++){ // 클릭한 버튼과 cnt 맞추기
            if(this.className == 'mbutton btn'+i){ cnt = i; }
        }
        $('.gallery .link'+cnt).fadeIn('slow'); // 해당 이미지 on

        $('.mbutton').removeClass('on'); // 모든 버튼 off
        $('.btn'+cnt).addClass('on'); // 해당 버튼만 on
      
        if(cnt == imageCount){ cnt=0; }  //카운트 초기화
      
        timeonoff = setInterval( moveg , timer); //타이머의 부활!!!
      
        if(onoff == false){ // 중지 상태면
            onoff = true; // 동작해라
            $('.ps').html('<span class="material-symbols-outlined">'+
            'pause'+
            '</span>'); // 중지버튼으로 변경
        }
    });
    
    
    // stop/play
    $('.ps').click(function(){ 
        if(onoff==true){ // 타이머가 동작 중이냐??
              clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
                $(this).html('<span class="material-symbols-outlined">'+
                'play_arrow'+
                '</span>'); //js파일에서는 경로의 기준이 html파일이 기준!!
            onoff=false;   
          }else{  // false 타이머가 중지 상태냐??
              timeonoff= setInterval( moveg , 5000); //play버튼 클릭시  부활
              $(this).html('<span class="material-symbols-outlined">'+
              'pause'+
              '</span>');
              onoff=true; 
          }
     });	


     
     // console.log(total);
     // 사업영역
     var bcnt = 0;

    $(".busicon li").hide();
    $(".busicon li:eq(0)").show();

    $(".busiNext").click(function(e){
        e.preventDefault();

        total = $(".busicon li").size();
        bcnt++;
        if(bcnt==total){
            bcnt=0;
        }
        $(".busicon li").hide();
        $('.busicon li:eq('+bcnt+')').fadeIn('slow');
    });

    $(".busiPrev").click(function(e){
        e.preventDefault();

        total = $(".busicon li").size();
        bcnt--;
        if(bcnt==-1){
            bcnt=total-1;
        }
        $(".busicon li").hide();
        $('.busicon li:eq('+bcnt+')').fadeIn('slow');
    });
     



    
    
	
    //     function move_gallery(){
	//      scnt++;

    //      $('.susInner ul li').removeClass('current');
    //      $('.susInner ul li:eq('+ (scnt-1) +')').addClass('current'); 
	  
	//   if(scnt==1){
	// 	   $('.susInner .img02').animate({left:[350,'easeOutQuad']},450).clearQueue();
	//        $('.eventSlideMenu .img03').animate({left:[400,'easeOutQuad']},450).clearQueue();
	//        $('.eventSlideMenu .img04').animate({left:[450,'easeOutQuad']},450).clearQueue(); 
	//   }else if(scnt==2){
	// 	   $('.eventSlideMenu .img02').animate({left:[50,'easeOutQuad']},450).clearQueue();
	//        $('.eventSlideMenu .img03').animate({left:[400,'easeOutQuad']},450).clearQueue();
	//        $('.eventSlideMenu .img04').animate({left:[450,'easeOutQuad']},450).clearQueue();
	//   }else if(scnt==3){
	// 	   $('.eventSlideMenu .img02').animate({left:[50,'easeOutQuad']},450).clearQueue();
	//        $('.eventSlideMenu .img03').animate({left:[100,'easeOutQuad']},450).clearQueue();
	//        $('.eventSlideMenu .img04').animate({left:[450,'easeOutQuad']},450).clearQueue();
	//   }
	  
	//    if(scnt==imageCount)scnt=0;
    //    }
	
    //   timeonoff= setInterval(move_gallery, 4000);
    
    
    // 지속가능경영 아코디언
    $('.susInner ul li span').mouseenter(function(event){
       var $target=$(event.target);  // var $target = $(this)

     
     $('.susInner ul li').removeClass('current');
     $(this).parent().addClass('current');   

        if($target.is('.buttonMenu01')){  //첫번째 버튼에 마우스 오버되면
            $('.susInner ul li:eq(0)').animate({left:[0,'easeOutQuad']},400).clearQueue();
            //$('.eventSlideMenu .img02').animate({left:350},450,'easeOutQuad').clearQueue();
            $('.susInner ul li:eq(1)').animate({left:[600,'easeOutQuad']},400).clearQueue();
            $('.susInner ul li:eq(2)').animate({left:[900,'easeOutQuad']},400).clearQueue();
            $('.buttonMenu01').css('width','0');
        }else if($target.is('.buttonMenu02')){//두번째 버튼에 마우스 오버되면
            $('.susInner ul li:eq(0)').animate({left:[0,'easeOutQuad']},400).clearQueue();
            $('.susInner ul li:eq(1)').animate({left:[300,'easeOutQuad']},400).clearQueue();
            $('.susInner ul li:eq(2)').animate({left:[900,'easeOutQuad']},400).clearQueue();
            $('.buttonMenu02').css('width','0');
        }else if($target.is('.buttonMenu03')){
            $('.susInner ul li:eq(0)').animate({left:[0,'easeOutQuad']},400).clearQueue();
            $('.susInner ul li:eq(1)').animate({left:[300,'easeOutQuad']},400).clearQueue();
            $('.susInner ul li:eq(2)').animate({left:[600,'easeOutQuad']},400).clearQueue();
            $('.buttonMenu03').css('width','0');
        }
    });
        $('.susInner ul li').mouseleave(function(event){
            var $target=$(event.target);  // var $target = $(this)
            $('.susInner ul li:eq(0)').animate({left:[0,'easeOutQuad']},400).clearQueue();
            $('.susInner ul li:eq(1)').animate({left:[400,'easeOutQuad']},400).clearQueue();
            $('.susInner ul li:eq(2)').animate({left:[800,'easeOutQuad']},400).clearQueue();
            $('.susInner ul li span').css('width','400');
            $('.susInner ul li').removeClass('current');
        

       //timeonoff= setInterval(move_gallery, 4000);  //부활~~
    });




    // var position=350;  //최초위치
    // var movesize=$('.lotissInner ul li').width();
    // //console.log(movesize)
  
    

    // $('.lotissBtn .lotissPrev').click(function(e){        
    //     e.preventDefault();
   
                
    //     if($(this).is('.lotissPrev')){  //이전버튼 클릭
            
    //          position+=movesize+50;  // 150씩 감소
            
    //             $('.lotissInner').animate({left:position}, 'fast',function(){
    //            if(position>=350){
    //                 $('.lotissInner').animate({left:position}, 'fast')
    //             //    $('.lotissInner').css('left',-2400);
    //             $('.lotissInner').css('left',0);
    //                position=-3900;
                   
    //             }
    //         }).clearQueue();  
   
    //     }
    //   });

    
    
    // $('.lotissBtn .lotissNext').click(function(e){
    //         e.preventDefault();
    //         if($(this).is('.lotissNext')){  //다음버튼 클릭
            
    //             position-=movesize+50;  // 150씩 감소
    //            $('.lotissInner').animate({left:position}, 'fast',function(){
    //               if(position<=-3050){
    //                   $('.lotissInner').animate({left:position}, 'fast')
    //                   $('.lotissInner lotissTag').addClass('lotiCur')
    //                   $('.lotissInner').css('left',0);
    //                   position=1200;
                      
                      
    //                }
    //            }).clearQueue();  
      
    //        }
    //      });

        // 좌우 슬라이드

        var position=-1350;  //최초위치
        var movesize=$('.lotissInner ul li').width();
        
        var lcnt = 2;


        
        
        $('.lotissInner ul li:eq(2)').addClass('lotiCurrent')
        $('.lotissInner ul').after($('.lotissInner ul').clone(true).addClass('subul'));
         $('.lotibutton').click(function(e){
            e.preventDefault();
       
            
            if($(this).is('.lotissNext')){  //이전버튼 클릭
                movesize=$('.lotissInner ul li').width();
                lcnt++;
                if(lcnt==5){lcnt=0};
                $('.lotissInner ul li').removeClass('lotiCurrent')
                 $('.lotissInner ul li:eq('+lcnt+')').addClass('lotiCurrent')
                 $('.lotissInner .subul li').removeClass('lotiCurrent')
                 $('.lotissInner .subul li:eq('+lcnt+')').addClass('lotiCurrent')
                
                 position-=movesize+50;  // 150씩 감소
                $('.lotissInner').animate({left:position}, 'slow',function(){
                   if(position<=-5600){
                       position=-1350;
                       $('.lotissInner').css('left',-1350);
                       
                    }
                }).clearQueue();  
       
            }else if($(this).is('.lotissPrev')){  //다음버튼 클릭
                movesize=$('.lotissInner ul li').width();
                lcnt--;
                if(lcnt==-1){lcnt=4};
                 $('.lotissInner ul li').removeClass('lotiCurrent')
                 $('.lotissInner ul li:eq('+lcnt+')').addClass('lotiCurrent')
                 $('.lotissInner .subul li').removeClass('lotiCurrent')
                 $('.lotissInner .subul li:eq('+lcnt+')').addClass('lotiCurrent')
                  if(position>=-1350){
                       $('.lotissInner').css('left',-5600);
                       position=-5600;
                       
                   }
        
                   position+=movesize+50; // 150씩 증가
                   $('.lotissInner').animate({left:position}, 'slow',
                       function(){							
                           if(position>=1350){
                               $('.lotissInner').css('left',-5600);
                               ``
                               position=-5600;

                           }
                       }).clearQueue();
         
             }
          });











          //스크롤 뭐시기

    

        var h1= $('#content section:eq(1)').offset().top-300 ;
        var h2= $('#content section:eq(2)').offset().top-1000 ;
        var h3= $('#content section:eq(3)').offset().top-600 ;
        var h4= $('#content section:eq(4)').offset().top-600 ;
        

          $(window).on('scroll',function(){
            var scroll = $(window).scrollTop();      
            
             //스크롤의 거리의 범위를 처리
            if(scroll>=500 && scroll<h1){
               
                $('#content section:eq(0)').addClass('boxMove1');
                //첫번째 내용 콘텐츠 애니메이
            }else if(scroll>=h1 && scroll<h2){
           
                
                 $('#content section:eq(1)').addClass('boxMove2');
            }else if(scroll>=h2 && scroll<h3){
              
                 $('#content section:eq(2)').addClass('boxMove3');
            }else if(scroll>=h3 && scroll<h4){
               
                 
                 $('#content section:eq(3)').addClass('boxMove4');
            }else if(scroll>=h4){
               
                 
                 $('#content section:eq(4)').addClass('boxMove5');
            }
           
            
            
            
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
            
        });