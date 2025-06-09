// Dados dos enigmas
const enigmas = [
    {
        level: 1,
        title: "O Despertar do Problema",
        text: "No reino do saber, um desafio se ergue, um mistério a desvendar. Sou a primeira faísca, a voz que te convida a questionar o que está posto. Sem mim, a jornada não se inicia. Quem sou eu?",
        options: {
            A: "Tomada de Posição",
            B: "Maturação",
            C: "Solução",
            D: "Prova"
        },
        correctAnswer: "A",
        feedback: "Correto! A Tomada de Posição é o primeiro passo da Sequência Fedathi, onde o professor apresenta o problema e desperta o interesse do aluno."
    },
    {
        level: 2,
        title: "O Campo de Experimentação",
        text: "Sou o vale onde a mente batalha, onde a tentativa e o erro são mestres. Aqui, espadas de raciocínio são forjadas e mapas de ideias traçados, mesmo que imperfeitos. Sou o tempo da busca. Que lugar é este?",
        options: {
            A: "Prova",
            B: "Pergunta",
            C: "Maturação",
            D: "Solução"
        },
        correctAnswer: "C",
        feedback: "Correto! A Maturação é a fase onde o aluno experimenta, tenta resolver o problema, formula hipóteses e busca caminhos para a solução."
    },
    {
        level: 3,
        title: "O Mestre Silencioso",
        text: "Não te dou a resposta pronta, mas minhas perguntas são flechas que guiam teu caminho. Sou o sussurro que te faz olhar para dentro, o espelho que reflete tuas ideias. Quem sou eu nesse vale de busca?",
        options: {
            A: "Pergunta",
            B: "Prova",
            C: "Solução",
            D: "Contraexemplo"
        },
        correctAnswer: "D",
        feedback: "Correto! O Contraexemplo é uma ferramenta pedagógica que ajuda o aluno a refletir sobre suas hipóteses, guiando-o sem dar a resposta pronta."
    },
    {
        level: 4,
        title: "A Luz da Descoberta",
        text: "Quando a névoa se dissipa e as peças se encaixam, trago à tona o que foi oculto. Sou o fruto de tua jornada, a forma como apresentas o que encontraste. Posso ser um mapa, uma canção ou uma solução. Quem sou eu?",
        options: {
            A: "Erro",
            B: "Maturação",
            C: "Solução",
            D: "Pergunta"
        },
        correctAnswer: "C",
        feedback: "Correto! A Solução é o momento em que o aluno apresenta o resultado de sua investigação, compartilhando suas descobertas."
    },
    {
        level: 5,
        title: "O Selo da Verdade",
        text: "Após a tempestade das ideias e o calor do debate, chego para solidificar o saber. Sou a confirmação, a regra que se impõe, o conhecimento que agora se alinha com o que é universal. Qual é meu nome?",
        options: {
            A: "Prova",
            B: "Solução",
            C: "Erro",
            D: "Contraexemplo"
        },
        correctAnswer: "A",
        feedback: "Correto! A Prova é a fase final da Sequência Fedathi, onde o conhecimento é formalizado e conectado ao saber científico universal."
    },
    {
        level: 6,
        title: "O Fruto da Dúvida",
        text: "Muitos me temem, mas sou um guia disfarçado. Minhas marcas mostram onde não ir, e cada passo em falso me torna um professor. Sem mim, a verdadeira compreensão seria um caminho sem atalhos. Who am I?",
        options: {
            A: "Solução",
            B: "Maturação",
            C: "Prova",
            D: "Erro"
        },
        correctAnswer: "D",
        feedback: "Correto! O Erro é uma parte valiosa do processo de aprendizagem, pois nos mostra caminhos a evitar e nos ensina através da reflexão sobre nossos equívocos."
    },
    {
        level: 7,
        title: "O Tesouro Compartilhado",
        text: "Não é apenas o ouro ou a joia, mas o conhecimento que brota do coletivo. Sou a força que tece mentes e faz surgir novas ideias quando todos contribuem com suas visões. O que sou eu?",
        options: {
            A: "Trabalho em grupo",
            B: "Individualidade",
            C: "Pergunta",
            D: "Erro"
        },
        correctAnswer: "A",
        feedback: "Correto! O Trabalho em grupo é fundamental na Sequência Fedathi, pois valoriza a construção coletiva do conhecimento e o compartilhamento de ideias."
    },
    {
        level: 8,
        title: "O Herói que se Reconstrói",
        text: "Minha jornada é sobre edificar pontes em minha própria mente, não apenas copiar as já existentes. Sou aquele que não aceita o óbvio sem antes prová-lo, o arquiteto do meu próprio saber. Quem sou eu?",
        options: {
            A: "Professor(a)",
            B: "Aprendiz",
            C: "Gerente",
            D: "Coordenador(a)"
        },
        correctAnswer: "B",
        feedback: "Correto! O Aprendiz é o protagonista de sua própria jornada de conhecimento, construindo ativamente seu saber em vez de apenas recebê-lo passivamente."
    },
    {
        level: 9,
        title: "O(A) Sábio(a) Pioneiro(a)",
        text: "Sou o visionário que, das terras do Ceará, lançou a primeira semente de um novo método para dominar os números e as verdades do universo. Meu nome ecoa em salas de aula e fortalece mentes. Quem sou eu, que deu início a essa senda do saber?",
        options: {
            A: "Leninha",
            B: "Profa Mazzé Santos",
            C: "Dr. Hermínio Borges Neto",
            D: "Profa Filó e Prof. Marcos"
        },
        correctAnswer: "C",
        feedback: "Correto! Dr. Hermínio Borges Neto é o criador da Sequência Fedathi, uma metodologia de ensino desenvolvida na Universidade Federal do Ceará."
    },
    {
        level: 10,
        title: "O Guardião da Faísca",
        text: "Antigamente, eu era o poço de onde toda a água da verdade jorrava. Agora, sou o que guia os riachos para que cada um encontre sua própria nascente. Não mais te dou a resposta pronta, mas acendo a chama da busca em teu próprio coração. Quem sou eu nesse novo ofício?",
        options: {
            A: "Aprendiz",
            B: "Professor(a)",
            C: "Gerente",
            D: "Gestor(a)"
        },
        correctAnswer: "B",
        feedback: "Correto! O(A) Professor(a), na Sequência Fedathi, assume o papel de mediador(a) do conhecimento, guiando os alunos em sua própria descoberta em vez de simplesmente transmitir informações."
    }
];

// Dados dos avatares
const avatars = {
    masculino: [
        { id: "mago", name: "Mago", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#4B0082"/><path d="M30 70C30 50 70 50 70 70L65 85H35L30 70Z" fill="#6A0DAD"/><path d="M50 20L55 35H45L50 20Z" fill="#FFD700"/><circle cx="50" cy="40" r="15" fill="#FFC0CB"/><path d="M40 35C40 35 45 45 50 35C55 45 60 35 60 35" stroke="#000" stroke-width="2" fill="none"/><circle cx="43" cy="32" r="2" fill="#000"/><circle cx="57" cy="32" r="2" fill="#000"/></svg>` },
        { id: "cavaleiro", name: "Cavaleiro", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#C0C0C0"/><path d="M30 70C30 50 70 50 70 70L65 85H35L30 70Z" fill="#A9A9A9"/><path d="M30 40H70V50H30V40Z" fill="#808080"/><circle cx="50" cy="30" r="15" fill="#FFC0CB"/><path d="M40 35C40 35 45 45 50 35C55 45 60 35 60 35" stroke="#000" stroke-width="2" fill="none"/><circle cx="43" cy="32" r="2" fill="#000"/><circle cx="57" cy="32" r="2" fill="#000"/></svg>` },
        { id: "rei", name: "Rei", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#FFD700"/><path d="M30 70C30 50 70 50 70 70L65 85H35L30 70Z" fill="#DAA520"/><path d="M30 30H70L60 45H40L30 30Z" fill="#DAA520"/><circle cx="50" cy="40" r="15" fill="#FFC0CB"/><path d="M40 45C40 45 45 55 50 45C55 55 60 45 60 45" stroke="#000" stroke-width="2" fill="none"/><circle cx="43" cy="42" r="2" fill="#000"/><circle cx="57" cy="42" r="2" fill="#000"/></svg>` },
        { id: "elfo", name: "Elfo", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#90EE90"/><path d="M30 70C30 50 70 50 70 70L65 85H35L30 70Z" fill="#3CB371"/><path d="M30 40L40 25L50 40L60 25L70 40" fill="#90EE90"/><circle cx="50" cy="40" r="15" fill="#FFC0CB"/><path d="M40 45C40 45 45 55 50 45C55 55 60 45 60 45" stroke="#000" stroke-width="2" fill="none"/><circle cx="43" cy="42" r="2" fill="#000"/><circle cx="57" cy="42" r="2" fill="#000"/></svg>` },
        { id: "ogro", name: "Ogro", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#8B4513"/><path d="M30 70C30 50 70 50 70 70L65 85H35L30 70Z" fill="#A0522D"/><path d="M30 30H70V40H30V30Z" fill="#8B4513"/><circle cx="50" cy="40" r="15" fill="#CD853F"/><path d="M40 45C40 45 45 35 50 45C55 35 60 45 60 45" stroke="#000" stroke-width="2" fill="none"/><circle cx="43" cy="42" r="2" fill="#000"/><circle cx="57" cy="42" r="2" fill="#000"/></svg>` },
        { id: "homem", name: "Homem", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#1E90FF"/><path d="M30 70C30 50 70 50 70 70L65 85H35L30 70Z" fill="#4169E1"/><circle cx="50" cy="40" r="15" fill="#FFC0CB"/><path d="M40 45C40 45 45 55 50 45C55 55 60 45 60 45" stroke="#000" stroke-width="2" fill="none"/><circle cx="43" cy="42" r="2" fill="#000"/><circle cx="57" cy="42" r="2" fill="#000"/></svg>` }
    ],
    feminino: [
        { id: "bruxa", name: "Bruxa", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#800080"/><path d="M30 70C30 50 70 50 70 70L65 85H35L30 70Z" fill="#9370DB"/><path d="M30 30L50 10L70 30H30Z" fill="#800080"/><circle cx="50" cy="40" r="15" fill="#FFC0CB"/><path d="M40 45C40 45 45 55 50 45C55 55 60 45 60 45" stroke="#000" stroke-width="2" fill="none"/><circle cx="43" cy="42" r="2" fill="#000"/><circle cx="57" cy="42" r="2" fill="#000"/></svg>` },
        { id: "dama", name: "Dama", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#FF69B4"/><path d="M30 70C30 50 70 50 70 70L65 85H35L30 70Z" fill="#FF1493"/><path d="M30 40C30 30 70 30 70 40L60 50H40L30 40Z" fill="#FF69B4"/><circle cx="50" cy="30" r="15" fill="#FFC0CB"/><path d="M40 35C40 35 45 45 50 35C55 45 60 35 60 35" stroke="#000" stroke-width="2" fill="none"/><circle cx="43" cy="32" r="2" fill="#000"/><circle cx="57" cy="32" r="2" fill="#000"/></svg>` },
        { id: "rainha", name: "Rainha", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#FFD700"/><path d="M30 70C30 50 70 50 70 70L65 85H35L30 70Z" fill="#DAA520"/><path d="M30 30H70L60 45H40L30 30Z" fill="#DAA520"/><path d="M40 30L50 15L60 30" fill="#FFD700"/><circle cx="50" cy="40" r="15" fill="#FFC0CB"/><path d="M40 45C40 45 45 55 50 45C55 55 60 45 60 45" stroke="#000" stroke-width="2" fill="none"/><circle cx="43" cy="42" r="2" fill="#000"/><circle cx="57" cy="42" r="2" fill="#000"/></svg>` },
        { id: "elfa", name: "Elfa", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#90EE90"/><path d="M30 70C30 50 70 50 70 70L65 85H35L30 70Z" fill="#3CB371"/><path d="M30 40L40 25L50 40L60 25L70 40" fill="#90EE90"/><circle cx="50" cy="40" r="15" fill="#FFC0CB"/><path d="M40 45C40 45 45 55 50 45C55 55 60 45 60 45" stroke="#000" stroke-width="2" fill="none"/><circle cx="43" cy="42" r="2" fill="#000"/><circle cx="57" cy="42" r="2" fill="#000"/></svg>` },
        { id: "ogra", name: "Ogra", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#8B4513"/><path d="M30 70C30 50 70 50 70 70L65 85H35L30 70Z" fill="#A0522D"/><path d="M30 30H70V40H30V30Z" fill="#8B4513"/><circle cx="50" cy="40" r="15" fill="#CD853F"/><path d="M40 45C40 45 45 35 50 45C55 35 60 45 60 45" stroke="#000" stroke-width="2" fill="none"/><circle cx="43" cy="42" r="2" fill="#000"/><circle cx="57" cy="42" r="2" fill="#000"/></svg>` },
        { id: "mulher", name: "Mulher", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#FF6347"/><path d="M30 70C30 50 70 50 70 70L65 85H35L30 70Z" fill="#FF4500"/><circle cx="50" cy="40" r="15" fill="#FFC0CB"/><path d="M40 45C40 45 45 55 50 45C55 55 60 45 60 45" stroke="#000" stroke-width="2" fill="none"/><circle cx="43" cy="42" r="2" fill="#000"/><circle cx="57" cy="42" r="2" fill="#000"/></svg>` }
    ]
};

// Variáveis do jogo
let currentLevel = 1;
let completedLevels = [];
let playerName = "Aventureiro";
let playerGender = "";
let playerAvatar = "";
let currentIntroPage = 1;
let playerLives = 3;
let playerCoins = 0;
let currentAttempts = 3; 
let enigmaAttempts = {}; 

// Elementos DOM
const introScreen = document.getElementById('intro-screen');
const playerNameInput = document.getElementById('player-name-input');
const startAdventureBtn = document.getElementById('start-adventure-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const playerNameDisplay = document.getElementById('player-name-display');
const playerLevelDisplay = document.getElementById('player-level');
const playerAvatarDisplay = document.getElementById('player-avatar');
const progressBar = document.getElementById('progress-bar');
const progressPercentage = document.getElementById('progress-percentage');
const enigmaTitle = document.getElementById('enigma-title');
const enigmaText = document.getElementById('enigma-text');
const optionsContainer = document.getElementById('options-container');
const feedbackCorrect = document.getElementById('feedback-correct');
const feedbackIncorrect = document.getElementById('feedback-incorrect');
const feedbackCorrectText = document.getElementById('feedback-correct-text');
const feedbackIncorrectText = document.getElementById('feedback-incorrect-text');
const attemptsLeftDisplay = document.getElementById('attempts-left');
const prevEnigmaBtn = document.getElementById('prev-enigma-btn');
const nextEnigmaBtn = document.getElementById('next-enigma-btn');
const victoryModal = document.getElementById('victory-modal');
const gameOverModal = document.getElementById('game-over-modal');
const certificateName = document.getElementById('certificate-name');
const restartBtn = document.getElementById('restart-btn');
const tryAgainBtn = document.getElementById('try-again-btn');
const avatarSelection = document.querySelector('.avatar-selection');
const livesCountDisplay = document.getElementById('lives-count');
const coinsCountDisplay = document.getElementById('coins-count');
const buyLifeBtn = document.getElementById('buy-life-btn');

// Inicializar o jogo
function initGame() {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (hasSeenIntro === 'true') {
        introScreen.style.display = 'none';
        loadGameState();
        // Se a introdução já foi vista e o jogo foi salvo, tenta carregar o último enigma.
        // Se currentLevel for 10 e completedLevels for 10, o botão "Próximo Enigma" se transformará em "Ver Tesouro Final".
        showEnigma(currentLevel); 
    } else {
        // Se for a primeira vez (ou se o localStorage foi limpo), mostra a introdução e reseta as variáveis do jogo.
        introScreen.style.display = 'flex';
        goToIntroPage(1);
        resetGameVariables(); // Garante que as variáveis em memória estejam limpas para uma nova aventura.
    }
    
    // Configurar eventos dos botões de navegação da introdução
    prevBtn.addEventListener('click', function() {
        navigateIntroPage(-1);
    });
    
    nextBtn.addEventListener('click', function() {
        navigateIntroPage(1);
    });
    
    // Adicionar eventos para os pontos de paginação
    document.querySelectorAll('.intro-pagination-dot').forEach(dot => {
        dot.addEventListener('click', function() {
            const page = parseInt(this.getAttribute('data-page'));
            goToIntroPage(page);
        });
    });
    
    // Configurar eventos para seleção de gênero
    document.querySelectorAll('.gender-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.gender-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
            playerGender = this.getAttribute('data-gender');
            populateAvatars(playerGender);
            checkFormCompletion();
        });
    });
    
    // Lógica do botão "Iniciar Aventura"
    startAdventureBtn.addEventListener('click', function() {
        const name = playerNameInput.value.trim();
        // Garante que o nome esteja preenchido
        if (!name) {
            alert("Por favor, digite seu nome, aventureiro!");
            return; 
        }
        // Atribui o nome ANTES do reset de variáveis para que não seja sobrescrito.
        playerName = name; 

        // --- REINICIALIZAÇÃO EXPLÍCITA E COMPLETA DO ESTADO DO JOGO PARA UMA NOVA AVENTURA ---
        // Isso garante que, ao iniciar uma NOVA aventura, o jogo sempre comece do zero,
        // limpando qualquer estado anterior que possa ter sido carregado ou restado de alguma forma.
        currentLevel = 1;
        completedLevels = []; 
        playerLives = 3;
        playerCoins = 0;
        enigmaAttempts = {}; // Resetar tentativas por enigma também
        // --- FIM DA REINICIALIZAÇÃO ---
        
        saveGameState(); // Salva este NOVO estado (começando do zero)
        localStorage.setItem('hasSeenIntro', 'true'); // Marca que a introdução foi vista para futuras visitas
        introScreen.style.display = 'none'; // Esconde a tela de introdução
        showEnigma(1); // Inicia sempre no PRIMEIRO enigma
    });
    
    // Configurar eventos para navegação entre enigmas
    prevEnigmaBtn.addEventListener('click', function() {
        if (currentLevel > 1) {
            showEnigma(currentLevel - 1);
        }
    });
    
    nextEnigmaBtn.addEventListener('click', function() {
        if (currentLevel < enigmas.length) { // Use enigmas.length para o número total de enigmas
            showEnigma(currentLevel + 1);
        } else if (currentLevel === enigmas.length && completedLevels.length === enigmas.length) {
            showVictoryModal();
        }
    });
    
    // Configurar evento para reiniciar o jogo (a partir do modal de vitória ou game over)
    restartBtn.addEventListener('click', function() {
        resetGameAndGoToIntro(); // Nova função para resetar e ir para a intro
        victoryModal.style.display = 'none';
    });
    
    // Configurar evento para tentar novamente após game over
    // CORREÇÃO: Certifique-se de que a função chamada está correta: resetGameAndGoToIntro
    tryAgainBtn.addEventListener('click', function() {
        resetGameAndGoToIntro(); // Chamada corrigida
        gameOverModal.style.display = 'none';
    });
    
    // Configurar evento para comprar vida
    buyLifeBtn.addEventListener('click', function() {
        if (playerCoins >= 6) {
            playerCoins -= 6;
            playerLives += 1;
            updateResourcesDisplay();
            saveGameState(); // Voltamos a salvar o estado
            alert("Vida comprada! Você ganhou 1 vida.");
        } else {
            alert("Você não tem moedas suficientes para comprar uma vida!");
        }
    });
    
    // Verificar entrada de nome
    playerNameInput.addEventListener('input', checkFormCompletion);

    // Reiniciar o jogo (limpar localStorage) quando a janela for fechada
    window.addEventListener('beforeunload', function() {
        localStorage.clear(); // Limpa todo o localStorage antes de fechar/navegar
    });
}

// Navegar entre páginas da introdução
function navigateIntroPage(direction) {
    const newPage = currentIntroPage + direction;
    if (newPage >= 1 && newPage <= 4) {
        goToIntroPage(newPage);
    }
}

// Ir para uma página específica da introdução
function goToIntroPage(page) {
    // Esconder todas as páginas
    document.querySelectorAll('.intro-page').forEach(p => {
        p.classList.remove('active');
    });
    
    // Mostrar a página selecionada
    document.getElementById(`intro-page-${page}`).classList.add('active');
    
    // Atualizar os pontos de paginação
    document.querySelectorAll('.intro-pagination-dot').forEach(dot => {
        dot.classList.remove('active');
    });
    document.querySelector(`.intro-pagination-dot[data-page="${page}"]`).classList.add('active');
    
    // Desabilitar o botão "Próximo" na última página (criação de personagem)
    // para que o jogador use apenas o botão "Iniciar Aventura"
    prevBtn.disabled = (page === 1);
    nextBtn.disabled = (page === 4); // Desabilita o "Próximo" na página 4
    
    // Se estiver na página de criação de personagem, habilita/desabilita o botão "Iniciar Aventura"
    if (page === 4) {
        checkFormCompletion();
    } else {
        startAdventureBtn.disabled = true; // Desabilita o botão em outras páginas
    }

    // Atualizar a página atual
    currentIntroPage = page;
}

// Preencher opções de avatar com base no gênero selecionado
function populateAvatars(gender) {
    avatarSelection.innerHTML = '';
    
    const avatarList = avatars[gender];
    avatarList.forEach(avatar => {
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'avatar-option';
        avatarDiv.setAttribute('data-avatar', avatar.id);
        
        avatarDiv.innerHTML = `
            <div class="avatar-icon">${avatar.svg}</div>
            <span>${avatar.name}</span>
        `;
        
        avatarDiv.addEventListener('click', function() {
            document.querySelectorAll('.avatar-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
            playerAvatar = this.getAttribute('data-avatar');
            checkFormCompletion();
        });
        
        avatarSelection.appendChild(avatarDiv);
    });

    // Se um avatar já estiver selecionado (ex: ao carregar jogo salvo), marque-o
    if (playerGender && playerAvatar) { // Simplificado: verifica se playerAvatar existe
        const currentAvatarDiv = document.querySelector(`.avatar-option[data-avatar="${playerAvatar}"]`);
        if (currentAvatarDiv) {
            currentAvatarDiv.classList.add('selected');
        }
    }
}

// Verificar se o formulário está completo para habilitar o botão de iniciar
function checkFormCompletion() {
    const name = playerNameInput.value.trim();
    const selectedGender = document.querySelector('.gender-option.selected');
    const selectedAvatar = document.querySelector('.avatar-option.selected');

    startAdventureBtn.disabled = !(name && selectedGender && selectedAvatar);
}

// Mostrar enigma atual
function showEnigma(level) {
    currentLevel = level;
    const enigma = enigmas.find(e => e.level === level);
    if (!enigma) return;
    
    playerNameDisplay.textContent = playerName;
    playerLevelDisplay.textContent = currentLevel;
    updatePlayerAvatar();
    updateProgress();
    updateResourcesDisplay();

    enigmaTitle.textContent = `Enigma ${level}: ${enigma.title}`;
    enigmaText.textContent = enigma.text;
    
    // Limpar opções anteriores
    optionsContainer.innerHTML = '';
    
    // O texto de tentativas restantes agora indica que não é mais por enigma e sim por vida
    attemptsLeftDisplay.textContent = 'Você perde 1 vida a cada erro!';
    
    // Adicionar opções
    for (const [key, value] of Object.entries(enigma.options)) {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.setAttribute('data-option', key);
        button.textContent = `${key}) ${value}`;
        
        // Se o nível já foi completado, desabilitar o botão e mostrar a resposta correta
        if (completedLevels.includes(level)) {
            button.disabled = true;
            if (key === enigma.correctAnswer) {
                button.classList.add('correct');
            }
        } else {
            button.addEventListener('click', function() {
                checkAnswer(level, key);
            });
        }
        
        optionsContainer.appendChild(button);
    }
    
    // Resetar feedback
    feedbackCorrect.style.display = 'none';
    feedbackIncorrect.style.display = 'none';
    
    // Se o nível já foi completado, mostrar feedback
    if (completedLevels.includes(level)) {
        feedbackCorrectText.textContent = enigma.feedback;
        feedbackCorrect.style.display = 'block';
        // Desabilitar todas as opções se o enigma já foi resolvido
        document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
    }

    // Atualizar botões de navegação dos enigmas
    prevEnigmaBtn.disabled = (currentLevel === 1);
    nextEnigmaBtn.disabled = !completedLevels.includes(currentLevel) || (currentLevel === enigmas.length); // Só pode avançar se o enigma atual estiver completo E não for o último
    
    if (currentLevel === enigmas.length && completedLevels.includes(currentLevel)) {
        nextEnigmaBtn.textContent = "Ver Tesouro Final";
    } else {
        nextEnigmaBtn.textContent = "Próximo Enigma";
    }

    saveGameState(); // Salva o estado do jogo ao mostrar um novo enigma
}

// Função para verificar a resposta
function checkAnswer(level, selectedOption) {
    const enigma = enigmas.find(e => e.level === level);
    if (!enigma) return;

    // Desabilitar todas as opções após a escolha
    document.querySelectorAll('.option-btn').forEach(button => {
        button.disabled = true;
    });

    if (selectedOption === enigma.correctAnswer) {
        feedbackIncorrect.style.display = 'none';
        feedbackCorrectText.textContent = enigma.feedback;
        feedbackCorrect.style.display = 'block';
        
        if (!completedLevels.includes(level)) {
            completedLevels.push(level);
            playerCoins += 3; // Ganha 3 moedas ao acertar um enigma pela primeira vez
            updateResourcesDisplay();
        }

        // Marca a opção correta
        document.querySelector(`.option-btn[data-option="${selectedOption}"]`).classList.add('correct');
        
        // Habilitar próximo enigma se não for o último
        if (level < enigmas.length) {
            nextEnigmaBtn.disabled = false;
        } else if (level === enigmas.length && completedLevels.length === enigmas.length) {
            // Se for o último enigma e todos foram completados
            nextEnigmaBtn.disabled = false;
            nextEnigmaBtn.textContent = "Ver Tesouro Final";
        }
    } else {
        // Lógica alterada: perde uma vida a cada erro
        playerLives--; 
        updateResourcesDisplay();

        feedbackCorrect.style.display = 'none';
        feedbackIncorrectText.textContent = `Incorreto! Você perdeu 1 vida. Tente novamente. Dica: Pense sobre o processo de aprendizagem.`;
        feedbackIncorrect.style.display = 'block';
        attemptsLeftDisplay.textContent = 'Você perde 1 vida a cada erro!'; // Mensagem atualizada
        
        // Marca a opção incorreta
        document.querySelector(`.option-btn[data-option="${selectedOption}"]`).classList.add('incorrect');
        
        if (playerLives <= 0) {
            showGameOverModal();
        } else {
            // Reabilita as opções após um pequeno atraso para o jogador ver o feedback
            setTimeout(() => {
                // Remove a classe 'incorrect' e reabilita os botões para que possa tentar novamente
                document.querySelectorAll('.option-btn').forEach(button => {
                    button.classList.remove('incorrect');
                    button.disabled = false;
                });
                feedbackIncorrect.style.display = 'none'; // Esconde o feedback incorreto
            }, 1500);
        }
    }
    updateProgress();
    saveGameState(); // Salva o estado do jogo após cada resposta
}

// Atualizar barra de progresso
function updateProgress() {
    const progress = (completedLevels.length / enigmas.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressPercentage.textContent = `${Math.round(progress)}%`;
}

// Atualizar exibição de vidas e moedas
function updateResourcesDisplay() {
    livesCountDisplay.textContent = playerLives;
    coinsCountDisplay.textContent = playerCoins;
    buyLifeBtn.disabled = (playerCoins < 6); // Habilita/desabilita o botão de comprar vida
}

// Atualizar avatar do jogador na tela do jogo
function updatePlayerAvatar() {
    if (playerAvatarDisplay && playerGender && playerAvatar) {
        const selectedAvatarData = avatars[playerGender].find(a => a.id === playerAvatar);
        if (selectedAvatarData) {
            playerAvatarDisplay.innerHTML = selectedAvatarData.svg;
        }
    }
}

// Mostrar modal de vitória
function showVictoryModal() {
    certificateName.textContent = playerName;
    victoryModal.style.display = 'flex';
}

// Mostrar modal de Game Over
function showGameOverModal() {
    gameOverModal.style.display = 'flex';
}

// Função auxiliar para resetar variáveis do jogo (sem limpar localStorage)
function resetGameVariables() {
    currentLevel = 1;
    completedLevels = [];
    playerName = "Aventureiro"; // Nome padrão ao resetar
    playerGender = "";
    playerAvatar = "";
    playerLives = 3;
    playerCoins = 0;
    currentAttempts = 3; 
    enigmaAttempts = {}; 
    
    // Resetar elementos visuais para a tela de introdução
    playerNameInput.value = '';
    document.querySelectorAll('.gender-option').forEach(opt => opt.classList.remove('selected'));
    avatarSelection.innerHTML = ''; // Limpa os avatares selecionados
    startAdventureBtn.disabled = true;
    updateResourcesDisplay();
    updateProgress();
}

// Função para resetar o jogo e ir para a tela de introdução (usada pelos botões de restart/try again)
function resetGameAndGoToIntro() {
    resetGameVariables();
    localStorage.clear(); // Limpa o localStorage para um reset manual completo (como se fechasse a janela)
    localStorage.setItem('hasSeenIntro', 'false'); // Garante que a introdução seja mostrada novamente
    introScreen.style.display = 'flex'; 
    goToIntroPage(1); 
}

// Salvar estado do jogo no Local Storage
function saveGameState() {
    const gameState = {
        currentLevel,
        completedLevels,
        playerName,
        playerGender,
        playerAvatar,
        playerLives,
        playerCoins,
    };
    localStorage.setItem('gameState', JSON.stringify(gameState));
    // 'hasSeenIntro' é salvo separadamente para controle da introdução
    localStorage.setItem('hasSeenIntro', 'true'); 
}

// Carregar estado do jogo do Local Storage
function loadGameState() {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
        const gameState = JSON.parse(savedState);
        currentLevel = gameState.currentLevel || 1;
        completedLevels = gameState.completedLevels || [];
        playerName = gameState.playerName || "Aventureiro";
        playerGender = gameState.playerGender || "";
        playerAvatar = gameState.playerAvatar || "";
        playerLives = gameState.playerLives !== undefined ? gameState.playerLives : 3;
        playerCoins = gameState.playerCoins !== undefined ? gameState.playerCoins : 0;
        
        // Atualizar elementos da UI com o estado carregado
        playerNameDisplay.textContent = playerName;
        playerLevelDisplay.textContent = currentLevel;
        updatePlayerAvatar();
        updateResourcesDisplay();
        updateProgress();

        // Se houver gênero salvo, repopula avatares e marca o selecionado
        if (playerGender) {
            // Seleciona a opção de gênero
            document.querySelectorAll('.gender-option').forEach(opt => {
                if (opt.getAttribute('data-gender') === playerGender) {
                    opt.classList.add('selected');
                } else {
                    opt.classList.remove('selected');
                }
            });
            populateAvatars(playerGender); // Isso irá recriar os avatares e marcar o salvo
        }
    } else {
       // Se não houver estado salvo, reinicia as variáveis para o estado inicial
       resetGameVariables();
    }
}

// Iniciar o jogo quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', initGame);