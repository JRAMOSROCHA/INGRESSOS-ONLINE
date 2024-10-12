function comprar() {
    const tipoIngresso = document.getElementById("tipo-ingresso").value;
    const qtdDigitada = parseInt(document.getElementById("qtd").value);
    let qtdTotal = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent);

    if(tipoIngresso == 'selecione'){
        alert("Selecione uma opção de ingresso válida!");
        limpar();
    }
    else if(qtdDigitada == null || qtdDigitada == 0 || isNaN(qtdDigitada)){
        alert("Digite uma quantidade de ingresso para compra!");
        limpar();
    }
    else if(qtdDigitada < 0 ){
        alert("A quantidade digitada não pode ser menor que 0. Digite uma quantidade de ingresso válida!");
        limpar();
    }

    else if (tipoIngresso != null && qtdDigitada > 0 && qtdTotal >= qtdDigitada) {
      document.getElementById(`qtd-${tipoIngresso}`).textContent = qtdTotal - qtdDigitada;
      document.getElementById("qtd").value = null;
      alert("Compra feita com sucesso");
      limpar();
    } else {
      alert("Quantidade insuficiente.");
      limpar();
    }
  }

  function limpar(){
    document.getElementById("qtd").value = '';
    document.getElementById("tipo-ingresso").value = 'selecione';
}