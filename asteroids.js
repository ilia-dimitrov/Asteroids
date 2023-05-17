//set up asteroids
const roids = [];
const ROIDS_NUM = 3; // starting number of asteroids
const ROIDS_SIZE = 100; // starting size of asteroids in pixels
const ROIDS_SPD = 50; // starting speed of asteroids in pixels per second
const ROIDS_VERT = 10; // average number of vertices on each asteroid
createAsteroidBelt();
function createAsteroidBelt() {
  let roids = [];
  let x, y;
  for (let i = 0; i < ROIDS_NUM; i++) {
    x = Math.floor(Math.random() * canv.width);
    y = Math.floor(Math.random() * canv.height);
    roids.push(newAsteroid(x, y));
  }
}
function newAsteroid(x, y) {
  const roid = {
    x: x,
    y: y,
    xv: ((Math.random() * ROIDS_SPD) / FPS) * (Math.random() < 0.5 ? 1 : -1),
    yv: ((Math.random() * ROIDS_SPD) / FPS) * (Math.random() < 0.5 ? 1 : -1),
    r: ROIDS_SIZE / 2,
    a: Math.random() * Math.PI * 2, // in radians
    vert: Math.floor(Math.random() * (ROIDS_VERT + 1) + ROIDS_VERT / 2),
  };
  return roid;
}

//draw asteroids
ctx.strokeStyle = "slategrey";
ctx.lineWidth = SHIP_SIZE / 2;

let x, y, r, a, vert;

for (let i = 0; i < roids.length; i++) {
  //get the asteroid properties
  x = roids[i].x;
  y = roids[i].y;
  r = roids[i].r;
  a = roids[i].a;
  vert = roids[i].vert;
  // draw a path
  ctx.beginPath();
  ctx.moveTo(x + r * Math.cos(a), y + r * Math.sin(a));
  //draw the polygon
  for (let j = 0; j < vert; j++) {
    ctx.lineTo(
      x + r * Math.cos(a + (j * Math.PI * 2) / vert),
      y + r * Math.cos(a + (j * Math.PI * 2) / vert)
    );
  }
  ctx.closePath();
  ctx.stroke();
  // move the asteroid
  // handle edge of screen
}
