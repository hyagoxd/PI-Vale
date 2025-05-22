
🌊 Projeto: Preservando as Nascentes e Rios do Vale do Ribeira
Protótipo de Plataforma Educativa
Desenvolvido com HTML, CSS e JavaScript puros

![Captura de tela 2025-05-15 170031](https://github.com/user-attachments/assets/ebaeb5c7-f654-496d-8a65-4f788c6cedad)


Protótipo interativo para conscientização sobre a preservação dos recursos hídricos do Vale do Ribeira (SP/PR), combinando educação ambiental, participação comunitária e dados geoespaciais.

🚀 Funcionalidades Principais
1. Mapa Interativo
Visualização georreferenciada de nascentes, rios e pontos críticos:

javascript
// Exemplo simplificado de integração com API de mapas  
function initMap() {
  const map = L.map('map').setView([-24.7, -48.2], 10); // Coordenadas do Vale
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  // Marcadores personalizados para nascentes
  L.marker([-24.72, -48.25]).bindPopup("Nascente do Rio Jacupiranga").addTo(map);
}
2. Quizzes Educativos
Questionários dinâmicos com feedback imediato:

html
<div class="quiz-container">
  <h3>Qual é o maior rio do Vale do Ribeira?</h3>
  <button class="quiz-option" data-correct="false">Rio Tietê</button>
  <button class="quiz-option" data-correct="true">Rio Ribeira de Iguape</button>
  <p class="quiz-feedback hidden">Resposta correta: Rio Ribeira de Iguape (214 km)!</p>
</div>
3. Infográficos Animados
Dados sobre degradação e recuperação em CSS/JS:

css
.infographic-bar {
  height: 0;
  width: 30px;
  background: #1a6fc9;
  animation: grow-bar 2s forwards;
}
@keyframes grow-bar {
  to { height: calc(var(--percentage) * 2); }
}
4. Ranking de Ações Coletivas
Tabela dinâmica de participantes e impactos:

Nome	Área Restaurada	Pontos
Comunidade X	2.5 ha	150
Escola Y	1.8 ha	90
(Dados carregados via JSON em JS)

🛠️ Estrutura do Projeto
/  
├── index.html          # Landing page  
├── /mapa              # Mapa interativo  
│   ├── index.html  
│   └── /data         # GeoJSON dos rios  
├── /educacao          # Quizzes e artigos  
│   ├── quizzes.html  
│   ├── infograficos.html  
│   └── videos.html  
├── /acoes             # Formulários e ranking  
│   ├── cadastro.html  
│   └── ranking.html  
├── /css               # Estilos  
│   ├── main.css  
│   └── animations.css  
└── /js                # Scripts  
    ├── map.js         # Lógica do mapa  
    ├── quiz.js        # Sistema de quizzes  
    └── ranking.js    # Atualização do ranking  
🌍 Contexto do Vale do Ribeira
(Adicione dados reais se disponível)

Região com 21 municípios entre SP e PR

Abriga o maior contínuo de Mata Atlântica do Brasil

Desafios: Poluição por mineração, assoreamento, desmatamento

💡 Tecnologias Utilizadas
Função	Tecnologia
Estrutura	HTML5 semântico
Estilos	CSS3 + Flexbox/Grid
Interatividade	JavaScript Vanilla
Mapas	Leaflet.js (OpenStreetMap)
Gráficos	Chart.js (opcional)
Ícones	Font Awesome


📜 Licença
MIT License - Consulte LICENSE.md.

✉️ Contato
Desenvolvido por Hyago G Paiva

Email: hyago.garcia.p@gmail.com

LinkedIn: www.linkedin.com/in/hyago-garcia-de-paiva-7523a7303



