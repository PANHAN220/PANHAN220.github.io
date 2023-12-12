const productImg = document.getElementById('productImg');
const productName = document.getElementById('productName');
const producPrice = document.getElementById('productPrice');
const productSale = document.getElementById('productSale');
const blackcolor = document.getElementById('blackcolor');
const whitecolor = document.getElementById('whitecolor');


whitecolor.addEventListener('click',()=> {
    productImg.src = 'img/nike-air-white.png'; 
    productName.textContent = 'Nike Air Force 1 White';
    producPrice.innerHTML = '<strong>฿3,700</strong>'
    productSale.style.display = 'none';
})

blackcolor.addEventListener('click',()=> {
    productImg.src = 'img/nike-air-black.png';
    productName.textContent = 'Nike Air Force 1 Black';
    producPrice.innerHTML = '<del>฿4000</del> <strong>฿2,960</strong>'
    productSale.style.display = 'block';
})