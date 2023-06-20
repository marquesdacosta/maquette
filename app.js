const images=document.querySelectorAll('.diaporamaImage');
const precedent=document.querySelector(".precedent");
const suivant=document.querySelector(".suivant");
let count=1;
let nombreImages=images.length;
let interval;
const chiffres=document.querySelectorAll(".chiffre");
const elChiffreSpan=document.querySelectorAll('.chiffreSpan');
const elRecuperationContainerH2DiaporamaImage=document.querySelector(".containerH2DiaporamaImage")
const elRecuperationH2DiaporamaImage=document.querySelectorAll(".h2DiaporamaImage");
const recuperationDivFlecheRemonterFooter=document.querySelector(".containerFlecheRemonterFooter")


precedent.addEventListener("click",(e)=>{
    e.preventDefault();
    count--;

    if(count<0){
        count=nombreImages-1;
    }
  
    if(count===0){
        elRecuperationContainerH2DiaporamaImage.style.left='48%'
    }

    if(count===1){
        elRecuperationContainerH2DiaporamaImage.style.left='50%'
        elRecuperationContainerH2DiaporamaImage.style.top='calc(286 / var(--hauteurDiaporama) * 100%)';
        elRecuperationH2DiaporamaImage[count].style.whiteSpace='nowrap';
    }

    if(count===2){
        elRecuperationH2DiaporamaImage[count].style.textAlign='center';
        elRecuperationH2DiaporamaImage[count].style.whiteSpace='wrap';
        elRecuperationContainerH2DiaporamaImage.style.top='calc(140 / var(--hauteurDiaporama) * 100%)';
        elRecuperationContainerH2DiaporamaImage.style.left='50%'
    }

    if(count===3){
        elRecuperationContainerH2DiaporamaImage.style.left='50%';
        elRecuperationH2DiaporamaImage[count].style.whiteSpace='nowrap';
        elRecuperationH2DiaporamaImage[count].style.textAlign="center";
        elRecuperationContainerH2DiaporamaImage.style.top='calc(286 / var(--hauteurDiaporama) * 100%)'
    }

    removeActive();
    enleverChiffreSpan();
    enleverH2Active();
    elRecuperationH2DiaporamaImage[count].classList.add("active")
    images[count].classList.add("active");
    elChiffreSpan[count].classList.add('active');   

})

suivant.addEventListener('click',(e)=>{
    e.preventDefault();
    count++;
    if(count>nombreImages-1){
        count=0;
    }

    
    if(count===0){
        elRecuperationContainerH2DiaporamaImage.style.left='48%'
    }

    if(count===1){
        elRecuperationContainerH2DiaporamaImage.style.left='50%'
        elRecuperationContainerH2DiaporamaImage.style.top='calc(286 / var(--hauteurDiaporama) * 100%)';
        elRecuperationH2DiaporamaImage[count].style.whiteSpace='nowrap';
    }

    if(count===2){
        elRecuperationH2DiaporamaImage[count].style.textAlign='center';
        elRecuperationH2DiaporamaImage[count].style.whiteSpace='wrap';
        elRecuperationContainerH2DiaporamaImage.style.top='calc(140 / var(--hauteurDiaporama) * 100%)';
        elRecuperationContainerH2DiaporamaImage.style.left='50%'
    }

    if(count===3){
        elRecuperationContainerH2DiaporamaImage.style.left='50%';
        elRecuperationH2DiaporamaImage[count].style.whiteSpace='nowrap';
        elRecuperationH2DiaporamaImage[count].style.textAlign="center";
        elRecuperationContainerH2DiaporamaImage.style.top='calc(286 / var(--hauteurDiaporama) * 100%)'
    }
  
    removeActive();
    enleverChiffreSpan();
    enleverH2Active();
    elRecuperationH2DiaporamaImage[count].classList.add("active")
    images[count].classList.add("active");
    elChiffreSpan[count].classList.add('active');
   
})

recuperationDivFlecheRemonterFooter.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'

    })
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

function enleverH2Active(){
    for(i=0;i<elRecuperationH2DiaporamaImage.length;i++){
        elRecuperationH2DiaporamaImage[i].classList.remove('active')
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