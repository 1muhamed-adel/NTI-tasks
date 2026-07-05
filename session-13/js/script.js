let imgreplace =()=>{
    let img = document.getElementById('imge')
    if (img.src.endsWith('/1.png')) {
       img.src = 'image/2.png'
    }
    else if(img.src.endsWith('/2.png')){

        img.src = 'image/1.png'
    }

    
}

let changeColor = (ele)=>{
   ele.style.color = 'red'
   ele.classList.remove('color')
   


    
}