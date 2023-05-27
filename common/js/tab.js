// JavaScript
let tabcon = document.querySelectorAll('.contlist');
let tabs = document.querySelectorAll('.tabs .tab');

tabcon.forEach(function(){
    for(let i=0; i<tabcon.length; i++){
        tabcon[i].style.display='none'
    }
    tabcon[0].style.display='block';
    document.querySelector('.tabs .tab1').classList.add('conCurrent');
    tabs.forEach(function(tabsin,i){
    tabsin.addEventListener('click',function(e){
        e.preventDefault();
        for(let i=0; i<tabcon.length; i++){
            tabcon[i].style.display='none';
            tabcon[i].classList.remove('tabCurrent')
        }
        for(let i=0; i<tabs.length; i++){
            tabs[i].classList.remove('conCurrent');
        }
        tabcon[i].style.display='block';
        tabcon[i].classList.add('tabCurrent')
        tabs[i].classList.add('conCurrent');
    })
})
})










//JQuery

// $(document).ready(function(){
   
//     $('.contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
//     $('.tabs .tab1').addClass('conCurrent'); //첫번째 탭메뉴 활성화
//                //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
      
//     $('.tabs .tab').click(function(e){
//           e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
          
//           var ind = $(this).index('.tabs .tab');  // 클릭시 해당 index를 뽑아준다
//           //console.log(ind);

//           $(".contlist").hide(); //모든 탭내용을 안보이게...
//           $(".contlist:eq("+ind+")").fadeIn('slow'); //클릭한 해당 탭내용만 보여라
//           $('.tab').removeClass('conCurrent') //모든 탭메뉴를 비활성화
//           $(this).addClass('conCurrent'); // 클릭한 해당 탭메뉴만 활성화

//      });
   

//   });

