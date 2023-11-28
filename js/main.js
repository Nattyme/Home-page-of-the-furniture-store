const infoBtns = document.querySelectorAll('.info-dot');

for (let btn of infoBtns) {
    btn.addEventListener('click', showHint);
}

function showHint() {
    console.log('click');
    console.log(this);
    console.log(this.parentNode);
    this.parentNode.querySelector('.info-hint').classList.toggle('none');
}