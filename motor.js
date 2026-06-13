// 1. Mapeamos os elementos da tela para dentro do código
const botao = document.getElementById('botaoGerar');
const textoResultado = document.getElementById('resultado');

// 2. Criamos a "Feature": o que acontece quando o botão for clicado?
botao.addEventListener('click', function() {
    
    // Aqui entrariam as integrações complexas (consultas a dados, APIs, etc)
    let insightProcessado = "Sucesso! O clique na interface ativou a lógica do sistema com sucesso e retornou este dado.";
    
    // 3. Devolvemos a informação final para a tela do usuário
    textoResultado.innerText = insightProcessado;
    textoResultado.style.color = "green";
    textoResultado.style.fontWeight = "bold";
});