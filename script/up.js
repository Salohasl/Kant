/*Для изменения цвета header */
const header = document.querySelector('header');
const headerFigur = document.querySelector('.header-figur');
  window.addEventListener('scroll', ()=>{
    if(window.pageYOffset >= 50){
      header.classList.add('color');
      headerFigur.classList.add('colorFigure');
    }else{
      header.classList.remove('color');
      headerFigur.classList.remove('colorFigure');
    }
  })

  /* Для всплывающего окна */ 
  let menuBtn = document.querySelector('.menuBtn');
  let menu = document.querySelector('nav');
  menuBtn.addEventListener('click', () =>{
  menuBtn.classList.toggle('active');
  menu.classList.toggle('popUp');
  });


