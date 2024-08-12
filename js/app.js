function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    // alerts    
    // alert(`O Tipo de ingresso escolhido foi ${tipo.value}`);
    //if (qtd.value < 1){
        //alert(`A quantidade escolhida foi de ${qtd} ingresso`);
    //} else {
        //alert(`A quantidade escolhida foi de ${qtd} ingressos`);
    //}

    if (isNaN(qtd) || qtd <= 0) {
        alert("Insira uma quantidade válida.");
         return;
    }

    if(tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }

}

// Ingresso Pista
function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert(`Quantidade indisponível para tipo de ingresso pista`)
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert(`Compra para a pista realizada com sucesso! Parabéns`)
    }
}

// Ingresso Superior
function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert(`Quantidade indisponível para tipo de ingresso superior`)
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert(`Compra para o superior realizada com sucesso! Parabéns`)
    }
}

// Ingresso Inferior
function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert(`Quantidade indisponível para tipo de ingresso inferior`)
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert(`Compra para o Inferior realizada com sucesso! Parabéns`)
    }
}

// -- Solução das compras negativas -- //

// Ingresso Inferior negativo ou zero
function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd <= 0 ) {
        alert(`Digite somente valores positivos`)
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert(`Compra para o Inferior realizada com sucesso! Parabéns`)
    }
}

// Ingresso Pista negativo ou zero
function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd <= 0 ) {
        alert(`Digite somente valores positivos`)
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert(`Compra para a pista realizada com sucesso! Parabéns`)
    }
}

// Ingresso Superior negativo ou zero
function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd <= 0 ) {
        alert(`Digite somente valores positivos`)
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert(`Compra para o superior realizada com sucesso! Parabéns`)
    }
}