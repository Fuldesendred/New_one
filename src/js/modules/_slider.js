import Swiper from "swiper";

const swiper = new Swiper(".swiper", {
    slidesPerView: 1, 
    spaceBetween: 0.1,

    breakpoints: {
        1148: {
            slidesPerView: 4,
            spaceBetween: 0.1,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 0.1,
        },
    }
});

export default swiper