let posX; //Variable posicion en X
let posY; //Variable posicion en Y
let diametro = 50; //Diametro inicial de la pelota
let radio = diametro / 2; //Radio de la pelota
let colorDeFondo; // Color de fondo de amarrillo a naranja
let vel = 10; //Velocidad a la que la pelota se mueve.

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2; //Posición horizontal de la pelota en el centro horizontal del lienzo
  posY = windowHeight / 2; // Posición vertical de la pelota en el centro vertical del lienzo
  colorDeFondo = color(255, 200, 50); // Color de fondo de amarrillo a naranja
}

function draw() {
  background(colorDeFondo);

  if (posX < -radio) {
    //Condición que verifica si la posición de la pelota está más allá del borde izquierdo de la ventana
    diametro = random(10, 100); //Si la condición se cumple, se establece un nuevo diámetro aleatorio para la pelota
    radio = diametro / 2; //Se recalcula el radio de la pelota basado en el nuevo diámetro
    colorDeFondo = color(255, random(100, 255), 50); //Color de fondo aleatorios
    posX = windowWidth + radio; // La posición horizontal de la pelota se reinicia más allá del borde derecho de la ventana
  }

  let colorPelota = color(random(255), random(255), random(255)); //Color random de la pelota
  fill(colorPelota); //Color de relleno de la pelota

  posX -= vel;

  circle(posX, posY, diametro); //Dibuja la posicion de la pelota
  print(posX); //Imprime la posocion horizontal de la pelota
}
