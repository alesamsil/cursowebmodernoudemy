/*
09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/

function notaAluno(nota) {
    let notaCorrigida = 0;
    if (nota >= 40) {
        notaCorrigida = arredondar(nota);
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${nota}`);
    }
}

function arredondar (notaArredondada) {
    if (notaArredondada % 5 >= 3) {
        return notaArredondada + (5 - (notaArredondada % 5));
    } else {
        return notaArredondada;
    }
}

notaAluno(0);
notaAluno(100);
notaAluno(38);
notaAluno(84);
notaAluno(29);
notaAluno(38);
notaAluno(40);





