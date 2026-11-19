let store = {
  name: "Tech Store",
  city: "Cairo",
  phone: "01012345678"
};

document.getElementById("store-name").innerHTML = store.name;
document.getElementById("store-info").innerHTML = store.city + " | " + store.phone;

let cart = [
  { name: "mouse", price: 250, qty: 2 },
  { name: "keyboard", price: 450, qty: 1 },
  { name: "headphones", price: 500, qty: 1 }
];

function capital(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function showCart(list) {
  list.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    list.innerHTML += "<li>" + capital(item.name) + " - " + item.price + " EGP x " + item.qty + " = " + item.price * item.qty + " EGP</li>";
  }
}

let list1 = document.getElementById("cart");
showCart(list1);

cart.push({ name: "monitor", price: 3000, qty: 1 });
cart.unshift({ name: "gift", price: 0, qty: 1 });
cart.pop();
cart.shift();

let list2 = document.createElement("ul");
list1.after(list2);
showCart(list2);

document.getElementById("count").innerHTML = "You have " + cart.length + " items in your cart";

let total = 0;
for (let i = 0; i < cart.length; i++) {
  total = total + cart[i].price * cart[i].qty;
}
document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " EGP";

let shipping = document.createElement("p");
if (total > 1000) {
  shipping.innerHTML = "You got free shipping!";
} else {
  shipping.innerHTML = "Add " + (1000 - total) + " EGP more for free shipping";
}
document.getElementById("total").after(shipping);