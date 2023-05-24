class Pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = new Date(dataNascimento);
    }

    getIdade() {
        const dataAtual = new Date();
        let idade = dataAtual.getFullYear() - this.dataNascimento.getFullYear();
        const mesAtual = dataAtual.getMonth();
        const diaAtual = dataAtual.getDate();
        const mesNascimento = this.dataNascimento.getMonth();
        const diaNascimento = this.dataNascimento.getDate();

        if (
            mesAtual < mesNascimento ||
            (mesAtual === mesNascimento && diaAtual < diaNascimento)
        ) {
            idade--;
        }

        return idade;
    }
}

Pessoa.prototype.getNiver = function () {
    const dataAtual = new Date();
    const mesAtual = dataAtual.getMonth();
    const diaAtual = dataAtual.getDate();
    const mesNascimento = this.dataNascimento.getMonth();
    const diaNascimento = this.dataNascimento.getDate();

    if (
        mesAtual > mesNascimento ||
        (mesAtual === mesNascimento && diaAtual >= diaNascimento)
    ) {
        return true;
    } else {
        return false;
    }
};

const pessoas = [
    new Pessoa ('Gabriel', '2000-05-15'),
    new Pessoa ('Julia','1994-11-10'),
    new Pessoa  ('Roberto','1998-01-05'),
    new Pessoa ('João','1998-06-23'),
    new Pessoa ('Carlos','1999-02-30'),
    new Pessoa ('Patricia','1993-07-10'),
    new Pessoa ('Rebeca','1966-08-06'),
    new Pessoa ('Vitor','1980-04-28'),
    new Pessoa ('Rafaela','1997-10-14'),
    new Pessoa  ('Chaves','1993-01-09')
];

for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    const idade = pessoa.getIdade();
    const fezAniversario = pessoa.getNiver() ? 'já' : 'ainda não';

    console.log(
        `${pessoa.nome} tem ${idade} anos e ${fezAniversario} fez aniversário esse ano.`
    );
}

