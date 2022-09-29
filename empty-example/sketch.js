let db;
let characterSelected;
let Horacio, Jose, Sara, Alejandro, Ana, Daniela;

function setup() {
  createCanvas(1600, 800);

    Horacio = [
      0.8,
      0.6,
      0.9,
      0.3,
      0.6,
    ],

    Jose = [
      0.5,
      0.2,
      0.8,
      0.4,
      0.1,
    ],

    Sara = [
      1,
      0.4,
      0.2,
      0.9,
      0.6,
    ],

    Alejandro = [
      0.4,
      0.6,
      0.7,
      0.3,
      0.3,
    ],

    Ana = [
      0.5,
      0.9,
      0,
      0.3,
      0.7,
    ],

    Daniela = [
      0.7,
      0.9,
      0.4,
      0.6,
      0.1,
    ],

  console.log(db);
}

function draw() {
  background(232, 244, 252);
  //mouseCoords();

  rectMode(CENTER);
  noStroke();
  fill(63, 103, 141);

  for(let i = 134; i <= 810; i += 134){
    rect(i, 68, 100, 30, 5);
  }

  fill(255, 255, 255);
  textAlign(CENTER);
  text("Horacio", 134, 72);
  text("Jose", 267, 72);
  text("Sara", 400, 72);
  text("Alejandro", 539, 72);
  text("Ana", 670, 72);
  text("Daniela", 807, 72);

  calculateCos();
}

function calculateCos(){
  switch(characterSelected){
    case "Horacio":
        calculate(Horacio, Jose, Ana, Sara, Alejandro, Daniela);
      break;
    case "Jose":
        calculate(Jose, Horacio, Ana, Sara, Alejandro, Daniela);
      break;
    case "Sara":
        calculate(Ana, Jose, Horacio, Sara, Alejandro, Daniela);
      break;
    case "Alejandro":
        calculate(Sara, Jose, Ana, Horacio, Alejandro, Daniela);
      break;
    case "Ana":
        calculate(Alejandro, Jose, Ana, Sara, Horacio, Daniela);
      break;
    case "Daniela":
        calculate(Daniela, Jose, Ana, Sara, Alejandro, Horacio);
      break;
  }


}


function mouseCoords(){
  console.log(mouseX + ", " + mouseY);
}

function mousePressed(){
  selectCharacter();
}

function calculate(elementSelected, element2, element3, element4, element5, element6){
     
  let AB1 = (elementSelected[0] * element2[0]) + (elementSelected[1] * element2[1]) + (elementSelected[2] * element2[2]) + (elementSelected[3] * element2[3]) + (elementSelected[4] * element2[4]);

  let AB2 = (elementSelected[0] * element3[0]) + (elementSelected[1] * element3[1]) + (elementSelected[2] * element3[2]) + (elementSelected[3] * element3[3]) + (elementSelected[4] * element3[4]);

  let AB3 = (elementSelected[0] * element4[0]) + (elementSelected[1] * element4[1]) + (elementSelected[2] * element4[2]) + (elementSelected[3] * element4[3]) + (elementSelected[4] * element4[4]);

  let AB4 = (elementSelected[0] * element5[0]) + (elementSelected[1] * element5[1]) + (elementSelected[2] * element5[2]) + (elementSelected[3] * element5[3]) + (elementSelected[4] * element5[4]);

  let AB5 = (elementSelected[0] * element6[0]) + (elementSelected[1] * element6[1]) + (elementSelected[2] * element6[2]) + (elementSelected[3] * element6[3]) + (elementSelected[4] * element6[4]);

  let Ap1 = Math.sqrt(Math.pow(elementSelected[0], 2) + Math.pow(elementSelected[1], 2) + Math.pow(elementSelected[2], 2) + Math.pow(elementSelected[3], 2) + Math.pow(elementSelected[4], 2));

  let Ap2 = Math.sqrt(Math.pow(element2[0], 2) + Math.pow(element2[1], 2)+ Math.pow(element2[2], 2)+ Math.pow(element2[3], 2)+ Math.pow(element2[4], 2));

  let Ap3 = Math.sqrt(Math.pow(element3[0], 2)+ Math.pow(element3[1], 2)+ Math.pow(element3[2], 2)+ Math.pow(element3[3], 2)+ Math.pow(element3[4], 2));

  let Ap4 = Math.sqrt(Math.pow(element4[0], 2)+ Math.pow(element4[1], 2)+ Math.pow(element4[2], 2)+ Math.pow(element4[3], 2)+ Math.pow(element4[4], 2));

  let Ap5 = Math.sqrt(Math.pow(element5[0], 2)+ Math.pow(element5[1], 2)+ Math.pow(element5[2], 2)+ Math.pow(element5[3], 2)+ Math.pow(element5[4], 2));

  let Ap6 = Math.sqrt(Math.pow(element6[0], 2)+ Math.pow(element6[1], 2)+ Math.pow(element6[2], 2)+ Math.pow(element6[3], 2)+ Math.pow(element6[4], 2));

  let cos1, cos2, cos3, cos4, cos5;

  cos1 = AB1 / (Ap1 * Ap2);
  cos2 = AB1 / (Ap1 * Ap3);
  cos3 = AB1 / (Ap1 * Ap4);
  cos4 = AB1 / (Ap1 * Ap5);
  cos5 = AB1 / (Ap1 * Ap6);

  console.log(cos1 + ", " + cos2 + ", " + cos3 + ", " + cos4 + ", " + cos5);

  fill(0);
  circle(200, 400, 20);

  circle(200 + (cos1 * 500), 400, 20);
  circle(200 + (cos2 * 500), 400, 20);
  circle(200 + (cos3 * 500), 400, 20);
  circle(200 + (cos4 * 500), 400, 20);
  circle(200 + (cos5 * 500), 400, 20);

  let name1, name2, name3, name4, name5, name6;

  switch(elementSelected){
    case Horacio:
      name1 = "H";
      name2 = "J";
      name3 = "S";
      name4 = "Al";
      name5 = "An";
      name6 = "D";
      break; 
    case Jose:
      name1 = "J";
      name2 = "H";
      name3 = "S";
      name4 = "Al";
      name5 = "An";
      name6 = "D";
      break;
    case Sara:
      name1 = "S";
      name2 = "J";
      name3 = "H";
      name4 = "Al";
      name5 = "An";
      name6 = "D";
      break;
    case Alejandro:
      name1 = "Al";
      name2 = "J";
      name3 = "S";
      name4 = "H";
      name5 = "An";
      name6 = "D";
      break;
    case Ana:
      name1 = "An";
      name2 = "J";
      name3 = "S";
      name4 = "Al";
      name5 = "H";
      name6 = "D";
      break;
    case Daniela:
        name1 = "D";
        name2 = "J";
        name3 = "S";
        name4 = "Al";
        name5 = "An";
        name6 = "H";
      break; 
  }

    text(name1, 200, 430);
    text(name2, 200 + (cos1 * 500), 430);
    text(name3, 200 + (cos2 * 500), 430);
    text(name4, 200 + (cos3 * 500), 430);
    text(name5, 200 + (cos4 * 500), 430);
    text(name6, 200 + (cos5 * 500), 430);


}

function selectCharacter(){
  if(mouseY > 52 && mouseY < 83){
      if(mouseX > 82 && mouseX < 183){
        characterSelected = "Horacio";
      }

      else if(mouseX > 218 && mouseX < 318){
        characterSelected =  "Jose";
      }

      else if(mouseX > 351 && mouseX < 450){
        characterSelected =  "Sara";
      }

      else if(mouseX > 487 && mouseX < 585){
        characterSelected =  "Alejandro";
      }

      else if(mouseX > 619 && mouseX < 720){
        characterSelected =  "Ana";
      }

      else if(mouseX > 752 && mouseX < 852){
        characterSelected =  "Daniela";
      }
  }
}