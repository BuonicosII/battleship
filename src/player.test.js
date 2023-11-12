import { Player } from './player.js'

test('Test player implementation', () => {

    const playerOne = new Player("One", "human");

    const playerTwo = new Player("One", "human");

    playerTwo.board.placeShip("carrier", "horizontally", "E", 2);

    expect(playerTwo.board.receiveAttack("E", 2)).toBe("HIT");
});