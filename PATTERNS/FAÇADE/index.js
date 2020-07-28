class Buffer extends Array {
  constructor(width = 30, height = 20) {
    super();
    this.width = width;
    this.height = height;
    this.alloc(width.height);
  }

  write(text, position = 0) {
    //
  }
}

class Viewport {
  constructor(buffer = new Buffer()) {
    this.buffer = buffer;
    this.offset = 0;
  }

  apprend(text, position) {
    this.buffer.write(text, pos + this.offset);
  }

  getCharAt(index) {
    return this.buffer[this.offset + index];
  }
}

class Console {
  constructor() {
    this.buffer = new Buffer();
    this.currentViewPort = new Viewport(this.buffer);

    this.buffers = [this.buffer];
    this.viewports = [this.currentViewPort];
  }

  write(text) {
    this.currentViewPort.buffer.write(text);
  }

  getCharAt(index) {
    return this.currentViewPort.getCharAt(index);
  }
}

let c = new Console();
c.write('hello');
let ch = c.getCharAt(0);
