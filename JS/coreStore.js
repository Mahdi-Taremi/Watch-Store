
const button = document.querySelector('.button');
const showModal = document.querySelector(".modual");
const backdrop = document.querySelector(".backdrop");
const closemodal = document.querySelector(".fa-circle-xmark");



const productDOM = document.querySelector(".products");

import{productsData} from "./products.js";
// 1. get products
class Products {
   getProducts(){
   return productsData;
}
};


// 2. display products 
class UI{
   displayProducts(products){
      let result ="";
      products.forEach((item) => {
         result += ` <div class="product one">
         <div class="product_body">
             <div class="product_header">
                 <img src=${item.imageUrl} class="p-img" />
             </div>
             <div class="product_footer">
                 <h3 class="product_title f"> ${item.title} </h3>
                 <h4 class="product_price f">$ ${item.price} </h4>
                 <button class="product_btn_buy f addBtncart" data-id=${item.id}>Buy</button>
             </div>
         </div>
     </div>`;
         productDOM.innerHTML=result;
      });
   }
   getAddTocartBtn(){
      const addTocartBtn = document.querySelectorAll(".addBtncart");
      const buttons = [...addTocartBtn];

      console.log(buttons);
      buttons.forEach((button) =>{
         const id = button.dataset.id;
         //check if this products id is in cart or not 
         const isinCart = modual.find((p) => p.id === id);
         
         if(isinCart){
            // button.innerText ="product in cart";
            button.display =true;
         }
         button.addEventListener("click",(event)=>{
            console.log("hi");
         });
      });
   }

};

//3. storage
class Storage{
    static saveProducts(products){
      localStorage.setItem('products',JSON.stringify(products));
   }
};

document.addEventListener('DOMContentLoaded', () =>{
   const products = new Products();
   const productsData = products.getProducts();
   // console.log(productsData);
   const ui = new UI();
   ui.displayProducts(productsData);
   ui.getAddTocartBtn();
   Storage.saveProducts(productsData);
});


//Cart item modal
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
