/*
Nome: index.js
Descrição: Aplicando um código em JavaScript para o Projeto - Mario (HMTL)
Criador: <PHDBM>
Data: 22/01/2023

===================== INSTRUÇÕES =====================
===> Objetivos desse código
===> 1: Quando o usuário clicar no botão de Veja o Trailer, devemos abrir o modal com o vídeo do trailer

===> 2: Quando o usuário clicar no botão de "X" devemos fechar o modal

Passo a Passo

===> Objetivo 1
===> 1.1: Dar um jeito de pegar o elemento que representa o botão na tela usando o js;
===> 1.2: Dar um jeito de identificar quando o usuário clicar no botão;
===> 1.3: Dar um jeito de pegar o elemento do modal no JS;
===> 1.4: Abrir o modal na tela;

===> Objetivo 2
===> 2.1: Dar um jeito de pegar o elemento de fechar o modal usando o JS;
===> 2.2: Dar um jeito de identificar quando o usuário clicar no botão "X";
===> 2.3: Fechar o modal;
==================== FIM INSTRUCOES ====================

*/

// Exemplo para mostrar o código HTML representado pelo document
console.log('Mostrar o documento:', document);

//Aqui resolve o passo 1.1
console.log(document.querySelector(".botao-trailer"));

//Definicoes de variaveis
const botaoTrailer = document.querySelector(".botao-trailer");
// Aqui esta pegando o ID do video do Trailer
const video = document.getElementById("video");
 // Aqui buscamos a URL do video;
const linkDoVideo = video.src;

//Aqui resolve o passo 1.3

const modal = document.querySelector(".modal");
console.log("Aqui mostra o codigo da Classe modal", modal);

//Criando uma funçao para add e remover a classe aberto da classe modal
function alternarModal(){
    modal.classList.toggle("aberto");
}

//Aqui resolve o passo 1.2

botaoTrailer.addEventListener("click", () => {
    console.log("Aqui clicou no botão Veja o Trailer");
    //Aqui resolve o passo 1.4
    //Adiciona uma nova classe chamada aberto na classe modal
    //modal.classList.add("aberto");

    //Podemos usar o toggle que faz a função de add e remove ao mesmo tempo conforme precisar
    //modal.classList.toogle("aberto");
    //Usando a funcao criada acima alternarModal
    alternarModal();


    //Aqui adicionamos novamente o conteudo da URL do video no src do iframe
    video.setAttribute("src", linkDoVideo);
    
})

// Resolvendo objetivo 2
// Aqui resolve o passo 2.1
const fecharModal = document.querySelector(".fechar-modal");
console.log("Aqui mostra o codigo da Classe Fechar modal", fecharModal);

// Aqui resolve o passo 2.2
fecharModal.addEventListener("click", () => {
    console.log("Aqui clicou no botão X do Trailer");
    console.log("Removendo a classe modal do codigo => ", modal);
    //Aqui resolve o passo 2.3
    //Remove a classe aberto da classe modal
    //modal.classList.remove("aberto");

    //Podemos usar o toggle que faz a função de add e remove ao mesmo tempo conforme precisar
    //Usando a funcao criada acima alternarModal
    //modal.classList.toggle("aberto");
    alternarModal();
    
    //Aqui esta setando o valor da src no iframe para ""
    video.setAttribute("src", "");
});








