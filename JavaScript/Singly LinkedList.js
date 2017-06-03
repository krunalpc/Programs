function LinkedList(){
	this.head = null;
}

LinkedList.prototype.push = function(val){
	var node = {
		value: val,
		next: null
	}
	if(!this.head){
		this.head = node;
	} else {
		current = this.head;
		while(current.next){
			current = current.next;
		}
		current.next = node;
	}
}

var sll = new LinkedList();

//push node
sll.push(2);
sll.push(3);
sll.push(4);
console.log(sll);