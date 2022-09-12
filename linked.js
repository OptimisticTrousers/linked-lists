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
    this.#prev = this.#head;
    this.#head = new Node(value, this.#prev);
    this.#size = this.#size + 1;
    if (this.#prev) {
      this.#prev.setNextNode(null);
    }
    if (this.#tail === null) {
      this.#tail = this.#prev;
    }
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
      if (temp.value === value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  };

  find = (value) => {
    let temp = this.#head;
    let index = 0;

    while (temp) {
      if (temp.value === value) {
        return index;
      }
      index++;
      temp = temp.next;
    }
    return null;
  };

  pop = () => {
    if (this.#prev) {
      this.#prev.removeNextNode();
      this.#tail = this.#prev;
      this.#size = this.#size - 1;
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

  toString = () => {
    let temp = this.#head;
    let output = `( ${temp.value} ) => `;
    while (temp) {
      temp = temp.nextNode;
      if (temp === null) {
        output += `null`;
      } else {
        output += `( ${temp.value} ) => `;
      }
    }
    return output;
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
module.exports = {
  Node,
  LinkedList,
};
