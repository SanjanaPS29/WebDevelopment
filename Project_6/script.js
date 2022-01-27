const dropdown=document.getElementById('drop');
// const dropdown-content= .getElementById
const dropdown1=document.getElementById('myDropdown');
const arrow=document.getElementById('rotate')
flag=false;
count=0;

dropdown1.addEventListener('click',(e)=>{
    console.log(flag)
  
    if(flag==false){
        dropdown.classList.add("show");
        dropdown.classList.add("down");
        dropdown.classList.remove("up");
       
        arrow.classList.add("arrow-rotate");

        flag=true;
    }
  else{
    dropdown.classList.add("up");
    dropdown.classList.remove("down");
    console.log(dropdown)
     
    arrow.classList.remove("arrow-rotate");
   // drop.classList.remove("down");
    flag=false;
  }
})
  

const myInterval=setInterval(getData, 1000);

async function getData(){
    const res=await fetch('https://randomuser.me/api?results=10')
    const {results}=await res.json()
    console.log(res)
 
   let c=0;
    results.forEach(user =>{
        const div=document.createElement('div');
const img=document.createElement('img');
img.src=user.picture.large;
img.width="100";
img.height="100";
img.className='dropdown-items';
img.classList.add('img')
count++;
if(count>=10){
    clearInterval(myInterval);
}
div.classList.add('content')
div.appendChild(img);
dropdown.appendChild(div);

if(c<results.length-1)
{
    const hr=document.createElement('hr');
  
    dropdown.appendChild(hr);
    c++;
}

    })
 
}
