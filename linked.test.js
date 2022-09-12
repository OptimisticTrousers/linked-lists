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
  });
});

describe("Node", () => {});
