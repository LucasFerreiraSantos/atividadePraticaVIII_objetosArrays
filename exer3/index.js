const aluno1 = {
  nome: 'Lucas',
  nota1: 7,
  nota2: 9
}

const aluno2 = {
  nome: 'Ramon',
  nota1: 10,
  nota2: 9
}
const mediaAluno1 = (aluno1.nota1 + aluno1.nota2)/2
const mediaAluno2 = (aluno2.nota1 + aluno2.nota2)/2
const mediaTotal = (aluno1.nota1 + aluno1.nota2 + aluno2.nota1 + aluno2.nota2)/4

document.write(`Temos dois alunos na turma <strong>${aluno1.nome} e ${aluno2.nome}</strong>.<br>Eles tiveram sucessivamente as seguintes notas ${aluno1.nota1}, ${aluno1.nota2} e ${aluno2.nota1}, ${aluno2.nota2}.<br>O primeiro ficou com a média de ${mediaAluno1}.<br>E o segundo com a média de ${mediaAluno2}.<br>Ao final, a média total da turma de 2 alunos foi de ${mediaTotal}.`)
// 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.