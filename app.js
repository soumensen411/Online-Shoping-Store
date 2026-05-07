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
                            <button class="text-white bg-orange-500 rounded-lg px-4 py-2 text-xs font-semibold hover:bg-gray-900">Add To Cart</button>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(card)
    });
  });
}
fetch_product()

let total_bal = document.querySelector('.total-bal')
let dele_charge = 110
let cart_price = document.querySelector('.')

