const container = document.querySelector('.img-box');
const img = document.querySelector('.img-box img');
container.addEventListener('mousemove',(e)=>{
    const x = e.clientX - e.target.offsetLeft
    const y = e.clientY - e.target.offsetTop
    img.style.transformOrigin = `${x}px ${y}px`
    img.style.transform = 'scale(1.5)'

})
container.addEventListener('mouseleave',(e)=>{
    // const x = e.clientX - e.target.offsetLeft
    // const y = e.clientY - e.target.offsetTop
    img.style.transformOrigin = `center`
    img.style.transform = 'scale(1)'

})  
let boxImg1 = document.querySelector('.box2 .img1')
let boxImg2 = document.querySelector('.box2 .img2') 
let boxImg3 = document.querySelector('.box2 .img3')
let boxImg4 = document.querySelector('.box2 .img4')
let boxImg5 = document.querySelector('.box2 .img5')
let boxImg6 = document.querySelector('.box2 .img6')
let boxImg7 = document.querySelector('.box2 .img7')
let boxImg8 = document.querySelector('.box2 .img8')
let boxImg9 = document.querySelector('.box2 .img9')
let boxImg10 = document.querySelector('.box2 .img10')
let boxImg11 = document.querySelector('.box2 .img11')



function imgScale(boxImg,source){
boxImg.addEventListener('mouseover',()=>{
    img.src=source
})
}
imgScale(boxImg1,"images/47__20864 (1).jpg")
imgScale(boxImg2,"images/46__58349.jpg")
imgScale(boxImg3,"images/48__19933.jpg")
imgScale(boxImg4,'images/51__14746.jpg')
imgScale(boxImg5,'images/50__80011.jpg')
imgScale(boxImg6,'images/54__23769 (2).jpg')
imgScale(boxImg7,'images/52__51932.jpg')
imgScale(boxImg8,'images/53__04398.jpg')
imgScale(boxImg9,'images/56__54177.jpg')
imgScale(boxImg10,'images/55__45904.jpg')
imgScale(boxImg11,'images/49__05767.jpg')



let numinput = document.querySelector('.number-input')
numinput.addEventListener('click',(e)=>{
      console.log(e.target.value)
      if(e.target.value<1){
        e.target.value = 1
        numinput.style.pointerEvents='none'
      }
})

let container3Click = document.querySelector('.container3-header .box1')
let container3Click1 = document.querySelector('.container3-header .box2')
let container3Main1 = document.querySelector('.container3-main1')
let container3Main = document.querySelector('.containerr3 .container3-main')
let containerr3 = document.querySelector('.containerr3')
console.log(container3Main)

container3Click1.addEventListener('click',function(){
    container3Main1.style.display = 'flex'
    container3Main.style.display='none'
    containerr3.style.height='300px'
})
container3Click.addEventListener('click',function(){
    container3Main1.style.display = 'none'
    container3Main.style.display='flex'
    containerr3.style.height='1000px'
    
})

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

