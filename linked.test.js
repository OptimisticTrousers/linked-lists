const linked = require("./linked");
const LinkedList = linked.LinkedList;
const Node = linked.Node;

describe("LinkedList", () => {
  test("append", () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(5);
    linkedList.append(100);
    linkedList.append(30);
    linkedList.append(38);
    linkedList.append(45);
    linkedList.append(78);

    expect(JSON.stringify(linkedList.head())).toEqual(
      JSON.stringify(
        new Node(
          10,
          new Node(
            5,
            new Node(
              100,
              new Node(30, new Node(38, new Node(45, new Node(78, null))))
            )
          )
        )
      )
    );
  });
  describe("prepend", () => {
    test("new head is latest prepended node", () => {
      const linkedList = new LinkedList();

      linkedList.prepend(15);
      linkedList.prepend(10);
      linkedList.prepend(58);
      linkedList.prepend(18);

      expect(JSON.stringify(linkedList.head())).toEqual(
        JSON.stringify(
          new Node(18, new Node(58, new Node(10, new Node(15, null))))
        )
      );
    });
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
  describe("pop", () => {
    test("removes last node", () => {
      const linkedList = new LinkedList();

      linkedList.append(15);
      linkedList.append(10);
      linkedList.append(58);
      linkedList.append(18);

      linkedList.pop();

      expect(linkedList.size()).toBe(3);
      expect(JSON.stringify(linkedList.tail())).toEqual(
        JSON.stringify(new Node(58, null))
      );
    });
  });

  test("head", () => {
    const linkedList = new LinkedList();

    linkedList.append(10);
    linkedList.append(6);
    linkedList.append(15);

    const mockNode = new Node(10, new Node(6, new Node(15, null)));

    expect(JSON.stringify(linkedList.head())).toEqual(JSON.stringify(mockNode));
  });
  test("tail", () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(6);

    const nextMocknode = new Node(6, null);
    new Node(10, nextMocknode);

    expect(JSON.stringify(linkedList.tail())).toEqual(
      JSON.stringify(nextMocknode)
    );
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
  test("toString", () => {
    const linkedList = new LinkedList();

    linkedList.append(10);
    linkedList.append(6);
    linkedList.append(3);
    linkedList.append(11);
    linkedList.append(19);
    linkedList.append(25);

    expect(linkedList.toString()).toEqual(
      "( 10 ) => ( 6 ) => ( 3 ) => ( 11 ) => ( 19 ) => ( 25 ) => null"
    );
  });
});

describe("Node", () => {});
