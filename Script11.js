var cont = 1;
var resultado = 0;
    do{
        resultado = cont % 2;
        if(resultado == 0){
            resultado = cont*cont;
            document.write(resultado, "&nbsp");
            cont ++;
        }else{
            cont ++;
        }            
    }while(cont <= 100); 