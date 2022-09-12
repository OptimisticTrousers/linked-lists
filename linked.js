class LinkedList {
  #prev = null;
  #size = 0;
  #head = null;
  #tail = null;

  append = (value) => {
    this.#prev = this.#tail;
    this.#tail = new Node(value, null);
    this.#size = this.#size + 1;
    if (this.#prev) {
      this.#prev.setNextNode(this.#tail);
    }
    if (this.#head === null) {
      this.#head = this.#tail;
    }
  };

  head = () => {};

  size = () => {
    return this.#size;
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

const linkedList = new LinkedList();

linkedList.append(5);
