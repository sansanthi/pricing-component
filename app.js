let monthlyPrice = [19.99, 24.99, 39.99];
let yearlyPrice = [199.99, 249.99, 399.99];
let priceTag = document.querySelectorAll('.price');
const toggleBtn = document.querySelector('.btn-toggle');

showPrice(yearlyPrice);

toggleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let toggleAction = toggleBtn.children[0];
    toggleAction.classList.toggle('off');
    if (toggleAction.classList.contains('off')) {
       
        showPrice(monthlyPrice);
    } else {        
       showPrice(yearlyPrice);
    }
})
function showPrice(item){
    priceTag.forEach(function (price, index) {
        price.innerHTML = item[index];
    });
}