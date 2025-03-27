const SHEET_ID = '1-Vt_sF7jAr9FMV64oxylFB6-XBFbDpM5pE1fu9udutM';  
const API_KEY = 'AIzaSyDKWbsuM4iUFV7hiFZNddcdBIaMspwP-Ew';  
const SHEET_NAME = 'Sheet1';  

async function loadProducts() {  
  try {  
    const response = await fetch(  
      `https://proxy.cors.sh/https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`  
    );  
    const data = await response.json();  
    displayProducts(data.values);  
  } catch (error) {  
    console.error('Error:', error);  
  }  
}  

function displayProducts(rows) {  
  const grid = document.querySelector('.grid');  
  grid.innerHTML = '';  

  // Skip header row (rows[0])  
  rows.slice(1).forEach(row => {  
    const [name, asin, price, link, image, review] = row;  
    grid.innerHTML += `  
      <div class="product-card">  
        <img src="${image}" alt="${name}">  
        <h3>${name}</h3>  
        <p class="price">${price}</p>  
        <p class="review">${review}</p>  
        <a href="${link}" class="buy-button" target="_blank" rel="sponsored noopener">  
          Buy on Amazon <i class="fas fa-external-link-alt"></i>  
        </a>  
      </div>  
    `;  
  });  
}  

document.addEventListener('DOMContentLoaded', loadProducts);
