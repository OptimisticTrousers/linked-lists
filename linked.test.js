const linked = require("./linked");
const LinkedList = linked.LinkedList;
const Node = linked.Node;

describe("LinkedList", () => {
  describe("append", () => {
    test("correctly adds a node", () => {
      const linkedList = new LinkedList();
      linkedList.append(10);
      const mockNode = {
        value: 10,
        nextNode: null,
        removeNextNode: jest.fn(),
        setNextNode: jest.fn(),
      };
      expect(linkedList.head()).toEqual(mockNode);
      expect(linkedList.tail()).toEqual(mockNode);
    });
    test("size increases after a node is appended", () => {
      const linkedList = new LinkedList();
      linkedList.append(5);
      linkedList.append(100);
      linkedList.append(30);
      linkedList.append(38);
      linkedList.append(45);
      linkedList.append(78);
      expect(linkedList.size()).toBe(6);
    });
  });
  describe("prepend", () => {
    test("new head is latest prepended node", () => {
      const linkedList = new LinkedList();

      linkedList.prepend(15);
      linkedList.prepend(10);
      linkedList.prepend(58);
      linkedList.prepend(18);

      expect(linkedList.head().value).toBe(18);
      expect(linkedList.tail().value).toBe(15);
    });
  });
});

describe("Node", () => {});
