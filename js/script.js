// Classe para representar o Usuário
class MonsterClass {
    constructor(nome,  esporte, mostro, idade,numero) {
        this.nome = nome;
        
        this.esporte = esporte;
        this.mostro = mostro;
        this.idade = idade;
        this.numero= numero
    }
}

// Array para armazenar os objetos Monster
let registros = [];

// Função para cadastrar um novo monstro
function cadastrarMostro() {
    const nome = document.getElementById('nome').value;

    const esporte = document.getElementById('esporte').value;
    const mostro = document.getElementById('mostro').value;
    const idade = document.getElementById('idade').value;
    const numero = document.getElementById('numero').value;

    if (nome && esporte && mostro && idade && numero) {
        // Cria um novo objeto Monster e adiciona ao array
        const monster = new MonsterClass(nome,  esporte, mostro, idade,numero);
        registros.push(monster);
        exibirRegistros();
        // Limpa o formulário
        document.getElementById('formulario').reset();
    } 
}

// Função para exibir os registros na seção de saída
function exibirRegistros() {
    const saida = document.getElementById('saida');
    saida.innerHTML = `
        <h3>Registros de Monstros</h3>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Esporte</th>
                    <th>Monstro</th>
                    <th>Idade</th>
                    <th>Número</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${registros.map((registro, index) => `
                    <tr class="registro">
                        <td>${registro.nome}</td>
                        <td>${registro.esporte}</td>
                        <td>${registro.mostro}</td>
                        <td>${registro.idade}</td>
                        <td>${registro.numero}</td>
                        <td>
                            <button class="editar-btn" onclick="editarRegistros(${index})">Editar</button>
                            <button class="excluir-btn" onclick="excluirRegistros(${index})">Excluir</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Função para editar um registro
function editarRegistros(index) {
    const registro = registros[index];
    document.getElementById('nome').value = registro.nome;
  
    document.getElementById('esporte').value = registro.esporte;
    document.getElementById('mostro').value = registro.mostro;
    document.getElementById('idade').value = registro.idade;
    document.getElementById('numero').value= registro.numero;
    registros.splice(index, 1); // Remove o registro para evitar duplicação ao salvar
    exibirRegistros();
}

// Função para excluir um registro
function excluirRegistros(index) {
    registros.splice(index, 1);
    exibirRegistros();
}

// Event listener para o botão de envio
document.getElementById("btn").addEventListener("click", cadastrarMostro);
