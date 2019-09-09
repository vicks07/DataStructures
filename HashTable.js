class HashTable {
  constructor(){
    this.visited = {};
  }

  add(url){	
		if(typeof(url)=='string'){
      this.visited[url]==true?1:this.visited[url]+=1;
    }
    else if(typeof(url)=='object'){
      url.forEach(doc=>{
      this.visited[url]==true?1:this.visited[url]+=1;
      });
    }
  }
	
	check(url){
		return this.visited[url];
	}
	
	peek(){
		return this.visited;
	}
	
}