
var x = Number(window.prompt('Valor real'));
var soma = 0;
for (var i = 0; i < 20 ; ) {
   numero=prompt("Entre com o numero: ");
   numero = parseInt(numero);
   while (numero > 0) { 
    soma = soma + numero;
    numero = 0;
 } 
 i++;
}

document.write("A soma é: "+soma);
