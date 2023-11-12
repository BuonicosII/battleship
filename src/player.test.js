import { Player } from './player.js'

test('Test player implementation', () => {

    const playerOne = new Player("One", "human");

    const playerTwo = new Player("Two", "human");

    playerTwo.board.placeShip("carrier", "horizontally", "E", 2);

    expect(playerTwo.board.receiveAttack("E", 2)).toBe("HIT");
});

test('Test ai implementation', () => {

    const playerOne = new Player("One", "human");

    const playerTwo = new Player("AI");

    playerOne.board.placeShip("carrier", "horizontally", "E", 2);

    

    expect(playerTwo.aiMove(playerOne.board)).not.toBe("You already fired at these coordinates!");
});