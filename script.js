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



let searchIconClick = document.querySelector('.search-icon')
let searchIconImg = document.querySelector('.search-icon img')
let check = true;
let i = 0;
let searchMob = document.querySelector('.search-mob')
searchIconClick.addEventListener('click',function(){
    check = true
    searchMob.classList.toggle('open-search-mob')

    searchIconImg.src = "images/icons8-cancel-32.png"
   console.log(i)
   if(i==2){
    i = 0
   }
   i++

   if(i == 2 ){
    searchIconImg.src = "images/icons8-search-50.png"
}
})


console.log(check)
let contents = document.querySelector('.contents')
let contents1 = document.querySelector('.contents2')

// let line = document.querySelector('.lines .line1')

let line2Click = document.querySelector('.lines .line2');
let line1Click = document.querySelector('.lines .line1');

let sideBarContent = document.querySelector('.contentss')
    line2Click.addEventListener("click",function(){
        sideBarContent.style.transform='translateX(-100%)'
        line2Click.style.width = '20px'
        line1Click.style.width = '8px'
        line2Click.style.backgroundColor = '#EA3A3C'
        line1Click.style.backgroundColor = 'black'
    })

line1Click.addEventListener("click",function(){
    sideBarContent.style.transform='translateX(0)'
    line2Click.style.width = '8px'
    line1Click.style.width = '20px'
    line1Click.style.backgroundColor = '#EA3A3C'
    line2Click.style.backgroundColor = 'black'
})
let buyContent = document.querySelector('.buy-content1')
let buyContent1 = document.querySelector('.buy-content2')
let buyContent2 = document.querySelector('.buy-content3')
let buyContent3 = document.querySelector('.buy-content4')
let buyContent4 = document.querySelector('.buy-content5')
let buyContent5 = document.querySelector('.buy-content6')
let buyContent6 = document.querySelector('.buy-content7')
let buyContent7 = document.querySelector('.buy-content8')
let buyContent8 = document.querySelector('.buy-content9')
let buyContent9 = document.querySelector('.buy-content10')

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

hoverEvect(buyContent,hoverImgVrin1,hoverImg1Vrin1,hoverImg2Vrin1,hoverImg3Vrin1)
hoverEvect(buyContent1,hoverImgVrin2,hoverImg1Vrin2,hoverImg2Vrin2,hoverImg3Vrin2)
hoverEvect(buyContent2,hoverImgVrin3,hoverImg1Vrin3,hoverImg2Vrin3,hoverImg3Vrin3)
hoverEvect(buyContent3,hoverImgVrin4,hoverImg1Vrin4,hoverImg2Vrin4,hoverImg3Vrin4)      
hoverEvect(buyContent4,hoverImgVrin5,hoverImg1Vrin5,hoverImg2Vrin5,hoverImg3Vrin5)
hoverEvect(buyContent5,hoverImgVrin6,hoverImg1Vrin6,hoverImg2Vrin6,hoverImg3Vrin6)
hoverEvect(buyContent6,hoverImgVrin7,hoverImg1Vrin7,hoverImg2Vrin7,hoverImg3Vrin7)
hoverEvect(buyContent7,hoverImgVrin8,hoverImg1Vrin8,hoverImg2Vrin8,hoverImg3Vrin8)
hoverEvect(buyContent8,hoverImgVrin9,hoverImg1Vrin9,hoverImg2Vrin9,hoverImg3Vrin9)
hoverEvect(buyContent9,hoverImgVrin10,hoverImg1Vrin10,hoverImg2Vrin10,hoverImg3Vrin10)




console.log(buyContent3)

let slide = document.querySelector('.slide1-img')
let slider = document.querySelector('.slide1-img div')
console.log(slider)
let pressed = false;

let startx;
let x;

slide.addEventListener('mousedown',(e)=>{
    pressed = true
    startx = e.offsetX - slider.offsetLeft;
    console.log(slider.offsetLeft)
})
window.addEventListener('mouseup',()=>{
    pressed = false
})
slide.addEventListener('mousemove',(e)=>{
   if(!pressed) return
   e.preventDefault()

   x=e.offsetX
   slider.style.transform = `translateX(100%)`
})

let klor2 = document.querySelector('.lines .klor2')
let klor1 = document.querySelector('.lines .klor1')
let klor3 = document.querySelector('.lines .klor3')
console.log(klor3)
let box2Images = document.querySelectorAll('.sliders')
function sidebarSlider (klor,klor1,klor2,trans){
klor.addEventListener('click',()=>{
    for(let key of box2Images){
    key.style.transform=`translateX(${trans}%)`
    }
    klor.style.width = '20px'
    klor.style.backgroundColor='#EA3A3C'
    klor.style.borderRadius = '20px'
     klor1.style.width = '8px'
      klor1.style.backgroundColor = 'black'
      klor2.style.width = '8px'
      klor2.style.backgroundColor = 'black'
})
}
sidebarSlider(klor1,klor3,klor2,-255)
sidebarSlider(klor2,klor3,klor1,-120)
sidebarSlider(klor3,klor2,klor1,0)


let productAreaKlor1 = document.querySelector('.box1-klor1')
let productAreaKlor2 = document.querySelector('.box1-klor2')
let slideContent = document.querySelector('.box1-main')
function surcleClick(surcle,content,trans){
surcle.addEventListener('click',function(){
    content.style.transform = `translateX(${trans}%)`
}) 
}
surcleClick(productAreaKlor2,slideContent,-100)
surcleClick(productAreaKlor1,slideContent,0)


let slideBtn = document.querySelector('.arrows .arrow-right')
let slideBtn1 = document.querySelector('.arrows .arrow-left')

let slideContainer = document.querySelector('.container-slide')

let slideIndex = document.querySelector('.containers .lines .first')
let slideIndex1 = document.querySelector('.containers .lines .second')
let slideIndex2 = document.querySelector('.containers .lines .third')

// let index = [slideIndex,slideIndex1,slideIndex2,''];
// console.log(index)
let check1;
let v = 0;
let b = 3;
let transform=0;
let transformBack = 50;
slideBtn.addEventListener('click',function(){
    v++
    transform+=-50

     slideContainer.style.transform = `translateX(${transform}%)` 
if(v==1){
     slideIndex.style.backgroundColor='black'
     slideIndex1.style.backgroundColor = '#EA3A3C'
}
if(v==2){
    slideIndex1.style.backgroundColor='black'
    slideIndex2.style.backgroundColor = '#EA3A3C'
}
    if(transform==-150){
        slideContainer.style.transform = `translateX(0)` 
        transform=0 
        slideIndex.style.backgroundColor='#EA3A3C'
        slideIndex2.style.backgroundColor = 'black'
        v=0
    }
console.log(transform)
})
slideBtn1.addEventListener('click',function(){
        
    transform+=50
    slideContainer.style.transform = `translateX(${transform}%)` 
console.log(transform)
if(transform>0){
    slideContainer.style.transform = `translateX(-100%)` 
    transform=-100
}

})
// slideBtn1.addEventListener('click',function(){
//     b--

//     if(b==2){
//     slideContainer.style.transform = 'translateX(0%)' 

        
//       }  
         
// })

let logoSlideBtn1 = document.querySelector('.logo-area .btn1')
let logoSlideBtn2 = document.querySelector('.logo-area .btn2')

let logoSLide = document.querySelector('.slide-logo')
let Slide = document.querySelector('.slide-box')

console.log(logoSLide)
let trans = 0;
logoSlideBtn1.addEventListener('click',function(){
    trans+=-160
    console.log(trans)
    logoSLide.style.transform=`translateX(${trans}px)`
    if(trans==-1280){
    logoSLide.style.transform=`translateX(0px)`
     trans=0
    }
    // Slide.style.left='100%'

})
logoSlideBtn2.addEventListener('click',function(){
    trans+=160
    console.log(trans)
    logoSLide.style.transform=`translateX(${trans}px)`
    if(trans>=1280){
    logoSLide.style.transform=`translateX(0px)`
     trans=0
    }
})
let checkk = true
let nav = document.querySelector('nav')
window.addEventListener('scroll',function(){
   if(scrollY==200){
   }
        if(scrollY>200){
            nav.style.position='fixed'
            nav.style.zIndex=1000000
            nav.style.top = '0'
            nav.style.height = '60px'
        }
   else{
    nav.style.position='static'
   }
})
let categoriesHeader = document.querySelector('.categories-header')
    let categoriesDrop = document.querySelector('.categories-drop')
    let categories = document.querySelector('.categories')

console.log(categoriesDrop)
categoriesHeader.addEventListener('mouseenter',function(){
      categoriesDrop.style.visibility='visible'
      categoriesDrop.style.opacity='1'
})
let checker = false
if(!checker){
setTimeout(function(){
    categories.addEventListener('mouseleave',function(){
        categoriesDrop.style.visibility='0'
        categoriesDrop.style.opacity='0'
    })
},1000)
}
console.log(categoriesHeader)


let mobileFooterclick1 = document.querySelector('.footer-li1 img')
let mobileFooterUl = document.querySelector('.footer-li1')

let mobileFooterclick2 = document.querySelector('.footer-li2 img')
let mobileFooterUl1 = document.querySelector('.footer-li2')

let mobileFooterclick3 = document.querySelector('.footer-li3 img')
let mobileFooterUl2 = document.querySelector('.footer-li3')

let mobileFooterclick4 = document.querySelector('.footer-li4 img')
let d = 0;
function openUl (arrow,Ul){
arrow.addEventListener('click',function(){
    d++
    arrow.style.transform='rotate(-90deg)'
    Ul.style.height='220px'
    if(d>=2){
    Ul.style.height='30px'
        d = 0
    arrow.style.transform='rotate(90deg)'

    }
})
}
openUl(mobileFooterclick1,mobileFooterUl)
openUl(mobileFooterclick2,mobileFooterUl1)
openUl(mobileFooterclick3,mobileFooterUl2)

// alert('ad')

let arrowImages = document.querySelector('.container1 li img')
console.log(arrowImages)



let featuredSlideBtn1 = document.querySelector('.featured-products-header .klor1')
let featuredSlideBtn2 = document.querySelector('.featured-products-header .klor2')
let featuredSlide = document.querySelectorAll('.featured-products-main .featured-slide .box')

let transformX = 0;
featuredSlideBtn2.addEventListener('click',function(){
    transformX+=105

    for(let key of featuredSlide){
    key.style.transform=`translateX(${transformX}%)`
    }
    console.log(transformX)
    if(transformX>420){
        for(let key of featuredSlide){
    key.style.transform=`translateX(0)`
        }
        transformX=0
    }
})
featuredSlideBtn1.addEventListener('click',function(){
    transformX-=105

    for(let key of featuredSlide){
    key.style.transform=`translateX(${transformX}%)`
    }
    console.log(transformX)
    if(transformX<-420){
        for(let key of featuredSlide){
    key.style.transform=`translateX(0)`
        }
        transformX=0
    }
})

let upBtn = document.querySelector('.up-button')

upBtn.addEventListener('click',function(){
  transform 
})
