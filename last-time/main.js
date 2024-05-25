
var productlistHTML=document.querySelector ('.listproduct')
var icon = document.querySelector('.icon');
var body= document.querySelector('body');
let close1 = document.querySelector('.close');
 let listcartHTML = document.querySelector('.listcart');
// icon.addEventListener('click',()=>{
//   body.classList.add('showcart')
// });

// close1.addEventListener('click',()=>{
//   body.classList.toggle('showcart')
// })

let itemsFromJson=[];
 let cart=[]; 

 //add it the website (html)
const addDataToHtml = () => {
   productlistHTML.innerHTML='';
  if(itemsFromJson.length >0){
    itemsFromJson.forEach( product =>{
      let neProduct= document.createElement('div');
      neProduct.classList.add('item');
      neProduct.dataset.id= product.id;
        neProduct.innerHTML = `
        <img src="${product.image}" alt="">
        <div class="name-t">
       ${product.name}</div> 
        <div class="PRICE">${product.Price}</div>
       `;
        productlistHTML.appendChild(neProduct)
    })
  }
}
//   //event of clicking 
// productlistHTML.addEventListener('click',(event)=>{
//   let positionClick =event.target;
//   if(positionClick.classList.contains('addCart')){
//     let product_id =positionClick.parentElement.dataset.id
  
//     addToCart(product_id)}
 
// })

    // adding the position click to the product list
// const addToCart =(product_id) =>{
//                 let positionClickCart= cart.findIndex((value) =>value.product_id==product_id);
//                 if(cart.length<=0){
//                   cart= [{
//                     product_id: product_id,
//                   quantity:1
//                   }]
//                 }else if(positionClickCart<0){
//                   cart.push({
//                     product_id:product_id,
//                     quantity:1

//                   });
//                 } else{
//                   cart[positionClickCart].quantity +=1;

//                 }
//                 addToCartHtml(cart)
//               }
//  const addToCartHtml = (cart) => {
//   listcartHTML.innerHTML = '';
//   if(cart.length > 0){
//     cart.forEach(cart => {
//       let newCart = document.createElement('div');
//       let positionProduct= productlistHTML.findIndex((value)=> value.id==cart.product_id);
//      let info =productlistHTML[positionProduct];
//       newCart.classList.add('Item')
//       newCart.innerHTML=` 
//       <div class="image"><img src="${info.image}" ></div>
//       <div class="productName">${info.name}</div>
//       <div class="price">$3.50</div>
//               <div class="quantity">
//               <span class="minus">-</span>
//               <span class="quatity">o</span>
//               <span class="plus">+</span>
//           </div>
  
//       `;
//       listcartHTML.appendChild(newCart);
//     })
//   }
//  }




//fetched products from json//
const initApp = () =>{
 fetch("productlist.json")
 .then(Response =>Response.json())
  .then(data => {
    itemsFromJson = data;
   addDataToHtml();
  })


}
initApp();

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();