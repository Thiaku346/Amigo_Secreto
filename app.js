// Declara um array vazio chamado lista_amigos que irá armazenar os nomes dos amigos.
let lista_amigos = [];

// Função para adicionar um amigo à lista.
function adicionarAmigo(){
    // Obtém o valor inserido no campo de input com id "amigo".
    let input = document.getElementById("amigo");
    let nome = input.value; 

    // Verifica se o nome não está vazio
    if(nome != ""){
        // Adiciona o nome na lista_amigos
        lista_amigos.push(nome);

        // Limpa o campo de input após adicionar o amigo
        input.value = "";

        // Chama a função atualizarLista para atualizar a exibição da lista de amigos
        atualizarLista();
    }
    else{
        // Se o campo de input estiver vazio, exibe um alerta para o usuário
        alert("Por favor, insira um nome válido.");
    }
}

// Função para atualizar a lista exibida na página.
function atualizarLista(){
    // Obtém o elemento HTML com id "listaAmigos", onde a lista de amigos será exibida.
    let amigo = document.getElementById("listaAmigos");

    // Limpa qualquer conteúdo anterior da lista exibida.
    amigo.innerHTML = "";

    // Percorre todos os itens na lista_amigos e os adiciona como elementos <li> na lista exibida.
    lista_amigos.forEach(item => {
        let li = document.createElement("li");  // Cria um novo elemento <li>
        li.textContent = item;  // Define o conteúdo do <li> como o nome do amigo
        amigo.appendChild(li);  // Adiciona o <li> à lista de amigos na página
    });
}

// Função para sortear um amigo da lista.
function sortearAmigo(){
    // Verifica se a lista de amigos está vazia
    if (lista_amigos.length === 0) {
        // Exibe um alerta caso a lista esteja vazia e retorna para não realizar o sorteio.
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }

    // Oculta a lista de amigos original após o sorteio
    document.getElementById("listaAmigos").style.display = "none";

    // Gera um número aleatório para escolher um amigo da lista
    let posicao_lista_amigo = Math.floor(Math.random() * lista_amigos.length);

    // Armazena o nome do amigo sorteado
    amigo_sorteado = lista_amigos[posicao_lista_amigo];

    // Obtém o elemento HTML com id "resultado" onde o sorteio será mostrado.
    let resultado = document.getElementById("resultado");

    // Limpa qualquer conteúdo anterior da área de resultado
    resultado.innerHTML = "";

    // Cria um novo elemento <li> para mostrar o amigo sorteado.
    let li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado é: ${amigo_sorteado}`;  // Exibe o nome do amigo sorteado
    document.getElementById("resultado").appendChild(li);  // Adiciona o <li> à área de resultado
}
