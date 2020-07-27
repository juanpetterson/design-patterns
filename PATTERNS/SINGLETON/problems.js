const fs = require('fs');
const path = require('path');

class MyDatabase {
  constructor() {
    const instance = this.constructor.instance;

    if (instance) {
      return instance;
    }

    this.constructor.instance = this;

    console.log('Initializing database');
    this.capitals = {};

    let lines = fs.readFileSync(path.join(__dirname, 'capitals.txt')).toString().split('\r\n');

    for (let i = 0; i < lines.length / 2; ++i) {
      this.capitals[lines[2 * i]] = parseInt(lines[2 * i + 1]);
    }
  }

  getPopulation(city) {
    return this.capitals[city];
  }
}
// low-level module /\

// high-level module \/

class SingletonRecordFinder {
  totalPopulation(cities) {
    return cities.map(city =>
      new MyDatabase().getPopulation(city).reduce((accum, value) => accum + value)
    );
  }
}

class ConfigurableRecordFinder {
  constructor(database = new MyDatabase()) {
    this.database = database;
  }

  totalPopulation(cities) {
    return cities.map(city =>
      this.database.getPopulation(city).reduce((accum, value) => accum + value)
    );
  }
}
