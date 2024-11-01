// Classe para representar o Usuário
class MonsterClass {
    constructor(nome, email, esporte, mostro, idade) {
        this.nome = nome;
        this.email = email;
        this.esporte = esporte;
        this.mostro = mostro;
        this.idade = idade;
    }
}

// Array para armazenar os objetos Monster
let registros = [];

// Função para cadastrar um novo monstro
function cadastrarMostro() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const esporte = document.getElementById('esporte').value;
    const mostro = document.getElementById('mostro').value;
    const idade = document.getElementById('idade').value;

    if (nome && email && esporte && mostro && idade) {
        // Cria um novo objeto Monster e adiciona ao array
        const monster = new MonsterClass(nome, email, esporte, mostro, idade);
        registros.push(monster);
        exibirRegistros();
        // Limpa o formulário
        document.getElementById('formulario').reset();
    } else {
        alert("BUHH!!!!");
    }
}

// Função para exibir os registros na seção de saída
function exibirRegistros() {
    const saida = document.getElementById('saida');
    saida.innerHTML = `
        <h3>Registros de Monstros</h3>
        ${registros.map((registro, index) => `
            <div class="registro">
                <p>Nome: ${registro.nome}</p>
                <p>Email: ${registro.email}</p>
                <p>Esporte: ${registro.esporte}</p>
                <p>Monstro: ${registro.mostro}</p>
                <p>Idade: ${registro.idade}</p>
                <button onclick="editarRegistros(${index})">Editar</button>
                <button onclick="excluirRegistros(${index})">Excluir</button>
            </div>
        `).join('')}
    `;
}

// Função para editar um registro
function editarRegistros(index) {
    const registro = registros[index];
    document.getElementById('nome').value = registro.nome;
    document.getElementById('email').value = registro.email;
    document.getElementById('esporte').value = registro.esporte;
    document.getElementById('mostro').value = registro.mostro;
    document.getElementById('idade').value = registro.idade;
    registros.splice(index, 1); // Remove o registro para evitar duplicação ao salvar
    exibirRegistros();
}

// Função para excluir um registro
function excluirRegistros(index) {
    registros.splice(index, 1);
    exibirRegistros();
}

// Event listener para o botão de envio
document.querySelector("button").addEventListener("click", cadastrarMostro);
