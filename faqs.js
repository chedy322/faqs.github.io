
var bars = document.querySelectorAll('.first');

for (var i = 0; i < bars.length; i++) {
    bars[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
}