(function () {

    let slider = document.querySelector('.slider__outer'),
        sliderTrack = slider.querySelector('.slider__wrapper'),
        slides = slider.querySelectorAll('.slider__item'),
        slideWidth = slides[0].clientWidth,
        x0 = 0,
        y0 = 0,
        slideIndex = 0,

        swipeStart = () => {
            x0 = getEvent().clientX;
            y0 = getEvent().clientY;
            slider.addEventListener('touchmove', swipeAction);
            slider.addEventListener('mousemove', swipeAction);
        },

        getEvent = () => {
            return event.type.search('touch') !== -1 ? event.touches[0] : event;
        },

        direction_slide = (flag) => {
            slideIndex = (flag) ? ++slideIndex : --slideIndex;
            if (slideIndex >= slides.length) slideIndex = --slides.length;
            if (slideIndex < 0) slideIndex = 0;
            slide();
        },

        slide = () => {
            sliderTrack.style.transform = `translateX(-${slideIndex * 100}%)`;
            slider.querySelector('.next').classList.toggle('active', slideIndex < (slides.length - 1))
            slider.querySelector('.prev').classList.toggle('active', slideIndex > 0)
            slider.removeEventListener('touchmove', swipeAction);
            slider.removeEventListener('mousemove', swipeAction);
        },

        swipeAction = () => {
            slider.addEventListener('touchend', swipeEnd);
            slider.addEventListener('mouseup', swipeEnd);
            transform = parseFloat(sliderTrack.style.transform.slice(11))
            if (!transform) transform = 0;
            let x1 = (x0 - getEvent().clientX) / slideWidth * 100;
            let y1 = (y0 - getEvent().clientY) / slideWidth * 100;
            if (Math.abs(x1) > Math.abs(y1)) {
                if (Math.abs(x1) >= 20) {
                    direction_slide(x1 > 0);
                } else {
                    if (Math.abs(transform % 100 - x1) < 20)
                        sliderTrack.style.transform = `translateX(${transform-x1}%)`
                }
            }
        },

        swipeEnd = () => {
            slide();
            console.log('end')
            slider.removeEventListener('touchmove', swipeAction);
            slider.removeEventListener('mousemove', swipeAction);
            slider.removeEventListener('touchend', swipeEnd);
            slider.removeEventListener('mouseup', swipeEnd);
        },

        accordion = (e) => {
            if (!(e.target.closest('.acc_title'))) return;
            let Parent = e.target.closest('.acc_item');
            let Content = Parent.querySelector('.acc_content');
            if (Parent.classList.contains('open')) {
                Content.style.maxHeight = null;
                Parent.classList.remove('open');
            } else {
                Open = document.querySelector('.open')
                if (Open) {
                    Open.querySelector('.acc_content').style.maxHeight = null;
                    Open.classList.remove('open');
                }
                Content.style.maxHeight = Content.scrollHeight + "px";
                Parent.classList.toggle('open');
            }
        },

        burgerOpen = (e) => {
            let burger = document.querySelector('.nav_toggle'),
                scrollWidth = window.innerWidth - document.documentElement.clientWidth
            if (e.target.closest('.nav_toggle') ||
                ((e.target.classList.contains('menu__link') && burger.classList.contains('open')))) {
                burger.style.right = scrollWidth ? `${20+scrollWidth}px` : '20px';
                document.body.classList.toggle('modal_open');
                document.querySelector('.nav_toggle').classList.toggle('open');
                document.querySelector('.menu.header').classList.toggle('open');
            }
        },

        toggle_column = () => {
            let check = document.querySelector('#toggle')
            let col_selected = document.querySelectorAll('.get_column');
            if (check.checked) {
                col_selected[1].classList.add('selected')
                col_selected[0].classList.remove('selected');
            } else {
                col_selected[0].classList.add('selected')
                col_selected[1].classList.remove('selected');
            }
        },

        lazyload = () => {
            let windowHeight = document.documentElement.clientHeight,
                lazy_image = Array.from(document.querySelectorAll('img[data-src]')),
                bg_array = ['.features', '.ultimate', '.testimonila', '.download', '.footer']


            bg_array = bg_array.map(item => {
                return {
                    elem: document.querySelector(item),
                    top: (function () {
                        return document.querySelector(item).getBoundingClientRect().top
                    })(),
                    visible: false
                }
            })
            bg_array.push(...lazy_image.map(item => {
                return {
                    elem: item,
                    top: (function () {
                        return item.closest('.container').getBoundingClientRect().top
                    })(),
                    visible: false
                }
            }))
            bg_array.find(item => {
                if ((item.top - windowHeight < 100) && (item.visible == false)) {
                    if (item.elem.dataset.src) {
                        item.elem.src = item.elem.dataset.src;
                        item.elem.removeAttribute('data-src');
                        item.elem.style.opacity=1;
                    } else {
                        item.elem.classList.add('bg');
                    }
                    item.visible = true;
                }
            })
        }

    document.querySelector('.check').addEventListener('transitionend', toggle_column);
    document.querySelector('.header__menu').addEventListener('click', burgerOpen);
    document.querySelector('.accordion').addEventListener('click', accordion);
    document.addEventListener('scroll', lazyload);
    document.querySelector('.slider__outer').addEventListener('touchstart', swipeStart);
    document.querySelector('.slider__outer').addEventListener('mousedown', swipeStart);
    document.querySelector('.controls').addEventListener('click', (e) => direction_slide(e.target.closest('.next')));

})();