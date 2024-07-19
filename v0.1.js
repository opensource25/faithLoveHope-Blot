/*
@title: faithLoveHope
@author: opensource25
@snapshot: snapshot1.png
*/

const spaceTop = 10;
const sizeCross = 20;
const spaceHeart = spaceTop + sizeCross + 20;
const sizeHeart = 20;
const spaceAnchor = spaceHeart + sizeHeart + 20;
const sizeAnchor = 20;

const width = 100;
const height = 100;
setDocDimensions(width, height);

var ParseCoords = (cstr, multScale = 1) => {
  const coordArray = [];
  for (const x of cstr.split(":")) {
    if (parseFloat(x)) {
      coordArray.push(parseFloat(x));
    }
  }
  return coordArray;
};

function drawHeart(size, space){
  const leftCirc = circle(size/2);
  bt.translate(leftCirc, [width/2 - size, spaceHeart], [0, 0]);
  bt.rotate(leftCirc, 120);

  const rightCirc = circle(size/2);
  bt.translate(rightCirc, [width/2, spaceHeart], [0, 0]);
  bt.rotate(rightCirc, 60);

  const leftCircLB = bt.bounds(leftCirc)['lb'];
  const rightCircRB = bt.bounds(leftCirc)['rb'];
  const bottomHalf = [ParseCoords(leftCircLB), [width/2, spaceHeart], ParseCoords(rightCircRB)];
  console.log(bottomHalf);
  
  drawLines(bottomHalf);
  drawLines(leftCirc);
  drawLines(rightCirc);
}

function circle(r) {
  const t = new bt.Turtle();
  t.jump([0, -r])
  t.arc(180, r);
  const cc = bt.bounds(t.path).cc;

  return t.path;
}

drawHeart(10, 10);
