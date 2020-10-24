var preço = Number(window.prompt('Digite o preço do produto: '))
var parc = Number(window.prompt('Esse valor pode ser em 3 ou 5 vezes, em quantas você quer fazer? '))
var total = parc ==3?preço * 10/100 + preço:preço *20/100 +preço
document.write(`O novo valor do produto com juros é `,total.toLocaleString('pt-BR',{style:'currency',currency:'BRL'}))

  



