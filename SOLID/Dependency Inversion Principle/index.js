let Relationship = Object.freeze({
  parent: 0,
  chidl: 1,
  sibling: 2,
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

// LOW-LEVEL MODULE
class RelationshipBrowser {
  constructor() {
    if (this.constructor.name === 'RelationshipBrowser') {
      throw new Error('RelationshipBrowser is abstract!');
    }
  }

  findAllChildrenOf(name) {}
}

class Relationships extends RelationshipBrowser {
  constructor() {
    super();
    this.data = [];
  }

  findAllChildrenOf(name) {
    return this.data
      .filter(r => r.from.name === name && r.type === Relationship.parent)
      .map(r => r.to);
  }

  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child,
    });
  }
}

// HIGH-LEVEL MODULE
class Research {
  // // abstract classes/interfaces
  // constructor(relationships) {
  //   // find all children of John
  //   let relations = relationships.data;
  //   for (let rel of relations.filter(
  //     relation => relation.from.name === 'John' && relation.type === Relationship.parent
  //   )) {
  //     console.log(`John has a child named ${rel.to.name}`);
  //   }
  // }

  constructor(browser) {
    for (let child of browser.findAllChildrenOf('John')) {
      console.log(`John has a child called ${child.name}`);
    }
  }
}

let parent = new Person('John');
let child1 = new Person('Chris');
let child2 = new Person('Matt');

let rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

new Research(rels);
