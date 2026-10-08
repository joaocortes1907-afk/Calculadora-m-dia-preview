alert("Bem vindo")


function cadastrarAluno(){
    let nomeAluno=(prompt("Digite o nome do aluno"));
    let N1= Number(prompt("Digite a primeira nota"));
    let N2= Number(prompt("Digite a segunda nota"));

    return {nomeAluno: nomeAluno, N1: N1, N2: N2};
}

function calcularMedia(N1, N2){
    return (N1+N2) /2;
}

let aluno= cadastrarAluno();

let mediaFinal= calcularMedia(aluno.N1, aluno.N2);


alert ("A média final do aluno "+ aluno.nomeAluno +" é "+ mediaFinal);

if (mediaFinal <6){
    alert ("O aluno "+ aluno.nomeAluno +" está Reprovado")
}else{
    alert ("O aluno "+ aluno.nomeAluno +" está aprovado")
}

alert ("Obrigado por utilizar nosso sistema de notas")
