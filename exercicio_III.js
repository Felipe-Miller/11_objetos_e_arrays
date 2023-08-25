const prompt = require("prompt-sync")(); // Biblioteca para ler entrada do usuário

const pessoas = [];

while (true) {
    const pessoa = {
        nome: prompt("Informe o nome: "),
        idade: parseInt(prompt("Informe a idade: ")),
        trabalhando: prompt("Está trabalhando? (s/n): ").toLowerCase() === "s",
        salario: 0
    };

    if (pessoa.trabalhando) {
        pessoa.salario = parseFloat(prompt("Informe o salário: "));
    }

    pessoas.push(pessoa);

    const continuar = prompt("Deseja continuar cadastrando? (s/n): ");
    if (continuar.toLowerCase() !== "s") {
        break;
    }
}

const desempregadas = pessoas.filter(pessoa => !pessoa.trabalhando);
const empregadasMenos2500 = pessoas.filter(pessoa => pessoa.trabalhando && pessoa.salario < 2500);
const empregadasMais2500 = pessoas.filter(pessoa => pessoa.trabalhando && pessoa.salario >= 2500);

console.log("Pessoas desempregadas:");
desempregadas.forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
});

console.log("\nPessoas empregadas com salários menores que 2500:");
empregadasMenos2500.forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
});

console.log("\nPessoas empregadas com salários maiores que 2500:");
empregadasMais2500.forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
});