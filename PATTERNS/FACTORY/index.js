CoordinateSystem = {
  cartesian: 0,
  polar: 1,
};

class PointFactory {
  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }

  // if we use get factory in the object(Point), we cant use the static methods
  newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // satisfies, but its not maintanable and readable
  // constructor(a, b, coordinateSystem = CoordinateSystem.cartesian) {
  //   switch (coordinateSystem) {
  //     case CoordinateSystem.cartesian:
  //       this.x = a;
  //       this.y = b;
  //       break;
  //     case CoordinateSystem.polar:
  //       this.x = a * Math.cos(b);
  //       this.y = a * Math.sin(b);
  //       break;
  //   }
  // }

  // 2 constructors isnot allowed
  // constructor(rho, theta) {
  //   this.x = rho * Math.cos(theta);
  //   this.y = rho * Math.sin(theta);
  // }

  static get factory() {
    return new PointFactory();
  }
}

// let p1 = new Point(2, 3, CoordinateSystem.cartesian);
let p1 = PointFactory.newCartesianPoint(4, 5);
console.log(p1);

let p2 = Point.factory.newPolarPoint(5, Math.PI / 2);
// let p2 = PointFactory.newPolarPoint(5, Math.PI / 2);
console.log(p2);
