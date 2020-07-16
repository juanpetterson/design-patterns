const fs = require('fs');

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;

    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join('\n');
  }
}

Journal.count = 0;

class PersistenceManager {
  preprocess(j) {}

  saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

let j = new Journal();
j.addEntry('I Cried today');
j.addEntry('I ate a bug');

const persistenceManager = new PersistenceManager();
const filename = 'C:/temp/journal.txt';

persistenceManager.saveToFile(j, filename);

// separation of concerns
