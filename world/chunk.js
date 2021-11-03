const CHUNK_SIZE = 16;
const CHUNK_VOLUME = CHUNK_SIZE * 1 * CHUNK_SIZE;

class Chunk 
{
    initChunk() {
        for (let x = this.position.x; x < (this.position.x + CHUNK_SIZE); x++)
		{
			for (let y = this.position.y; y < (this.position.y + CHUNK_SIZE); y++)
			{
				for (let z = this.position.z; z < (this.position.z + CHUNK_SIZE); z++)
				{
					let pos = createVector(x, y, z);
					this.blocks[this.positionToIndex(pos)] = new Block(pos);
				}
			}
		}
    }

    constructor(offset) {
        this.offset = offset;
        this.position = this.offset.mult(CHUNK_SIZE);
        this.blocks = [];
        this.initChunk();
    }

    positionToIndex(pos) {
        return pos.x + CHUNK_SIZE * (pos.y + CHUNK_SIZE * pos.z)
    }

    getBlock(pos) {
        return this.blocks[this.positionToIndex(pos)];
    }

    show() {
        for(let i = 0; i < CHUNK_VOLUME; i++)
        {
            this.blocks[i].show();
        }
    }
}