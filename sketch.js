// ALUNA: Anna Beatriz Mott Baessa N°: 02 
// ESCOLA: Colégio de Aplicação Pedagógica (CAP-UEM) 1º C
// PROJETO AGRINHO 2025: Festejando a conexão do campo e a cidade.
// REFERÊNCIAS: GOOGLE, STUDIO P5JS E CHAT GPT 

// NOME DO PROJETO: In your hands.





// VARIÁVEIS

let mostrarAjuda = false; // se a caixa de ajuda está visível no celeiro

// ESCADA

let escada = {
x: 750, 
y: 460, 
nome: "🪜",    
coletado: false // se já foi pego pelo jogador
};


//  BALDE

let balde = {
x: 400, 
y: 130, 
nome: "🪣",
coletado: false // se já foi coletado
};


// VACA

let vaca = {
x: 600, 
y: 400, 
nome: "Vaca" 
};


// COPO de LEITE

let copoDeLeite = { nome: "🥛", coletado: false };


// MUDA de PLANTA

let planta = { nome: "🌱", coletado: false };


// SISTEMA de FALAS 


// FALA da VACA

let mostrarFalaVaca = false; // se deve mostrar o balão de fala
let textoFalaVaca = "MUUUU"; // texto que a vaca fala


// FALA da FAZENDEIRA

let mostrarFalaFazendeira = false; // se deve mostrar a fala pedindo o leite 
let mostrarFalaFazendeiraAgradecida = false; // se deve mostrar a fala após receber o leite
let textoFalaFazendeiraAgradecida = "Obrigada! Aqui está uma muda pra você plantar.";


// FALAS da PORTA

let mostrarFalaPorta = false; // se deve mostrar a ideia da escada
let textoFalaPorta = ""; // o texto da escada


// PLANTAR a MUDA

let plantaPlantada = false; // se a planta já foi plantada na terra
let posicaoTerra = { x: 600, y: 440 }; // posição original da terra
let terraX = 125; // posição X que eu escolhi
let terraY = 475; // posição Y que eu escolhi


// CHAVE

let chaveDourada = { nome: "🔑", coletado: false }; // chave obtida ao plantar


// JOGO do BOMBEIRO

// ÁRVORES PEGANDO FOGO

let arvores = [ 
{ x: 200, y: 390, queimando: true },
{ x: 300, y: 390, queimando: true },
{ x: 400, y: 390, queimando: true },
{ x: 500, y: 390, queimando: true },
{ x: 600, y: 390, queimando: true },
];


// CAMINHÃO de BOMBEIRO

let bombeiroX = 100;
let bombeiroY = 390;
let velocidadeBombeiro = 80;


// HELICÓPTERO

let helicopteroX = 400;  
let helicopteroY = 140;  
let helicopteroTremerIntensidade = 3; // intensidade do tremor
let helicopteroTamanho = 90;


// CENA do JORNAL

// CORTINAS

let posicaoCortinaEsquerda = 400;
let posicaoCortinaDireita = 400;  
let velocidadeCortina = 5; 


// RAINHA

let rainhaX = 400;  
let rainhaY = 290;    
let cortinasAbertas = false; // se as cortinas já abriram completamente


// FALAS do JORNAL

let falas = [
"Boa noite, queridos súditos!\nO Jornal Real começa agora.",
"Notícias urgentes:\nQueimadas atingiram a zona rural,\nmas os bombeiros já controlaram o fogo.",
"Essas queimadas danificaram mais de 60% das \nmatas na região sudeste do país.",
"Observem as gravações realizadas no momento \nem que o incêndio foi apagado."
];


let falaAgora = 0; // controle da fala atual
let falaDepoisGravacao = "Graças à bravura dos nossos bombeiros,\nconseguimos conter o incêndio a tempo."; 
let mostrarFalaIncendio = false; // se deve mostrar a fala depois do jogo do bombeiro
let cenaAtual = 0; // controla qual cena está ativa no momento


// NINJAS 

let tempoNinjas = 0; // controlar timing
let mostrarNinjas = false; // se deve mostrar ninjas sequestrando a rainha
let tempoSemNinjas = false; // tempoo entre sequestro e fala do ninja
let ninjaFalando = false; // se o ninja está falando
let cortinaFechando = false; // se as cortinas estão se fechando
let rainhaSequestrada = false; // se a rainha já foi sequestrada


// MUDANÇA de CENA

let mudarParaCeleiro = false; // flag de mudança pro celeiro
let cortinaAbrindo = false; // se as cortinas estão abrindo


// MOVIMENTO da RAINHA

let rainhaFazendaX = 400;     
let rainhaFazendaY = 400;  
let velocidadeRainha = 30; // velocidade de movimento 


// INVENTÁRIO da RAINHA

let mochila = [];


// JOGO SAW GAME

let cenaAgora = 0; // controla qual fase do saw game está ativada
let tempoInicio; // tempo do início de cada fase (10seg)
let tempoRestante = 5; // segundos restantes para fazer escolha
let escolha1 = ""; // resposta da fase 1 (acordar)
let escolha2 = ""; // resposta da fase 2 (alimentar animais)
let escolha3 = ""; // resposta da fase 3 (fertilizantes)
let escolha4 = ""; // resposta da fase 4 (dívidas)
let escolha5 = ""; // resposta da fase 5 (trabalhadores)
let escolha6 = ""; // resposta da fase 6 (final)

let iniciouDesafio = false; // se o desafio já começou
let faseEncerrada = false; // se a fase atual já acabou





function setup() {
  createCanvas(800, 500);    
  textFont('Arial');  
}





function draw() {

  
// DESENHO da CENA do JORNAL
  
if (cenaAtual === 0) { // se for exatamente = 0
drawStage(); // desenha o cenário do jornal

if (!mostrarNinjas && !tempoSemNinjas && !ninjaFalando && !rainhaSequestrada) {
drawRainha(); // se nada sobre ninjas estiver aparecendo, desenha a rainha
}
  
else if (mostrarNinjas) { // se mostra os ninjas 
drawRainhaComNinjas(); // a rainha é sequestrada pelos ninjas
} 
  
else if (ninjaFalando) { 
drawNinjaFalando(); // fala do ninja
}

  
// DESENHA as CORTINAS
  
drawCortinas(); // desenha as cortinas

  
// MOVIMENTO da CORTINA
  
if (!cortinasAbertas) { 
posicaoCortinaEsquerda -= velocidadeCortina;  // cortina esquerda vai para esquerda
posicaoCortinaDireita += velocidadeCortina;   // cortina direita vai para direita
      
if (posicaoCortinaEsquerda <= 0 && posicaoCortinaDireita >= width) {
cortinasAbertas = true; // controla se as cortinas estão totalmente abertas
}
}

  
// DESENHANDO as FALAS do JORNAL 
  
if (cortinasAbertas && !mostrarNinjas && !tempoSemNinjas && !ninjaFalando && !rainhaSequestrada) { // se as cortinas estão abertas e nada de ninja tá aparecendo

if (mostrarFalaIncendio) {
drawBalaoFala(falaDepoisGravacao);  // fala depois voltar do jogo do bombeiro
}

else if (falaAgora < falas.length) { // verifica se ainda te falas pra mostrar
drawFalaRainha(); // falas da rainha
}
}

  
// TEMPO dos NINJAS
    
// depois de 2 segundos com ninjas visíveis, esconde ninjas e marca rainha como sequestrada
  
if (mostrarNinjas && millis() - tempoNinjas > 2000) { // 2000ms = 2seg
mostrarNinjas = false;
tempoSemNinjas = true; // tempo sem ninguém no palco
tempoNinjas = millis(); // reseta tempo
rainhaSequestrada = true; // marca que rainha foi sequestrada
}

  
// depois de 2 segundos sem ninguém, mostra ninja falando
  
if (tempoSemNinjas && millis() - tempoNinjas > 2000) {
tempoSemNinjas = false;
ninjaFalando = true; // ninja fica no lugar da rainha
tempoNinjas = millis(); // reseta tempo
}

  
// depois de 3 segundos do ninja falando, começa o fechamento das cortinas
  
if (ninjaFalando && millis() - tempoNinjas > 3000) {
cortinaFechando = true; // inicia movimento da cortina fechando
ninjaFalando = false;
}
  
if (cortinaFechando) { // cortinas fechando
posicaoCortinaEsquerda += velocidadeCortina; // cortina esquerda volta ao centro
posicaoCortinaDireita -= velocidadeCortina; // cortina direita volta ao centro
     
// confere se as cortinas já se fecharam
if (posicaoCortinaEsquerda >= 400 && posicaoCortinaDireita <= 400) {
cortinaFechando = false;
mudarParaCeleiro = true; // mudança para celeiro
      
// reseta posições das cortinas para próxima cena
posicaoCortinaEsquerda = 400;
posicaoCortinaDireita = 400;
}
}
}
 
  
// CENA 1: JOGO do BOMBEIRO
  
else if (cenaAtual === 1) { // se a cena atual for exatamete 1
drawJogoBombeiro(); // desenha o cenário do jogo do bombeiro

let todosApagados = arvores.every(arvore => !arvore.queimando); // ve se acabou o incêndio
  
if (todosApagados) {
cenaAtual = 0; // volta pro jornal
falaAgora = 0; // reseta contador de falas
mostrarFalaIncendio = true; // ativa fala depois do incêndio
}
}
  
  
// CENA 2: SCAPE ROOM
  
else if (cenaAtual === 2) { // se a cena atual for exatamente 2
drawCenaCeleiro(); // desenha todo o cenário da fazenda
drawMochila(); // mostra inventário na tela
}
  
  
// CENA 3: SAW GAME
  
else if (cenaAtual === 3) {
  
if (!iniciouDesafio) { // se o saw game começou 
background(0); // desenha o fundo preto
fill("red");
textSize(48);
textFont("Times New Roman");
textAlign(CENTER, CENTER);
text("Você tem 5 segundos...", width / 2, 100);
fill(255);
textSize(36);
text("Aperte A e B para sobreviver.", width / 2, height / 2);
fill(180);
textSize(24);
text("Pressione ESPAÇO para começar...", width / 2, height - 80); 
} // se iniciou o desafio
  
// FASES do SAW GAME
  
else if (cenaAgora === 2) {
faseComContagem("Você acordou em uma fazenda.", "A: Volte a dormir", "B: Vá ver os animais", escolha1);
} 
  
else if (cenaAgora === 3) {
mostrarResultado(escolha1, "Você ia deixar os animais sem comer?", "Eles estão morrendo de fome.");
}
  
else if (cenaAgora === 5) {
faseComContagem("Você chegou no celeiro.", "A: Você dá carne para os animais", "B: Você dá feno para os animais", escolha2);
}

else if (cenaAgora === 6) {
mostrarResultado(escolha2, "Eles morreram!", "Eles amaram o feno.");
}
  
else if (cenaAgora === 8) {
faseComContagem("Você precisa comprar fertilizantes.", "A: Comprar fertilizantes caros, porém bons.", "B: Comprar fertilizantes baratos, porém ruins.", escolha3);
}
  
else if (cenaAgora === 9) {
mostrarResultadoComAcorreta(escolha3, "Sua plantação vai crescer saudável.", "Sua plantação morreu!");
}
  
else if (cenaAgora === 11) {
faseComContagem("Você se endividou comprando fertilizantes.", "A: Lavagem de dinheiro", "B: Pedir empréstimo", escolha4);
}
  
else if (cenaAgora === 12) {
mostrarResultado(escolha4, "Você foi pra cadeia.", "Você conseguiu um empréstimo e salvou sua fazenda.");
}
  
else if (cenaAgora === 14) {
faseComContagem("Você precisa contratar trabalhadores.", "A: Pagar um salário justo", "B: Explorar os trabalhadores", escolha5);
}
  
else if (cenaAgora === 15) {
mostrarResultadoComAcorreta(escolha5, "Eles trabalharam muito. A fazenda prosperou.", "Eles se revoltaram e colocaram fogo na fazenda.");
}
  
else if (cenaAgora === 17) {
faseComContagem("Você tem muito dinheiro.", "A: Pagar o empréstimo", "B: Fugir do país", escolha6);
}
  
else if (cenaAgora === 18) {
mostrarResultadoComAcorreta(escolha6, "Você pagou tudo e se tornou uma potência.", "Você foi presa na fronteira.");
}
}

  
// CENA 4: CASTELO
  
else if (cenaAtual === 4) { // se a cena for exatamente 4

drawCenaFinal(); // desenha o castelo e guardas com a rainha
}

// animação de abertura das cortinas para entrar no celeiro
// só executar mudarParaCeleiro se não estiver na cena final

if (mudarParaCeleiro && cenaAtual !== 4) {
drawCenaCeleiro(); // desenha cenário do celeiro
drawCortinas(); // desenha cortinas se fechando

// Animação de abertura das cortinas (igual cena 0)
  
posicaoCortinaEsquerda -= velocidadeCortina;
posicaoCortinaDireita += velocidadeCortina;

// quando cortinas abrem completamente, muda oficialmente para cena 2
  
if (posicaoCortinaEsquerda <= 0 && posicaoCortinaDireita >= width) {
cortinasAbertas = true;
mudarParaCeleiro = false; // desativa flag de mudança pq já mudou
cenaAtual = 2; // cena do celeiro
}
}

// passar pra próxima parte no saw game
  
if ([4, 7, 10, 13, 16, 19].includes(cenaAgora)) {
if (millis() - tempoInicio > 2000) {
tempoInicio = millis(); // reseta timer
cenaAgora++; // avança para próxima fase
}
}
}





// SAW GAME

function faseComContagem(titulo, altA, altB, escolhaVar) {
background(0); // fundo preto

  
// CONTAGEM REGRESSIVA (10seg)
  
let tempoPassado = floor((millis() - tempoInicio) / 1000); // calcula segundos passados

tempoRestante = max(5 - tempoPassado, 0); // calcula tempo restante
fill("red");
textSize(68); 
textAlign(CENTER, CENTER);
text(tempoRestante, width / 2, 60); // posição centralizada no topo

  
// PERGUNTA
  
fill(255);
textSize(36);
text(titulo, width / 2, 150); // posicionada abaixo do timer

  
// ALTERNATIVAS
  
drawOptionBox(altA, width / 2, height / 2 - 40); // opção A acima do centro
drawOptionBox(altB, width / 2, height / 2 + 60); // opção B abaixo do centro

  
// TEMPO ESGOTADO
  
if (tempoRestante === 0 && escolhaVar === "") {

// IDENTIFICADOR de FASE
  
if (cenaAgora === 2) {
escolha1 = "tempo"; // se falhou na fase 1
cenaAgora = 3; // vai para resultado
} 
  
else if (cenaAgora === 5) {
escolha2 = "tempo"; // se falhou na fase 2
cenaAgora = 6; // vai para resultado
}
  
else if (cenaAgora === 8) {
escolha3 = "tempo"; // se falhou na fase 3
cenaAgora = 9; // vai para resultado
}
  
else if (cenaAgora === 11) {
escolha4 = "tempo"; // se falhou na fase 4
cenaAgora = 12; // vai para resultado
}
  
else if (cenaAgora === 14) {
escolha5 = "tempo"; // se falhou na fase 5
cenaAgora = 15; // vai para resultado
}
  
else if (cenaAgora === 17) {
escolha6 = "tempo"; // se falhou na fase 6
cenaAgora = 18; // vai para resultado final
}
}
}


// RESULTADOS de B CORRETO

function mostrarResultado(escolha, textoErrado, textoCerto) {
background(0); // fundo preto
textSize(36);
fill(255);
textAlign(CENTER, CENTER);

// RESPOSTA CORRETA
  
if (escolha === "tempo") {
text("Você perdeu.", width / 2, height / 2 - 30); // perdeu por tempo
fill(180);
textSize(24);
text("Aperte o espaço para recomeçar.", width / 2, height - 80);
} 
  
else if (escolha === "A") {
text(textoErrado, width / 2, height / 2 - 30); // escolha A sempre é errada
fill(180);
textSize(24);
text("Aperte o espaço para recomeçar.", width / 2, height - 80);
}
  
else if (escolha === "B") {
text(textoCerto, width / 2, height / 2 - 30); // escolha B sempre é certa
fill(180);
textSize(24);
text("Pressione espaço para continuar.", width / 2, height - 80);
}
}


// RESULTADOS de A CORRETO

function mostrarResultadoComAcorreta(escolha, textoCerto, textoErrado) {
background(0); // fundo preto
textSize(36);
fill(255);
textAlign(CENTER, CENTER);

// RESPOSTA CORRETA
  
if (escolha === "tempo") {
text("Você perdeu.", width / 2, height / 2 - 30); // perdeu por tempo
fill(180);
textSize(24);
text("Aperte o espaço para recomeçar.", width / 2, height - 80);
}
  
else if (escolha === "A") {
text(textoCerto, width / 2, height / 2 - 30); // escolha A é correta aqui
fill(180);
textSize(24);
text("Pressione espaço para continuar.", width / 2, height - 80);
}
  
else if (escolha === "B") {
text(textoErrado, width / 2, height / 2 - 30); // escolha B é errada aqui
fill(180);
textSize(24);
text("Aperte o espaço para recomeçar.", width / 2, height - 80);
}
}


// PARTE dos NINJAS

function drawRainhaComNinjas() {
textSize(150);
textAlign(CENTER, CENTER);
text("🥷🏼👸🏼🥷🏿", rainhaX, rainhaY);

// TELEVISÃO
  
textSize(100);
text("📺", 700, 330); 

// PLANTA
  
textSize(60);
text("🪴", 230, 330);   
text("🪴", 560, 330); 
}


// NINJAS FALANDO 

function drawNinjaFalando() {
textSize(150);
textAlign(CENTER, CENTER);
text("🥷🏽", rainhaX, rainhaY); // só o ninja no jornal
drawBalaoFala("Boa noite, queridos súditos.", false); // ninja fala igual à rainha
}


// SCAPE ROOM

function drawCenaCeleiro() {

// teto
background("rgb(82,43,15)");
stroke(0);
strokeWeight(1);

// paredes
fill("rgb(94,40,23)");
quad(200, 100, 200, 400, 0, 600, 0, 0); // parede esquerda
quad(600, 100, 600, 400, 800, 600, 800, 0); // parede direita
fill(120, 60, 40);
rect(200, 100, 400, 300); // parede do meio

// profundidade
line(0, 0, 200, 100); // linha esquerda do teto
line(800, 0, 600, 100); // linha direita do teto

// alce espelhdo
push(); // traduções 
translate(100, 250); // move para posição na parede esquerda
scale(-1, 1); // espelha 
textSize(70);
textAlign(CENTER, CENTER);
text("🫎", -30, 0); // alce espelhado
pop(); // traduções
  
// chão
fill("#9A661A");
quad(0, 500, 800, 500, 600, 400, 200, 400);
line(0, 500, 200, 400);  // linha de contorno esquerda
line(800, 500, 600, 400); // linha de contorno direita

// ELEMENTOS de INTERAÇÃO
  
// porta
textSize(150);
textAlign(CENTER, TOP);
text("🚪", 400, 260);

// apoio do feno 
fill(140, 100, 50);
rect(280, 180, 240, 20); 
rect(280, 180, 10, 80); 
rect(510, 180, 10, 80);  
  
// fenos
for (let i = 0; i < 5; i++) { // pra repetir
fill(255, 210, 50); 
rect(290 + i * 45, 140, 40, 40); // imitar o feno principal
stroke(0);

// linhas
line(290 + i * 45 + 5, 150, 290 + i * 45 + 35, 150);
line(290 + i * 45 + 5, 160, 290 + i * 45 + 35, 160);
}
  
// TERRA pra PLANTAR

let terraX = 125;
let terraY = 475;
stroke(0);
strokeWeight(2);
fill(80, 50, 20); 
ellipse(terraX, terraY, 60, 20); // forma oval


// PERSONAGENS
  
// fazendeira
textAlign(CENTER, CENTER);
textSize(80);
text("👩🏻‍🌾", 240, 365);  

// fala da fazendeira
if (mostrarFalaFazendeira) {
fill(255);
stroke(0);
strokeWeight(2);
rect(180, 270, 220, 80, 10); // balão de fala com bordas arredondadas
fill(0);
noStroke();
textSize(17);
text("Me traga um copo de leite \ne te darei algo em troca.", 290, 310);
}

// fala quando se aproxima da porta
if (mostrarFalaPorta) {
fill(255);
stroke(0);
strokeWeight(2);
rect(rainhaFazendaX - 160, rainhaFazendaY - 100, 320, 60, 10);
fill(0);
noStroke();
textSize(14);
text(textoFalaPorta, rainhaFazendaX, rainhaFazendaY - 70);
}

// vaca
textSize(140);
text("🐄", 550, 350);

// fala da vaca 
if (mostrarFalaVaca) {
fill(255);
stroke(0);
strokeWeight(2);
rect(510, 260, 120, 40, 10);
fill(0);
noStroke();
textSize(18);
text(textoFalaVaca, 570, 280);
}
  
// fala de agradecimento da fazendeira
if (mostrarFalaFazendeiraAgradecida) {
fill(255);
stroke(0);
strokeWeight(2);
rect(110,270,350,50,10);
fill(0);
noStroke();
textSize(15); 
text(textoFalaFazendeiraAgradecida, 285,295);
}

// PLANTA
  
if (plantaPlantada) {
textSize(30);
text("🌱", terraX, terraY - 15);
}

// CORUJA 
textSize(38);
text("🦉", 307, 125); 
     
// MOSCA 
textSize(15);
text("🪰", 600, 320); 

// LAGARTO 
textSize(20);
text("🦎", 555, 180);  
  
// MINHOCA 
textSize(15);
text("🪱", 110, 475); 
   
// PINTINHO
textSize(30);
text("🐥", 300, 385); 

// GALINHA
textSize(60);
text("🐓", 500, 475); 
  
// RAINHA
textSize(90);
text("👸🏼", rainhaFazendaX, rainhaFazendaY);

// BALDE
if (!balde.coletado) {
textSize(30);
text(balde.nome, balde.x, balde.y);
}

// ESCADA
if (!escada.coletado) {
textSize(50);
text("🪜", escada.x, escada.y);
}

// BOTÃO de AJUDA
fill(255);
stroke(0);
strokeWeight(2);
ellipse(width - 30, 30, 30);
fill(0);
noStroke();
textSize(20);
text("?", width - 30, 30);

// PROGRAMAR a AJUDA
if (mostrarAjuda) {
fill(255);
stroke(0);
strokeWeight(3);
rect(100, 80, 600, 340, 20);
fill(0);
noStroke();
textSize(20);
textAlign(CENTER, TOP);
text("👑 INSTRUÇÕES 👑\n\nUse as teclas W, A, S e D para se mover pelo celeiro.\n\nAperte E para interagir com os objetos. Os itens coletados \nestarão na mochila e poderão ser usados para escapar. \n\nClique no '?' novamente para voltar ao jogo.", 400, 100);
}
}


// JOGO do BOMBEIRO function

function drawJogoBombeiro() {

background("rgb(134,202,229)");  

// helicóptero
drawHelicoptero(); 
  
// grama
fill("#3e7327"); 
rect(0, 400, width, 100); 

// caminhão de bombeiro
textSize(60); 
textAlign(CENTER, CENTER); 
push(); // traduções
translate(bombeiroX, bombeiroY); 
scale(-1, 1);  // espelha
text("🚒", 0, 0); 
pop(); // traduções
  

// INCÊNDIO
  
for (let arvore of arvores) { 
textSize(60); 
textAlign(CENTER, CENTER); 

// mostra a árvore
if (arvore.queimando) { 
text("🌳🔥", arvore.x, arvore.y); 
} 
  
else {
text("🌳", arvore.x, arvore.y); 
}
  

// APAGAR o FOGO
  
let d = dist(bombeiroX, bombeiroY, arvore.x, arvore.y); 

// se o bombeiro está perto e árvore está queimando, apaga o fogo
if (d < 60 && arvore.queimando) { 
arvore.queimando = false; 
}
}

  
// INSTRUÇÕES na TELA
  
fill(255); 
textSize(14); 
textAlign(RIGHT, BOTTOM); 
text("(Pressione → para conter o incêndio)", width - 10, height - 10); 
}


// CENÁRIO BOMBEIRO

function drawHelicoptero() {
  
// sol
textSize(80);
textAlign(CENTER, CENTER);
text("☀️", 700, 80); 

// nuvens
textSize(80);
textAlign(CENTER, CENTER);
text("☁️", 100, 80);  
  
textSize(80);
textAlign(CENTER, CENTER);
text("☁️", 130, 100);  
  
textSize(80);
textAlign(CENTER, CENTER);
text("☁️", 240, 90);  
  
// tremor
let tremorX = random(-helicopteroTremerIntensidade, helicopteroTremerIntensidade); 
let tremorY = random(-helicopteroTremerIntensidade, helicopteroTremerIntensidade); 

// helicóptero espelhado
push(); 
translate(helicopteroX + tremorX, helicopteroY + tremorY); 
scale(-1, 1); // espelha para ficar virado para esquerda
textSize(helicopteroTamanho); 
textAlign(CENTER, CENTER); 
text("🚁", 0, 0); 
pop(); 
}


// DESENHAR o JORNAL

function drawStage() {

// fundo
fill("rgb(37,37,204)");
rect(0, 0, width, height);

// luz
noStroke(); 
fill(255, 255, 255, 80); 
ellipse(width / 2, 100, 500, 250); 
fill(255, 255, 255, 50); 
ellipse(200, 150, 400, 200); 
ellipse(600, 150, 400, 200); 

// mesa
fill("#91543E");
rect(0, 350, width, 150);
  
// globo
textSize(180);
textAlign(CENTER, CENTER);
text("🌐", 400, 110);  
  
// flor de lis
textSize(100);
textAlign(CENTER, CENTER);
text("⚜️", 400, 100); 
  
// telefone
textSize(70);
text("☎️", 100, 330);  
  
// televisão
textSize(100);
text("📺", 700, 330); 
  
// plantas
textSize(60);
text("🪴", 230, 330); 
text("🪴", 560, 330); 
}


// DESENHA a RAINHA 

function drawRainha() {
  
textSize(150);
textAlign(CENTER, CENTER); 
fill(0); 
text("👸🏼", rainhaX, rainhaY); 
}


// DESENHAR as CORTINAS

function drawCortinas() {
  
fill("rgb(121,4,4)"); 
noStroke(); 
rect(0, 0, posicaoCortinaEsquerda, height); 
rect(posicaoCortinaDireita, 0, width - posicaoCortinaDireita, height); 
}


// MOSTRAR as FALAS da RAINHA

function drawFalaRainha() {
  
let fala = falas[falaAgora]; 
drawBalaoFala(fala, true);
}


// DESENHA as FALAS

function drawBalaoFala(texto, mostrarInstrucao = true) {

fill(255); 
stroke(0); 
strokeWeight(2); 
rect(rainhaX - 240, rainhaY - 220, 480, 110, 10); 

// falas
noStroke(); 
fill(0); // Texto preto
textSize(16); 
textAlign(CENTER, CENTER); 
text(texto, rainhaX, rainhaY - 170); 

// instruções
if (mostrarInstrucao) {
fill(255);
noStroke(); 
textSize(14); 
textAlign(RIGHT, BOTTOM); 
text("(Pressione A para continuar)", width - 10, height - 10); 
}
}


// MOCHILA

function drawMochila() {
  
fill("white"); 
textSize(18); 
textAlign(LEFT, TOP); 
text("Mochila:", 18, 10);

// loop por trás dos itens da mochila
for (let i = 0; i < mochila.length; i++) {
text(mochila[i], 10, 35 + i * 20); 
}
}





// KEY PRESSED

function keyPressed() {

// reiniciar o jogo
if ((key === 'r' || key === 'R') && cenaAtual === 4) {
location.reload(); // recarrega a página reiniciando o jogo
}

// A para continuar
if ((key === 'a' || key === 'A') && cenaAtual === 0) {

if (mostrarFalaIncendio) {
mostrarFalaIncendio = false;
mostrarNinjas = true;
tempoNinjas = millis(); 
} 
  
else if (falaAgora < falas.length - 1) {
falaAgora++; // avança para próxima fala
} 
  
else { 
cenaAtual = 1; // vai para cena do bombeiro
}
}


// CONTROLES do BOMBEIRO 
  
if (cenaAtual === 1 && keyCode === RIGHT_ARROW) {
bombeiroX += velocidadeBombeiro; 
}

  
// CONTROLES da FAZENDA 
  
if (cenaAtual === 2) {
    

// CONTROLE de MOVIMENTO da RAINHA
  
if (key === 'a' || key === 'A') {
rainhaFazendaX -= velocidadeRainha; // esquerda
}
  
else if (key === 'd' || key === 'D') {
rainhaFazendaX += velocidadeRainha; // direita
}
  
else if (key === 'w' || key === 'W') {
rainhaFazendaY -= velocidadeRainha; // cima
}
  
else if (key === 's' || key === 'S') {
rainhaFazendaY += velocidadeRainha; // baixo
}

  
// LIMITAÇÃO do MOVIMENTO da RAINHA
  
rainhaFazendaX = constrain(rainhaFazendaX, 0, width);
rainhaFazendaY = constrain(rainhaFazendaY, 360, height - 50);


// INTERAÇÃO com a TECLA E
  
if (key === 'e' || key === 'E') {

// calcula distância entre rainha e os objetos, npcs
let dEscada = dist(rainhaFazendaX, rainhaFazendaY, escada.x, escada.y);
let dPorta = dist(rainhaFazendaX, rainhaFazendaY, 400, 290);
let dVaca = dist(rainhaFazendaX, rainhaFazendaY, vaca.x, vaca.y);
let dFazendeira = dist(rainhaFazendaX, rainhaFazendaY, 240, 365);
let dTerra = dist(rainhaFazendaX, rainhaFazendaY, terraX, terraY);
let dPortaFinal = dist(rainhaFazendaX, rainhaFazendaY, 400, 300);


// ver se o jogador está com os itens na mochila
let temEscada = mochila.includes(escada.nome);
let temBalde = mochila.includes(balde.nome);
let temLeite = mochila.includes(copoDeLeite.nome);
let temMuda = mochila.includes(planta.nome);
let temChave = mochila.includes(chaveDourada.nome);


// escada
if (dEscada < 60 && !escada.coletado) {
mochila.push(escada.nome);
escada.coletado = true;
}


// porta
if (dPorta < 80 && !balde.coletado) {
if (temEscada) {

// remove a escada e coloca o balde
mochila = mochila.filter(item => item !== escada.nome);
balde.coletado = true;
mochila.push(balde.nome);
}
  
else {
// mensagem de erro se não possui escada
textoFalaPorta = "Tá muito alto... Eu deveria pegar algo pra alcançar.";
mostrarFalaPorta = true;
setTimeout(() => {
mostrarFalaPorta = false;
}, 3000);
}
}


// vaca
  
if (dVaca < 80 && temBalde && !copoDeLeite.coletado) {
// sai balde entra leite
mochila = mochila.filter(item => item !== balde.nome);
copoDeLeite.coletado = true;
mochila.push(copoDeLeite.nome);

mostrarFalaVaca = true;
setTimeout(() => {
mostrarFalaVaca = false;
}, 2000);
}


// fazendeira
if (dFazendeira < 80) {
if (temLeite && !planta.coletado) {
// sai leite entra planta
mochila = mochila.filter(item => item !== copoDeLeite.nome);
copoDeLeite.coletado = false;
planta.coletado = true;
mochila.push(planta.nome);

// mensagem de agradecimento
mostrarFalaFazendeiraAgradecida = true;
setTimeout(() => {
mostrarFalaFazendeiraAgradecida = false;
}, 3000);
} 
  
else if (!temLeite && !planta.coletado) {
// fazendeira pede o leite
mostrarFalaFazendeira = true;
setTimeout(() => {
mostrarFalaFazendeira = false;
}, 3000);
}
}


// interação com planta
if (dTerra < 60 && temMuda && !plantaPlantada) {
// tira a muda da mochila entra a chave
mochila = mochila.filter(item => item !== planta.nome);
planta.coletado = false;
plantaPlantada = true;
// entra chave dourada
chaveDourada.coletado = true;
mochila.push(chaveDourada.nome);
}


// ENTRAR no SAW GAME
if (dPortaFinal < 100 && temChave) {
cenaAtual = 3;
iniciouDesafio = false;
}
}
}

  
// CONTROLES do SAW GAME
  
if (cenaAtual === 3) {
// iniciar jogo
if (!iniciouDesafio && key === ' ') {
cenaAgora = 2;
tempoInicio = millis();
iniciouDesafio = true;
faseEncerrada = false;
}


// FASE 1
if (cenaAgora === 2 && escolha1 === "") {

if (key === 'a' || key === 'A') {
escolha1 = "A";
cenaAgora = 3;
tempoInicio = millis();
}
  
else if (key === 'b' || key === 'B') {
escolha1 = "B"; // escolha correta
cenaAgora = 3;
tempoInicio = millis();
}
}

// continuar se escolha1 foi correta
if (cenaAgora === 3 && escolha1 === "B" && key === ' ') {
cenaAgora = 5;
tempoInicio = millis();
faseEncerrada = false;
}


// FASE 2
    
if (cenaAgora === 5 && escolha2 === "") {

if (key === 'a' || key === 'A') {
escolha2 = "A";
cenaAgora = 6;
tempoInicio = millis();
}
  
else if (key === 'b' || key === 'B') {
escolha2 = "B"; // escolha correta
cenaAgora = 6;
tempoInicio = millis();
}
}

// continuar se escolha2 foi correta
if (cenaAgora === 6 && escolha2 === "B" && key === ' ') {
cenaAgora = 8;
tempoInicio = millis();
faseEncerrada = false;
}


// FASE 3 
    
if (cenaAgora === 8 && escolha3 === "") {

if (key === 'a' || key === 'A') {
escolha3 = "A"; // escolha correta
cenaAgora = 9;
tempoInicio = millis();
}
  
else if (key === 'b' || key === 'B') {
escolha3 = "B";
cenaAgora = 9;
tempoInicio = millis();
}
}

// continuar se escolha3 foi correta
if (cenaAgora === 9 && escolha3 === "A" && key === ' ') {
cenaAgora = 11;
tempoInicio = millis();
faseEncerrada = false;
}

  
// FASE 4 
  
if (cenaAgora === 11 && escolha4 === "") {
  
if (key === 'a' || key === 'A') {
escolha4 = "A";
cenaAgora = 12;
tempoInicio = millis();
}
  
else if (key === 'b' || key === 'B') {
escolha4 = "B"; // escolha correta
cenaAgora = 12;
tempoInicio = millis();
}
}

// continuar se escolha4 foi correta
if (cenaAgora === 12 && escolha4 === "B" && key === ' ') {
cenaAgora = 14;
tempoInicio = millis();
faseEncerrada = false;
}


// FASE 5
  
if (cenaAgora === 14 && escolha5 === "") {
      
if (key === 'a' || key === 'A') {
escolha5 = "A"; // escolha correta
cenaAgora = 15;
tempoInicio = millis();
}
  
else if (key === 'b' || key === 'B') {
escolha5 = "B";
cenaAgora = 15;
tempoInicio = millis();
}
}

// continuar se escolha5 foi correta
if (cenaAgora === 15 && escolha5 === "A" && key === ' ') {
cenaAgora = 17;
tempoInicio = millis();
faseEncerrada = false;
}

    
// FASE 6 
  
if (cenaAgora === 17 && escolha6 === "") {
      
if (key === 'a' || key === 'A') {
escolha6 = "A"; // escolha correta
cenaAgora = 18;
tempoInicio = millis();
}
  
else if (key === 'b' || key === 'B') {
escolha6 = "B";
cenaAgora = 18;
tempoInicio = millis();
}
}

// VITÓRIA
if (cenaAgora === 18 && escolha6 === "A" && key === ' ') {
cenaAtual = 4; // vai para tela de vitória
}


// TELAS DE DERROTA
// reinicia se fala a errada
if (key === ' ' && 
((cenaAgora === 3 && escolha1 !== "B") ||
(cenaAgora === 6 && escolha2 !== "B") ||
(cenaAgora === 9 && escolha3 !== "A") ||
(cenaAgora === 12 && escolha4 !== "B") ||
(cenaAgora === 15 && escolha5 !== "A") ||
(cenaAgora === 18 && escolha6 !== "A"))) {
     
// reinicia as variáveis do desafio
cenaAgora = 0;
escolha1 = "";
escolha2 = "";
escolha3 = "";
escolha4 = "";
escolha5 = "";
escolha6 = "";
iniciouDesafio = false;
faseEncerrada = false;
cenaAtual = 3;
tempoInicio = millis();
}
}
}






// MOUSE PRESSED

function mousePressed() {
  
// botão de ajuda
let d = dist(mouseX, mouseY, width - 30, 30);
if (d < 15 && cenaAtual === 2) {
mostrarAjuda = !mostrarAjuda; 
}

if (cenaAtual === 3) {
}
}


// DESENHA as CAIXAS de OPÇÃO

function drawOptionBox(texto, x, y) {
  
// retangulo
fill(40);
stroke(200);
strokeWeight(2);
rectMode(CENTER);
rect(x, y, 600, 60, 12); 

// texto
noStroke();
fill(255);
textSize(26);
text(texto, x, y);
}



// DESENHA CENA FINAL

function drawCenaFinal() {
  
drawCasteloSimples(); // desenha cenário do castelo

// personagens
textAlign(CENTER, CENTER);
textSize(130);
text("💂🏿", 320, 420);
text("👸🏼", 400, 420); 
text("💂🏻‍♀️", 480, 420); 

// BALÃO de FALA da VITÓRIA
fill(255);
stroke(0);
strokeWeight(2);
ellipse(400, 280, 270, 90); 
  
// fala final
fill(0);   
noStroke();  
textSize(16);  
text("Foi uma aventura e tanto pelo campo!\nObrigada por me ajudar!", 400, 280); 
  
  
// como reiniciar o jogo
fill(255);   
textFont("Times New Roman");
textSize(18);   
textAlign(CENTER, BOTTOM);
text("Pressione R para jogar novamente", width / 2, height - 20);  
}


// DESENHA o CASTELO
function drawCasteloSimples() {

// céu
background("rgb(135,206,235)");  
  
// grama
fill("rgb(34,139,34)"); 
rect(400, 435, width, 170); 
  
textAlign(CENTER, CENTER);  
textSize(450); 
text("🏰", 400, 200);
}