const header=document.getElementById('header')
const title=document.getElementById('title')
const excerpt=document.getElementById('excerpt')
const profile_img=document.getElementById('profile_img')
const name1=document.getElementById('name')
const date=document.getElementById('date')

const animated_bgs=document.querySelectorAll('.animated-bg')
const animated_bg_texts=document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 99500)
function getData(){
    header.innerHTML='<img src="laptop.jfif" alt=""/>'
    title.innerHTML='Lorem ipsum dolor sit amet.'
    excerpt.innerHTML=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, laboriosam?'
   profile_img.innerHTML=' <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" class="">'
  
   name1.innerHTML='John Doe'
   date.innerHTML='Oct 08,2020'

 animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))

}
