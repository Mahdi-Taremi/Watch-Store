const button = document.querySelector('.button');
const showModal = document.querySelector(".modual");
const backdrop = document.querySelector(".backdrop");
const closemodal = document.querySelector(".fa-circle-xmark");


button.addEventListener("click",showmodal =>{
   backdrop.style.display="block";
   showModal.style.opacity = "1";
   showModal.style.top="20%";
});

closemodal.addEventListener("click", closeModal =>{
   backdrop.style.display="none";
   showModal.style.opacity="0";
   showModal.style.top="-100%";
});
