const moreBtn = document.getElementById('more');
const dropdown = document.getElementById('more-dropdown');

moreBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdown.classList.toggle('show');
});

document.addEventListener('click', function () {
    dropdown.classList.remove('show');
});

dropdown.addEventListener('click', function (e) {
    e.stopPropagation();
});

document.querySelectorAll('.more-dropdown-item').forEach(function (item) {
    item.addEventListener('click', function () {
        dropdown.classList.remove('show');
    });
});
