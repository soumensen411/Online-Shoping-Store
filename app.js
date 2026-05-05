let cartCount = 0;

function getStars(rating) {
    const full = Math.round(rating);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function showToast(msg = 'Added to cart!') {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
}

function updateCart() {
    cartCount++;
    const el = document.getElementById('cart-count');
    el.textContent = cartCount;
    el.style.transform = 'scale(1.5)';
    setTimeout(() => el.style.transform = 'scale(1)', 200);
}

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("product-container");

        // Clear skeletons
        container.innerHTML = '';

        data.slice(0, 20).forEach((item, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.animationDelay = `${index * 60}ms`;

            const isNew = index < 3;

            card.innerHTML = `
                <div class="card-image">
                    ${isNew ? '<span class="card-badge">New</span>' : ''}
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
                <div class="card-body">
                    <span class="card-category">${item.category}</span>
                    <p class="card-title">${item.title}</p>
                    <div class="card-rating">
                        <span class="stars">${getStars(item.rating?.rate ?? 4)}</span>
                        <span>(${item.rating?.count ?? 0})</span>
                    </div>
                    <div class="card-footer">
                        <div class="card-price">
                            $${item.price.toFixed(2)}
                            <span>USD</span>
                        </div>
                        <button class="btn-buy">Add</button>
                    </div>
                </div>
            `;

            card.querySelector('.btn-buy').addEventListener('click', () => {
                updateCart();
                showToast(`"${item.title.slice(0, 28)}…" added!`);
            });

            container.appendChild(card);
        });
    })
    .catch(() => {
        document.getElementById("product-container").innerHTML =
            `<p style="color:#999; padding: 40px">Failed to load products. Please try again.</p>`;
    });