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
    insert(data) {
        var newNode = new Node(data);
        if(this.root === null) 
            this.root = newNode; 
        else
            this.insertNode(this.root, newNode); 
    } 
    
    insertNode(node, newNode) { 
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
    inorder(node) { 
        if(node !== null) 
        { 
            this.inorder(node.left); 
            console.log(node.data); 
            this.inorder(node.right); 
        } 
    } 

    getRootNode() { 
        return this.root; 
    } 

    print(){
        console.log(this.root);
    }
        
    lca(root,val1,val2){ //Least Common ancestor
        //console.log('Root',root.data,val1,val2);

        if(root.data > val1 && root.data > val2){
            ////console.log('Left',root.val,val1,val2);
            return this.lca(root.left,val1,val2);
        }
        else if(root.data < val1 && root.data < val2){
        // console.log('Right',root.val,val1,val2);
            return this.lca(root.right,val1,val2);
        }
        else{
            return root.data;
        }
    }
}


// let Main = function(){




    

//     //*** Binary Search Tree */
//     bst = new BST();
	
// 	bst.insert(5);
// 	bst.insert(3);
// 	bst.insert(15);
// 	bst.insert(10);
// 	bst.insert(12);
// 	bst.insert(16);
//     let root = bst.getRootNode();
//     //console.log('Root',root);
// 	console.log(bst.lca(root,3,16));    
//     // //bst.inorder(root);
//     ///**** End of BST */


// }


// Main();
