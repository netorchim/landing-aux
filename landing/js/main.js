// слайдер для casess
new Swiper('.casess-stahonovec', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.casess-nav__forward',
        prevEl: '.casess-nav__back',
    },
});
// форма
document.addEventListener('DOMContentLoaded', function () {
    var inputName = document.querySelector('.form__text');
    var inputTel = document.querySelector('.form__tel');
    var inputEmail = document.querySelector('.form__email');

    var placeholderName = inputName.getAttribute('placeholder');
    var placeholderTel = inputTel.getAttribute('placeholder');
    var placeholderEmail = inputEmail.getAttribute('placeholder');

    function clearPlaceholder(input, placeholder) {
        input.addEventListener('focus', function () {
            input.setAttribute('placeholder', '');
        });

        input.addEventListener('blur', function () {
            input.setAttribute('placeholder', placeholder);
        });
    }

    clearPlaceholder(inputName, placeholderName);
    clearPlaceholder(inputTel, placeholderTel);
    clearPlaceholder(inputEmail, placeholderEmail);
});
// бегущая строка лого
// $(function () {
//     $('.marquee').marquee({
//         duration: 180,
//         startVisible: true,
//         duplicated: true
//     });
// });