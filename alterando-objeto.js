const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
};

console.log(estudante.telefone); // undefined

estudante.telefone = "11999999999";
console.log(estudante.telefone);
console.log(estudante);

estudante.nome = "José Souza";
console.log(estudante);

const estudante2 = {};
estudante2.nome = "Ana Maria";
