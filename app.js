const images=document.querySelectorAll('.diaporamaImage');
const precedent=document.querySelector(".precedent");
const suivant=document.querySelector(".suivant");
let count=1;
let nombreImages=images.length;
let interval;
const chiffres=document.querySelectorAll(".chiffre");
const elChiffreSpan=document.querySelectorAll('.chiffreSpan')

precedent.addEventListener("click",(e)=>{
    e.preventDefault();
    count--;
  
    if(count<0){
         count=nombreImages-1;
    }
    removeActive();
    enleverChiffreSpan();
    images[count].classList.add("active");
    elChiffreSpan[count].classList.add('active');   

})

suivant.addEventListener('click',(e)=>{
    e.preventDefault();
    count++;
    if(count>nombreImages-1){
        count=0;
    }
    removeActive();
    enleverChiffreSpan();
    images[count].classList.add("active");
    elChiffreSpan[count].classList.add('active');
})

function removeActive(){
    for(i=0;i<nombreImages;i++){
        images[i].classList.remove('active');
    }
}

function enleverChiffreSpan(){
    for(i=0;i<elChiffreSpan.length;i++){
        elChiffreSpan[i].classList.remove('active')
    }
}

chiffres.forEach((chiffre)=>{
    chiffre.addEventListener("click",quelChiffre)
})

function quelChiffre(e){
    e.preventDefault();
    const chiffreClique=e.currentTarget.dataset.chiffre;

    switch(chiffreClique){
        case "1":
            removeActive();
            enleverChiffreSpan()
            images[0].classList.add('active');
            elChiffreSpan[0].classList.add('active');
            break;
        case "2":
            removeActive();
            enleverChiffreSpan();
            images[1].classList.add('active');
            elChiffreSpan[1].classList.add('active')
            break;
        case "3":
            removeActive();
            enleverChiffreSpan();
            images[2].classList.add('active');
            elChiffreSpan[2].classList.add('active')
            break;
        case "4":
            removeActive();
            enleverChiffreSpan();
            images[3].classList.add('active');
            elChiffreSpan[3].classList.add('active')
            break;
    }

}