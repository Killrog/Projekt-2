function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 100, 255);

  fill(0, 0, 0);
  rect(0, 0, windowWidth, 60);

  //Farbe für Style
  let col = color(240, 255);

  //Hintergrund vom Button "Programm"
  fill(0, 100, 255);
  noStroke();
  rect(50, 10, 150, 40);

  //Button "Programm"
  buttonP = createButton("Programm");
  buttonP.style('background-color', col);
  buttonP.position(85, 20);
  buttonP.mousePressed(generate);

 

  //Hintergrund vom Button "Dokumentation"
  fill(0, 100, 255);
  noStroke();
  rect(1478, 10, 150, 40);

  //Button Dokumentation
  buttonD = createButton("____________");
  buttonD.style('background-color', col);
  buttonD.position(1500, 20);
 
  let a = createA('https://github.com/Killrog/Projekt-2', 'Dokumentation');
  a.position(1502, 20);
}









function generate() {
removeElements();
setup()
  fill(240, 255);
  noStroke();
  rect(320, 378, 750, 40);

  //Farbe für Style
let col = color(240, 255);

//Button "Generate"
buttonG = createButton("Generate");
buttonG.style('background-color', col);
buttonG.style('font-size', 30 + 'px')
buttonG.position(150, 378);
buttonG.mousePressed(generate);


//Button für 5 Zahlen
buttonG = createButton("5");
buttonG.style('background-color', col);
buttonG.style('font-size', 20 + 'px')
buttonG.position(150, 440);
buttonG.mousePressed(changeLength5);

//Button für 10 Zahlen
buttonG = createButton("10");
buttonG.style('background-color', col);
buttonG.style('font-size', 20 + 'px')
buttonG.position(200, 440);
buttonG.mousePressed(changeLength10);

//Button für 15 Zahlen
buttonG = createButton("15");
buttonG.style('background-color', col);
buttonG.style('font-size', 20 + 'px')
buttonG.position(252, 440);
buttonG.mousePressed(changeLength15);

  //Einzelne Letter Random Funktionen
  let Zahl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let Operator = ['+', '-', '*', '/'];
  let Klammer = ['(        )', '(              )', '','      (        )' ]

  let z1 = random(Zahl)

  let z2 = random(Zahl)

  let z3 = random(Zahl)

  let z4 = random(Zahl)

  let z5 = random(Zahl)

  let z6 = random(Zahl)

  let z7 = random(Zahl)

  let z8 = random(Zahl)

  let z9 = random(Zahl)

  let z10 = random(Zahl)

  let z11 = random(Zahl)

  let o1 = random(Operator)

  let o2 = random(Operator)

  let o3 = random(Operator)

  let o4 = random(Operator)

  let o5 = random(Operator)

  let o6 = random(Operator)

  let k1 = random(Klammer)

  let k2 = random(Klammer)

  let k3 = random(Klammer)

  let k4 = random(Klammer)

  let k5 = random(Klammer)

  



  //Zahl 1 
  fill(0, 255, 0);
  textSize(30);
  text(z1, 340, 410);

  //Zahl 2 
  fill(0, 255, 0);
  textSize(30);
  text(z2, 390, 410);

  //Zahl 3
  fill(0, 255, 0);
  textSize(30);
  text(z3, 440, 410);

  //Zahl 4 
  fill(0, 255, 0);
  textSize(30);
  text(z4, 490, 410);

  //Zahl 5 
  fill(0, 255, 0);
  textSize(30);
  text(z5, 540, 410);

  //Zahl 6 
  fill(0, 255, 0);
  textSize(30);
  text(z6, 590, 410);

  //Zahl 7 
  fill(0, 255, 0);
  textSize(30);
  text(z7, 640, 410);




  //Zahl 8 
  fill(0, 255, 0);
  textSize(30);
  text(z8, 690, 410);

  //Zahl 9 
  fill(0, 255, 0);
  textSize(30);
  text(z9, 740, 410);

  //Zahl 10
  fill(0, 255, 0);
  textSize(30);
  text(z10, 790, 410);

  //Zahl 11 
  fill(0, 255, 0);
  textSize(30);
  text(z11, 840, 410);

  //Zahl 12 
  fill(0, 255, 0);
  textSize(30);
  text(z7, 890, 410);


  //Zahl 13 
  fill(0, 255, 0);
  textSize(30);
  text(z8, 940, 410);

  //Zahl 14
  fill(0, 255, 0);
  textSize(30);
  text(z9, 990, 410);

  //Zahl 15
  fill(0, 255, 0);
  textSize(30);
  text(z10, 1040, 410);



  //Operant 1
  fill(0, 0, 255);
  textSize(30);
  text(o1, 370, 410);

  //Operant 2
  fill(0, 0, 255);
  textSize(30);
  text(o2, 420, 410);

  //Operant 3
  fill(0, 0, 255);
  textSize(30);
  text(o3, 470, 410);

  //Operant 4
  fill(0, 0, 255);
  textSize(30);
  text(o4, 520, 410);

  //Operant 5
  fill(0, 0, 255);
  textSize(30);
  text(o5, 570, 410);

  //Operant 6
  fill(0, 0, 255);
  textSize(30);
  text(o6, 620, 410);

  //Operant 7
  fill(0, 0, 255);
  textSize(30);
  text(o1, 670, 410);

  //Operant 8
  fill(0, 0, 255);
  textSize(30);
  text(o2, 720, 410);

  //Operant 9
  fill(0, 0, 255);
  textSize(30);
  text(o3, 770, 410);

  //Operant 10
  fill(0, 0, 255);
  textSize(30);
  text(o4, 820, 410);

  //Operant 11
  fill(0, 0, 255);
  textSize(30);
  text(o5, 870, 410);

  //Operant 12
  fill(0, 0, 255);
  textSize(30);
  text(o6, 920, 410);

  //Operant 13
  fill(0, 0, 255);
  textSize(30);
  text(o5, 970, 410);

  //Operant 14
  fill(0, 0, 255);
  textSize(30);
  text(o6, 1020, 410);




  //Klammer 1,5
  fill(0, 255, 255);
  textSize(30);
  text(k1, 380, 408);

  // //Klammer 2,5
  // fill(0, 255, 255);
  // textSize(30);
  // text(k2, 433, 408);

  // //Klammer 3.10
  // fill(0, 255, 255);
  // textSize(30);
  // text(k3, 555, 408);

  //Klammer 4,10
  fill(0, 255, 255);
  textSize(30);
  text(k4, 683, 408);

  //Klammer 5,15
  fill(0, 255, 255);
  textSize(30);
  text(k5, 883, 408);

  
  fill(0, 100, 255);
  noStroke();
  rect(L, 378, S, 40);


}

function changeLength5() {  
  S = 510;
  L = 570;

  
}

function changeLength10() {  
  S = 250;
  L = 820;
}

function changeLength15() {  
  S = 0;
  L = 0;

}














