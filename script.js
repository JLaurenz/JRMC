// script.js
const products = [
  { name: 'Spark Plugs', image: 'photo_2024-05-18_17-38-33 (2)', price: 10.99 },
  { name: 'NLK Pipe', image: 'photo_2024-05-18_17-38-33', price: 19.99 },
  { name: 'Rims ', image: 'photo_2024-05-18_17-38-34', price: 15.99 }
  { name: 'Flat Seat ', image: 'photo_2024-05-18_17-38-37', price: 15.99 }
  { name: 'Rear Shock ', image: 'photo_2024-05-18_17-38-35 (2)', price: 15.99 }
  { name: 'Drive Face ', image: 'photo_2024-05-18_17-38-35', price: 15.99 }
  { name: 'JRP shock ', image: 'photo_2024-05-18_17-38-38', price: 15.99 }
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