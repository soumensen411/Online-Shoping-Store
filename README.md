# 🏪 SmartShop

A modern, responsive e-commerce frontend built with **HTML**, **Tailwind CSS**, **DaisyUI**, and **JavaScript**. SmartShop features a full product listing, shopping cart with balance management, coupon support, customer reviews, and a contact form.

---

## 📁 Project Structure

```
smartshop/
├── index.html        # Main HTML file (all sections)
├── app.js            # JavaScript logic (cart, search, fetch, reviews)
├── app.css           # Global styles (smooth scroll)
├── products.json     # Local product data (30+ items)
└── reviews.json      # Customer review data (8 reviews)
```

---

## ✨ Features

- **Hero Carousel** — Full-screen image slider with smooth navigation
- **Product Grid** — Dynamically rendered from `products.json` via `fetch()`
- **Search / Filter** — Live product search by title (case-insensitive)
- **Shopping Cart Modal** — Add/remove items, track cart total
- **Balance System** — Start with $1,000; add more via the cart modal
- **Coupon Support** — Apply `SMART10` for a 10% discount
- **Delivery Cost** — Fixed $120 shipping added at checkout
- **Place Order** — Validates balance, resets cart on success
- **Customer Reviews** — Loaded from `reviews.json`, displayed in a grid
- **About Section** — Company stats and team profiles
- **Contact Form** — Name, email, and message fields
- **Sticky Navbar** — Smooth scroll links + live cart item count badge
- **Responsive Design** — Mobile-first layout across all breakpoints

---

## 🚀 Getting Started

Since the app uses `fetch()` to load local JSON files, it must be served over HTTP (not opened as a plain file).

### Option 1 — VS Code Live Server
Install the **Live Server** extension, right-click `index.html`, and select **Open with Live Server**.

### Option 2 — Node.js
```bash
npx serve .
```

---

## 🛒 Cart Logic

| Action | Behavior |
|---|---|
| **Add To Cart** | Adds product price to cart total; button turns red |
| **Remove From Cart** | Subtracts price; button reverts to orange |
| **Add Money** | Increases available balance |
| **Apply Coupon** (`SMART10`) | Applies 10% discount on cart subtotal |
| **Place Order** | Deducts total cost from balance, resets cart |

> **Note:** The app prevents adding to cart if balance would be exceeded.

---

## 🗂️ Data Files

### `products.json`
Each product entry contains an `id`, `title`, `price`, `category`, `image` URL, and a `rating` object with a `rate` (out of 5) and `count` (number of reviews). The file holds 30+ products across categories like electronics, accessories, and bags.

### `reviews.json`
Each review entry contains the customer's `name`, `image` URL, `rating` (as a star string like `★★★★☆`), `review` text, and a `date`. The file currently includes 8 customer testimonials.

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| Tailwind CSS (CDN) | Utility-first styling |
| DaisyUI v5 (CDN) | Modal, carousel, badge components |
| JavaScript | Cart logic, fetch, DOM manipulation |
| Unsplash / ImageKit | Product and team images |

---

## 🗺️ Page Sections

| Section | ID | Description |
|---|---|---|
| Navbar | — | Sticky top nav with search and cart icon |
| Hero | `#home` | Full-screen image carousel with CTA |
| Products | `#products` | Filterable product grid |
| Reviews | `#reviews` | Customer testimonials |
| About | `#about` | Company story, stats, and team |
| Contact | `#contact` | Contact form and info |

---

## 🔧 Customization

- **Add products** — Add entries to `products.json` following the existing schema.
- **Add reviews** — Add entries to `reviews.json`; `rating` can be a star string (`"★★★★☆"`) or a number.
- **Change coupon code** — Edit `"SMART10"` in `app.js` (`add_cupon_btn` event listener).
- **Change delivery charge** — Edit `let dele_charge = 120;` in `app.js`.
- **Switch to live API** — Uncomment `fetch_product()` and comment out `localFetch()` in `app.js` to use the FakeStore API.

---

## 👥 Team

This website was designed and built by:

- **Tahmid Alvee**
- **Soumen Sen**
- **Tokitul Osmani**

---

## 📄 License

© 2026 SmartShop. All rights reserved.
