const { NotImplementedError } = require('../extensions/index.js');
const {ListNode} = require("../extensions");
/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l,k) {
//
  let base = new ListNode(null);
  let tempBase = base;
  let current = l;
  while (current.next) {
    if (current.value !== k) {
      if (base.value === null) {
        tempBase.value = current.value;
      } else {
        tempBase.next = new ListNode(current.value);
        tempBase = tempBase.next;
      }
    }
    current = current.next;
  }
  if (current.value !== k ) {
    if (base.value === null) {
      tempBase.value = current.value;
    } else {
      tempBase.next = new ListNode(current.value);
    }
  }
  return base;
}
