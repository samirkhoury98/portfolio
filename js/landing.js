if (document.querySelector('.swiper'))
{
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
  });
}