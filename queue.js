class Queue {
	
	constructor(){
		this.items = [];
	}
	
	enqueue(val){
    if(typeof(val)=='string')
      this.items.push(val);
    else if(typeof(val)=='object'){
      this.items.push(...val);
    }
	}
	
	dequeue(){
		if(this.isEmpty)
			return false;
		return this.items.shift();
	}
	peek(){
		return this.items;
  }
  length(){
    return this.items.length;
  }
}

