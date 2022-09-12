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
      const oldHead = this.#head
      this.#head = new Node(value, oldHead);
      this.#size = this.#size + 1
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
    while (temp.nextNode) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.nextNode;
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
      temp = temp.nextNode;
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

  insertAt = (value, index) => {

  }

  removeAt = (index) => {
    
  }
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
