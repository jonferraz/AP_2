  var nome = window.prompt('Qual seu nome')// salvar nome do aluno
  var n1 = Number.parseFloat(window.prompt('Digite 1° Nota'));//(parseFoat para converster numero)salvar nota do aluno
  var n2 = Number.parseFloat(window.prompt('digite 2° Nota'));
  var n3 = Number.parseFloat(window.prompt('Digite 3° Nota'));
  

  var media = (n1 + n2 + n3) /3; 
  var r = media >=8 ?'APROVADO':'REPROVADO'
  

  document.getElementById("nome").innerHTML = nome;//aparecer nome 
  document.write('Sua nota é:', media)// aparecer nota
  document.getElementById("r").innerHTML = r;//aparecer resultado 
  

  



