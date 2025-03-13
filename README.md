# Sorteio de Amigo Secreto

Este projeto é uma aplicação simples de sorteio de amigo secreto, onde os usuários podem adicionar amigos à lista e, em seguida, sortear um amigo da lista para revelar o nome de quem será o "amigo secreto". Ele é feito em JavaScript com manipulação do DOM para atualizar a lista de amigos e exibir os resultados do sorteio.

## Funcionalidades

- **Adicionar Amigos**: Os usuários podem inserir nomes de amigos através de um campo de entrada e adicionar esses nomes à lista.
- **Exibir Lista de Amigos**: A lista de amigos adicionados será exibida dinamicamente na página.
- **Sorteio de Amigo Secreto**: Quando o sorteio é feito, um nome aleatório é selecionado da lista e exibido como o "amigo secreto".
- **Validação de Entrada**: Se o campo de entrada estiver vazio, um alerta será mostrado para que o usuário insira um nome válido.

## Como usar

1. Abra o arquivo HTML em seu navegador.
2. Insira o nome de um amigo no campo de entrada e clique no botão para adicionar o nome à lista.
3. Quando você tiver amigos suficientes na lista, clique no botão de sorteio para ver quem será o "amigo secreto".
4. A lista de amigos será ocultada após o sorteio e o nome do amigo secreto será exibido.

## Requisitos

Este código funciona em qualquer navegador moderno, já que utiliza funcionalidades básicas de JavaScript e manipulação de DOM.

## Como funciona

1. **Array `lista_amigos`**: Armazena os nomes dos amigos adicionados.
2. **Função `adicionarAmigo`**: Adiciona o nome do amigo à lista `lista_amigos` se o campo de entrada não estiver vazio e chama a função `atualizarLista` para atualizar a exibição da lista.
3. **Função `atualizarLista`**: Atualiza a exibição da lista de amigos na página.
4. **Função `sortearAmigo`**: Sorteia um amigo aleatoriamente da lista e exibe o resultado. Se a lista estiver vazia, exibe um alerta.

## Exemplo de Uso

1. Digite o nome de um amigo no campo de entrada e clique em "Adicionar".
2. Após adicionar alguns amigos, clique em "Sortear Amigo Secreto" para revelar quem é o amigo secreto.
