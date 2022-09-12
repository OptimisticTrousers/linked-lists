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

  at = (index) => {
    let i = 0;
    let temp = this.#head;
    while (temp.next && i <= index) {
      if (i === index) {
        return temp;
      }
      temp = temp.next;
      i++;
    }
  };

  contains = (value) => {
    let temp = this.#head;
    while (temp.next) {
      temp = temp.next;
      if (temp.value === value) {
        return true;
      }
    }
    return false;
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
