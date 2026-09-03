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

function resultado() {
    const exibir = document.querySelector('#visor');
    try {
        exibir.value = eval(exibir.value)

    } catch {
        exibir.value = "Error"
    }
}

//-----------------------------------------------------------
//DarkMode//

let darkmode = localStorage.getItem('darkmode');
const botao_tema = document.getElementById('botao_tema');

function abilitarDarkMode() {
    document.documentElement.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active')
}

function desabilitarDarkMode() {
    document.documentElement.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if (darkmode === "active") abilitarDarkMode()

botao_tema.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? abilitarDarkMode() : desabilitarDarkMode()
})