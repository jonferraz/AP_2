var n1 = Number(window.prompt('Digite um número ').replace(',','.'))
var n2 = Number(window.prompt('Digite outro número ').replace(',','.'))
var x = (window.prompt( 'Digite 1 para soma, 2 para multiplicação ou 3 para divisão dos números digitados '))
if (x==1) {
    document.write(`A soma dos números digitados é `, n1 + n2)
}
if (x==2) {
    document.write(`A multiplicação dos números digitados é `, n1 * n2)
 } else {
     if (x==3) {
          document.write(`A divisão dos números digitados é `, n1 / n2)
      }
} 
  

  



