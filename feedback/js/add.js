function shadowBtn(){
    const elBtn = document.querySelectorAll('.style_btn');

    elBtn.forEach(elem =>{
        elem.addEventListener('click', () => {
            elem.classList.toggle('active');
        })
    })
}shadowBtn();