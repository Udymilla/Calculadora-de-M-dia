var notaPb = parseFloat(prompt("Digite a nota do primeiro bimestre"));
var notaSb = parseFloat(prompt("Digite a nota do segundo bimestre"));
var notaTb = parseFloat(prompt("Digite a nota do terceiro bimestre"));
var notaQb = parseFloat(prompt("Digite a nota do quarto bimestre"));


var notaFinal = (notaPb + notaSb + notaTb + notaQb) / 4;

//tofixed variavel determinada para arredondar o numero
var notaFixa = notaFinal.toFixed(1);

if (notaFinal >= 6) {
  var resultadoAluno = "Urrul, passou!";
} else {
  var resultadoAluno = "Cara, não foi dessa vez!";
}


document.getElementById("notaAluno").innerHTML = notaFinal;
document.getElementById("resultadoAluno").innerHTML = resultadoAluno;