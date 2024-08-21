/**
 * Implement the Queue class with the following methods:
 *     size()     - returns the size of the queue (number of items in it)
 *     add(item)  - adds an item to the queue
 *     get()      - returns the oldest item from the queue and removes it, returns null if there are no items
 *
 *
 * Usage example:
 * ```
 * const queue = new Queue();
 *
 * queue.add('item1');
 * queue.add('item2');
 *
 * console.log(queue.size()); // 2
 *
 * console.log(queue.get()); // item1
 * console.log(queue.get()); // item2
 *
 * console.log(queue.size()); // 0
 * ```
 */

class Queue {
  // write your code here
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  add(item) {
    this.items.push(item);
  }

  get() {
    if (this.items.length === 0) {
      return null;
    }
    // get element from the queue we can achieve this with different methods
    // one of them is using traditional way using loop
    // const firstItem = this.items[0];
    // for (let i = 0; i < this.items.length - 1; i++) {
    //   this.items[i] = this.items[i + 1];
    // }
    // this.items.length -= 1;
    // return firstItem;


    // second of them is using slice() method
    // const firstItem = this.items[0];
    // this.items = this.items.slice(1);
    // return firstItem;

    // third of them is using the shift() method
    return this.items.shift();

  }
}

const queue = new Queue();

queue.add("item1");
queue.add("item2");

console.log(queue.size()); // 2
console.log(queue.get()); // item1
console.log(queue.get()); // item2
console.log(queue.size()); // 0

module.exports = Queue;
