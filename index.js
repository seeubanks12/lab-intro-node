class SortedList {
  //create new objects with 2 properties, items (array) and length (number of items in the array)
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    //pass the value "item" into the items array
    //items stay sorted in ascending order
    this.items.push(item);
    this.items = this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    //get the value at index pos in the list - "throw" and error message is user tries element in non-existing position
    if (pos > this.length - 1) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    //show the highest value
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max.apply(null, this.items);
    }
  }

  min() {
    //show the lowest value
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min.apply(null, this.items);
  }

  sum() {
    return this.items.reduce((a, b) => {
      return a + b;
    }, 0);
  }

  avg() {
    if (this.length) {
      return this.sum() / this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
