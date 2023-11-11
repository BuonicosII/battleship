import { Gameboard } from './gameboard.js';

test('Test board implementation', () => {

    const gameboardTest = new Gameboard();
    gameboardTest.placeShip("carrier", "horizontally", "E", 2)


    expect(gameboardTest.board[42].containsShip).not.toBe(null);
});

test('Test already shot', () => {

    const gameboardTest = new Gameboard();
    gameboardTest.placeShip("carrier", "horizontally", "E", 2)

    gameboardTest.receiveAttack("E", 4)

    expect(gameboardTest.receiveAttack("E", 4)).toBe("You already fired at these coordinates!");
});

test('Test receive attack', () => {

    const gameboardTest = new Gameboard();
    gameboardTest.placeShip("carrier", "horizontally", "E", 2)

    expect(gameboardTest.receiveAttack("E", 4)).toBe("HIT");
});

test('Test endagame', () => {

    const gameboardTest = new Gameboard();
    gameboardTest.placeShip("destroyer", "vertically", "A", 1);

    gameboardTest.placeShip("carrier", "horizontally", "E", 2)

    gameboardTest.receiveAttack("A", 1)
    gameboardTest.receiveAttack("B", 1)
    gameboardTest.receiveAttack("C", 1)

    gameboardTest.receiveAttack("E", 2)
    gameboardTest.receiveAttack("E", 3)
    gameboardTest.receiveAttack("E", 4)
    gameboardTest.receiveAttack("E", 5)
    gameboardTest.receiveAttack("E", 6)

    expect(gameboardTest.checkEndGame()).toBe(true);
});