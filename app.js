fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("product-grid"); // ✅ correct id

    data.slice(0, 20).forEach(product => {
      const card = document.createElement("div");
      card.classList.add("product-card-wrapper");

      card.innerHTML = `
        <div class="product-card bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg h-full flex flex-col"
             data-name="${product.title}" data-category="${product.category}">

          <div class="h-56 flex items-center justify-center p-4 bg-gray-50">
            <img src="${product.image}"
                 class="h-full w-full object-contain"
                 alt="${product.title}">
          </div>

          <div class="p-5 flex flex-col flex-1">
            <p class="text-sm font-medium text-gray-900 mb-3 line-clamp-2 flex-1">
              ${product.title}
            </p>
            <div class="flex justify-between items-center mt-auto">
              <span class="text-base font-bold text-gray-900">
                $${product.price}
              </span>
              <button
                onclick="addToCart('${product.title.replace(/'/g, "\\'")}', ${product.price})"
                class="text-white bg-orange-500 rounded-lg px-4 py-2 text-xs font-semibold hover:bg-gray-900">
                Add To Cart
              </button>
            </div>
          </div>

        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.log("Error:", error));


function addToCart(name, price) {
  console.log("Added:", name, price);
  alert(name + " added to cart 🛒");
}