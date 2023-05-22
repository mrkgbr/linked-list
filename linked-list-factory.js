function LinkedList() {
  // represent the full list
  let currentHead = null;
  let currentSize = 0;

  function append(value) {
    // adds a new node containing value to the end of the list
    // if the list is empty returns the new node
    if (currentHead == null) {
      let newNode = node(value, null);
      currentHead = newNode;
      currentSize++;
      return;
    }
    // if the list is not empty
    let newNode = node(value, null);
    let currentNode = currentHead;
    while (currentNode) {
      if (!currentNode.nextNode) {
        currentNode.nextNode = newNode;
        currentSize++;
        break;
      }
      currentNode = currentNode.nextNode;
    }
  }

  function prepend(value) {
    // adds a new node containing value to the start of the list
    let newNode = node(value, currentHead);
    currentHead = newNode;
    currentSize++;
  }

  function size() {
    // returns the total number of nodes in the list
    console.log(currentSize);
  }

  function head() {
    // returns the first node in the list
    console.log(currentHead);
  }

  function tail() {
    //  returns the last node in the list
    let currentNode = currentHead;
    while (currentNode) {
      if (!currentNode.nextNode) {
        break;
      }
      currentNode = currentNode.nextNode;
    }
    console.log(currentNode);
  }

  function at(index) {
    // returns the node at the given index
    let counter = 0;
    let currentNode = currentHead;
    while (currentNode) {
      if (index == counter) {
        break;
      }
      if (!currentNode.nextNode) {
        currentNode = null;
        break;
      }
      counter++;
      currentNode = currentNode.nextNode;
    }
    console.log(currentNode);
  }

  function pop() {
    //  removes the last element from the list
    let currentNode = currentHead;
    if (!currentNode || !currentNode.nextNode) {
      currentHead = null;
      return;
    }
    while (currentNode) {
      if (!currentNode.nextNode.nextNode) {
        currentNode.nextNode = null;
        break;
      }
      currentNode = currentNode.nextNode;
    }
  }

  return { append, prepend, size, head, tail, at, pop };
}

function node(v = null, n = null) {
  let value = v;
  let nextNode = n;
  return {
    value: value,
    nextNode: nextNode,
  };
}

const myList = LinkedList();
myList.append("FirstItem");
myList.append("SecondItem");
myList.append("ThirdItem");
myList.prepend("NewFirst");
myList.append("LastItem");
// myList.head();
// myList.at(0);
// myList.at(1);
// myList.at(2);
// myList.at(3);
// myList.at(4);
// myList.at(5);
// myList.size();

myList.tail();
myList.pop();
myList.tail();
myList.pop();
myList.tail();
myList.pop();
myList.tail();
myList.pop();
myList.tail();
myList.pop();
myList.tail();
myList.pop();
myList.tail();
