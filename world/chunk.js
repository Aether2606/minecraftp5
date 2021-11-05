const CHUNK_SIZE_X = 16;
const CHUNK_SIZE_Y = 3;
const CHUNK_SIZE_Z = 16;
const CHUNK_VOLUME = CHUNK_SIZE_X * CHUNK_SIZE_Y * CHUNK_SIZE_Z;

class Chunk 
{
    initChunk() {
        for (let x = this.position.x; x < (this.position.x + CHUNK_SIZE_X); x++)
		{
			for (let y = this.position.y; y < (this.position.y + CHUNK_SIZE_Y); y++)
			{
				for (let z = this.position.z; z < (this.position.z + CHUNK_SIZE_Z); z++)
				{
					let pos = createVector(x, y, z);
                    let fixedPosition = createVector(x - this.position.x, y - this.position.y, z - this.position.z);
                    
					this.blocks[this.positionToIndex(fixedPosition)] = new Block(pos);
				}
			}
		}
    }

    constructor(offset) {
        this.offset = offset;
        this.position = createVector(offset.x * CHUNK_SIZE_X, offset.y * CHUNK_SIZE_Y, offset.z * CHUNK_SIZE_Z);
        this.blocks = [];
        this.initChunk();
    }

    positionToIndex(pos) {
        return pos.x + CHUNK_SIZE_X * (pos.y + CHUNK_SIZE_Y * pos.z)
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