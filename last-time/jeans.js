let myjeans= [];
let jeanshtml= document.querySelector('.jeans');

const initApp = ( ) => {
  fetch('jeans.json')
  .then(Response =>Response.json())
  .then(data=>{
    myjeans= data;
    addtojeans(myjeans)
  })

}
initApp();
const addtojeans =()=>{
  jeanshtml.innerHTML='';
  if(myjeans.length>0){
    myjeans.forEach(jean=>{
      let jeanproduct= document.createElement('div')
      jeanproduct.classList.add('.item');
      jeanproduct.dataset.id=jean.id;
      jeanproduct.innerHTML=`
      <div class="item">
            <img src="${jean.image}" alt="">
            <div class="PRICE">${jean.Price}</div>
            ${jean.name}
        </div>
      `;
      jeanshtml.appendChild(jeanproduct)
    })
  }

 }