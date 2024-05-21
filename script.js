// script.js
const products = [
  { name: 'Product 1', image: 'https://via.placeholder.com/100', price: 10.99 },
  { name: 'Product 2', image: 'https://via.placeholder.com/100', price: 19.99 },
  { name: 'Product 3', image: 'https://via.placeholder.com/100', price: 15.99 }
];

const productList = document.getElementById('product-list');

products.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.className = 'product';
  
  const productImg = document.createElement('img');
  productImg.src = product.image;
  productDiv.appendChild(productImg);
  
  const productInfoDiv = document.createElement('div');
  productInfoDiv.className = 'product-info';
  
  const productName = document.createElement('span');
  productName.textContent = product.name;
  productInfoDiv.appendChild(productName);
  
  const productPrice = document.createElement('span');
  productPrice.textContent = `₱${product.price}`;
  productInfoDiv.appendChild(productPrice);
  
  productDiv.appendChild(productInfoDiv);
  
  const addToCartBtn = document.createElement('button');
  addToCartBtn.textContent = 'Add to Cart';
  addToCartBtn.className = 'btn-add-to-cart';
  addToCartBtn.addEventListener('click', () => {
    alert(`Added ${product.name} to cart!`);
  });
  productDiv.appendChild(addToCartBtn);
  
  productList.appendChild(productDiv);
});

const form = document.getElementById("serviceForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const serviceName = document.getElementById("serviceName").value;
  const serviceDate = document.getElementById("serviceDate").value;
  const serviceTime = document.getElementById("serviceTime").value;
  const selectedMechanic = document.getElementById("mechanicSelect");
  const mechanic = selectedMechanic.options[selectedMechanic.selectedIndex].text;
  
  console.log("Service Name: " + serviceName);
  console.log("Service Date: " + serviceDate);
  console.log("Service Time: " + serviceTime);
  console.log("Mechanic: " + mechanic);
});