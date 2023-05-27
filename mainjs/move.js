// 메인비주얼
const mbutton = document.querySelectorAll('.mbutton');
let timeonoff; // 타이머 처리
    let imageCount = 3; // 슬라이드 이미지 총개수
    let cnt = 1; // 이미지 순서 1 2 3 4 5 1 2 3 4 5....
    let onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때
    let timer = 5000; // 시간 설정

    //Javascript
    document.querySelector('.btn1').classList.add('on')
    document.querySelector('.gallery .link1').classList.add('imgon')
    function moveg(){
        if(cnt == imageCount+1){cnt=1;}
        if(cnt == imageCount){cnt=0;}
        cnt++;
        for(i=1; i<4; i++){
            var reclass = document.querySelector('.gallery .link'+i);
            var rebtn = document.querySelector('.btn'+i);
            if(reclass){
                reclass.classList.remove('imgon')
            }
            if(rebtn){
                rebtn.classList.remove('on')
            }
        }
        
        document.querySelector('.gallery .link'+cnt).classList.add('imgon')
        document.querySelector('.btn'+cnt).classList.add('on')

        if(cnt == imageCount){cnt=0;}
    }
timeonoff = setInterval(moveg, timer);
  
mbutton.forEach(function(mbuttons, index){
    mbuttons.addEventListener('click', function(){
        clearInterval(timeonoff);
        cnt = index+1
        for(i=1; i<4; i++){
            let reclass = document.querySelector('.gallery .link'+i);
            let rebtn = document.querySelector('.btn'+i);
            if(reclass){
                reclass.classList.remove('imgon')
            }
            if(rebtn){
                rebtn.classList.remove('on')
            }
        }
        document.querySelector('.btn'+(index+1)).classList.add('on')
        document.querySelector('.gallery .link'+(index+1)).classList.add('imgon')
        
        timeonoff = setInterval(moveg, timer);

        if(onoff == false){
            onoff = true;
            document.querySelector('.ps').innerHTML='<span class="material-symbols-outlined">'+
            'pause'+
            '</span>'
        }
    })
});

document.querySelector('.ps').addEventListener('click', function(){
    if(onoff==true){
        clearInterval(timeonoff);
        this.innerHTML='<span class="material-symbols-outlined">'+
        'play_arrow'+
        '</span>'
        onoff=false
    }else{
        timeonoff = setInterval(moveg, 5000);
        this.innerHTML='<span class="material-symbols-outlined">'+
        'pause'+
        '</span>'
        onoff=true
    }
});
    
    
    
    // JQuery

    // $('.btn1').addClass('on'); // 첫번째 불렛 on
    // $('.gallery .link1').show(); // 첫번째 이미지 on
    
    // // 자동 롤링
    // function moveg(){
    //     if(cnt == imageCount+1){ cnt=1; }
    //     if(cnt == imageCount){ cnt=0; } // 카운트 초기화
      
    //     cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
    //     $('.gallery li').hide(); // 모든 이미지 off
    //     $('.gallery .link'+cnt).fadeIn('slow'); // 해당 이미지만 on
      
    //     $('.mbutton').removeClass('on'); // 모든 버튼 off
    //     $('.btn'+cnt).addClass('on'); // 해당 버튼만 on
       
    //     if(cnt == imageCount){ cnt=0; }  //카운트의 초기화 0
    // }
    // timeonoff= setInterval( moveg , timer);
   

    // // 버튼 제어
    // $('.mbutton').click(function(){  //각각의 버튼 클릭시
    //     clearInterval(timeonoff); //타이머 중지     
	 
	  //   $('.gallery li').hide(); // 모든 이미지 off
        
    //     for(var i=0; i<=imageCount; i++){ // 클릭한 버튼과 cnt 맞추기
    //         if(this.className == 'mbutton btn'+i){ cnt = i; }
    //     }
    //     $('.gallery .link'+cnt).fadeIn('slow'); // 해당 이미지 on

    //     $('.mbutton').removeClass('on'); // 모든 버튼 off
    //     $('.btn'+cnt).addClass('on'); // 해당 버튼만 on
      
    //     if(cnt == imageCount){ cnt=0; }  //카운트 초기화
      
    //     timeonoff = setInterval( moveg , timer); //타이머의 부활!!!
      
    //     if(onoff == false){ // 중지 상태면
    //         onoff = true; // 동작해라
    //         $('.ps').html('<span class="material-symbols-outlined">'+
    //         'pause'+
    //         '</span>'); // 중지버튼으로 변경
    //     }
    // });
    
    
    // // stop/play
    // $('.ps').click(function(){ 
    //     if(onoff==true){ // 타이머가 동작 중이냐??
    //           clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
    //             $(this).html('<span class="material-symbols-outlined">'+
    //             'play_arrow'+
    //             '</span>'); //js파일에서는 경로의 기준이 html파일이 기준!!
    //         onoff=false;   
    //       }else{  // false 타이머가 중지 상태냐??
    //           timeonoff= setInterval( moveg , 5000); //play버튼 클릭시  부활
    //           $(this).html('<span class="material-symbols-outlined">'+
    //           'pause'+
    //           '</span>');
    //           onoff=true; 
    //       }
    //  });	


     
     // console.log(total);


     // 사업영역

     // Javascript

     let bcnt = 0;

let busicon = document.querySelectorAll('.busicon li');
for(i=0; i<3; i++){
    busicon[i].classList.remove('busion');
}
busicon[0].classList.add('busion')

document.querySelector('.busiNext').addEventListener('click', function(e){
    e.preventDefault();

    total = 3;
    bcnt++;
    if(bcnt==total){
        bcnt=0;
    }
    for(i=0; i<3; i++){
        busicon[i].classList.remove('busion');
    }
    busicon[bcnt].classList.add('busion')
})
document.querySelector('.busiPrev').addEventListener('click', function(e){
    e.preventDefault();

    total = 3;
    bcnt--;
    if(bcnt==-1){
        bcnt=total-1;
    }
    for(i=0; i<3; i++){
        busicon[i].classList.remove('busion');
    }
    busicon[bcnt].classList.add('busion')
})



    // JQuery
    
    //  var bcnt = 0;

    // $(".busicon li").hide();
    // $(".busicon li:eq(0)").show();

    // $(".busiNext").click(function(e){
    //     e.preventDefault();

    //     total = $(".busicon li").size();
    //     bcnt++;
    //     if(bcnt==total){
    //         bcnt=0;
    //     }
    //     $(".busicon li").hide();
    //     $('.busicon li:eq('+bcnt+')').fadeIn('slow');
    // });

    // $(".busiPrev").click(function(e){
    //     e.preventDefault();

    //     total = $(".busicon li").size();
    //     bcnt--;
    //     if(bcnt==-1){
    //         bcnt=total-1;
    //     }
    //     $(".busicon li").hide();
    //     $('.busicon li:eq('+bcnt+')').fadeIn('slow');
    // });
     



    
    
	
   
    
    // 지속가능경영 아코디언


  //Javascript


  let susin = document.querySelectorAll('.susInner ul li');
let suspan = document.querySelectorAll('.susInner ul li span')

suspan.forEach(function(suspans){
suspans.addEventListener('mouseover', function(){
    for(i=0; i<3; i++){
        susin[i].classList.remove('current');
    }
    suspans.parentNode.classList.add('current');

    if(suspans===suspan[0]){
        susin[0].style.left=0;
        susin[1].style.left='600px';
        susin[2].style.left='900px';
        suspan[0].style.width=0
    }else if(suspans===suspan[1]){
        susin[0].style.left=0;
        susin[1].style.left='300px';
        susin[2].style.left='900px';
        suspan[1].style.width=0
    }else if(suspans===suspan[2]){
        susin[0].style.left=0;
        susin[1].style.left='300px';
        susin[2].style.left='600px';
        suspan[2].style.width=0
    }
})

susin.forEach(function(susins){
    susins.addEventListener('mouseleave',function(){
        susin[0].style.left=0;
        susin[1].style.left='400px';
        susin[2].style.left='800px';
        for(i=0; i<3; i++){
            susin[i].classList.remove('current')
            suspan[i].style.width='400px'
        }
    })
    
})

})




    //JQuery
    // $('.susInner ul li span').mouseenter(function(event){
    //    var $target=$(event.target);  // var $target = $(this)

     
    //  $('.susInner ul li').removeClass('current');
    //  $(this).parent().addClass('current');   

    //     if($target.is('.buttonMenu01')){  //첫번째 버튼에 마우스 오버되면
    //         $('.susInner ul li:eq(0)').animate({left:[0,'easeOutQuad']},400).clearQueue();
    //         //$('.eventSlideMenu .img02').animate({left:350},450,'easeOutQuad').clearQueue();
    //         $('.susInner ul li:eq(1)').animate({left:[600,'easeOutQuad']},400).clearQueue();
    //         $('.susInner ul li:eq(2)').animate({left:[900,'easeOutQuad']},400).clearQueue();
    //         $('.buttonMenu01').css('width','0');
    //     }else if($target.is('.buttonMenu02')){//두번째 버튼에 마우스 오버되면
    //         $('.susInner ul li:eq(0)').animate({left:[0,'easeOutQuad']},400).clearQueue();
    //         $('.susInner ul li:eq(1)').animate({left:[300,'easeOutQuad']},400).clearQueue();
    //         $('.susInner ul li:eq(2)').animate({left:[900,'easeOutQuad']},400).clearQueue();
    //         $('.buttonMenu02').css('width','0');
    //     }else if($target.is('.buttonMenu03')){
    //         $('.susInner ul li:eq(0)').animate({left:[0,'easeOutQuad']},400).clearQueue();
    //         $('.susInner ul li:eq(1)').animate({left:[300,'easeOutQuad']},400).clearQueue();
    //         $('.susInner ul li:eq(2)').animate({left:[600,'easeOutQuad']},400).clearQueue();
    //         $('.buttonMenu03').css('width','0');
    //     }
    // });
    //     $('.susInner ul li').mouseleave(function(event){
    //         var $target=$(event.target);  // var $target = $(this)
    //         $('.susInner ul li:eq(0)').animate({left:[0,'easeOutQuad']},400).clearQueue();
    //         $('.susInner ul li:eq(1)').animate({left:[400,'easeOutQuad']},400).clearQueue();
    //         $('.susInner ul li:eq(2)').animate({left:[800,'easeOutQuad']},400).clearQueue();
    //         $('.susInner ul li span').css('width','400');
    //         $('.susInner ul li').removeClass('current');
        

    //    //timeonoff= setInterval(move_gallery, 4000);  //부활~~
    // });




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


        let lotipick = document.querySelector('.lotissInner .lotiWrap');
let loticopy = lotipick.cloneNode(true);
let position = -1350;
let lotimove = document.querySelector('.lotissInner');
let loticon = document.querySelectorAll('.lotissInner .lotiWrap li');

let movesize = document.querySelector('.lotissInner ul li').offsetWidth+50;
let lotibtn = document.querySelectorAll('.lotibutton');
let lcnt = 2;



let Move = -1350;


loticon[2].classList.add('lotiCurrent');
loticopy.classList.add('subul');
loticopy.classList.remove('lotiWrap');
lotipick.insertAdjacentElement('afterend', loticopy);
//lotipick.parentNode.insertBefore(loticopy, lotipick.nextSibling);
let copycon = document.querySelectorAll('.subul li');
//lotimove.style.transition='all .5s ease';
// prevnext[0] = prev prevnext[1] = next
lotibtn.forEach(function(prevnext){ 
    prevnext.addEventListener('click',function(e){
        e.preventDefault();
        if(lotibtn[0]==prevnext){
            lcnt--;
            if(lcnt==-1){lcnt=4};
            // for(i=0; i<loticon.length; i++){
            //     loticon[i].classList.remove('lotiCurrent');
            //     copycon[i].classList.remove('lotiCurrent');
            // }
            loticon.forEach(function(lotinum, i) {
                lotinum.classList.remove('lotiCurrent');
                copycon[i].classList.remove('lotiCurrent');
              });
                position += movesize;
                let leftinterval = setInterval(function () {
                    Move += 10;
                    lotimove.style.left = Move + 'px';
                    
                    if (Move == position) {
                      clearInterval(leftinterval);
                      if (position == -500) {
                        position = -4750;
                        Move = -4750;
                      }
                    }
                  }, 1);
              loticon.forEach(function(lotinum, i) {
                if (i === lcnt) {
                  lotinum.classList.add('lotiCurrent');
                  copycon[i].classList.add('lotiCurrent');
                }
              });
            }
            if(lotibtn[1]==prevnext){
                lcnt++; 
                if(lcnt==5){lcnt=0};
                loticon.forEach(function(lotinum, i) {
                    lotinum.classList.remove('lotiCurrent');
                    copycon[i].classList.remove('lotiCurrent');
                  });
                  
                  loticon.forEach(function(lotinum, i) {
                    if (i === lcnt) {
                      lotinum.classList.add('lotiCurrent');
                      copycon[i].classList.add('lotiCurrent');
                    }
                  });
                  position -= movesize;
                  let rightinterval = setInterval(function () {
                    Move -= 10;
                    lotimove.style.left = Move + 'px';
                    if (Move == position) {
                      clearInterval(rightinterval);
                      if (position == -6450) {
                        position = -2200;
                        Move = -2200;
                      }
                    }
                  }, 1);
                }
        })
    })

        // var position=-1350;  //최초위치
        // var movesize=$('.lotissInner ul li').width();
        
        // var lcnt = 2;


        
        
        // $('.lotissInner ul li:eq(2)').addClass('lotiCurrent')
        // $('.lotissInner ul').after($('.lotissInner ul').clone(true).addClass('subul'));
        //  $('.lotibutton').click(function(e){
        //     e.preventDefault();
       
            
        //     if($(this).is('.lotissNext')){  //이전버튼 클릭
        //         movesize=$('.lotissInner ul li').width();
        //         lcnt++;
        //         if(lcnt==5){lcnt=0};
        //         $('.lotissInner ul li').removeClass('lotiCurrent')
        //          $('.lotissInner ul li:eq('+lcnt+')').addClass('lotiCurrent')
        //          $('.lotissInner .subul li').removeClass('lotiCurrent')
        //          $('.lotissInner .subul li:eq('+lcnt+')').addClass('lotiCurrent')
                
        //          position-=movesize+50;  // 150씩 감소
        //         $('.lotissInner').animate({left:position}, 'slow',function(){
        //            if(position<=-5600){
        //                position=-1350;
        //                $('.lotissInner').css('left',-1350);
                       
        //             }
        //         }).clearQueue();  
       
        //     }else if($(this).is('.lotissPrev')){  //다음버튼 클릭
        //         movesize=$('.lotissInner ul li').width();
        //         lcnt--;
        //         if(lcnt==-1){lcnt=4};
        //          $('.lotissInner ul li').removeClass('lotiCurrent')
        //          $('.lotissInner ul li:eq('+lcnt+')').addClass('lotiCurrent')
        //          $('.lotissInner .subul li').removeClass('lotiCurrent')
        //          $('.lotissInner .subul li:eq('+lcnt+')').addClass('lotiCurrent')
        //           if(position>=-1350){
        //                $('.lotissInner').css('left',-5600);
        //                position=-5600;
                       
        //            }
        
        //            position+=movesize+50; // 150씩 증가
        //            $('.lotissInner').animate({left:position}, 'slow',
        //                function(){							
        //                    if(position>=1350){
        //                        $('.lotissInner').css('left',-5600);
        //                        ``
        //                        position=-5600;

        //                    }
        //                }).clearQueue();
         
        //      }
        //   });











          //스크롤 뭐시기

        //Javascript


        let h = document.querySelectorAll('#content section');
    let h1 = h[1].offsetTop-300;
    let h2 = h[2].offsetTop-1000;
    let h3 = h[3].offsetTop-600;
    let h4 = h[4].offsetTop-600;
    window.addEventListener('scroll',function(){
        let scroll = window.scrollY;
        console.log(scroll)
            
            if(scroll>=500 && scroll<h1){
                h[0].classList.add('boxMove1');
            }else if(scroll>=h1 && scroll<h2){
                h[1].classList.add('boxMove2');
            }else if(scroll>=h2 && scroll<h3){
                h[2].classList.add('boxMove3');
            }else if(scroll>=h3 && scroll<h4){
                h[3].classList.add('boxMove4');
            }else if(scroll>=h4){
                h[4].classList.add('boxMove5');
            }
        
        
    })




          //JQuery
        // var h1= $('#content section:eq(1)').offset().top-300 ;
        // var h2= $('#content section:eq(2)').offset().top-1000 ;
        // var h3= $('#content section:eq(3)').offset().top-600 ;
        // var h4= $('#content section:eq(4)').offset().top-600 ;
        

        //   $(window).on('scroll',function(){
        //     var scroll = $(window).scrollTop();      
            
        //      //스크롤의 거리의 범위를 처리
        //     if(scroll>=500 && scroll<h1){
               
        //         $('#content section:eq(0)').addClass('boxMove1');
        //         //첫번째 내용 콘텐츠 애니메이
        //     }else if(scroll>=h1 && scroll<h2){
           
                
        //          $('#content section:eq(1)').addClass('boxMove2');
        //     }else if(scroll>=h2 && scroll<h3){
              
        //          $('#content section:eq(2)').addClass('boxMove3');
        //     }else if(scroll>=h3 && scroll<h4){
               
                 
        //          $('#content section:eq(3)').addClass('boxMove4');
        //     }else if(scroll>=h4){
               
                 
        //          $('#content section:eq(4)').addClass('boxMove5');
        //     }
           
            
            
            
        //  /*   
        //     //스크롤의 거리의 범위를 처리
        //     if(scroll>=0 && scroll<500){
        //         $('.subNav li:eq(0)').find('a').addClass('spy');
        //         //첫번째 서브메뉴 활성화
                
        //         $('#content div:eq(0)').addClass('boxMove');
        //         //첫번째 내용 콘텐츠 애니메이
        //     }else if(scroll>=500 && scroll<1100){
        //         $('.subNav li:eq(1)').find('a').addClass('spy');
        //         //두번째 서브메뉴 활성화
                
        //          $('#content div:eq(1)').addClass('boxMove');
        //     }else if(scroll>=1100 && scroll<1500){
        //         $('.subNav li:eq(2)').find('a').addClass('spy');
        //         //세번째 서브메뉴 활성화
                
        //          $('#content div:eq(2)').addClass('boxMove');
        //     }else if(scroll>=1500){
        //         $('.subNav li:eq(3)').find('a').addClass('spy');
        //         //네번째 서브메뉴 활성화
                
        //          $('#content div:eq(3)').addClass('boxMove');
        //     }
            
        // */    
            
        // });