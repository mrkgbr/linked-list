class LinkedList {
  #head = null;
  #size = 0;

  append(value) {
    // adds a new node containing value to the end of the list
    const newNode = new Node(value);
    if (this.#head == null) {
      this.#head = newNode;
      this.#size++;
      return;
    }
    this.#appendList(this.#head, newNode);
    this.#size++;
  }

  prepend(value) {
    //adds a new node containing value to the start of the list
    const newNode = new Node(value);
    newNode.link = this.#head;
    this.#head = newNode;
    this.#size++;
  }

  size() {
    // returns the total number of nodes in the list
    console.log(this.#size);
  }

  head() {
    // returns the first node in the list
    console.log(this.#head);
  }

  tail() {
    // returns the last node in the list
    const lastNode = this.#lastNode(this.#head);
    console.log(lastNode);
  }

  at(index) {
    // returns the node at the given index
    const counter = 0;
    const node = this.#nodeAt(this.#head, index, counter);
    console.log(node);
  }

  pop() {
    // removes the last element from the list
    this.#popNode(this.#head);
    console.log("Last item removed.");
    this.#size--;
  }

  contains(value) {
    // returns true if the passed in value is in the list and otherwise returns false
    const result = this.#nodeByValue(this.#head, value);
    console.log(result);
  }

  find(value) {
    // returns the index of the node containing value, or null if not found
    const index = 0;
    const result = this.#findNode(this.#head, value, index);
    console.log(result);
  }

  toString() {
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    const result = this.#lisToString(this.#head);
    console.log(result);
  }

  insertAt(value, index) {
    // that inserts a new node with the provided value at the given index
  }

  removeAt(index) {
    // that removes the node at the given index
  }

  #appendList(currentNode, newNode) {
    if (currentNode.link == null) {
      currentNode.link = newNode;
      return;
    }
    return this.#appendList(currentNode.link, newNode);
  }

  #lastNode(currentNode) {
    if (currentNode.link == null) {
      return currentNode;
    }
    return this.#lastNode(currentNode.link);
  }

  #nodeAt(currentNode, index, counter) {
    if (counter == index) {
      return currentNode;
    }
    if (currentNode.link == null) {
      return `Index ${index} is out of the list. Size of the list is ${
        this.#size
      }, the last index is ${this.#size - 1}.`;
    }
    let newCounter = counter + 1;
    return this.#nodeAt(currentNode.link, index, newCounter);
  }

  #popNode(currentNode) {
    if (currentNode.link == null) {
      return true;
    }
    const nextNode = this.#popNode(currentNode.link);
    if (nextNode) {
      currentNode.link = null;
    }
  }

  #nodeByValue(currentNode, searchValue) {
    if (currentNode.value == searchValue) {
      return true;
    }
    if (currentNode.link == null) {
      return false;
    }
    return this.#nodeByValue(currentNode.link, searchValue);
  }

  #findNode(currentNode, findValue, index) {
    if (currentNode.value == findValue) {
      return index;
    }
    if (currentNode.link == null) {
      return null;
    }
    const newIndex = index + 1;
    return this.#findNode(currentNode.link, findValue, newIndex);
  }

  #lisToString(currentNode) {
    if (currentNode.link == null) {
      return `(${currentNode.value}) -> null`;
    }
    const string = this.#lisToString(currentNode.link);
    let newString = `(${currentNode.value}) -> ${string}`;
    return newString;
  }
}

class Node {
  constructor(value = null, link = null) {
    this.value = value;
    this.link = link;
  }
}

let myList = new LinkedList();
myList.append("FirstNode");
myList.append("SecondNode");
myList.append("ThirdNode");
myList.prepend("NewFirstNode");
myList.prepend("SecondNewFirstNode");
// myList.head();
// myList.at(0);
// myList.at(1);
// myList.at(2);
// myList.at(3);
// myList.at(4);
// myList.tail();
// myList.contains("FirstNode");
// myList.find("SecondNode");
// myList.size();
// myList.toString();
// myList.pop();
// myList.size();
// myList.toString();
