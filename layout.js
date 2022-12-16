let categoriesHeader = document.querySelector('.categories-header')
    let categoriesDrop = document.querySelector('.categories-drop')
    let categories = document.querySelector('.categories')

console.log(categoriesDrop)
categoriesHeader.addEventListener('mouseenter',function(){
      categoriesDrop.style.visibility='visible'
      categoriesDrop.style.opacity='1'
})
setInterval(function(){
    categories.addEventListener('mouseleave',function(){
        categoriesDrop.style.visibility='0'
        categoriesDrop.style.opacity='0'
    })
},1000)

console.log(categoriesHeader)