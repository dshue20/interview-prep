// Design a stack which, in addition to pop and push, has a function min which 
// returns the minimum element.

class Stack {
	constructor(){
		this.stack = [ ];
		this.minStack = [ ];
	}

	push(val){
		this.stack.push(val);
		if (!this.minStack.length || val < this.minStack[this.minStack.length -1) 
			this.minStack.push(val);
	}

	pop( ){
		let val = this.stack.pop( );
		if (val === min( )) this.minStack.pop( );
		return val;
	}

	min( ){
		return this.minStack[this.minStack.length - 1);
	}	
}
