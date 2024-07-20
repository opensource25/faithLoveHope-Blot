/*
@title: faithLoveHope
@author: opensource25
@snapshot: snapshot1.png
*/

const heightHeart = 175

const crossWidth = 20

const heartWidth = 0
const heartColor = "Red"

const width = 250;
const height = 250;
setDocDimensions(width, height);
          

function generateHeart(){
  const turtle = new bt.Turtle()

  //left
  turtle.left(140)
  turtle.forward(111)
  for (let i = 0; i < 200; i++){
    turtle.right(1)
    turtle.forward(1)
  }

  //right
  turtle.left(120)
  for (let i = 0; i < 200; i++){
    turtle.right(1)
    turtle.forward(1)
  }
  turtle.forward(111.65)
  
  return turtle.path
}

function generateCrosss(){
  const cross = [
    //left
    [width/2-crossWidth/2, 0],  
    [width/2-crossWidth/2, crossWidth*5], 
    [width/2-crossWidth*3, crossWidth*5], 
    [width/2-crossWidth*3, crossWidth*6], 
    [width/2-crossWidth/2, crossWidth*6], 
    [width/2-crossWidth/2, crossWidth*8],
    //right 
    [width/2+crossWidth/2, crossWidth*8], 
    [width/2+crossWidth/2, crossWidth*6], 
    [width/2+crossWidth*3, crossWidth*6],  
    [width/2+crossWidth*3, crossWidth*5],
    [width/2+crossWidth/2, crossWidth*5],
    [width/2+crossWidth/2, 0],  
    //close
    [width/2-crossWidth/2, 0]];
  return cross
}

const heart = generateHeart();
bt.translate(heart, [width/2, 0]);
//drawLines(heart, { fill: heartColor, width: heartWidth });

const cross = generateCrosss();
drawLines(cross);


