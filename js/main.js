const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

//Клик по кнопкам с подсказками
for (let btn of infoBtns) {
    btn.addEventListener('click', showHint);
}

function showHint() {
    console.log('click');
    console.log(this);
    console.log(this.parentNode);
    this.parentNode.querySelector('.info-hint').classList.toggle('none');
}

// Закрываем подсказку при клика по документу 
document.addEventListener('click', closeHints);

function closeHints () {
for (let hint of infoHints) {
    hint.classList.add('none');
}
}