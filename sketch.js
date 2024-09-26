// Infantil, Comédia, Animação, Fantasia, Terror, Mistério, Suspense, Aventura, Família, Ficção Científica, Ação, Faroeste

// Divertida Mente, Livre, Infantil, Comédia
// Hotel Transilvânia 2, Livre, Animação, Comédia, Fantasia

// O Exorcista, 14, Terror, Mistério
// A Entidade, 16, Terror, Suspense
// A Freira 2, 16, Terror, Mistério
// Assim na Terra Como no Inferno, 14, Terror, Aventura
// Wall-E, Livre,  Aventura, Animação, Família, Ficção Científica
// Star Wars, 14, Ficção científica, Ação
// Círculo de Fogo, 12, Ação, Aventura
// ridiculous 6, 14,  Comédia, Faroeste


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let recomendacao = geraRecomendacao();
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao() {
  if(idade >= 10) {
    
  } else {
    return "Divertida Mente";
  }
}






