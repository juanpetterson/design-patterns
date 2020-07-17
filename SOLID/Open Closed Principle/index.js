let Color = Object.freeze({
  red: 'red',
  green: 'green',
  blue: 'blue',
});

let Size = Object.freeze({
  small: 'small',
  medium: 'medium',
  large: 'large',
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

// open for extension, closed for modification

class ProductFilter {
  filterByColor(products, color) {
    return products.filter(p => p.color === color);
  }

  filterBySize(products, size) {
    return products.filter(p => p.size === size);
  }

  filterBySizeAndColor(products, size, color) {
    return products.filter(p => p.size === size && p.color === color);
  }

  // state space explosion
}

// specification
class ColorSpecification {
  constructor(color) {
    this.color = color;
  }

  isSatisfied(item) {
    return item.color === this.color;
  }
}

class SizeSpecification {
  constructor(size) {
    this.size = size;
  }

  isSatisfied(item) {
    return item.size === this.size;
  }
}

class AndSpecification {
  constructor(...specs) {
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.every(x => x.isSatisfied(item));
  }
}

const apple = new Product('Apple', Color.green, Size.small);
const tree = new Product('Tree', Color.green, Size.large);
const house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];

const productFilter = new ProductFilter();
console.log(`Green products(old):`);

for (let p of productFilter.filterByColor(products, Color.green)) {
  console.log(`* ${p.name} is Green`);
}

class BetterFilter {
  filter(items, spec) {
    return items.filter(item => spec.isSatisfied(item));
  }
}

const betterFilter = new BetterFilter();
console.log(`Green products(new)`);

for (let p of betterFilter.filter(products, new ColorSpecification(Color.green))) {
  console.log(`* ${p.name} is Green`);
}

console.log(`Large and green products`);

const spec = new AndSpecification(
  new ColorSpecification(Color.green),
  new SizeSpecification(Size.large)
);

for (let p of betterFilter.filter(products, spec)) {
  console.log(`* ${p.name} is large and green`);
}
