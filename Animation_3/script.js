const circle=document.getElementById('circles')

let size=20;
let delay=2;
let duration=10;
let dis=1;
for(let i=0;i<50;i++){
    var randomcolor ='#'+Math.floor(Math.random()*16777215).toString(16);
    const li=document.createElement('li')
    // li.style.left=dis+'%';
    li.style.width=size+'px';
    li.style.height=size+'px';
    li.style.animationDelay=delay+'s';
    li.style.animationDuration=duration+'s';
   li.style.background=randomcolor;
 // li.style.left=dis+'px';
 
    for(let j=0;j<20;j++){
        const li1=li;
        li1.style.left=dis+'%';
        circle.appendChild(li)
        dis=dis+1;
        if(dis>100){
            dis=10;
        }      
    }
   
    size=size+5;
//    delay=delay+5;
    if(size>30){
        size=20;
    }
 
    if(duration>50){
        duration=10;
   }
   duration=duration+10;
    
}
/*
for(let k=0;k<10;k++){
    const li=document.createElement('li')
    // li.style.left=dis+'%';
    li.style.width=size+'px';
    li.style.height=size+'px';
    li.style.animationDelay=delay+'s';
    li.style.animationDuration=duration+'s';
   li.style.background=randomcolor;


    for(let j=0;j<20;j++){
        const l=li;
        l.style.left=dis+'%';
        circle.appendChild(li)
     
        if(dis>100){
            dis=10;
        }
        dis=dis+10;      
    }

    if(duration>50){
        duration=10;
   }
    duration=duration+10;
  }
 
  
    if(size>20){
        size=20;
    }
    size=size+5;
}

*/