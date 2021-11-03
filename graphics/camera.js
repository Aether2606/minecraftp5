const KEY_W = 87;
const KEY_S = 83;
const KEY_A = 65;
const KEY_D = 68;
const KEY_SPACE = 32;
const KEY_LEFT_SHIFT = 16;

class Camera
{
    constructor(position) {
        this.position = position;
        this.speed = 1;
        this.rotateSpeed = 0.001;
        this.p5Camera = createCamera();
    }

    update() {
        //@note: thank god p5 does the matrix multiplications for us
        this.p5Camera.move((keyIsDown(KEY_D) ? this.speed : 0) + (keyIsDown(KEY_A) ? -this.speed : 0),
                            (keyIsDown(KEY_LEFT_SHIFT) ? this.speed : 0) + (keyIsDown(KEY_SPACE) ? -this.speed : 0),
                            (keyIsDown(KEY_S) ? this.speed : 0) + (keyIsDown(KEY_W) ? -this.speed : 0));

        this.p5Camera.pan(-movedX * this.rotateSpeed);
        this.p5Camera.tilt(movedY * this.rotateSpeed);
    }
}