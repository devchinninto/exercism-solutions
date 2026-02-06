export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

const size = new Size();

console.log(`Initial size\nWidth: ${size.width} | Height ${size.height}`);

Size.prototype.resize = function (newWidth = 1, newHeight = 1) {
  this.width = newWidth;
  this.height = newHeight;
};

const newSize = new Size(160, 120);

console.log(`Resized\nWidth: ${newSize.width} | Height ${newSize.height}`);

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

const defaultPosition = new Position();

console.log(
  `Default position\nX: ${defaultPosition.x} | Y ${defaultPosition.y}`
);

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

const movedPosition = new Position(100, 200);

console.log(`Moved position\nX: ${movedPosition.x} | Y ${movedPosition.y}`);

export class ProgramWindow {
  screenSize = new Size(800, 600);
  size = new Size();
  position = new Position();

  resize(size) {
    const min = 1
    // Returns the greater value, and my first param is the default/min acceptable. That is, if size < 1, returns 1.
    const minWidth = Math.max(1, size.width)
    const minHeight = Math.max(1, size.height)

    // Available screen space
    const availableWidth = this.screenSize.width - this.position.x
    const availableHeight = this.screenSize.height - this.position.y

    const finalWidth = Math.min(minWidth, availableWidth)
    const finalHeight = Math.min(minHeight, availableHeight)
    
    // Implements resized.
    this.size.resize(finalWidth, finalHeight)
  }

  move(position) {
    const maxX = Math.max(0, position.x)
    const maxY = Math.max(0, position.y)

    // Allowed values to reposition
    const allowedX = this.screenSize.width - this.size.width
    const allowedY = this.screenSize.height - this.size.height

    // Gets the min value and implements it.
    const finalX = Math.min(maxX, allowedX)
    const finalY = Math.min(maxY, allowedY)

    this.position.move(finalX, finalY)
  }
}

const programWindow = new ProgramWindow();
const resizedWindow = new Size(600, 400);
const newPosition = new Position(50, 100);

console.log("Screen size w", programWindow.screenSize.width);
console.log("Screen size h", programWindow.screenSize.height);
console.log("Size", programWindow.size);
console.log("Position", programWindow.position);

programWindow.resize(resizedWindow);
programWindow.move(newPosition);

console.log("Resized program size: ", programWindow.size);
console.log("Moved values: ", programWindow.position);

export function changeWindow(programWindow) {
  // New instance for size and position
  const newSize = new Size(400, 300)
  const newPosition = new Position(100, 150)

  // Implements methods
  programWindow.resize(newSize)
  programWindow.move(newPosition)

  return programWindow
}