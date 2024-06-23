let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1;

//Temos a função exibirTextoNaTela(). Ela realiza a tarefa de exibir um texto na tela, mas não esperamos que ela nos devolva uma informação. Por isso, ela possui parâmetros que são as informações que queremos exibir, mas não possui um retorno.
function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        
}

function exibirMensagemInicial() {
    exibirTextoNaTela ("h1", "Jogo do Número Secreto");
    exibirTextoNaTela ("p", "Escolha um número entre 1 e 10");
}
exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
      exibirTextoNaTela ("h1", "Acertou!");
      let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
      let mensagemTentativas = `Parabéns você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
      exibirTextoNaTela ("p", mensagemTentativas);
      document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
      if (chute > numeroSecreto) {
        exibirTextoNaTela ("p", "O número secreto é menor!");
      } else {
        exibirTextoNaTela ("p", "O número secreto é maior!");
      }
    } tentativas++;
    limparCampo()
    
}



// Na função de gerarNumeroAleatorio(), não definimos nenhum parâmetro. Por isso, não tem nenhuma informação entre os parênteses. Contudo, há um retorno. Qual é o retorno? A geração de um número entre 1 e 10.

// E o que fazemos quando essa função é chamada, ou seja, quando a utilizamos na linha let numeroSecreto?

// Note que não estamos utilizando a função quando a declaramos como function. Nesse momento, apenas estamos declarando que a função existe. Para efetivamente usar a função, precisamos invocá-la como gerarNumeroAleatorio().

// Com isso, pegamos o resultado retornado pela função e o armazenamos na variável chamada numeroSecreto.
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

  if (  quantidadeDeElementosNaLista === numeroLimite ) {
      listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
  }else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido
  }
}
function limparCampo() {
  chute = document.querySelector("input");
  chute.value = " ";
}
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio;
  limparCampo ();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

