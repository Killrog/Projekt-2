function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150, 100, 155);

  fill(200, 0, 100);
  rect(0, 0, windowWidth, 60);

  //Farbe für Style
  let col = color(200, 0, 100);

  //Hintergrund vom Button "Programm"
  fill(0, 0, 255);
  noStroke();
  rect(50, 10, 150, 40);

  //Button "Programm"
  buttonP = createButton("Programm");
  buttonP.style("background-color", col);
  buttonP.position(85, 20);

  //Hintergrund vom Button "Dokumentation"
  fill(0, 0, 255);
  noStroke();
  rect(250, 10, 150, 40);

  //Button Dokumentation
  buttonD = createButton("Dokumentation");
  buttonD.style("background-color", col);
  buttonD.position(272, 20);
  //button.mousePressed(changeBG);

  //Button "Generate"
  buttonG = createButton("Generate");
  buttonG.style("background-color", col);
  buttonG.style("font-size", 30 + "px");
  buttonG.position(300, 378);
  buttonG.mousePressed(generate);

  //Button für 7 Zeichen
  buttonG = createButton("7");
  buttonG.style("background-color", col);
  buttonG.position(300, 440);
  buttonG.mousePressed(generate);

  //Button für 13 Zeichen
  buttonG = createButton("13");
  buttonG.style("background-color", col);
  buttonG.position(355, 440);
  buttonG.mousePressed(generate);

  //Button für 19 Zeichen
  buttonG = createButton("19");
  buttonG.style("background-color", col);
  buttonG.position(410, 440);
  buttonG.mousePressed(generate);
}

function generate() {
  fill(200, 0, 100);
  noStroke();
  rect(450, 378, 400, 40);

  //Einzelne Letter Random Funktionen
  let Zahl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let Operator = ["+", "-", "*", "/"];
  let Klammer = ["(      )", "(               )", ""];

  let z1 = random(Zahl);

  let z2 = random(Zahl);

  let z3 = random(Zahl);

  let z4 = random(Zahl);

  let z5 = random(Zahl);

  let z6 = random(Zahl);

  let z7 = random(Zahl);

  let z8 = random(Zahl);

  let z9 = random(Zahl);

  let z10 = random(Zahl);

  let z11 = random(Zahl);

  let o1 = random(Operator);

  let o2 = random(Operator);

  let o3 = random(Operator);

  let o4 = random(Operator);

  let o5 = random(Operator);

  let o6 = random(Operator);

  let k1 = random(Klammer);

  let k2 = random(Klammer);

  //Zahl 1
  fill(0, 255, 0);
  textSize(40);
  text(z1, 475, 410);

  //Zahl 2
  fill(0, 255, 0);
  textSize(40);
  text(z2, 530, 410);

  //Zahl 3
  fill(0, 255, 0);
  textSize(40);
  text(z3, 580, 410);

  //Zahl 4
  fill(0, 255, 0);
  textSize(40);
  text(z4, 633, 410);

  //Zahl 5
  fill(0, 255, 0);
  textSize(40);
  text(z5, 684, 410);

  //Zahl 6
  fill(0, 255, 0);
  textSize(40);
  text(z6, 732, 410);

  //Zahl 7
  fill(0, 255, 0);
  textSize(40);
  text(z7, 785, 410);

  // //Zahl 8
  // fill(0, 255, 0);
  // textSize(40);
  // text(z8, 835, 410);

  // //Zahl 9
  // fill(0, 255, 0);
  // textSize(40);
  // text(z9, 885, 410);

  // //Zahl 10
  // fill(0, 255, 0);
  // textSize(40);
  // text(z10, 925, 410);

  // //Zahl 11
  // fill(0, 255, 0);
  // textSize(40);
  // text(z11, 975, 410);

  //Operant 1
  fill(0, 0, 255);
  textSize(40);
  text(o1, 500, 410);

  //Operant 2
  fill(0, 0, 255);
  textSize(40);
  text(o2, 555, 410);

  //Operant 3
  fill(0, 0, 255);
  textSize(40);
  text(o3, 613, 410);

  //Operant 4
  fill(0, 0, 255);
  textSize(40);
  text(o4, 663, 410);

  //Operant 5
  fill(0, 0, 255);
  textSize(40);
  text(o5, 712, 410);

  //Operant 6
  fill(0, 0, 255);
  textSize(40);
  text(o6, 765, 410);

  //Klammer 2
  fill(0, 255, 255);
  textSize(40);
  text(k1, 520, 408);

  //Klammer 1
  fill(0, 255, 255);
  textSize(40);
  text(k2, 570, 408);
}
