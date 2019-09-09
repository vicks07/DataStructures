class Node{
	constructor(data,left=null,right=null){
		this.data=data;
		this.left=left;
		this.right=right;
	}
}

class BST{
	constructor(){
		this.root =null;
	}
	insert(data) 
{
    var newNode = new Node(data);
    if(this.root === null) 
        this.root = newNode; 
    else
        this.insertNode(this.root, newNode); 
} 
  
insertNode(node, newNode) 
{ 
   if(newNode.data < node.data) 
    { 
        if(node.left === null) 
            node.left = newNode; 
        else 
            this.insertNode(node.left, newNode);  
    } 
    else
    { 
        if(node.right === null) 
            node.right = newNode; 
        else
            this.insertNode(node.right,newNode); 
    } 
} 
inorder(node) 
{ 
    if(node !== null) 
    { 
        this.inorder(node.left); 
        console.log(node.data); 
        this.inorder(node.right); 
    } 
} 

getRootNode() 
{ 
    return this.root; 
} 
	print(){
	console.log(this.root);
	}
}
