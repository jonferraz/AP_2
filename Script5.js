  var nome = window.prompt('Qual seu nome')// salvar nome do aluno
  var n1 = Number.parseFloat(window.prompt('Digite nota 1'));//(parseFoat para converster numero)salvar nota do aluno
  var n2 = Number.parseFloat(window.prompt('digite nota 2'));
  var n3 = Number.parseFloat(window.prompt('Digite nata 3'));
  

  var media = (n1 + n2 + n3) /3; 
  var r = media >=8 ?'APROVADO':'REPROVADO'
  

  document.getElementById("nome").innerHTML = nome;//aparecer nome 
  document.write('Sua nota é:', media)// aparecer nota
  document.getElementById("r").innerHTML = r;//aparecer nome 
  

  



