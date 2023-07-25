
$(function(){
  $(window).on('load',function(){
    $('.loader').delay(600).fadeOut(600);
    $('.loader-bg').delay(900).fadeOut(800);
});

  
  setTimeout(function(){
    $('.loader-bg').fadeOut(600);
  },5000);
});


const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

btn.addEventListener('click', function(){
  btn.classList.toggle('close');
 menu.classList.toggle('is-active');
});



$('.menu__item a').on('click', function() {
  $('.menu').removeClass('is-active');
  $(btn).removeClass('close');
});


(function() {
  const fh = document.getElementById('fixed-header');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      fh.classList.add('is-show');
    } else {
      fh.classList.remove('is-show');
    }
  });
}());


const targets = document.getElementsByClassName('fade');
for(let i = targets.length; i--;){
 let observer = new IntersectionObserver((entries, observer) => {
  for(let j = entries.length; j--;){
   if (entries[j].isIntersecting) {
    entries[j].target.classList.add('active');
    observer.unobserve(entries[j].target);
   }
  }
 });
 observer.observe(targets[i]);
}
