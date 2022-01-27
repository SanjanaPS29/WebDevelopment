const dropdown=document.getElementById('drop');
count=0;
const myInterval=setInterval(getData, 1000);

dropdown.addEventListener('click',(e)=>{
    getData()
}

)

async function getData(){
    const res=await fetch('https://randomuser.me/api?results=10')
    const {results}=await res.json()
    console.log(res)
    results.forEach(user =>{
const img=document.createElement('img');
img.src=user.picture.large;
img.width="200";
img.height="200";
img.className='dropdown-items';
img.classList.add('img')
count++;
if(count>=10){
    clearInterval(myInterval);
}
dropdown.appendChild(img);
    })
 
}
