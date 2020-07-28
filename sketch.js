// https://youtu.be/OjFRqc61pm0
// https://youtu.be/_JRjNCraTtA

var tela = 0;

//Posição do personagem.
var xp1 = 30;
var yp1 = 0;
var yp = 450;
//Diparo do personagem.
var xd1 = 0;
//Posição da célula.
var xn = 530;
var yn = 460;
//Posição do chefe.
var xc = 530;
var yc = 355;
//Disparo do chefe.
var xdc = 500;
var ydc = 400;
var ch = 0, ah = 0, bh = 0;
//Posição Ninja.
var xni = 490;
var yni = 380;
//Frame personagem.
var contFrame = 0;
var paraFrames = 0;
//Condiçoes de pulo e tiro.
var acerto = false;
var pulo = false;
var estadodisparo = false;
var disparo = false;
var mudar = false;

//Perguntas.
var pergunta = 0;
var certo;
var acertos = 0;
var erros = 0;
var p = false;

//Respostas.
var respostas = ['\nB - Núcleo.', '\nC - Células animais.', '\nD - Citoplasma, citosol ou hialoplasma.', '\nC - Membrana plasmática.', 'A - sistema-organismo.', 'D - Mitocôndrias', 'B - Citoplasma, núcleo e membrana plasmática', 'A - cloroplasto '];

//Jogo
var vidas = 5;
var pontos = 0;
var vidac = 150;

//Tempo.
var con = 0, cons = 0;
var conp = 0, conps = 60;

//imagens.
var img;
var ima;
var pai;
var anima;
var inimigo;
var chefe;
var mundo1;
var gameover;
var enzo;
var wagner;
var perguntas;
var acertou;
var errou;
var vitoria;
var tela10;
var deserto;
var Chefe2;

//Persongem 1.
var imgsMecanicorun = [];

//Dicas.
var dicas = ['O núcleo é o responsável por armazena o DNA.', 'Um dos possíveis nomes do material gelatinoso das células\n'+'é o Hialoplasma.', 'A membrana plasmática é responsável pelo revestimento\n'+'das célula.', 'As principais funções do complexo de Golgi são o armazenamento,\n'+'transformação e exportação das substâncias das células.', 'Os cloroplastos são organelas presentes apenas em células de\n'+'plantas e algas, nas regiões que ficam iluminadas. Possuem cor\n'+'verde devido à presença de clorofila e são responsáveis\n'+'pela realização da fotossíntese.'];
var k = 1, dicat = 0, dicats = 0;

var dicas2 = ['As mitocôndiras são as organelas responsáveis por produzir a ATP.', 'A estrutura das células é dividida principalemnte em três partes.\n'+'Uma delas é o núcleo', 'O vacúolo tem diferentes funções como:\n'+'Regular pH, controlar a entrada e saída de água\n'+'por osmorregulação.', 'Os lisossomos são organelas citoplasmáticas, originadas\n'+'no complexo de Golgi e têm a capacidade de degradar partículas'];
var m = 0, dicat2 = 0, dicats2 = 0;

//Musicas
var batle;
var song;
var fase1;
var music = true;
var musics = 0, musict = 0;
var go;
var gov = true;
var menuc, menuv;

function preload() {
  img = loadImage('download.jpg');
  ima = loadImage('fundo_informações.jpg');
  per = loadImage('mecanico.run_0.png');
  mundo1 = loadImage('giphy.gif');
  gameover = loadImage('game_over.png');
  enzo = loadImage('enzo.jpg');
  wagner = loadImage('wagner.jpg');
  perguntas = loadImage('perguntas.jpg');
  acertou = loadImage('acertou.jpg');
  errou = loadImage('errou.jpg');
  vitoria = loadImage('vitoria (2).jpg');
  tela10 = loadImage('tela10.jpg');
  deserto = loadImage('tenor.gif');
  Chefe2 = loadImage('chefe2.png');
  inimigo = loadImage('pngwing.com.png');
  chefe = loadImage('chefe1.png');
  
  //personagem
  for ( i=0; i<6; i++ ) {
    imgsMecanicorun[i] = loadImage('mecanico.run_'+i+'.png');
  }
  
  song = loadSound('16 Old Worlds.mp3', loaded);
  batle = loadSound('05 Ready for Battle.mp3');
  fase1 = loadSound('battleThemeA.mp3');
  go = loadSound('SMB3 World3.mp3');
  menuv = loadSound('menu-back.wav');
  menuc = loadSound('menu-validate.wav');
  
}

function loaded(){
  song.play();
}

var slider;
function setup() {
  frameRate(30);
  createCanvas(500, 500);
  slider = createSlider(0.2, 1, 0, 0.01);
}

function draw() {
  background(20);
  
  //Menu principal.  
  if (tela == 0) {
    createCanvas(500, 500);
    //Iniciar jogo.
    imageMode(CENTER);
    image(img, 250, 250, 500, 500);
    if (mouseX>150 && mouseX<350 && mouseY>150 && mouseY<200) {
       fill(20, 20, 20, 0);
       stroke(25);
       strokeWeight(3);
       rect(150, 150, 200, 50, 10);
       if (mouseIsPressed) {
         tela = 1;
         menuc.play();
      }
      }
    //Regras.
    if (mouseX>150 && mouseX<350 && mouseY>235 && mouseY<285) {
       fill(20, 20, 20, 0);
       stroke(25);
       strokeWeight(3);
       rect(150, 235, 200, 50, 10);
       if (mouseIsPressed) {
         tela = 2;
         menuc.play();
      }
    }
    //Informações.
    if (mouseX>134 && mouseX<374 && mouseY>320 && mouseY<370) {
       fill(20, 20, 20 ,0);
       stroke(25);
       strokeWeight(3);
       rect(134, 320, 240, 50, 10);
       if (mouseIsPressed) {
         tela = 3;
         menuc.play();
      }
    }

    fill(25);
    textSize(40);
    noStroke();
    text('Iniciar', 200, 190);
    text('Regras', 189, 271);
    text('Informações', 147, 358);
    song.setVolume(slider.value());
  }
  
  //Iniciar.
  else if (tela == 1) {
    background(200);
    imageMode(CENTER);
    image(mundo1, 250, 250, 500, 500);
    
    fill(0, 0, 0, 0);
    stroke(2);
    strokeWeight(4);
    rect(170, 220, 140, 100, 10);
    
    //Personagem.
    if (mouseX>170 && mouseX<310 && mouseY>220 && mouseY<320) {
      fill(ah, bh, ch);
      stroke(ah, bh, ch);
      strokeWeight(4);
      rect(170, 220, 140, 100, 10);
      
      ah = random(0, 255);
      bh = random(0, 255);
      ch = random(0, 255);
      if (mouseIsPressed) {
        tela = 4;
        batle.play();
        song.stop();
      }
    }
    image(per, 250, 265);
    
    //Botão voltar.
    if (mouseX>10 && mouseX<80 && mouseY>463 && mouseY<493){
      fill(20, 20, 20, 0);
      stroke(255);
      strokeWeight(3);
      rect(10, 463, 70, 30, 10);
      if (mouseIsPressed) {
        tela = 0;
        menuv.play();
      }
    }
    fill(255);
    textSize(20);
    noStroke();
    text('Recomendamos ler as regras antes de iniciar.', 10, 20);
    text('Selecione o personagem:', 10, 40);
    textSize(25);
    text('Boa sorte!!', 370, 485);
    
    fill(220);
    textSize(20);
    noStroke();
    text('Voltar', 20, 485);
    song.setVolume(slider.value());
  }
  
  //Regras.
  else if (tela == 2) {
    background(20);
    if (mouseX>13 && mouseX<113 && mouseY>450 && mouseY<490) {
      fill(20, 29, 20, 0);
      stroke(220);
      strokeWeight(4);
      rect(13, 450, 100, 40, 10);
      if (mouseIsPressed) {
        tela = 0;
        menuv.play();
      }
    }
    fill(220);
    textSize(15);
    noStroke();
    text('Pontuação:\n'+'Após derrotar os chefes de cada nível, você irá para as perguntas sobre cé-\n'+'lulas e quanto mais perguntas acerta, mais pontos irá ganhar. Você irá ga-\n'+'nhar pontos também com os tiros acertados tanto nos chefes como nos\n'+'seus capangas', 0, 20)
    text('Perguntas:\n'+'As perguntas irão ter tempo de um minuto para serem respondidas e são\n'+'sobre células, abordando a sua estrutura por exemplo.', 0, 120);
    text('Controles:\n'+'Para se movimentar no mapa use as setas para cima para pular, esquerda\n'+'para andar para esquerda e direita para andar para a direita. Para responder\n'+'as perguntas utilize o mouse, clicando em cima da alternativa desejada.\n'+'Para efetuar o disparo contra os inimigos, pressione a tecla espaço.', 0, 190);
    text('Observação:\n'+'O jogo irá começar apenas com os capangas do chefe, para encontrar o\n'+'chefe e derrotá-lo você terá que ultrupassar o limite da tela do lado direito\n'+'do jogo.', 0, 300);
    text('Dicas: \n'+'No decorrer da batalha com os chefes, dicas irão aparecer na parte inferior \n'+'da tela.',0 ,390);
    textSize(25);
    text('Voltar', 30, 480);
    song.setVolume(slider.value());
  }
  
  //Informações.
  else if (tela == 3){
    background(20)
    imageMode(CENTER);
    image(ima, 250, 250, 500, 500);
    fill(2);
    textSize(17);
    noStroke();
    text('Desenvolvedor: Enzo Rangel Monteiro da Silva', 10, 20);
    text('Estudante de licenciatura em Ciências Biológicas:\n'+'Wagner Rhauan Bezerra da Silva', 10, 250);
    text('Componente abordada:\n'+'(EF06CI05) Explicar a organização\n'+'básica das células e seu papel como\n'+'unidade estrutural e funcional dos seres\n'+'vivos.', 10, 300);
    text('Componente abordada:\n'+'(EF06CI05) Explicar a organização\n'+'básica das células e seu papel como\n'+'unidade estrutural e funcional dos\n'+'               seres vivos.', 220, 60);
    image(enzo, 100, 130, 170, 190);
    image(wagner, 400, 360, 170, 190);
    
    if (mouseX>20 && mouseX<220 && mouseY>430 && mouseY<480) {
      fill(20, 20, 20, 0);
      stroke(20);
      strokeWeight(3);
      rect(20, 430, 200, 50, 10);
      //Voltar.
      if (mouseIsPressed) {
        tela = 0;
        menuv.play();
      }
    }
    fill(20);
    textSize(40);
    noStroke();
    text('Voltar', 70, 470);
    song.setVolume(slider.value());
  }
  
  //Fase 1.
  else if (tela == 4) {
    if ( ! mudar){
      background(20);
      con = con + 1;
      cons = parseInt(con/30);
      if ( cons == 4){
         mudar = true; 
      }
    }
    else if (mudar){
      if (music){
        fase1.play();
        music = false;
      }
      else if(! music){
        musics = musics + 1;
        musict = parseInt(musics/30);
        if (musict == 95){
          music = true;
          musics = 0; 
          musict = 0;
        }
      }
      background(220);
      createCanvas(600, 600);   
      image(mundo1, 300, 300, 600, 600);
      fill(250, 0, 250);
      noStroke();
      rect(0, 490, 600, 110);

      anima = imgsMecanicorun[contFrame];
      imageMode(CENTER);
      image(anima, xp1, yp+yp1);

      imageMode(CENTER);
      image(inimigo, xn, yn, 90, 70);

      //Movimentação personagem.
      if (keyIsDown(UP_ARROW) && (!pulo) ){
        t = 0;
        pulo = true;
      }
      if(pulo){
        t++;
        yp1 = 0.5*(t)*(t - 30)
        if (yp1 > 0) {
              pulo = false;
              yp1 = 0; 		
          }
      }

      if (keyIsDown(RIGHT_ARROW)){
        paraFrames++;
        if (paraFrames>3) {
           contFrame++;
            paraFrames = 0;
         }

        if (contFrame > 5){
           contFrame = 0;
          }
         xp1 = xp1 + 4;
        }

      if (keyIsDown(LEFT_ARROW)){
        paraFrames++;
        if (paraFrames>3) {
           contFrame++;
            paraFrames = 0;
         }

        if (contFrame > 5){
           contFrame = 0;
          }
         xp1 = xp1 - 4;
        }

      //Disparo.
      if (keyIsDown(32) && ! estadodisparo) {
        xd1 = xp1; 
        yd1 = yp+yp1;
        estadodisparo = true;
      }
      else if ( estadodisparo ) {
        fill(255);
        noStroke();
        ellipse(xd1, yd1, 10, 10);
        xd1 = xd1 + 11;
        if ( xd1 > 600 ) {
            estadodisparo = false;
          }
      }

      //Bloqueio de tela do personangem. 
      if (xp1<20) {
         xp1 = 20 
      }

      //Inimigo.
      xn = xn - 5;

      if (xn<-50){
        xn = random(650, 800);
        }

      //colisão.
      if (dist(xd1, yp+yp1, xn, yn) < 40){
        xn = random(650, 800);
        xd1 = -200;
        estadodisparo = false;
        pontos = pontos + 100;
        }

      //Colisão do personagem com o inimigo.
      if (dist(xp1, yp+yp1, xn, yn) < 40){
        xn = random(650, 800);
        xp1 = 30;
        vidas = vidas - 1;
        pontos = pontos - 50;
      }

      //Game over.
      if (vidas == 0) {
        tela = 8; 
        fase1.stop();
        musics = 0;
        musict = 0;
        music = true;
      }

      //fase 2.
      if (xp1 > 620){
        tela = 5; 
        xp1 = 30;
        yp = 450;
        yp1 = 0;
        fase1.stop();
        musics = 0;
        musict = 0;
        music = true;
      }

      textSize(30);
      fill(255, 0, 0);
      noStroke();
      text('Vidas: '+vidas, 20, 50);
      fill(0, 0, 255);
      text('Pontos: '+pontos, 20, 80);
      fase1.setVolume(slider.value());
    }
}
  
  //Fase 2.
  else if (tela == 5){
      if (music){
        fase1.play();
        music = false;
      }
      else if(! music){
        musics = musics + 1;
        musict = parseInt(musics/30);
        if (musict == 95){
          music = true;
          musics = 0; 
          musict = 0;
        }
      }
    background(220);
    createCanvas(600, 600);   
    image(mundo1, 300, 300, 600, 600);
    fill(250, 0, 250);
    noStroke();
    rect(0, 490, 600, 110);
    
    anima = imgsMecanicorun[contFrame];
    imageMode(CENTER);
    image(anima, xp1, yp+yp1);
    
    imageMode(CENTER);
    image(chefe, xc, yc, 300, 300);
    
    //Movimentação.
    if (keyIsDown(UP_ARROW) && (!pulo) ){
      t = 0;
      pulo = true;
    }
    if(pulo){
      t++;
      yp1 = 0.5*(t)*(t - 30)
        if (yp1 > 0) {
		    pulo = false;
		    yp1 = 0; 		
        }
    }
     
    if (keyIsDown(RIGHT_ARROW)){
      paraFrames++;
      if (paraFrames>3) {
         contFrame++;
          paraFrames = 0;
       }

      if (contFrame > 5){
         contFrame = 0;
        }
       xp1 = xp1 + 4;
      }
    
    if (keyIsDown(LEFT_ARROW)){
      paraFrames++;
      if (paraFrames>3) {
         contFrame++;
          paraFrames = 0;
       }

      if (contFrame > 5){
         contFrame = 0;
        }
       xp1 = xp1 - 4;
      }
    
    //Disparo personagem.
    if (keyIsDown(32) && ! estadodisparo) {
      xd1 = xp1; 
      yd1 = yp+yp1;
      estadodisparo = true;
    }
    else if ( estadodisparo ) {
      fill(255);
      noStroke();
      ellipse(xd1, yd1, 10, 10);
      xd1 = xd1 + 11;
      if ( xd1 > 600 ) {
          estadodisparo = false;
        }
    }
    
    //Disparo chefe.
    if (tela == 5 && ! disparo) {
      disparo = true;
      }
    else if(disparo){
      fill(ch, ah, bh);
      noStroke();
      ellipse(xdc, ydc, 30, 30);
      xdc = xdc - random(10, 20);
      if (xdc < 0){
        disparo = false; 
        xdc = 500;
        ydc = random(390, 470);
        ch = random(0, 255);
        ah = random(0, 255);
        bh = random(0, 255);
      }
    }
    
    //Colisão.
    if (dist(xd1, yp+yp1, xc, yc) < 100){
      xd1 = -50
      estadodisparo = false;
      pontos = pontos + 150;
      vidac = vidac - 10;
    }
    if (dist(xp1, yp+yp1, xdc, ydc) < 30){
      xp1 = 30;
      vidas = vidas - 1;
      pontos = pontos - 75;
      xdc = 500;
      ydc = random(390, 470);
      ch = random(0, 255);
      ah = random(0, 255);
      bh = random(0, 255);
    }
    
    //Game.over
    if (vidas == 0) {
      tela = 8; 
      fase1.stop();
      music = true;
      musict = 0;
      musics = 0;
    }
    
    //Limite.
    if (xp1 < 20){
      xp1 = 20;
    }
    
    if (vidac == 0) {
      tela = 9;
      fase1.stop();
      music = true;
      musict = 0;
      musics = 0;
    }
    
    dicat = dicat + 1;
    dicats = 0 + (parseInt(dicat/30));
    
    if (dicats%8 != 0){
      textSize(20);
      fill(2);
      noStroke();
      text(' \n'+dicas[k], 8, 520);
    }
    
    if (dicats%8 == 0 && dicats > 0){
      k = parseInt(random(0, 5));
    }
    
    textSize(30);
    fill(255, 0, 0);
    noStroke();
    text('Vidas: '+vidas, 20, 50);
    text('Vida chefe: '+vidac, 340, 50);
    fill(0, 0, 255);
    text('Pontos: '+pontos, 20, 80);
    fill(2);
    text('Dicas: ', 8, 520);
    fase1.setVolume(slider.value());
  }
  
  //Primeira fase de perguntas.
  else if (tela == 6){
    createCanvas(600, 600);
    imageMode(CENTER);
    image(perguntas, 300, 300, 600, 600);
    
    //Pergunta 1
    if (pergunta == 0 && ! p){
      
      //letra A.
      if (mouseX > 15 && mouseX < 315 && mouseY > 145 && mouseY < 195) { 
        fill(0, 0, 0, 0);
        stroke(3);
        strokeWeight(3);
        rect(15, 145, 300, 50, 10);
        if (mouseIsPressed) {
          certo = 0;
          p = true;
        }
      }
      
      //Letra B.
      if (mouseX > 15 && mouseX < 315 && mouseY > 220 && mouseY < 270) { 
        fill(0, 0, 0, 0);
        stroke(3);
        strokeWeight(3);
        rect(15, 220, 300, 50, 10);
        if (mouseIsPressed) {
          certo = 1;
          p = true;
        }
      }
    
      //Letra C.
      if (mouseX > 15 && mouseX < 315 && mouseY > 295 && mouseY < 345) { 
        fill(0, 0, 0, 0);
        stroke(3);
        strokeWeight(3);
        rect(15, 295, 300, 50, 10);
        if (mouseIsPressed) {
          certo = 0;
          p = true;
        }
      }
      
      //Letra D.
      if (mouseX > 15 && mouseX < 315 && mouseY > 370 && mouseY < 420) { 
        fill(0, 0, 0, 0);
        stroke(3);
        strokeWeight(3);
        rect(15, 370, 300, 50, 10);
        if (mouseIsPressed) {
          certo = 0;
          p = true;
        }
      }
      
      conp = conp + 1;
      conps = 60-parseInt(conp / 30);
      
      if (conps == 0){
        certo = 0;
        p = true;
      }
      
      fill(20);
      textSize(30);
      noStroke();
      text('1) Nas células animais qual organela é\n'+'responsável por abrigar em seu interior\n'+'o DNA ?\n'+'\n a) Complexo de golgi.\n'+'\n b) Núcleo.\n'+'\n c) Cloroplasto.\n'+'\n d) Mitocôndria.\n', 10, 30);
      text('Tempo Restante: '+conps, 290, 500); 
    }
    
    //Pergunta 2
    if (pergunta == 1 && ! p){
      
      //Letra A.
      if (mouseX > 8 && mouseX < 308 && mouseY > 110 && mouseY < 160) {
        fill(0, 0, 0, 0);
        stroke(2);
        strokeWeight(3);
        rect(8, 110, 300, 50, 10);
        if (mouseIsPressed) {
          certo = 0;
          p = true;
        }
      }
      
      //Letra  B.
      if (mouseX > 8 && mouseX < 308 && mouseY > 185 && mouseY < 235) {
        fill(0, 0, 0, 0);
        stroke(2);
        strokeWeight(3);
        rect(8, 185, 300, 50, 10);
        if (mouseIsPressed) {
          certo = 0;
          p = true;
        }
      }
      
      //Letra C.
      if (mouseX > 8 && mouseX < 308 && mouseY > 260 && mouseY < 310) {
        fill(0, 0, 0, 0);
        stroke(2);
        strokeWeight(3);
        rect(8, 260, 300, 50, 10);
        if (mouseIsPressed) {
          certo = 1;
          p = true;
        }
      }
      
      //Letra D.
      if (mouseX > 8 && mouseX < 308 && mouseY > 335 && mouseY < 385) {
        fill(0, 0, 0, 0);
        stroke(2);
        strokeWeight(3);
        rect(8, 335, 300, 50, 10);
        if (mouseIsPressed) {
          certo = 0;
          p = true;
        }
      }
      
      conp = conp + 1;
      conps = 60-parseInt(conp / 30);
      
      if (conps == 0){
        certo = 0;
        p = true;
      }
      
      fill(20);
      textSize(30);
      noStroke();
      text('2) Qual dos organismos abaixo não possui\n'+'parede celular ?\n'+'\na) Algas.\n'+'\nb) Fungos.\n'+'\nc) Células animais.\n'+'\nd) Células vegetais.', 10, 30);
      text('Tempo restante: '+conps, 290, 500);
    }
    
    //Pergunta 3
    if (pergunta == 2 && ! p) {
      
      //Letra  A.
      if (mouseX > 8 && mouseX < 558 && mouseY > 145 && mouseY < 195){
        
        fill(0, 0, 0, 0);
        stroke(3);
        strokeWeight(3);
        rect(8, 145, 550, 50, 10);
        if (mouseIsPressed){
          certo = 0;
          p = true;
        }
      }
      
      //Letra B
      if (mouseX > 8 && mouseX < 558 && mouseY > 220 && mouseY < 270){
        
        fill(0, 0, 0, 0);
        stroke(3);
        strokeWeight(3);
        rect(8, 220, 550, 50, 10);
        if (mouseIsPressed){
          certo = 0;
          p = true;
        }
      }
      
      //Letra C
      if (mouseX > 8 && mouseX < 558 && mouseY > 295 && mouseY < 335){
        
        fill(0, 0, 0, 0);
        stroke(3);
        strokeWeight(3);
        rect(8, 295, 550, 50, 10);
        if (mouseIsPressed){
          certo = 0;
          p = true;
        }
      }
      
      //Letra D
      if (mouseX > 8 && mouseX < 558 && mouseY > 370 && mouseY < 420){
        
        fill(0, 0, 0, 0);
        stroke(3);
        strokeWeight(3);
        rect(8, 370, 550, 50, 10);
        if (mouseIsPressed){
          certo = 1;
          p = true;
        }
      }
      
      conp = conp + 1;
      conps = 60-parseInt(conp / 30);
      
      if (conps == 0){
        certo = 0;
        p = true;
      }
      
      fill(20);
      textSize(30);
      noStroke();
      text('3) Quais possíveis nomes que o material\n'+'gelatinoso em que as organelas ficam dissol-\n'+'vidas dentro das células podem receber ?\n'+'\na) Citoesqueleto ou citoplasma.\n'+'\nb) Citoesqueleto, citosol ou hialoplasma.\n'+'\nc) Citoesqueleto, citoplasma ou citosol.\n'+'\nd) Citoplasma, citosol ou hialoplasma.', 10, 30);
      text('Tempo restante: '+conps, 290, 500);
      }
    
    //Pergunta 4
    if (pergunta == 3 && ! p) {
      
      //Letra A
      if (mouseX > 8 && mouseX < 358 && mouseY > 145 && mouseY < 195){
        fill(0, 0, 0,  0);
        stroke(3);
        strokeWeight(3);
        rect(8, 145, 350, 50, 10);
        if (mouseIsPressed){
          certo = 0;
          p = true;
        }
      }
      
      //Letra B
      if (mouseX > 8 && mouseX < 358 && mouseY > 220 && mouseY < 270){
        fill(0, 0, 0,  0);
        stroke(3);
        strokeWeight(3);
        rect(8, 220, 350, 50, 10);
        if (mouseIsPressed){
          certo = 0;
          p = true;
        }
      }
      
      //Letra C
      if (mouseX > 8 && mouseX < 358 && mouseY > 295 && mouseY < 345){
        fill(0, 0, 0,  0);
        stroke(3);
        strokeWeight(3);
        rect(8, 295, 350, 50, 10);
        if (mouseIsPressed){
          certo = 1;
          p = true;
        }
      }
      
      //Letra D
        if (mouseX > 8 && mouseX < 358 && mouseY > 370 && mouseY < 420){
        fill(0, 0, 0,  0);
        stroke(3);
        strokeWeight(3);
        rect(8, 370, 350, 50, 10);
        if (mouseIsPressed){
          certo = 0;
          p = true;
        }
      }
      
      conp = conp + 1;
      conps = 60-parseInt(conp / 30);
      
      if (conps == 0){
        certo = 0;
        p = true;
      }
      
      fill(2);
      textSize(30);
      noStroke();
      text('4) Quais das estruturas abaixo, faz o revesti-\n'+'mento celular e tem função de selecionar o\n'+'que entra e sai da célula ?\n'+'\na) Núcleo.\n'+'\nb) Citoplasma.\n'+'\nc) Membrana plasmática.\n'+'\nd) Mitocôndrias.', 10, 30);
      text('Tempo restante: '+conps, 290, 500);
      }
    
    //Acertou a questão.
    if (certo == 1 && p) {
      imageMode(CENTER);
      image(acertou, 300, 300, 600, 600);
      
      if (mouseX > 175 && mouseX < 445 && mouseY > 470 && mouseY < 515) {
        fill(0, 0, 0, 0);
        stroke(2);
        strokeWeight(3);
        rect(175, 470, 270, 45, 10);
        if (mouseIsPressed) {
          pergunta = pergunta + 1;
          p = false;
          acertos = acertos + 1;
          pontos = pontos + 200;
          conp = 0;
          conps = 60;
          if (pergunta == 4){
            tela = 10;
          } 
        }
      }
      
      fill(2);
      textSize(30);
      noStroke();
      text('Próxima pergunta.', 190, 500)
    }
    
    //Errou a questão.
    if (certo == 0 && p){
      imageMode(CENTER);
      image(errou, 300, 300, 600, 600);
      
      if (mouseX > 175 && mouseX < 445 && mouseY > 500 && mouseY < 545) {
        fill(0, 0, 0, 0);
        stroke(2);
        strokeWeight(3);
        rect(175, 500, 270, 45, 10);
        if (mouseIsPressed) {
          pergunta = pergunta + 1;
          p = false;
          erros = erros + 1;
          pontos = pontos - 100;
          conp = 0;
          conps = 60;
          if (pergunta == 4){
            tela = 10;
          } 
        }
      }
      
      fill(2);
      textSize(30);
      noStroke();
      text('Próxima pergunta.', 190, 530)
      text('Resposta correta: '+respostas[pergunta], 8, 30);
    }
    
  }
  
  //Fase 3.
  else if (tela == 7){
      if (music){
        fase1.play();
        music = false;
      }
      else if(! music){
        musics = musics + 1;
        musict = parseInt(musics/30);
        if (musict == 95){
          music = true;
          musics = 0; 
          musict = 0;
        }
      }
    createCanvas(600, 600);
    imageMode(CENTER);
    image(deserto, 300, 300, 600, 600);
    fill(92, 64, 51);
    rect(0, 490, 600, 110);
    
    anima = imgsMecanicorun[contFrame];
    imageMode(CENTER);
    image(anima, xp1, yp+yp1);
    
    imageMode(CENTER);
    image(inimigo, xn, yn, 90, 70);
    
    //Movimentação personagem.
    if (keyIsDown(UP_ARROW) && (!pulo) ){
        t = 0;
        pulo = true;
      }
      if(pulo){
        t++;
        yp1 = 0.5*(t)*(t - 30)
        if (yp1 > 0) {
              pulo = false;
              yp1 = 0; 		
          }
      }

    if (keyIsDown(RIGHT_ARROW)){
        paraFrames++;
        if (paraFrames>3) {
           contFrame++;
            paraFrames = 0;
         }

        if (contFrame > 5){
           contFrame = 0;
          }
         xp1 = xp1 + 4;
        }

    if (keyIsDown(LEFT_ARROW)){
        paraFrames++;
        if (paraFrames>3) {
           contFrame++;
            paraFrames = 0;
         }

        if (contFrame > 5){
           contFrame = 0;
          }
         xp1 = xp1 - 4;
        }
    
    //Disparo.
    if (keyIsDown(32) && ! estadodisparo) {
        xd1 = xp1; 
        yd1 = yp+yp1;
        estadodisparo = true;
      }
    else if ( estadodisparo ) {
        fill(2);
        noStroke();
        ellipse(xd1, yd1, 10, 10);
        xd1 = xd1 + 11;
        if ( xd1 > 600 ) {
            estadodisparo = false;
          }
      }

    //Bloqueio de tela do personangem. 
    if (xp1<20) {
         xp1 = 20 
      }

    //Inimigo.
    xn = xn - 10;

    if (xn<-50){
      xn = random(650, 800);
      }
    
    //Colisão tiro.  
    if (dist(xd1, yp+yp1, xn, yn) < 40){
      xn = random(650, 800);
      xd1 = -200;
      estadodisparo = false;
      pontos = pontos + 100;
      }

    //Colisão do personagem com o inimigo.
    if (dist(xp1, yp+yp1, xn, yn) < 40){
      xn = random(650, 800);
      xp1 = 30;
      vidas = vidas - 1;
      pontos = pontos - 50;
      }
    
    if (vidas == 0){
      tela = 8; 
      fase1.stop();
      music = true;
      musics = 0;
      musict = 0;
    }
    
    if (xp1>630){
      tela = 11;
      xp1 = 30;
      yp1 = 0;
      yp = 450;
      vidac = 150;
      fase1.stop();
      music = true;
      musics = 0;
      musict = 0;
    }
    
    textSize(30);
    fill(255, 0, 0);
    noStroke();
    text('Vidas: '+vidas, 10, 30);
    fill(0, 0, 255);
    text('Pontos: '+pontos, 10, 70);
    fase1.setVolume(slider.value());

  }
  
  //Fase 4.
  else if (tela == 11){
    if (music){
      fase1.play();
      music = false;
    }
    else if(! music){
      musics = musics + 1;
      musict = parseInt(musics/30);
      if (musict == 95){
        music = true;
        musics = 0; 
        musict = 0;
       }
    }
    createCanvas(600, 600);
    imageMode(CENTER);
    image(deserto, 300, 300, 600, 600);
    fill(92, 64, 51);
    rect(0, 490, 600, 110);
    
    imageMode(CENTER);
    image(Chefe2, xni, yni, 250, 250);
    
    anima = imgsMecanicorun[contFrame];
    imageMode(CENTER);
    image(anima, xp1, yp+yp1);
    
    //Movimentação.
    if (keyIsDown(UP_ARROW) && (!pulo) ){
      t = 0;
      pulo = true;
    }
    if(pulo){
      t++;
      yp1 = 0.5*(t)*(t - 30)
        if (yp1 > 0) {
		    pulo = false;
		    yp1 = 0; 		
        }
    }
     
    if (keyIsDown(RIGHT_ARROW)){
      paraFrames++;
      if (paraFrames>3) {
         contFrame++;
          paraFrames = 0;
       }

      if (contFrame > 5){
         contFrame = 0;
        }
       xp1 = xp1 + 4;
      }
    
    if (keyIsDown(LEFT_ARROW)){
      paraFrames++;
      if (paraFrames>3) {
         contFrame++;
          paraFrames = 0;
       }

      if (contFrame > 5){
         contFrame = 0;
        }
       xp1 = xp1 - 4;
      }
    
    //Disparo personagem.
    if (keyIsDown(32) && ! estadodisparo) {
      xd1 = xp1; 
      yd1 = yp+yp1;
      estadodisparo = true;
    }
    else if ( estadodisparo ) {
      fill(2);
      noStroke();
      ellipse(xd1, yd1, 10, 10);
      xd1 = xd1 + 11;
      if ( xd1 > 600 ) {
          estadodisparo = false;
        }
    }
    
    //Disparo chefe.
    if (tela == 11 && ! disparo) {
      disparo = true;
      }
    else if(disparo){
      fill(2);
      noStroke();
      ellipse(xdc, ydc, 30, 30);
      xdc = xdc - random(20, 25);
      if (xdc < 0){
        disparo = false; 
        xdc = 500;
        ydc = random(390, 490);
      }
    }
    
    //Colisão.
    if (dist(xd1, yp+yp1, xni, yni) < 90){
      xd1 = -50
      estadodisparo = false;
      pontos = pontos + 150;
      vidac = vidac - 10;
    }
    if (dist(xp1, yp+yp1, xdc, ydc) < 30){
      xp1 = 30;
      vidas = vidas - 1;
      pontos = pontos - 75;
      xdc = 500;
      ydc = random(380, 460);
    }
    
    //Vida do chefe 
    if (vidac == 0) {
      tela = 12; 
      music = true;
      musics = 0;
      musict = 0;
      fase1.stop();
    }
    
    //Vidas do boneco
    if (vidas == 0) {
      tela = 8; 
      music = true;
      musics = 0;
      musict = 0;
      fase1.stop();
    }
    
    //Limite
    if (xp1 < 20){
      xp1 = 20;
    }
    
    dicat2 = dicat2 + 1;
    dicats2 = 0 + (parseInt(dicat2/30));
    
    if (dicats2%8 != 0){
      textSize(20);
      fill(220);
      noStroke();
      text(' \n'+dicas2[m], 8, 520);
    }
    
    if (dicats2%8 == 0 && dicats2 > 0){
      m = parseInt(random(0, 4))
    }
    
    textSize(30);
    fill(255, 0, 0);
    noStroke();
    text('Vidas: '+vidas, 10, 30);
    text('Vida chefe: '+vidac, 300, 50);
    fill(0, 0, 255);
    text('Pontos: '+pontos, 10, 70);
    fill(220);
    text('Dicas: ', 8, 520);
    fase1.setVolume(slider.value());
    
  }
  
  //Segunda fase de perguntas.
  else if (tela == 13){
    createCanvas(600, 600);
    imageMode(CENTER);
    image(perguntas, 300, 300, 600, 600);
    
    //Pergunta 5.
    if (pergunta == 4) {
      
      //Letra A
      if(mouseX > 8 && mouseX < 358 && mouseY > 145 && mouseY < 195) {
        fill(0, 0, 0, 0);
        stroke(4);
        strokeWeight(3);
        rect(8, 145, 350, 50, 10);
        if (mouseIsPressed) {
          certo = 1;
          p = true; 
        }
      }
      
      //Letra B.
      if(mouseX > 8 && mouseX < 358 && mouseY > 220 && mouseY < 270) {
        fill(0, 0, 0, 0);
        stroke(4);
        strokeWeight(3);
        rect(8, 220, 350, 50, 10);
        if (mouseIsPressed) {
          certo = 0;
          p = true;
        }
      }
      
      //Letra C.
      if(mouseX > 8 && mouseX < 358 && mouseY > 295 && mouseY < 345) {
        fill(0, 0, 0, 0);
        stroke(4);
        strokeWeight(3);
        rect(8, 295, 350, 50, 10);
        if (mouseIsPressed) {
          certo = 0;
          p = true;
        }
      }
      
      //Letra D.
      if(mouseX > 8 && mouseX < 358 && mouseY > 370 && mouseY < 420) {
        fill(0, 0, 0, 0);
        stroke(4);
        strokeWeight(3);
        rect(8, 370, 350, 50, 10);
        if (mouseIsPressed) {
          certo = 0;
          p = true; 
        }
      }
        
      conp = conp + 1;
      conps = 60-parseInt(conp / 30);
      
      if (conps == 0){
        certo = 0;
        p = true;
      }
      
      fill(20);
      textSize(30);
      noStroke();
      text('1) "Átomos-molécula-célula-tecido-órgão."\n'+'Dando continuidade, quais os próximos ní-\n'+'veis de organização ?\n'+'\n a) sistema-organismo.\n'+'\n b) sistema-biosfera.\n'+'\n c) sistema-população.\n'+'\n d) sistema-comunidade.', 10, 30);
      text('Tempo Restante: '+conps, 290, 500); 
    }
    
    //Pergunta 6.
    if (pergunta == 5) {
      
      //Letra A.
      if(mouseX > 8 && mouseX < 438 && mouseY > 110 && mouseY < 160){
        fill(0, 0, 0, 0);
        stroke(4);
        strokeWeight(3);
        rect(8, 110, 430, 50, 10);
        if (mouseIsPressed){
          certo = 0;
          p = true;
        }
      }
      
      //Letra B.
      if(mouseX > 8 && mouseX < 438 && mouseY > 180 && mouseY < 230){
        fill(0, 0, 0, 0);
        stroke(4);
        strokeWeight(3);
        rect(8, 180, 430, 50, 10);
        if (mouseIsPressed){
          certo = 0;
          p = true;
        }
      }
      
      //Letra C.
      if(mouseX > 8 && mouseX < 438 && mouseY > 260 && mouseY < 310){
        fill(0, 0, 0, 0);
        stroke(4);
        strokeWeight(3);
        rect(8, 260, 430, 50, 10);
        if (mouseIsPressed){
          certo = 0;
          p = true;
        }
      }
      
      //Letra D.
      if(mouseX > 8 && mouseX < 438 && mouseY > 330 && mouseY < 380){
        fill(0, 0, 0, 0);
        stroke(4);
        strokeWeight(3);
        rect(8, 330, 430, 50, 10);
        if (mouseIsPressed){
          certo = 1;
          p = true;
        }
      }
      
      conp = conp + 1;
      conps = 60-parseInt(conp / 30);
      
      if (conps == 0){
        certo = 0;
        p = true;
      }
      
      fill(20);
      textSize(30);
      noStroke();
      text('2) Qual é a organela responsável pela pro-\n'+'dução de ATP ?\n'+'\n a) Centríolo.\n'+'\n b) Lisossomos.\n'+'\n c) Reticulo endoplamático liso.\n'+'\n d) Mitocôndrias.', 10, 30);
      text('Tempo Restante: '+conps, 290, 500); 
    }
    
    //Pergunta 7.
    if (pergunta == 6) {
      
      //Letra A
      if (mouseX > 8 && mouseX < 588 && mouseY > 110 && mouseY < 160) {
        fill(0, 0, 0, 0);
        stroke(4);
        strokeWeight(3);
        rect(8, 110, 580, 50, 10);
        if (mouseIsPressed) {
          certo = 0;
          p = true;
        }
      }
      
      //Letra B.
      if (mouseX > 8 && mouseX < 588 && mouseY > 170 && mouseY < 270) {
        fill(0, 0, 0, 0);
        stroke(4);
        strokeWeight(3);
        rect(8, 170, 580, 100, 10);
        if (mouseIsPressed) {
          certo = 1;
          p = true;
        }
      }
      
      //Letra C.
      if (mouseX > 8 && mouseX < 588 && mouseY > 295 && mouseY < 345) {
        fill(0, 0, 0, 0);
        stroke(4);
        strokeWeight(3);
        rect(8, 295, 580, 50, 10);
        if (mouseIsPressed) {
          certo = 0;
          p = true;
        }
      }
      
      //Letra D.
      if (mouseX > 8 && mouseX < 588 && mouseY > 370 && mouseY < 420) {
        fill(0, 0, 0, 0);
        stroke(4);
        strokeWeight(3);
        rect(8, 370, 580, 50, 10);
        if (mouseIsPressed) {
          certo = 0;
          p = true;
        }
      }
      
      conp = conp + 1;
      conps = 60-parseInt(conp / 30);
      
      if (conps == 0){
        certo = 0;
        p = true;
      }
      
      fill(20);
      textSize(30);
      noStroke();
      text('3) As células são divididas principalmente\n'+'em 3 partes, são elas:\n'+'\n a) Proteínas, núcleo e citoplasma.\n'+'\n b) Citoplasma, núcleo e membrana\n'+'                    plasmática.\n'+'\n c) Cílios, flagelos e membrana plasmática.\n'+'\n d) Cílio, flagelos e núcleo', 10, 30);
      text('Tempo Restante: '+conps, 290, 500); 
    }
    
    //Pergunta 8
    if (pergunta == 7){
      
      //Letra A.
      if(mouseX > 8 && mouseX < 348 && mouseY > 110 && mouseY < 160){
        fill(0, 0, 0, 0);
        stroke(4);
        strokeWeight(3);
        rect(8, 110, 340, 50, 10);
        if(mouseIsPressed){
          p = true;
          certo = 1;
        }
      }
      
      //Letra B
      if(mouseX > 8 && mouseX < 348 && mouseY > 180 && mouseY < 230){
        fill(0, 0, 0, 0);
        stroke(4);
        strokeWeight(3);
        rect(8, 180, 340, 50, 10);
        if(mouseIsPressed){
          p = true;
          certo = 0;
        }
      }
      
      //Letra C.
      if(mouseX > 8 && mouseX < 348 && mouseY > 260 && mouseY < 310){
        fill(0, 0, 0, 0);
        stroke(4);
        strokeWeight(3);
        rect(8, 260, 340, 50, 10);
        if(mouseIsPressed){
          p = true;
          certo = 0;
        }
      }
      
      //Letra D.
      if(mouseX > 8 && mouseX < 348 && mouseY > 330 && mouseY < 380){
        fill(0, 0, 0, 0);
        stroke(4);
        strokeWeight(3);
        rect(8, 330, 340, 50, 10);
        if(mouseIsPressed){
          p = true;
          certo = 0;
        }
      }
      
      conp = conp + 1;
      conps = 60-parseInt(conp / 30);
      
      if (conps == 0){
        certo = 0;
        p = true;
      }
      
      fill(20);
      textSize(30);
      noStroke();
      text('4) Qual organela celular é presente nas\n'+'plantas e realizam a fotossíntese?\n'+'\n a) Cloroplasto.\n'+'\n b) Mitocôndria.\n'+'\n c) Complexo de Golgi.\n'+'\n d) Vacúolo.', 10, 30);
      text('Tempo Restante: '+conps, 290, 500); 
    }
    
    //Acertou a questão.
    if (certo == 1 && p) {
      imageMode(CENTER);
      image(acertou, 300, 300, 600, 600);
      
      if (mouseX > 175 && mouseX < 445 && mouseY > 470 && mouseY < 515) {
        fill(0, 0, 0, 0);
        stroke(2);
        strokeWeight(3);
        rect(175, 470, 270, 45, 10);
        if (mouseIsPressed) {
          pergunta = pergunta + 1;
          p = false;
          acertos = acertos + 1;
          pontos = pontos + 200;
          conp = 0;
          conps = 60;
          if (pergunta == 8){
            tela = 10;
          } 
        }
      }
      
      fill(2);
      textSize(30);
      noStroke();
      text('Próxima pergunta.', 190, 500)
    }
    
    //Errou a questão.
    if (certo == 0 && p){
      imageMode(CENTER);
      image(errou, 300, 300, 600, 600);
      
      if (mouseX > 175 && mouseX < 445 && mouseY > 500 && mouseY < 545) {
        fill(0, 0, 0, 0);
        stroke(2);
        strokeWeight(3);
        rect(175, 500, 270, 45, 10);
        if (mouseIsPressed) {
          pergunta = pergunta + 1;
          p = false;
          erros = erros + 1;
          pontos = pontos - 100;
          conp = 0;
          conps = 60;
          if (pergunta == 8){
            tela = 10;
          } 
        }
      }
      
      fill(2);
      textSize(30);
      noStroke();
      text('Próxima pergunta.', 190, 530)
      text('Resposta correta: \n'+respostas[pergunta], 8, 30);
    }
  }
  
  //Game Over.
  else if (tela == 8){
    createCanvas(600, 600);
    imageMode(CENTER);
    image(gameover, 300, 300, 600, 600);
    
    if (gov){
      go.play();
      gov = false;
    }
    
    if (mouseX>160 && mouseX<430 && mouseY>20 && mouseY<60 ){
      fill(ah, bh, ch);
      noStroke();
      rect(160, 20, 270, 40, 10);
      
      ah = random(0, 255);
      bh = random(0, 255);
      ch = random(0, 255);
      
      if (mouseIsPressed){
        tela = 0; 
        vidas = 5;
        pontos = 0;
        vidac = 150;
        mudar = false;
        con = 0;
        cons = 0;
        xp1 = 30;
        yp1 = 0;
        yp = 450;
        pergunta = 0;
        acertos = 0;
        erros = 0;
        gov = true;
        go.stop();
        
      }
    }
    
    textSize(30);
    fill(220);
    noStroke();
    text('Voltar para o início', 170, 50);
    text('Pontuação atinginda: '+pontos, 8, 490);
    text('Mais sorte da próxima vez :)', 120, 570);
  }
  
  //Preparação segunda pergunta.
  else if (tela == 12) {
    createCanvas(600, 600);
    background(2);
    imageMode(CENTER);
    image(vitoria, 300, 430, 300, 300);
    
    fill(0, 0, 0, 0);
    stroke(250, 0, 250);
    strokeWeight(3);
    rect(230, 105, 150, 35, 10);
    
    if (mouseX > 230 && mouseX < 380 && mouseY > 105 && mouseY < 150){
      fill(250, 0, 250);
      noStroke();
      rect(230, 105, 150, 35, 10);
      if (mouseIsPressed) {
        tela = 13;
        conp = 0;
        conps = 60;
      }
    }
    
    textSize(20);
    fill(255);
    noStroke();
    text('Paranbéns jogador, você conseguiu derrotar o Grande Rinovírus e\n'+'sua gangue. Agora vem a segunda fase de perguntas relacionadas\n'+'as células, prepare-se e quando estiver pronto aperte no botão:', 10, 30);
    text('Estou pronto !!', 240, 130);
  }
  
  //Preparação primeira pergunta.
  else if (tela == 9) {
    createCanvas(600, 600);
    background(2);
    imageMode(CENTER);
    image(vitoria, 300, 430, 300, 300);
    
    fill(0, 0, 0, 0);
    stroke(250, 0, 250);
    strokeWeight(3);
    rect(230, 105, 150, 35, 10);
    
    if (mouseX > 230 && mouseX < 380 && mouseY > 105 && mouseY < 140){
      fill(250, 0, 250);
      noStroke();
      rect(230, 105, 150, 35, 10);
      if (mouseIsPressed) {
        tela = 6;
        conp = 0;
        conps = 60;
      }
    }
    
    textSize(20);
    fill(255);
    noStroke();
    text('Paranbéns jogador, você conseguiu derrotar o Grande Musgo e\n'+'sua gangue. Agora vem a fase de perguntas relacionadas às célu-\n'+'las, prepare-se e quando estiver pronto aperte no botão abaixo:', 10, 30);
    text('Estou pronto !!', 240, 130);
  }
  
  //Ir para a fase 3 e final do jogo.
  else if (tela == 10) {
    createCanvas(600, 600);
    background(1);
    
    imageMode(CENTER);
    image(tela10, 300, 450, 200, 200);
    
    if(pergunta == 4){
      if (mouseX > 110 && mouseX < 480 && mouseY > 160 && mouseY < 260) {
        fill(0, 0, 0, 0);
        stroke(255);
        strokeWeight(3);
        rect(110, 160, 370, 100, 10);
        if (mouseIsPressed){
          tela = 7;
          xn = 530;
          yn = 460;
          yp = 450;
          yp1 = 0;
          xp1 = 30;
          vidas = 5;
        }
      }

      textSize(30);
      fill(255);
      noStroke();
      text('Quantidades de acerto: '+acertos+'\nQuantidade de erros: '+erros+'\nPontos atualizados: '+pontos, 8, 40);
      text('            Clique aqui\n'+'para seguir com a jornada.', 120, 200);
      text('Agora sua missão será derrotar a gangue do\n'+'Rinovírus. Boa sorte!!', 10, 300);
    }
    
  if (pergunta == 8) {
    
    fill(0, 0, 0, 0);
    stroke(255);
    strokeWeight(3);
    rect(15, 385, 170, 100, 10);
    
    if (mouseX > 15 && mouseX < 185 && mouseY > 385 && mouseY < 485){
      fill(ah, ch, bh);
      noStroke();
      rect(15, 385, 170, 100, 10);
  
      ah = random(0, 255);
      bh = random(0, 255);
      ch = random(0, 255);
        
      if (mouseIsPressed) {
        tela = 0; 
        vidas = 5;
        pontos = 0;
        vidac = 150;
        mudar = false;
        con = 0;
        cons = 0;
        xp1 = 30;
        yp1 = 0;
        yp = 450;
        pergunta = 0;
        acertos = 0;
        erros = 0;
      }
    }
    
    textSize(30);
    fill(255);
    noStroke();
    text('Total de acertos: '+ acertos +'\nTotal de erros: '+erros+'\nPontuação atinginda: '+pontos, 8, 40);
    text('Gabarito Fase 1:\n'+'1-B\n'+'2-C\n'+'3-D\n'+'4-C', 8, 200);
    text('Gabarito Fase 2:\n'+'                     1-A\n'+'                     2-D\n'+'                     3-B\n'+'                     4-A', 350, 200);
    text('Obrigado por jogar :)', 160, 580);
    text('Voltar para\n'+'o início', 30, 425);
   }
  }
}