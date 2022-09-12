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
  describe("pop", () => {
    test("removes last node", () => {
      const linkedList = new LinkedList();

      linkedList.prepend(15);
      linkedList.prepend(10);
      linkedList.prepend(58);
      linkedList.prepend(18);

      linkedList.pop();

      expect(linkedList.size()).toBe(3);
      expect(linkedList.tail()).toEqual(new Node(58, null));
    });
  });
  test("head", () => {
    const linkedList = new LinkedList();

    linkedList.append(10);
    linkedList.append(6);

    const mockNode = new Node(10);

    mockNode.setNextNode(new Node(6, null));

    expect(linkedList.head()).toEqual(mockNode);
  });
  test("tail", () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(6);

    const mockNode = new Node(10);
    const nextMocknode = new Node(6);

    mockNode.setNextNode(nextMocknode);

    expect(linkedList.tail()).toEqual(nextMocknode.getNode());
  });

  test("size", () => {
    const linkedList = new LinkedList();

    linkedList.append(10);
    linkedList.append(6);
    linkedList.append(3);
    linkedList.append(10);
    linkedList.append(6);
    linkedList.append(3);

    expect(linkedList.size()).toBe(6);
  });
  test("contains", () => {
    const linkedList = new LinkedList();

    linkedList.append(10);
    linkedList.append(6);
    linkedList.append(3);
    linkedList.append(11);
    linkedList.append(19);
    linkedList.append(25);

    expect(linkedList.contains(19)).toBe(true);
    expect(linkedList.contains(30)).toBe(false);
  });
  test("find", () => {
    const linkedList = new LinkedList();

    linkedList.append(10);
    linkedList.append(6);
    linkedList.append(3);
    linkedList.append(11);
    linkedList.append(19);
    linkedList.append(25);

    expect(linkedList.find(19)).toEqual(4);
    expect(linkedList.find(34)).toEqual(null);
  });
});

describe("Node", () => {});
