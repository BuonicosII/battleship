import { Ship } from "./shipclass";

test('Test ship is hit method', () => {
    const shiptest = new Ship(2);
    shiptest.hit();
    expect(shiptest.hits).toBe(1);
  });

test('Test ship is sunk method', () => {
    const shiptest = new Ship(1);
    shiptest.hit();
    expect(shiptest.isSunk()).toBe(true);
  });