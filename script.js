// 1. Плавное появление пунктов списка
const items = document.querySelectorAll('.item');
items.forEach((item, index) => {
    setTimeout(() => {
        item.classList.add('visible');
    }, index * 80);
});

// 2. Подсчёт общего количества товаров
let total = 0;
items.forEach(item => {
    total += parseInt(item.dataset.count);
});
document.getElementById('totalCount').textContent = total;

// 3. Выделение пункта при клике
items.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});