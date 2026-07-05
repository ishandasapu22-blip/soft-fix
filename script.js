window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseover",()=>{

card.style.transform="scale(1.05)";

});

card.addEventListener("mouseout",()=>{

card.style.transform="scale(1)";

});

});