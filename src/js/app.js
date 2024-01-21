const button = document.getElementById('header__button');
const main_cuisin = document.getElementById('c');

button.addEventListener('click', e => {
    main_cuisin.scrollIntoView({behavior: "smooth"});
})