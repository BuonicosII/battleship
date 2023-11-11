import { Gameboard } from './gameboard.js';

test('Test board implementation', () => {

    const gameboardTest = new Gameboard();
    gameboardTest.placeShip("destroyer", "horizontally", "A", 1);


    expect(gameboardTest.board[0].containsShip).not.toBe(null);
});

test('Test receive attack', () => {

    const gameboardTest = new Gameboard();
    gameboardTest.placeShip("destroyer", "horizontally", "A", 1);

    expect(gameboardTest.receiveAttack("A", 1)).toBe("HIT");
});
