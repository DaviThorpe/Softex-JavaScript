// Escolhi o Visual Studio Code porque já estava utilizando ele para as atividades em python 
// e também consigo editar arquivos em txt quando necessário, além disso ele está "linkado"
// com o github desktop facilitando o upload dos arquivos.

// Ainda não conheço como funciona a linguagem portanto irei por um exemplo apenas demostrativo
// Abaixo segue um exemplo de código para gerar um relógio em tempo real em seu site
// Fonte: https://terminalroot.com.br/2016/12/alguns-codigos-simples-de-javascript-2.html

<script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
</script>
<div id="txt">
<script type="text/javascript">document.write(startTime())</script>
</div>
