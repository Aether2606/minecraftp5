const BLOCK_SIZE = 50;

class Block
{
    constructor(position) {
        this.position = position;
    }

    show() {
        normalMaterial();
        push();
        translate(BLOCK_SIZE * this.position.x, -BLOCK_SIZE * this.position.z, BLOCK_SIZE * this.position.y);
        fill(0, this.position.y * 10, 0);
        box(BLOCK_SIZE);
        pop();
    }
}