class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
    }
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(val) {
    if (val < 0 || val >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== val) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(val, index) {
    let currentNode = this.get(index);
    if (currentNode) {
      currentNode.val = val;
      return true;
    }
    return false;
  }
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let preNode = this.get(index - 1);
    let newNode = new Node(val);
    let temp = preNode.next;
    preNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      (node.next = prev), (prev = node);
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(2);
list.push(4);
list.push(8);

console.log(list.reverse());
// console.log(list.insert(3));
// console.log(list);
