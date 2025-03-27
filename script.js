const SHEET_ID = '1-Vt_sF7jAr9FMV64oxylFB6-XBFbDpM5pE1fu9udutM';  
const API_KEY = 'AIzaSyDKWbsuM4iUFV7hiFZNddcdBIaMspwP-Ew';  
const SHEET_NAME = 'Sheet1';  

async function loadProducts() {  
  try {  
    const response = await fetch(  
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`  
    );  
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);  
    const data = await response.json();  
    displayProducts(data.values);  
  } catch (error) {  
    console.error('Fetch Error:', error);  
  }  
}  

// Keep the rest of the code as before
