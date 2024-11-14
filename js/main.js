let home = document.getElementById('home');
let contagem = document.getElementById('contagem');

function openHome() {

    if (home.style.display === 'flex') {
        console.log('Já aberto');
    } else {
        home.style.display = 'flex';
        contagem.style.display = 'none';
    }
}
function openContagem(){
    

    if (contagem.style.display === 'flex') {
        console.log('Já aberto');
    } else {
        contagem.style.display = 'flex';
        home.style.display = 'none';    
    }
}