function scrollTo(element, dir) {

    if (dir == "up") {
        dir = element.offsetTop;
    } else {
        dir = element.offsetHeight;
    }

    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: dir
    });
}

document.addEventListener('DOMContentLoaded', function(){
    let menuWrap = document.querySelector('.menuwrap');
    let mobileMenu = document.querySelector('.mobile-menu');
    let mobileMenuI = document.querySelector('.mobile-menu i');

    mobileMenu.addEventListener("click", function(e){
        if ( menuWrap.classList.contains('on') ){
            //메뉴닫힘
            menuWrap.classList.remove('on');
            mobileMenuI.classList.remove('fa-times')
            mobileMenuI.classList.add('fa-bars');

            //페이지 스크롤 락 해제
            document.querySelector('#dimmed').remove();
        } else {
            //메뉴펼침
            menuWrap.classList.add('on');
            mobileMenuI.classList.remove('fa-bars');
            mobileMenuI.classList.add('fa-times');

            //페이지 스크롤 락 레이어 추가
            let div = document.createElement('div');
            div.id = 'dimmed';
            document.body.append(div);

            //페이지 스크롤 락  모바일 이벤트 차단
            document.querySelector('#dimmed').addEventListener('scroll touchmove touchend mousewheel', function(e){
                e.preventDefault();
                e.stopPropagation();
                return false;
            });

            //페이지 스크롤 락 레이어 클릭 메뉴 닫기
            document.querySelector('#dimmed').addEventListener('click', function(e){
                mobileMenu.click();
            });             
        }
    });
});

function resizeApply() {
    const minWidth = 768;
    let menuWrap = document.querySelector('.menuwrap');
    let mobileMenuI = document.querySelector('.mobile-menu i');
    const dimmed = document.querySelector('#dimmed');
    if (window.innerWidth > minWidth) {
        //메뉴닫힘
        menuWrap.classList.remove('on');
        mobileMenuI.classList.remove('fa-times')
        mobileMenuI.classList.add('fa-bars');

        //페이지 스크롤 락 해제
        if(dimmed != null){
            dimmed.remove();
        }
    }else{

    }
}

const delay = 300;
let timer = null;
window.addEventListener('resize', function(){
	clearTimeout(timer);
	timer = setTimeout(function(){
        resizeApply();
	}, delay);
});