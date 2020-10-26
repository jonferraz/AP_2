var cont = 1;
var n = 0;
var soma = 0;
do{
    cont ++;
    n = Number(window.prompt("Digite um numero: "));
    soma += n;
}while(cont<=20);

document.write(`O soma dos valores inseridos é igual a: ${soma}`);