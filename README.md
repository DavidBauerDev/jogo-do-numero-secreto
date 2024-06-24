## Desvende o Segredo: Um Jogo Interativo com JavaScript, HTML e CSS

link no vercel: <https://jogonumerosecretodavidbauer-6z4njfkqp-davidbauerdevs-projects.vercel.app/>

Mergulhe em uma aventura de lógica e programação com o jogo "Número Secreto"! Este projeto, desenvolvido na plataforma Alura do programa Oracle Next Education, combina os poderes do JavaScript, HTML e CSS para criar uma experiência empolgante e desafiadora.

Desvendando os Mistérios:

HTML: Esboço da Estrutura:

index.html:
O tabuleiro do jogo, com seções para:
Entrada do palpite do jogador.
Exibição de dicas ("Maior", "Menor" ou "Acertou!").
Mensagens informativas (boas-vindas, instruções, etc.).
Botões para controlar o jogo (iniciar, reiniciar, etc.).
CSS: Estilizando a Interface:

style.css:
Dá vida ao HTML com cores, fontes, layout e outros elementos visuais.
Cria uma interface atraente e amigável para o jogador.
JavaScript: O Cérebro do Jogo:

script.js:
Contém as funções que conduzem a jogabilidade:
gerarNumeroSecreto(): Gera um número aleatório dentro de um intervalo definido.
darDica(numeroSecreto, palpite): Compara o palpite com o número secreto e retorna "Maior", "Menor" ou "Acertou!".
iniciarJogo(): Inicializa o jogo, definindo variáveis, exibindo instruções e ocultando elementos iniciais.
verificarPalpite(): Obtem o palpite do jogador, chama darDica() para obter a dica e exibe o resultado.
mostrarMensagem(mensagem): Exibe mensagens informativas ao jogador.
Utiliza eventos JavaScript para capturar ações do usuário (cliques em botões, digitação de palpites).
Funcionamento:

O jogador acessa o index.html e se depara com a interface inicial do jogo.
Ao clicar em "Iniciar", o JavaScript entra em ação:
iniciarJogo() é executada, preparando o jogo e exibindo instruções.
O jogador digita seu palpite e clica em "Chutar".
verificarPalpite() captura o palpite, compara com o número secreto e chama darDica().
A dica ("Maior", "Menor" ou "Acertou!") é exibida para orientar o jogador.
O jogo se repete até que o jogador acerte o número secreto ou exceda o limite de tentativas.
Mensagens informativas e feedbacks garantem uma experiência envolvente e interativa.
Aprimoramentos Possíveis:

Implementar diferentes níveis de dificuldade com faixas de números e tentativas variáveis.
Integrar recursos visuais e sonoros para tornar o jogo mais dinâmico e imersivo.
Permitir que o jogador personalize o visual do jogo com cores e temas.
Criar um sistema de pontuação para recompensar o progresso do jogador.
Conclusão:

O desenvolvimento do jogo "Número Secreto" solidificou conceitos fundamentais de lógica de programação, funções, arrays, math.random, listas e outras ferramentas em JavaScript, HTML e CSS. Através da criação deste projeto, foi possível:

Aplicar conhecimentos teóricos em um contexto prático e divertido.
Desenvolver habilidades de programação e resolução de problemas.
Promover o raciocínio lógico e a criatividade.
Criar uma experiência interativa e envolvente para o usuário.
Este projeto serve como um exemplo inspirador para futuros desenvolvedores, demonstrando o potencial da programação para criar jogos interativos e desafiadores.
