/* Pagination */
const swiper = new Swiper(".gallerySwiper", {
   slidesPerView: 1,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      800: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
      600: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
   },
});

/* Scroll events */
const pagination = document.querySelectorAll('.pagination li a');
const sections = document.querySelectorAll('.main-section');
const offset = 100;

for (let i = 0; i < sections.length; i++) {
   window.addEventListener('scroll', () => {
      if (window.scrollY > sections[i].offsetTop - offset &&
         window.scrollY < sections[i].offsetTop + sections[i].offsetHeight - offset
   ) {
      pagination.forEach(pag => {
         pag.classList.remove('active');
      });
      pagination[i].classList.add('active');
   }
});
}