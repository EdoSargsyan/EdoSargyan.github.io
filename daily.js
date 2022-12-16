let btn1 = document.querySelector('.sidebar-li1 img')
let btn2 = document.querySelector('.sidebar-li2 img')
let btn3 = document.querySelector('.sidebar-li3 img')
let btn4 = document.querySelector('.sidebar-li4 img')
let btn5 = document.querySelector('.sidebar-li5 img')
let btn6 = document.querySelector('.sidebar-li6 img')
let btn7 = document.querySelector('.sidebar-li7 img')


let li1Ul = document.querySelector('.sidebar-li1 ul')
let li2Ul = document.querySelector('.sidebar-li2 ul')
let li3Ul = document.querySelector('.sidebar-li3 ul')
let li4Ul = document.querySelector('.sidebar-li4 ul')
let li5Ul = document.querySelector('.sidebar-li5 ul')
let li6Ul = document.querySelector('.sidebar-li6 ul')
let li7Ul = document.querySelector('.sidebar-li7 ul')



let li1 = document.querySelector('.sidebar-li1')
let li2 = document.querySelector('.sidebar-li2')
let li3 = document.querySelector('.sidebar-li3')
let li4 = document.querySelector('.sidebar-li4')
let li5 = document.querySelector('.sidebar-li5')
let li6 = document.querySelector('.sidebar-li6')
let li7 = document.querySelector('.sidebar-li7')


let height =0;
function open(btn,li,ul){
btn.addEventListener('click',function(){
      ul.classList.toggle('open-ul')
      li.classList.toggle('open-li')
      btn.classList.toggle('transarrow')
})
}

open(btn1,li1,li1Ul)
open(btn2,li2,li2Ul)
open(btn3,li3,li3Ul)
open(btn4,li4,li4Ul)
open(btn5,li5,li5Ul)
open(btn6,li6,li6Ul)
open(btn7,li7,li7Ul)




let headerDropdownClick = document.querySelector('.myacc');
let headerDropdown1 = document.querySelector('.myacc-dropdown')
let headerDropdownClick1 = document.querySelector('.money')
let headerDropdown2 = document.querySelector('.money-curs')

headerDropdownClick.addEventListener('click',function(){
     headerDropdown1.classList.toggle('open-myacc')
})
headerDropdownClick1.addEventListener('click',function(){
    headerDropdown2.classList.toggle('open-money-curs')
})

let mobileMenu = document.querySelector('.mobile-menu');
let  mobileMenuClick = document.querySelector('.menu-icon');
mobileMenuClick.addEventListener('click',function(){
        mobileMenu.style.transform="translateX(0)"
        mobileMenu.style.visibility='visible'
        mobileMenu.style.opacity='1'

})
let cancel = document.querySelector('.cancel-img');
cancel.addEventListener('click',function(){
    mobileMenu.style.transform="translateX(-300px)"
    mobileMenu.style.visibility='hidden'
    mobileMenu.style.opacity='0'
})

let categoriesMobileClick = document.querySelector('.menu-icon1')
let categoriesMobile = document.querySelector('.ul-categories-mob')
categoriesMobileClick.addEventListener('click',function(){
    categoriesMobile.style.transform = 'translateX(0)'
    categoriesMobile.style.visibility = 'visible'
    categoriesMobile.style.opacity = '1'
})

let cancel1 = document.querySelector('.cancel1-img');
cancel1.addEventListener("click",function(){
    categoriesMobile.style.transform = 'translateX(-250px)'
    categoriesMobile.style.visibility = 'hidden'
    categoriesMobile.style.opacity = '0'
})

let arrowUpCLick = document.querySelector('.arrow-up')

let ulCategoriesMob = document.querySelector('.ul-categories-mob')
let fashionDropMob = document.querySelector('.fashion-drop-mob')
arrowUpCLick.addEventListener('click',function(){
    fashionDropMob.classList.toggle('fashion-drop-mob-open')
    arrowUpCLick.classList.toggle('rotate-arrow')
    document.body.style.overflow='hidden'
    ulCategoriesMob.style.overflow = 'scroll'
})

let womensClothingUl = document.querySelector('.womens-clothing-ul')
let arrowUpCLick1  = document.querySelector('.womens-arrow-up')

let manUl = document.querySelector('.man-li ul')
let arrowUpCLick2 = document.querySelector('.man-arrow-up')

let babyUl = document.querySelector('.baby-li ul')
let arrowUpCLick3 = document.querySelector('.baby-arrow-up')


let sportUl = document.querySelector('.sport-li ul')
let arrowUpCLick4 = document.querySelector('.sport-arrow-up')

let topUl = document.querySelector('.top-li ul')
let arrowUpCLick5 = document.querySelector('.top-arrow-up')

let outUl = document.querySelector('.out-li ul')
let arrowUpCLick6 = document.querySelector('.out-arrow-up')

let dealsUl = document.querySelector('.deals-li ul')
let arrowUpCLick7 = document.querySelector('.deals-arrow-up')

let jeansUl = document.querySelector('.jeans-li ul')
let arrowUpCLick8 = document.querySelector('.jeans-arrow-up')

let robesUl = document.querySelector('.robes-li ul')
let arrowUpCLick9 = document.querySelector('.robes-arrow-up')

let cloneUl = document.querySelector('.clone-li ul')
let arrowUpCLick10 = document.querySelector('.clone-arrow-up')

let accessUl = document.querySelector('.accessories-li ul')
let arrowUpCLick11 = document.querySelector('.access-arrow-up')

function click(ul,arrow,open){
   arrow.addEventListener('click',function(){
        arrow.classList.toggle('rotate-arrow')
        ul.classList.toggle(open)
    })
}
click(sportUl,arrowUpCLick4,'open-sport')
click(womensClothingUl,arrowUpCLick1,'womens-clothing-ul-open')
click(manUl,arrowUpCLick2,'open-man')
click(babyUl,arrowUpCLick3,'open-baby')
click(topUl,arrowUpCLick5,'open-top')
click(outUl,arrowUpCLick6,'open-out')
click(dealsUl,arrowUpCLick7,'open-deals')
click(jeansUl,arrowUpCLick8,'open-jeans')
click(robesUl,arrowUpCLick9,'open-robes')
click(cloneUl,arrowUpCLick10,'open-clone')
click(accessUl,arrowUpCLick11,'open-access')

let btnOpen = document.querySelector('.container2-li1 .plus')
let Open = document.querySelectorAll('.container2-li1 .first')

let btn1Open = document.querySelector('.container2-li2 .plus')
let Open1 = document.querySelectorAll('.container2-li2 .second')

let Open2 = document.querySelectorAll('.container2-li3 .li3-dropdown')
let btn2Open = document.querySelector('.container2-li3 .plus')

let i = 0;
btnOpen.addEventListener('click',function(){
    i++
    for(let key of Open){
    key.classList.toggle('open-first')
    }
    btnOpen.src="images/icons8-negative-24.png"

    if(i==2){
        btnOpen.src="images/icons8-sum-24.png"
        i=0
    }
})

btn1Open.addEventListener('click',function(){
    i++
    for(let key of Open1){
    key.classList.toggle('open-second')
    }
    btn1Open.src="images/icons8-negative-24.png"

    if(i==2){
        btn1Open.src="images/icons8-sum-24.png"
        i=0
    }
})
btn2Open.addEventListener('click',function(){
    i++
    for(let key of Open2){
    key.classList.toggle('open-third')
    }
    btn2Open.src="images/icons8-negative-24.png"

    if(i==2){
        btn2Open.src="images/icons8-sum-24.png"
        i=0
    }
})



let hoverImgVrin1 = document.querySelector('.vrin1 .img1')
let hoverImg1Vrin1 = document.querySelector('.vrin1 .img2')
let hoverImg2Vrin1 = document.querySelector('.vrin1 .img3')
let hoverImg3Vrin1 = document.querySelector('.vrin1 .img4')

let hoverImgVrin2 = document.querySelector('.vrin2 .img1')
let hoverImg1Vrin2 = document.querySelector('.vrin2 .img2')
let hoverImg2Vrin2 = document.querySelector('.vrin2 .img3')
let hoverImg3Vrin2 = document.querySelector('.vrin2 .img4')

let hoverImgVrin3 = document.querySelector('.vrin3 .img1')
let hoverImg1Vrin3 = document.querySelector('.vrin3 .img2')
let hoverImg2Vrin3 = document.querySelector('.vrin3 .img3')
let hoverImg3Vrin3 = document.querySelector('.vrin3 .img4')

let hoverImgVrin4 = document.querySelector('.vrin4 .img1')
let hoverImg1Vrin4 = document.querySelector('.vrin4 .img2')
let hoverImg2Vrin4 = document.querySelector('.vrin4 .img3')
let hoverImg3Vrin4 = document.querySelector('.vrin4 .img4')

let hoverImgVrin5 = document.querySelector('.vrin5 .img1')
let hoverImg1Vrin5 = document.querySelector('.vrin5 .img2')
let hoverImg2Vrin5 = document.querySelector('.vrin5 .img3')
let hoverImg3Vrin5 = document.querySelector('.vrin5 .img4')

let hoverImgVrin6 = document.querySelector('.vrin6 .img1')
let hoverImg1Vrin6 = document.querySelector('.vrin6 .img2')
let hoverImg2Vrin6 = document.querySelector('.vrin6 .img3')
let hoverImg3Vrin6 = document.querySelector('.vrin6 .img4')

let hoverImgVrin7 = document.querySelector('.vrin7 .img1')
let hoverImg1Vrin7 = document.querySelector('.vrin7 .img2')
let hoverImg2Vrin7 = document.querySelector('.vrin7 .img3')
let hoverImg3Vrin7 = document.querySelector('.vrin7 .img4')

let hoverImgVrin8 = document.querySelector('.vrin8 .img1')
let hoverImg1Vrin8 = document.querySelector('.vrin8 .img2')
let hoverImg2Vrin8 = document.querySelector('.vrin8 .img3')
let hoverImg3Vrin8 = document.querySelector('.vrin8 .img4')

let hoverImgVrin9 = document.querySelector('.vrin9 .img1')
let hoverImg1Vrin9 = document.querySelector('.vrin9 .img2')
let hoverImg2Vrin9 = document.querySelector('.vrin9 .img3')
let hoverImg3Vrin9 = document.querySelector('.vrin9 .img4')

let hoverImgVrin10 = document.querySelector('.vrin10 .img1')
let hoverImg1Vrin10 = document.querySelector('.vrin10 .img2')
let hoverImg2Vrin10 = document.querySelector('.vrin10 .img3')
let hoverImg3Vrin10 = document.querySelector('.vrin10 .img4')

let hoverImgVrin11 = document.querySelector('.vrin11 .img1')
let hoverImg1Vrin11 = document.querySelector('.vrin11 .img2')
let hoverImg2Vrin11 = document.querySelector('.vrin11 .img3')
let hoverImg3Vrin11 = document.querySelector('.vrin11 .img4')

let hoverImgVrin12 = document.querySelector('.vrin12 .img1')
let hoverImg1Vrin12 = document.querySelector('.vrin12 .img2')
let hoverImg2Vrin12 = document.querySelector('.vrin12 .img3')
let hoverImg3Vrin12 = document.querySelector('.vrin12 .img4')
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let box4 = document.querySelector('.box4')
let box5 = document.querySelector('.box5')
let box6 = document.querySelector('.box6')
let box7 = document.querySelector('.box7')
let box8 = document.querySelector('.box8')
let box9 = document.querySelector('.box9')
let box10 = document.querySelector('.box10')
let box11= document.querySelector('.box11')
let box12= document.querySelector('.box12')

function hoverEvect(buycontent,hoverimg,hoverimg1,hoverimg2,hoverimg3){
    buycontent.addEventListener('mouseenter',function(){
         setTimeout(function(){
            hoverimg.style.visibility = 'visible'
            hoverimg.style.opacity = '1'
         },100)
         setTimeout(function(){
            hoverimg1.style.visibility = 'visible'
            hoverimg1.style.opacity = '1'
         },200)
         setTimeout(function(){
            hoverimg2.style.visibility = 'visible'
            hoverimg2.style.opacity = '1'
         },300)
         setTimeout(function(){
            hoverimg3.style.visibility = 'visible'
            hoverimg3.style.opacity = '1'
         },400)
    })
    buycontent.addEventListener('mouseleave',function(){
        setTimeout(function(){
            hoverimg.style.visibility = 'hidden'
            hoverimg.style.opacity = '0'
         },100)
         setTimeout(function(){
            hoverimg1.style.visibility = 'hidden'
            hoverimg1.style.opacity = '0'
         },200)
         setTimeout(function(){
            hoverimg2.style.visibility = 'hidden'
            hoverimg2.style.opacity = '0'
         },300)
         setTimeout(function(){
            hoverimg3.style.visibility = 'hidden'
            hoverimg3.style.opacity = '0'
         },400)
    })
    }
hoverEvect(box1,hoverImgVrin1,hoverImg1Vrin1,hoverImg2Vrin1,hoverImg3Vrin1);
hoverEvect(box2,hoverImgVrin2,hoverImg1Vrin2,hoverImg2Vrin2,hoverImg3Vrin2);
hoverEvect(box3,hoverImgVrin3,hoverImg1Vrin3,hoverImg2Vrin3,hoverImg3Vrin3);
hoverEvect(box4,hoverImgVrin4,hoverImg1Vrin4,hoverImg2Vrin4,hoverImg3Vrin4);
hoverEvect(box5,hoverImgVrin5,hoverImg1Vrin5,hoverImg2Vrin5,hoverImg3Vrin5);
hoverEvect(box6,hoverImgVrin6,hoverImg1Vrin6,hoverImg2Vrin6,hoverImg3Vrin6);
hoverEvect(box7,hoverImgVrin7,hoverImg1Vrin7,hoverImg2Vrin7,hoverImg3Vrin7);
hoverEvect(box8,hoverImgVrin8,hoverImg1Vrin8,hoverImg2Vrin8,hoverImg3Vrin8);
hoverEvect(box9,hoverImgVrin9,hoverImg1Vrin9,hoverImg2Vrin9,hoverImg3Vrin9);
hoverEvect(box10,hoverImgVrin10,hoverImg1Vrin10,hoverImg2Vrin10,hoverImg3Vrin10);
hoverEvect(box11,hoverImgVrin11,hoverImg1Vrin11,hoverImg2Vrin11,hoverImg3Vrin11);
hoverEvect(box12,hoverImgVrin12,hoverImg1Vrin12,hoverImg2Vrin12,hoverImg3Vrin12);


let sidebarClick = document.querySelector('.menu-div-mob .menu-icon')
let sidebar = document.querySelector('.sidebarr')
let closeSidebar = document.querySelector('.close')
sidebarClick.addEventListener('click',function(){
   sidebar.classList.add('open-sidebar')
})
closeSidebar.addEventListener('click',function(){
   sidebar.classList.remove('open-sidebar')

})