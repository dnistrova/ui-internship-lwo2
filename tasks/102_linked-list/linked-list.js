class Cell {
  constructor(value, prev) {
    this.value = value;
    this.prev = prev;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }

  push(value) {
    const cell = new Cell(value, this.tail);

    if (this.head === null) {
      this.head = cell;
    }

    if (this.tail !== null) {
      this.tail.next = cell;
    }

    this.tail = cell;

    this.amount++;
  }

  pop() {
    const cell = this.tail;

    if (cell === null) {
      return null;
    }

    this.tail = cell.prev;

    if (this.tail !== null) {
      this.tail.next = null;
    }

    if (this.head === cell) {
      this.head = null;
    }

    this.amount--;

    return cell.value;
  }

  iterate(callback) {
    let current = this.head;

    while (current !== null) {
      callback(current);
      current = current.next;
    }
  }

  insertAfter(valueToFind, valueToInsert) {
    let current = this.head;

    while (current !== null) {
      if (current.value === valueToFind) {
        const cell = new Cell(valueToInsert, current);

        if (current === this.tail) {
          this.tail = cell;
        }

        if (current.next !== null) {
          cell.next = current.next;
          current.next.prev = cell.next;
        }

        current.next = cell;

        this.amount++;

        break;
      }

      current = current.next;
    }
    return false;
  }

  removeItem(valueToRemove) {
    let current = this.head;

    while (current !== null) {
      if (current.value === valueToRemove) {

        if (current.prev !== null) {
          current.prev.next = current.next;
        }

        if (current.next !== null) {
          current.next.prev = current.prev;
        }

        if (current === this.head) {
          this.head = current.next;
        }

        if (current === this.tail) {
          this.tail = current.prev;
        }

        this.amount--;
        break;
      }
      current = current.next;
    }

    return true;
  }
}
