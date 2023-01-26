function setup() {
  createCanvas(1000, 1000, WEBGL)
  noStroke()
}

function draw() {
  background(150, 200, 255)

  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(250, 250, 250, -500, -500, 550);

  fill(120, 170, 170)
  arc(-300, 200, 800, 600, PI, 0)

  fill(100, 150, 150)
  arc(300, 200, 700, 500, PI, 0)
  
  fill(100, 200, 100)
  arc(0, 200, 1000, 300, PI, 0)
  rect(-500, 200, 1000, 300)

  for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
      push()
      specularMaterial(50)
      shininess(200)
      translate(120+4*i, -10-6*i, -i*10)
      rotateX(frameCount * 0.01)
      rotateY(frameCount * 0.01)
      box(5)
      pop()
    } else {
      push()
      specularMaterial(50)
      shininess(200)
      translate(100+4*i+5, -40-5*i+5, -i*10)
      rotateX(-frameCount * 0.01)
      rotateY(-frameCount * 0.01)
      box(5)
      pop()
    }
  }

  push()
  translate(100, 20, 20)
  rotateX(PI/18)
  rotateY(-PI/6)
  rotateZ(PI/9)
  plane(50, 100)
  pop()

  for (let i = 0; i < 50; i++) {
    if (i % 2 == 0) {
      push()
      specularMaterial(50)
      shininess(200)
      translate(-230-4*i, 20-6*i)
      rotateX(frameCount * 0.01)
      rotateY(frameCount * 0.01)
      box(10-i/10)
      pop()
    } else {
      push()
      specularMaterial(50)
      shininess(200)
      translate(-300-4*i+5, 30-5*i+5)
      rotateX(-frameCount * 0.01)
      rotateY(-frameCount * 0.01)
      box(10-i/10)
      pop()
    }
  }
  
  push()
  translate(-200, 100, 100)
  rotateX(PI/18)
  rotateY(PI/6)
  rotateZ(-PI/9)
  plane(100, 200)
  pop()

  let faceX = 100
  let faceY = 200
  fill(255, 200, 210)
  beginShape()
  curveVertex(170+faceX, 300+faceY)
  curveVertex(170+faceX, 300+faceY)
  curveVertex(200+faceX, faceY)
  curveVertex(faceX, faceY)
  curveVertex(faceX+30, 300+faceY)
  curveVertex(faceX+30, 300+faceY)
  translate(0, 0, 200)
  endShape()

  fill(255, 255, 255)
  circle(170, 300, 100)
  fill(255, 0, 0)
  circle(170, 305, 40)
  fill(0)
  circle(170, 305, 30)

  fill(255, 255, 255)
  circle(220, 230, 50)
  fill(255, 0, 0)
  circle(225, 230, 40)
  fill(0)
  circle(225, 230, 30)
  
  hair()
}

function hair() {
  fill(0)
  circle(110, 190, 60)
  fill(0)
  circle(130, 180, 60)
  fill(0)
  circle(150, 170, 60)
  fill(0)
  circle(170, 160, 60)
  fill(0)
  circle(180, 160, 60)
  fill(0)
  circle(210, 160, 60)
  fill(0)
  circle(240, 170, 60)
  fill(0)
  circle(270, 180, 60)
}