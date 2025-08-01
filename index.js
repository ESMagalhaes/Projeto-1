const cores = ['#FF5733', '#33FF57', '#3357ffff', '#ffff00'];
const btn = document.getElementById('btn');

btn, addEventListener('click', function () {
    const sorteiaCor = corAleatoria();
    this.document.body.style.background = cores[sorteiaCor];
    const corDisplay = document.querySelector('.color');
    corDisplay.textContent = cores[sorteiaCor];
    //console.log(sorteiaCor); visualizar a mudança de cor no console
})

function corAleatoria() {
    return Math.floor(Math.random() * cores.length);
}