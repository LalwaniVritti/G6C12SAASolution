var day;

function setup() {
  createCanvas(400, 400);
  day = Math.round(random(1,7))

  month = Math.round(random(1,6))
}

function draw() {
  background(220);

  textSize(20);

  switch (month) {
    case 1:
      text("January",150,150);
      break;
    case 2:
      text("February",150,150);
      break;
    case 3:
      text("March",150,150);
      break;
    case 4:
      text("April",150,150);
      break;
    case 5:
      text("May",150,150);
      break;
    case 6:
      text("June",150,150);
      break;
    case 7:
      text("July",150,150);
      break;
  } 

  switch (day) {
    case 1:
      text("Monday",150,200);
      break;
    case 2:
      text("Tuesday",150,200);
      break;
    case 3:
      text("Wednesday",150,200);
      break;
    case 4:
      text("Thursday",150,200);
      break;
    case 5:
      text("Friday",150,200);
      break;
    case 6:
      text("Saturday",150,200);
      break;
    case 7:
      text("Sunday",150,200);
      break;
  } 
}
