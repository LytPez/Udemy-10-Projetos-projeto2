/*
função que conta as palavras, usando o .split() para contar quandos ' ' tem entre as palavras, assim contando quantas palavras existem, esta função é chamada ao clicar em um botao criado em html 
*/
//o .split() pega os caracteres que você descrever e conta quantos tem. ' ' é um caracter

function calcular(){
  let text=document.getElementById('textarea').value
  let result= text.split(' ').length

  document.getElementById('resultado').innerHTML='Você tem: ' + result + ' palavras'
}