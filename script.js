function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const burger = document.querySelector('.burger-menu');
    const isActive = menu.classList.contains('active');

    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');

    if (!isActive) {
        menu.style.display = 'block';
    } else {
        setTimeout(() => {
            menu.style.display = 'none';
        }, 400);
    }
}

document.addEventListener('click', function(event) {
    const menu = document.querySelector('.nav-menu');
    const burger = document.querySelector('.burger-menu');
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnBurger = burger.contains(event.target);

    if (!isClickInsideMenu && !isClickOnBurger && menu.classList.contains('active')) {
        menu.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('no-scroll');
        setTimeout(() => {
            menu.style.display = 'none';
        }, 400);
    }
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        const menu = document.querySelector('.nav-menu');
        const burger = document.querySelector('.burger-menu');
        menu.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('no-scroll');

        setTimeout(() => {
            menu.style.display = 'none';
            document.body.style.transition = 'opacity 0.3s ease-in-out';
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }, 400);
    });
});

window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});