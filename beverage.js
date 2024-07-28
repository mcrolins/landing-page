const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;

const products = [
  {
    id: 1,
    name: "French Vanilla",
    price: 4.99,
    category: "Coffee",
    image:"french vanilla cappuccino.jpg",
  },
  {
    id: 2,
    name: "Caramel macciato",
    price: 3.99,
    category: "coffee",
    image:"caramel machiato.jpg",
  },
  {
    id: 3,
    name: "Pumpkin Spice",
    price: 3.99,
    category: "Coffee",
    image:"pumpkin spicce.jpeg",
  },
  {
    id: 4,
    name: "Green Tea",
    price: 5.99,
    category: "Tea",
    image:"Green_tea_recipe-3895627388.jpg"
  },
  {
    id: 5,
    name: "Mocha",
    price: 6.99,
    category: "Coffee",
    image:"mocha.jpg"
  },
  {
    id: 6,
    name: "Kenyan Black tea",
    price: 9.99,
    category: "Tea",
    image:"kenya purple tea.jpg"
  },
  {
    id: 7,
    name: "Kenyan purple tea",
    price: 9.99,
    category: "Tea",
    image:"kenya purple tea.jpg"
  },
  {
    id: 8,
    name: "Hazelnut",
    price: 4.99,
    category: "coffee",
    image:"hazelnut.jpg"
  },
  {
    id: 9,
    name: "Masala chai",
    price: 2.99,
    category: "Tea",
    image:"Masala-Chai-3284775104.jpg"
  },

];

products.forEach(
  ({ name, id, price, category,image }) => {
    dessertCards.innerHTML += `
      <div class="dessert-card">
        <h4>${name}</h4>
        <p class="dessert-price">$${price}</p>
        <p class="product-category">Category: ${category}</p>
        <img src="${image}" alt="${name}" class="images" />
        <button 
          id="${id}" 
          class="btn add-to-cart-btn">Add to cart
        </button>
      </div>
    `;
  }
);

class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

  addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
    })

    const currentProductCount = totalCountPerProduct[product.id];
    const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);

    currentProductCount > 1 
      ? currentProductCountSpan.textContent = `${currentProductCount}x`
      : productsContainer.innerHTML += `
      <div id="dessert${id}" class="product">
        <p>
          <span class="product-count" id="product-count-for-id${id}"></span>${name}
        </p>
        <p>${price}</p>
      </div>
      `;
  }

  getCounts() {
    return this.items.length;
  }

  clearCart() {
    if (!this.items.length) {
      alert("Your shopping cart is already empty");
      return;
    }

    const isCartCleared = confirm(
      "Are you sure you want to clear all items from your shopping cart?"
    );

    if (isCartCleared) {
      this.items = [];
      this.total = 0;
      productsContainer.innerHTML = "";
      totalNumberOfItems.textContent = 0;
      cartSubTotal.textContent = 0;
      cartTaxes.textContent = 0;
      cartTotal.textContent = 0;
    }
  }

  calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }

  calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTaxes(subTotal);
    this.total = subTotal + tax;
    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    cartTaxes.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${this.total.toFixed(2)}`;
    return this.total;
  }
};

const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

[...addToCartBtns].forEach(
  (btn) => {
    btn.addEventListener("click", (event) => {
      cart.addItem(Number(event.target.id), products);
      totalNumberOfItems.textContent = cart.getCounts();
      cart.calculateTotal();
    })
  }
);

cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
  cartContainer.style.display = isCartShowing ? "block" : "none";
});

clearCartBtn.addEventListener("click", cart.clearCart.bind(cart));