import { Game } from "./player";

test('Test player implementation', () => {

    const playerOne = new Player("One", "human");

    const playerTwo = new Player("Two", "human");

    playerTwo.board.placeShip("carrier", "horizontally", "E", 2);

    expect(playerTwo.board.receiveAttack("E", 2)).toBe("HIT");
});