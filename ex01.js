import { SinglyLinkedList, Node } from "./LinkedList.js";

const linkedList = new SinglyLinkedList();

for (let i = 0; i < 20; i++) {
  linkedList.push(i);
}

const start = performance.now();
const insert = (list, current, count = 0) => {
  const tail = list.pop();
  let temp = current.next;
  current.next = tail;
  tail.next = temp;
  if (count <= list.length / 2) {
    insert(list, temp, count + 1);
  }
};
const end = performance.now();
console.log("time: ", end - start);
insert(linkedList, linkedList.head);
linkedList.show();
