function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(255, 200, 210)
  fill(255, 100, 0)
  circle(0, 375, 1000)
  for (let i = 1; i <= 500; i++) {
    fill(i/500*255, i, 255);
    noStroke()
    rect(-500, 500-i, 1000, 100)
  }
  let arc_interval = 100
  fill(255, 100, 100)
  arc(0, 0, 650, 200, 0, PI)
  for (let i = 0; i < arc_interval; i++) {
    fill(255-255*i/arc_interval, 70+100/arc_interval*i, 255/arc_interval*i)
    arc(0, i*5, 650+2000*i/arc_interval, 200, 0, PI)
  }
  
  let birdsX = 200
  let birdsY = -200

  for(let i = 0; i < 3; i++) {
    if (i != 1) {
      fill(0);
      noStroke()
      beginShape();
      vertex(birdsX+i*10, birdsY-4);
      vertex(birdsX+6+i*10, birdsY);
      vertex(birdsX+i*10, birdsY-6);
      vertex(birdsX-6+i*10, birdsY);
      endShape();
    } else {
      fill(0);
      noStroke()
      beginShape();
      vertex(birdsX+i*10, birdsY-24);
      vertex(birdsX+6+i*10, birdsY-20);
      vertex(birdsX+i*10, birdsY-26);
      vertex(birdsX+-6+i*10, birdsY-20);
      endShape();
    }
  }

  birdsX = -200
  birdsY = -300

  for(let i = 0; i < 3; i++) {
    if (i != 1) {
      fill(0);
      noStroke()
      beginShape();
      vertex(birdsX+i*10, birdsY-4);
      vertex(birdsX+6+i*10, birdsY);
      vertex(birdsX+i*10, birdsY-6);
      vertex(birdsX-6+i*10, birdsY);
      endShape();
    } else {
      fill(0);
      noStroke()
      beginShape();
      vertex(birdsX+i*10, birdsY-24);
      vertex(birdsX+6+i*10, birdsY-20);
      vertex(birdsX+i*10, birdsY-26);
      vertex(birdsX+-6+i*10, birdsY-20);
      endShape();
    }
  }

  birdsX = 0
  birdsY = -350
  rotation1 = Math.cos(PI/9)
  rotation2 = Math.sin(PI/9)

  for(let i = 0; i < 3; i++) {
    if (i != 1) {
      fill(0);
      noStroke()
      beginShape();
      vertex(birdsX+i*10*rotation1+4*rotation2, birdsY+i*10*rotation2-4*rotation1);
      vertex(birdsX+(6+i*10)*rotation1, birdsY+(6+i*10)*rotation2);
      vertex(birdsX+i*10*rotation1+6*rotation2, birdsY+i*10*rotation2-6*rotation1);
      vertex(birdsX+(-6+i*10)*rotation1, birdsY+(-6+i*10)*rotation2);
      endShape();
    } else {
      fill(0);
      noStroke()
      beginShape();
      vertex(birdsX+i*10*rotation1+24*rotation2, birdsY+i*10*rotation2-24*rotation1);
      vertex(birdsX+(6+i*10)*rotation1+20*rotation2, birdsY+(6+i*10)*rotation2-20*rotation1);
      vertex(birdsX+i*10*rotation1+26*rotation2, birdsY+i*10*rotation2-26*rotation1);
      vertex(birdsX+(-6+i*10)*rotation1+20*rotation2, birdsY+(-6+i*10)*rotation2-20*rotation1);
      endShape();
    }
  }
}