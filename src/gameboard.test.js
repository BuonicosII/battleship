import Gameboard from './gameboard.js';

test('Test receive attack', () => {

    const gameboardTest = new Gameboard;
    gameboardTest.placeShip("destroyer", "horizontally", 1, 1);

    expect(gameboardTest.receiveAttack(1, 1)).toBe("HIT");
});