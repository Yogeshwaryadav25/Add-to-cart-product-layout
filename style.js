let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click',()=> {
    body.classList.add('active');
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name:'PRODUCT NAME 1',
        images:'1.png',
        price: 5000
    },
    {
        id: 2,
        name:'PRODUCT NAME 2',
        images:'2.png',
        price: 6000
    },
    {
        id: 3,
        name:'PRODUCT NAME 3',
        images:'3.png',
        price: 7000
    },
    {
        id: 4,
        name:'PRODUCT NAME 4',
        images:'4.png',
        price: 5000
    },
    {
        id: 5,
        name:'PRODUCT NAME 5',
        images:'5.png',
        price: 5000
    },
    {
        id: 6,
        name:'PRODUCT NAME 6',
        images:'6.png',
        price: 5000
    },
];

let listCards = [];
function initapp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
          <img src="/${value.image}"/>
          <div class="title">${value.name}</div
          <div class="price">${value.price.toLocaleString()}</div>
          <button oneclick="addToCard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv);

    })
}
initapp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] == products[key];
        listCards[key].quantity = 1;
    }
    reloadcard();
}
function reloadcard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

       if(value != null){
          let newDiv = document.createElement('li');
          newDiv.innerHTML = `
                <div><img src="/${value.image}"/</div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button oneclick"changequantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button oneclick"changequantity(${key}, ${value.quantity + 1})">+</button>
                </div>
          `;
          listCard.appendChild(newDiv);
       }

    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changequantity(key, quantity){
    if(quantity ==0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;

    }
    reloadcard();

}
