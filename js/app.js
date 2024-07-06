const quoteList = [
  {
    img: "img/maradona-img-1.jpg",
    quote:
      '"Mis sueños son dos. Mi primer sueño es jugar en el Mundial. Y el segundo es salir campeón de octava y lo que siga en el campeonato este"',
  },
  {
    img: "img/maradona-img-2.jpg",
    quote:
      '"Lo que más me gusta del fútbol es la pelota. Todo lo demás, cansa"',
  },
  {
    img: "img/maradona-img-3.jpg",
    quote:
      '"Acá el único salvador que conozco es Bilardo, que se llama Carlos Salvador"',
  },
  {
    img: "img/maradona-img-4.jpg",
    quote: '"¿Cómo hice el gol? Lo hizo la mano de Dios"',
  },
  {
    img: "img/maradona-img-5.jpg",
    quote:
      '"¿Quién soy? El pibe de Villa Fiorito que una tarde de 1986, en el estadio Azteca de México, se puso a llorar cuando recibió la Copa del Mundo"',
  },
  {
    img: "img/maradona-img-6.jpg",
    quote: '"Me siento hijo de Nápoles desde el primer día"',
  },
  {
    img: "img/maradona-img-7.jpg",
    quote:
      '"Si me muero, quiero volver a nacer y quiero ser futbolista. Y quiero volver a ser Diego Armando Maradona. Soy un jugador que le ha dado alegría a la gente y con eso me basta y me sobra"',
  },
  {
    img: "img/maradona-img-8.jpg",
    quote: '"Creeme que me cortaron las piernas"',
  },
  {
    img: "img/maradona-img-9.jpg",
    quote: '"Se le escapó la tortuga"',
  },
  {
    img: "img/maradona-img-10.jpg",
    quote:
      '"Pase lo que pase y dirija quien dirija, la camiseta número 10 será siempre mía"',
  },
  {
    img: "img/maradona-img-11.jpg",
    quote: '"La bronca es mi combustible"',
  },
  {
    img: "img/maradona-img-12.jpg",
    quote: '"Me teñí un pedacito de rubio en repudio a todos los pelicortis"',
  },
  {
    img: "img/maradona-img-13.jpg",
    quote:
      '"A Toresani: Segurola y Habana 4310, séptimo piso. Y vamos a ver si me dura 30 segundos"',
  },
  {
    img: "img/maradona-img-14.jpg",
    quote: '"Yo nunca quise ser un ejemplo"',
  },
  {
    img: "img/maradona-img-15.jpg",
    quote:
      '"Los boludos son como las hormigas, están en todas partes del mundo"',
  },
  {
    img: "img/maradona-img-16.jpg",
    quote:
      '"Para mí, ir a un Mundial es lo mismo que para un chico ir a Disney"',
  },
  {
    img: "img/maradona-img-17.jpg",
    quote: '"Me siento más solo que Kung Fu"',
  },
  {
    img: "img/maradona-img-18.jpg",
    quote:
      '"Ser elegido el mejor del siglo es como tocar el cielo con las manos"',
  },
  {
    img: "img/maradona-img-19.jpg",
    quote:
      "\"A veces me agarran bajones, pero pongo 'El Chavo' y se me pasa todo\"",
  },
  {
    img: "img/maradona-img-20.jpg",
    quote: '"Yo me equivoqué y pagué, pero la pelota no se mancha"',
  },
  {
    img: "img/maradona-img-21.jpg",
    quote:
      '"Lástima creo que no se le tiene a nadie, maestro. Si vos le tenés bronca, lo querés pelear, pelealo, tenele bronca. Pero lástima, a nadie"',
  },
  {
    img: "img/maradona-img-22.jpg",
    quote:
      '"Yo crecí en un barrio privado de Buenos Aires.... Privado de agua, luz, teléfono..."',
  },
  {
    img: "img/maradona-img-23.jpg",
    quote:
      '"Al que no creía, a los que no creyeron, con el perdón de las damas, que la chupen y que la sigan chupando"',
  },
  {
    img: "img/maradona-img-24.jpg",
    quote:
      "\"Cada vez que era la hora de la comida, mi vieja decía: 'Me duele el estómago'. ¡Mentira! Era porque no alcanzaba y quería que comiéramos nosotros\"",
  },
  {
    img: "img/maradona-img-25.jpg",
    quote: '"Para jugar contra Australia nos daban café veloz"',
  },
];

const img = document.querySelector("img");
const quote = document.querySelector(".quote");
const newQuoteButton = document.querySelector(".new-quote-button");

const positionList = [];
let randomPosition = Math.floor(Math.random() * (24 - 0 + 1) + 0);

window.addEventListener("load", () => {
  img.style.width = "100%";
  img.style.height = "100%";
  positionList.push(randomPosition);
  showQuote();
});

newQuoteButton.addEventListener("click", () => {
  getPosition();
  resetImage();
  showQuote();
});

const getPosition = () => {
  const newRandomPosition = Math.floor(Math.random() * (24 - 0 + 1) + 0);

  if (
    (positionList.length < quoteList.length &&
      positionList.includes(newRandomPosition)) ||
    newRandomPosition == randomPosition
  ) {
    getPosition();
  } else if (positionList.length < quoteList.length) {
    randomPosition = newRandomPosition;
    positionList.push(newRandomPosition);
  } else {
    positionList.splice(0, positionList.length);
    getPosition();
  }
};

const resetImage = () => {
  img.src = "";
  img.alt = "";
};

const showQuote = () => {
  img.src = quoteList[randomPosition].img;
  img.alt = "Maradona";
  quote.textContent = quoteList[randomPosition].quote;
};
