class Singleton {
  items = [];

  constructor() {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }

    this.constructor.instance = this;
  }

  addItem(text) {
    this.items.push(text);
  }
}

const s1 = new Singleton();
const s2 = new Singleton();

s1.addItem('New item');

console.log(s2.items);
