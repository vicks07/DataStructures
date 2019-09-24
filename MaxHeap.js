

class Heap{
    constructor(){
        this.value = [];
    }
    
    add(val){
        let index = this.value.length;
        this.value.push(val);
        let temp=0;
        while(index > 0 && this.value[index]>=this.value[Math.floor((index+1)/2-1)]){
            temp = this.value[Math.floor((index+1)/2-1)];
            this.value[Math.floor((index+1)/2-1)] = this.value[index];
            this.value[index] = temp;
            index = Math.floor((index+1)/2-1);
        }
    }
    heapify(){
        
    }
    
}

const heap = new Heap();

heap.add(10);
heap.add(15);
heap.add(30);
heap.add(5);
heap.add(12);
heap.add(17);
heap.add(111);

console.log(heap.value);