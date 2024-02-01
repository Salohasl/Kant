function shadowBtn(){

    //вывода мессенджера
    const messenger = document.getElementById('messenger');
    const messengerClick = document.querySelectorAll('#messengerClick');
    messengerClick.forEach(el => {
        el.addEventListener('click', ()=>{
            messenger.value = el.value;
        })
    })

    //вывод услуги
    const service = document.getElementById('service');
    const servicesClick = document.querySelectorAll('#serviceClick');
    const clearValue = document.querySelector('.clearValue');
    servicesClick.forEach(servic => {
        servic.addEventListener('click', ()=>{
            service.value = servic.value;
        })
    })
    clearValue.addEventListener('click', ()=>{
        clearValue.value = '';
    })

    //Вывод брендбука
    function brandFunc(){
        const brand = document.getElementById('brand');
        const brandBtn1 = document.querySelector('.style_brand1');
        const brandBtn2 = document.querySelector('.style_brand2');
        
        brandBtn1.addEventListener('click', ()=>{
            brandBtn1.classList.add('active');
            brandBtn2.classList.remove('active');
            brand.value = brandBtn1.value;
        })
        brandBtn2.addEventListener('click', ()=>{
            brandBtn2.classList.add('active');
            brandBtn1.classList.remove('active');
            brand.value = brandBtn2.value;
        })
    }brandFunc();
}shadowBtn();




function agree(){
    const elBtn = document.querySelectorAll('.style_btn');

    elBtn.forEach(elem =>{
        elem.addEventListener('click', () => {
            elem.classList.toggle('active');
        })
    })
    
    const agree = document.getElementById('agree');
    const buttonForm = document.getElementById('buttonForm');
    agree.addEventListener('click', () =>{
        if(!(agree.checked)){
            buttonForm.style.backgroundColor = 'grey';
            buttonForm.setAttribute('disabled', '.');
        }else{
            buttonForm.style.backgroundColor = '#FFB400';
            buttonForm.removeAttribute('disabled', '.');
        }
    })
}agree();