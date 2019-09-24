class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class SLinkedList{
    constructor(){
        this.root = null;
        this.size=0;
    }

    Add(data){
        if(this.root==null){
            this.root = new Node(data);
            return;
        }
        let current = this.root;
        
       //console.log('Data',data);
       console.log('Current',current,data);
        let index=0;
        let flag= false;
        while(current.next){
            console.log(`COmpare ${index}`,current.data,data);
            if(current.data < data){
                let temp = current;
                current.next = new Node(data);
                current = current.next;
                current.next = temp;
                break;
            }
            else{
               //console.log('Data-1',data);
                current = current.next;
            }
            index++;
        }
        current.next = new Node(data);
    }
    Print(){
        let current=this.root;
        while(current.next!=null){
            console.log(current.data);
            current=current.next;
        }
        console.log(current.data);
    }
}



const sl  = new SLinkedList();

sl.Add(10);
sl.Add(30);
sl.Add(20);
sl.Add(40);
sl.Add(50);

sl.Print();


