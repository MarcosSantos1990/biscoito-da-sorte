//Variaveis
let randomNumber = Math.round(Math.random() * 10);
const openCookie = document.querySelector(".screen1 img");
const newCookie = document.querySelector(".screen2 button");
const cookieText = document.querySelector(".screen2 p")


const cookiePhrases = ["A adversidade é um espelho que reflete o verdadeiro eu.",
"Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
"Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
"Não compense na ira o que lhe falta na razão.",
"Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
"Defeitos e virtudes são apenas dois lados da mesma moeda.",
"A maior de todas as torres começa no solo.",
"Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
"Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
"A juventude não é uma época da vida, é um estado de espírito.",
"A vida trará coisas boas se tiver paciência.",
"Aquele que se importa com o sentimento dos outros, não é um tolo.",
"Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
"Siga os bons e aprenda com eles.",
"Não há que ser forte. Há que ser flexível.",
"Uma bela flor é incompleta sem as suas folhas."]
"Não importa o tamanho da montanha, ela não pode tapar o sol.",
"O bom-senso vale mais do que muito conhecimento.",
"Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
"São os nossos amigos que nos ensinam as mais valiosas lições.",





//Eventos

openCookie.addEventListener('click', screen2Display)
newCookie.addEventListener('click', screen1Display)
document.addEventListener('keydown', function(e){
  if(e.key == 'Enter')  {
    screen1Display ()
  }
})





function screen1Display() {
    document.querySelector(".screen2").style.display = "none"
    document.querySelector(".screen1").style.display = "flex"
}


function screen2Display() {
    document.querySelector(".screen1").style.display = "none"
    document.querySelector(".screen2").style.display = "flex"
    cookieText.innerText = cookiePhrases[getRandomInt(cookiePhrases.length - 1)];
}

function getRandomInt(max) {
    return Math.round(Math.random() * max);
} 



