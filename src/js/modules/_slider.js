import Swiper from "swiper";


const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 0.1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

export default swiper

