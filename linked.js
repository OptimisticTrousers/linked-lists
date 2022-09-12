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

  prepend = (value) => {
    this.#head = new Node(value, this.#head);
  };

  pop = () => {
    if (this.#prev) {
      this.#prev.removeNextNode();
      this.#tail = this.#prev;
    }
  };

  head = () => {
    return this.#head;
  };

  tail = () => {
    return this.#tail;
  };

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
  removeNextNode = () => {
    this.nextNode = null;
  };
}

const linkedList = new LinkedList();

linkedList.append(5);
