let monthlyPrice = [19.99, 24.99, 39.99];
let yearlyPrice = [199.99, 249.99, 399.99];
let priceTag = document.querySelectorAll('.price');
const toggleBtn = document.querySelector('.btn-toggle');
let i = 0;

priceTag.forEach(function (price) {
    console.log('yearly')
    console.log('i value ', i);
    price.innerHTML = yearlyPrice[i++];
});
toggleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let toggleAction = toggleBtn.children[0];
    toggleAction.classList.toggle('off');
    //console.log(toggleAction.classList);
    if (toggleAction.classList.contains('off')) {
        i = 0;
        priceTag.forEach(function (price) {
            console.log('monthly')
            price.innerHTML = monthlyPrice[i++];
        });
    } else {
        i = 0;
        priceTag.forEach(function (price) {
            console.log('yearly')
            console.log('i value ', i);
            price.innerHTML = yearlyPrice[i++];
        });
    }
})