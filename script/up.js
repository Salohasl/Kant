/*Для изменения цвета header */
const header = document.querySelector('header');
  window.addEventListener('scroll', ()=>{
    if(window.pageYOffset >= 50){
      header.classList.add('color');
    }else{
      header.classList.remove('color');
    }
  })

  /* Для всплывающего окна */ 
  let menuBtn = document.querySelector('.menuBtn');
  let menu = document.querySelector('nav');
  menuBtn.addEventListener('click', () =>{
  menuBtn.classList.toggle('active');
  menu.classList.toggle('popUp');
  });