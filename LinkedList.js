class Node{
	constructor(val){
		this.val = val;
		this.next= null;
	}
}

class LinkedList{
	constructor(){
        this.root = null;	
        this.size= 0;
	}
	
	add(val){
		if(this.root == null){
			this.root = new Node(val);
			return;
        }
        let current = this.root;
        while(current.next){
            current = current.next;
        }
        current.next = new Node(val);
	}
	
	
	search(val){
		let current = this.root;
        while(current.next){
            if(current.val === val){
                return true;
            }
            current = current.next;
        }
        return false;
    }
}



ll = new LinkedList();

ll.add(10);
ll.add(30);
ll.add(20);
ll.add(40);
ll.add(50);

console.log(ll.search('Hello'));