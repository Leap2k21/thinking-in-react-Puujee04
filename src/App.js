import './App.css';

function App() {
  class Stack{
    constructor(){
      this.top = null;
    }

    // add new element to stack
    push(node) {
      node.prev = this.top;
      this.top = node;
    }

    // remove top element
    pop() {
        // remove prev from current top
      
        // new top is current top's prev
        this.top 
    }

    // return top;
    peek() {
        // return cur
        return this.top;
    }

    // checks stack is empty
    isEmpty() {
      return this.top === null ? true : false;
    }

    // print stack from bottom to top
    print() {
    }

  }

  class Node{
    constructor(value){
      this.value = value;
      this.prev = null;
    }
  }

  const n1 = new Node(10);
  const n2 = new Node(20);
  const n3 = new Node(30);
  const n4 = new Node(40);
  const n5 = new Node(50);
  const stack = new Stack();

  stack.push(n1);
  stack.push(n2);
  stack.push(n3);
  stack.push(n4);
  stack.push(n5);
  stack.pop();
  stack.print();
  return (
    <div className="App">
      
    </div>
  );
}

export default App;