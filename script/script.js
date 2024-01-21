function upFunc(){
    const blockContent = document.querySelector('.content');
    const btn = document.querySelector('.upDisplay');
    const blockLink = document.querySelector('.footer-block__link');
    const footer = document.querySelector('footer');

    btn.addEventListener('click', function(){
        blockContent.style.display = 'block';
        btn.style.display = 'none';
        blockLink.style.display = 'flex';
        footer.style.backgroundColor = ' ';
    })
}upFunc();