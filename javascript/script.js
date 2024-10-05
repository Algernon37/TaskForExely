document.querySelectorAll('.rooms__item-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = e.target.closest('.rooms__item');
        item.classList.add('rooms__item--reserved');
        item.addEventListener('mouseleave', () => {
            if (item.classList.contains('rooms__item--reserved')) {
                const reservedBlock = item.querySelector('.reserved');
                item.classList.add('no-border');
                if (reservedBlock) {
                    reservedBlock.classList.add('visible');   
                }
            }
        });
    });
});

document.querySelectorAll('.rooms__item').forEach((item) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('rooms__item--reserved')) {
            item.classList.remove('rooms__item--reserved');
            const reservedBlock = item.querySelector('.reserved');
            item.classList.remove('no-border');
            if (reservedBlock) {
                reservedBlock.classList.remove('visible');  
            }
        }
    });
});

function setDiscountImageHeight() {
    const discountInner = document.querySelector('.discount__inner');
    const discountImg = document.querySelector('.discount__img');
    if (discountInner && discountImg) {
        const innerHeight = discountInner.offsetHeight; 
        discountImg.style.height = `${innerHeight}px`; 
    }
}

window.addEventListener('load', setDiscountImageHeight);
window.addEventListener('resize', setDiscountImageHeight);