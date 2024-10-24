// Infantil, Comédia, Animação, Fantasia, Terror, Mistério, Suspense, Aventura, Família, Ficção Científica, Ação, Faroeste

// Divertida Mente, 12, Infantil, Comédia
// Hotel Transilvânia 2, 10, Animação, Comédia, Fantasia

// Os Goonies, 10, aventura
// Uncharted: Fora do Mapa, 12, aventura, Ação
// A Freira 2, 16, Terror, Mistério
// Assim na Terra Como no Inferno, 14, Terror, Aventura
// Wall-E, 10,  Aventura, Animação, Família, Ficção Científica
// Star Wars, 14, Ficção científica, Ação
// Círculo de Fogo, 12, Ação, Aventura
// ridiculous 6, 14,  Comédia, Faroeste

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("10");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("rgb(25,218,218)");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "ridiculous 6";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Círculo de Fogo";          
        } else{
         return "Divertida Mente";
        }
      } else {
        if (gostaDeFantasia) {
          return "Wall-E";
        } else {
          return "Hotel Transilvânia 2";
        }
      }
    }
  } else {
    if (gostaDeAventura) {
      return "Uncharted: Fora do Mapa";
    } else {
      return "Os Goonies";
    }
  }
}