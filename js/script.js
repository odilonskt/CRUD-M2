// Classe para representar o objeto "Monster" (Monstro)
class MonsterClass {
    constructor(nome, esporte, mostro, idade, numero) {
        // Atributos do monstro
        this.nome = nome;         // Nome do monstro
        this.esporte = esporte;   // Esporte praticado pelo monstro
        this.mostro = mostro;     // Tipo do monstro
        this.idade = idade;       // Idade do monstro
        this.numero = numero;     // Número associado ao monstro
    }
}

// Array para armazenar os objetos Monster (Registros de monstros)
let registros = [];

// Função para cadastrar um novo monstro
function cadastrarMostro() {
    // Obtém os valores dos campos de entrada no HTML
    const nome = document.getElementById('nome').value;
    const esporte = document.getElementById('esporte').value;
    const mostro = document.getElementById('mostro').value;
    const idade = document.getElementById('idade').value;
    const numero = document.getElementById('numero').value;

    // Verifica se todos os campos foram preenchidos
    if (nome && esporte && mostro && idade && numero) {
        // Cria um novo objeto Monster com os dados coletados
        const monster = new MonsterClass(nome, esporte, mostro, idade, numero);
        
        // Adiciona o novo objeto ao array de registros
        registros.push(monster);
        
        // Exibe os registros atualizados na tela
        exibirRegistros();
        
        // Limpa o formulário após o cadastro
        document.getElementById('formulario').reset();
    }
}

// Função para exibir os registros de monstros na tela
function exibirRegistros() {
    // Obtém o elemento HTML onde os registros serão exibidos
    const saida = document.getElementById('saida');
    
    // Gera o HTML com todos os registros armazenados
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
                            <!-- Botões para editar e excluir registros -->
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
    // Obtém o registro selecionado pelo índice
    const registro = registros[index];
    
    // Preenche os campos do formulário com os dados do registro
    document.getElementById('nome').value = registro.nome;
    document.getElementById('esporte').value = registro.esporte;
    document.getElementById('mostro').value = registro.mostro;
    document.getElementById('idade').value = registro.idade;
    document.getElementById('numero').value = registro.numero;
    
    // Remove o registro do array para evitar duplicação ao salvar
    registros.splice(index, 1);
    
    // Atualiza a exibição dos registros
    exibirRegistros();
}

// Função para excluir um registro
function excluirRegistros(index) {
    // Remove o registro do array com base no índice
    registros.splice(index, 1);
    
    // Atualiza a exibição dos registros após a exclusão
    exibirRegistros();
}

// Event listener para o botão de cadastro
// Quando o botão é clicado, a função cadastrarMostro é chamada
document.getElementById("btn").addEventListener("click", cadastrarMostro);
