const individuos = []

do{
  const nome = prompt('Qual o seu nome?')
  const idade = Number(prompt('Qual a sua idade?'))
  const trabalho = confirm('Está trabalhando?')
  let salario = 0
    if(trabalho){
      salario += parseFloat(prompt('Qual o seu salário?'))
    }
  individuos.push({
    nome: nome,
    idade: idade,
    trabalho: trabalho,
    salario: salario
  })
}while(confirm('Deseja cadastrar um novo indivíduo?'))

document.write(individuos)
// 4. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando pergunte para ele o salário que está ganhando. Para cada pessoa cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000