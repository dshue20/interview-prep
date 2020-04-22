class MaxHeap {
    constructor(){
        this.array = [null];
    }

    getParent(idx){
        return Math.floor(idx/2);
    }

    getLeftChild(idx){
        return idx*2;
    }

    getRightChild(idx){
        return idx * 2 + 1;
    }

    siftUp(idx){
        let atIdx;
        let toSwap;
        let parentIdx = this.getParent(idx);
        while (idx && this.array[parentIdx] && this.array[idx] > this.array[parentIdx]){
            atIdx = this.array[idx];
            toSwap = this.array[parentIdx];
            this.array[parentIdx] = atIdx;
            this.array[idx] = toSwap;
            idx = parentIdx;
            parentIdx = this.getParent(idx);
        }
    }

    insert(val){
        this.array.push(val);
        this.siftUp(this.array.length-1);
    }

    siftDown(idx){
        let left = this.getLeftChild(idx);
        let right = this.getRightChild(idx);
        let toSwap = Math.max(this.array[left], this.array[right]) === this.array[left] ? left : right;
        while (left < this.array.length && this.array[idx] < this.array[toSwap]){
            let atIdx = this.array[idx];
            this.array[idx] = this.array[toSwap];
            this.array[toSwap] = atIdx;
            idx = toSwap;
            left = this.getLeftChild(idx);
            right = this.getRightChild(idx);
            toSwap = Math.max(this.array[left], this.array[right]) === this.array[left] || !this.array[right] ? left : right;
        };
    }

    deleteMax(){
        if (this.array.length === 1) return null;
        const max = this.array[1];
        if (this.array.length > 2){
            this.array[1] = this.array.pop();
        } else {
            this.array.pop();
        }
        this.siftDown(1);
        return max;
    }
}

module.exports = {
    MaxHeap
};