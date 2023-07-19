//const robotronPrincipal = document.querySelector("#robotronPrincipal");

/**--------------------------------------------------- */


//pegando uma classe na página que consegui manipular todos os elementos do Robo controle-ajuste

//const controle = document.querySelectorAll(".controle-ajuste");
const controle = document.querySelectorAll("[data-controle]");//pega data-controle - e o +
//pegando todos com data-estatisticas
const estatisticas = document.querySelectorAll("[data-estatistica]");
//console.log(estatisticas);

const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};


controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
                                            //evento.target.parentNode é o pai div .controle ele vai ser passado parametro controle e outro 
                                            //evento.target.textContent passar parâmetro operacao
   // manipulaDados(evento.target.textContent, evento.target.parentNode); //target aponta evento com input no html e textContent pega apenas o texto fora das tags
    //console.log(evento.target.textContent);// mostra no console que esta retornando
     manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
     atualizaEstatistica(evento.target.dataset.peca);
  });                        

});

/*
//Evento de clique para somar braço do Robo
somar.addEventListener("click", () => {
  //chamando a função manipuladados()
  manipulaDados("somar");
});

//Evento de clique para subtrair braço do Robo
subtrair.addEventListener("click", () => {
    manipulaDados("subtrair");
});
*/

function manipulaDados(operacao, controle) {
    //controle esta recebendo por parâmetro evento.target.parentNode
    const equipado = controle.querySelector("[data-contador]");
    
  if (operacao === "+") {
    //sinal de + o texto que esta dentro da classe controle-ajute
    //convertendo equipado.value para inteiro (number) para poder somar
    equipado.value = parseInt(equipado.value) + 1;
  } else if (operacao === "-") {
    //sinal de - o texto que esta dentro da classe controle-ajute
    //convertendo equipado.value para inteiro (number) para poder subtrair
    equipado.value = parseInt(equipado.value) - 1;
  }
}

function atualizaEstatistica(peca){
    console.log(pecas[peca]);//pecas listagem dos objetos e peca itens
    estatisticas.forEach((elemento)=>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];

    });

}
