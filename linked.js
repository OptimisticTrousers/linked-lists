class LinkedList {
  prev = null;
  current = null;
  append = (value) => {
    prev = current;
    current = new Node(value, null);
    this.prev.setNextNode(current);
  };

  size = () => {
    return size;
  };
}

class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }

  setNextNode = (node) => {
    this.nextNode = node;
  };
}
