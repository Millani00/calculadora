function inseririr_visor(data) {
    document.querySelector('#visor').value += data
}

function limpar() {
    document.querySelector('#visor').value = ''
}
function voltar() {
    const exibir = document.querySelector('#visor');
    exibir.value = exibir.value.slice(0, -1)
}