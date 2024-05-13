let displayArea = document.querySelector('.products-grid');
let jsquan = document.querySelector(".js-quan");
/*
let prod_db = [{
    img_url : './Images/products/athletic-cotton-socks-6-pairs.jpg',
    prod_name : 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    prod_price_cents : 1090,
    rating : {
        stars : './Images/ratings/rating-45.png',
        ppl_rated : 87
    }
},
{
    img_url : './Images/products/intermediate-composite-basketball.jpg',
    prod_name : 'Intermediate Size Basketball',
    prod_price_cents : 2095,
    rating : {
        stars : './Images/ratings/rating-40.png',
        ppl_rated : 127
    }   
},
{
    img_url : './Images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    prod_name : 'Adults Plain Cotton t-shirt - 2 pack',
    prod_price_cents : 799,
    rating : {
        stars : './Images/ratings/rating-45.png',
        ppl_rated : 55
    }   
},
{
    img_url : './Images/products/bathroom-rug.jpg',
    prod_name : 'Intermediate Size Basketball',
    prod_price_cents : 1295,
    rating : {
        stars : './Images/ratings/rating-30.png',
        ppl_rated : 17
    }   
}]; */

generateHtml(prod_db);

function generateHtml(arrayDatabase){
    let combinedHtml = '';
    let singleHtml = '';
    arrayDatabase.forEach( (value, index) =>{
     singleHtml =
     `<div class="product">
     <div class="image-div">
       <img src="${value.image}">
     </div>

     <div class="prod-desc">
       <p class="prod-name limit-text-to-2-lines">${value.name}</p>
       <div class="ratings-div">
         <img src="./Images/ratings/rating-${value.rating.stars*10}.png">
         <p>${value.rating.count}</p>
       </div>
       <p><b>$${(value.priceCents/100).toFixed(2)}</b></p>

       <select name="quantity-products" id="quantity-products">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         <option value="6">6</option>
         <option value="7">7</option>
         <option value="8">8</option>
         <option value="9">9</option>
         <option value="10">10</option>
       </select>
     </div>
     <p class="addedMsg"></p>
     <div class="addtocart-div">
       <button class="addtocart-btn" data-product-id="${value.id}">Add to Cart</button>
     </div>
  </div>`
  combinedHtml += singleHtml;
    });
    displayArea.innerHTML = combinedHtml;
}
let addedMessage = document.querySelector(".addedMsg");
let addCartButton = document.querySelectorAll(".addtocart-btn");

addCartButton.forEach( (value, index) => { // basically this button has all the buttons in an array
   value.addEventListener('click', () => {
    console.log(value.dataset.productId); // access the specific button by adding a data attribute to the button
    let currentId = value.dataset.productId;
    let currObj ;

    cartArr.forEach( (itemObj)=> {
          if(currentId === itemObj.id){
            currObj = itemObj;
          }
        });
        
        if(currObj){
           currObj.quantity += 1;
        }
        else{
          let newObj = {
            id: `${currentId}`,
            quantity : 1
          }
          cartArr.push(newObj);
        }

      //cart quantity calculation
      let quan = 0 ; 
      cartArr.forEach( (item,index) => {
        quan += item.quantity;
      })
      console.log(quan);
     console.log(cartArr);
     jsquan.innerHTML = quan;
 //   cartArr.push(prod_db[index]);
 
   });
});
