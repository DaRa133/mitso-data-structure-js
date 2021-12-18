const { NotImplementedError } = require('../extensions/index.js');
const {ListNode} = require("../extensions");
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  start = null;
  final = null;
  getUnderlyingList() {
    return this.start;
  }

  enqueue( value ) {
    const Node = new ListNode(value);
    if(!this.start || !this.final){
      this.start = Node;
      this.final = Node;
      return this;
      //
    }

    this.final.next = Node;
    this.final = Node;
    return this;
  }

  dequeue() {
    if(!this.start){
      return null;
    }
    const deleteStart = this.start;
    if (this.start.next) {
      this.start = this.start.next;
    } else {
      this.start = null;
      this.final = null;
    }

    return deleteStart.value;
  }

}
