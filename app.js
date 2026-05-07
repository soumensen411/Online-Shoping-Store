function fetch_product(){
  fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("product-grid");
    data.forEach((product) => {
     card = document.createElement("div");
      card.classList.add("product-card-wrapper");
      card.innerHTML = ` 
                <div class="product-card bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg">
                    <img src="${product.image}" class="mx-auto h-56 object-contain p-4" alt="shirt">
                    <div class="p-5">
                        <p class="text-sm font-medium text-gray-900 mb-3">${product.title}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-base font-bold text-gray-900">$${product.price}</span>
                            <button onclick="addToCart(${product.price})" class="text-white bg-orange-500 rounded-lg px-4 py-2 text-xs font-semibold hover:bg-gray-900">Add To Cart</button>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(card)
    });
  });
}
fetch_product()
let balance = 1000
let dele_charge = 120
let discount = 10
let initialcart = 0

let total_bal = document.querySelector('.total-bal')
let add_price = document.getElementById('money-input')
let final_bal = document.getElementById('final-bal')
let cart_price = document.getElementById('cart-money')
let add_money_btn = document.getElementById('add-money')
let show_discount = document.getElementById('dis-show')
let placeOrder = document.getElementById('place-order')
total_bal.innerHTML = balance
final_bal.innerHTML = balance

function addToCart(price){
  initialcart+= price
  cart_price.innerHTML = initialcart
  discount = (price * discount )/100
}
show_discount.innerText = discount
add_money_btn.addEventListener("click", function () {
    const inputValue = parseFloat(add_price.value);

    if(isNaN(inputValue) || inputValue == ''){
      alert('Please enter a valid amount');
        return;
    }
    balance+=inputValue
    total_bal.innerText = balance
    add_price.value = ''
});

function calculation(){
  let discountAmount = (value * discount / 100)
  let total = balance - initialcart - dele_charge + discountAmount;
  final_bal.innerText = total
}




