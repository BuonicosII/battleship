import { Ship } from "./shipclass";

test('Test ship is hit method', () => {
    const shiptest = new Ship(3);
    shiptest.hit();
    expect(shiptest.getHits()).toBe(1);
});

test('Test ship is sunk method', () => {
    const shiptest = new Ship(2);
    shiptest.hit();
    shiptest.hit();
    expect(shiptest.isSunk()).toBe(true);
});
