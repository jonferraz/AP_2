var soma = 0;
do{
   var cod = Number(window.prompt("Digite o código do produto: "));
    switch(cod){
        case 100: 
            var quant = Number(window.prompt("Digite a quantidade: "));
            soma += 1.70*quant; break;
        case 101: 
            var quant = Number(window.prompt("Digite a quantidade: "));
            soma += 2.30*quant; break;
        case 102: 
            var quant = Number(window.prompt("Digite a quantidade: "));
            soma += 2.60*quant; break;
        case 103: 
            var quant = Number(window.prompt("Digite a quantidade: "));
            soma += 2.40*quant; break;
        case 104: 
            var quant = Number(window.prompt("Digite a quantidade: "));
            soma += 2.50*quant; break;
        case 105: 
            var quant = Number(window.prompt("Digite a quantidade: "));
            soma += 1.00*quant; break;
    }          
}while(cod!=0);
soma = soma.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
document.write(`O seu pedido foi finalizado.<br>O valor total do pedido é de ${soma}`);