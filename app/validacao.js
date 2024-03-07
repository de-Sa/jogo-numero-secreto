function verificarOValorDoChute(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor inválido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValor(numero)) {
        elementoChute.innerHTML += `<div>valor inválido: Fale um numero entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="botao-jogar">Jogar novamente</button>
        `
    }  else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número é menor <i class="fa-solid fa-arrow-down"></i></div> `
    } else {
        elementoChute.innerHTML += `<div>O número é maior <i class="fa-solid fa-arrow-up"></i></div> `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {

    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }

})
