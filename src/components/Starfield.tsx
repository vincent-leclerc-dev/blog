/* eslint-disable */
export const Starfield = () => {
  type Point = { x: number; y: number; z: number };

  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  let w: number;
  let h: number;

  const setCanvasExtents = () => {
    w = document.body.clientWidth;
    h = document.body.clientHeight;
    canvas.width = w;
    canvas.height = h;
  };

  setCanvasExtents();

  window.onresize = () => {
    setCanvasExtents();
  };

  const makeStars = (count: number): Point[] => {
    const out: Point[] = [];
    for (let i = 0; i < count; i++) {
      const s: Point = {
        x: Math.random() * 1600 - 800,
        y: Math.random() * 900 - 450,
        z: Math.random() * 1000,
      };
      if (s) {
        out.push(s);
      }
    }
    return out;
  };

  const stars: Point[] = makeStars(10000);

  const clear = () => {
    if (!context) {
      return;
    }
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const putPixel = (x: number, y: number, brightness: number) => {
    if (!context) {
      return;
    }

    const intensity = brightness * 255;
    const rgb = "rgb(" + intensity + "," + intensity + "," + intensity + ")";
    context.fillStyle = rgb;
    context.fillRect(x, y, 1, 1);
  };

  const moveStars = (distance: number) => {
    const count = stars.length;
    for (var i = 0; i < count; i++) {
      const s = stars[i];
      if (s) {
        s.z -= distance;
        while (s.z <= 1) {
          s.z += 1000;
        }
      }
    }
  };

  let prevTime: number;

  const init = (time: number) => {
    prevTime = time;
    requestAnimationFrame(tick);
  };

  const tick = (time: number) => {
    let elapsed = time - prevTime;
    prevTime = time;

    moveStars(elapsed * 0.03);

    clear();

    const cx = w / 2;
    const cy = h / 2;

    const count = stars.length;

    for (var i = 0; i < count; i++) {
      const star = stars[i];

      if (!star) {
        continue;
      }

      const x = cx + star.x / (star.z * 0.001);
      const y = cy + star.y / (star.z * 0.001);

      if (x < 0 || x >= w || y < 0 || y >= h) {
        continue;
      }

      const d = star.z / 1000.0;
      const b = 1 - d * d;

      putPixel(x, y, b);
    }

    requestAnimationFrame(tick);
  };

  requestAnimationFrame(init);

  return (
    <div id="starfield" className="inset-0">
      <canvas id="canvas"></canvas>
    </div>
  );
};
