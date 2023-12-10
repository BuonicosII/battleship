import { Player } from './player.js'

test('Test player implementation', () => {

    const playerOne = new Player("One", "human");

    const playerTwo = new Player("Two", "human");

    playerTwo.board.placeShip(5, "horizontally", "E", 2);

    expect(playerTwo.board.receiveAttack("E", 2)).toBe("HIT");
});

test('Test ai implementation', () => {

    const playerOne = new Player("One", "human");

    const playerTwo = new Player("AI");

    playerOne.board.placeShip(5, "horizontally", "E", 2);

    

    expect(playerTwo.aiMove(playerOne.board).message).not.toBe("You already fired at these coordinates!");
});

test('Test ai smart', () => {

    const playerOne = new Player("One", "human");

    const playerTwo = new Player("AI");

    playerOne.board.placeShip(5, "horizontally", "E", 2);
    playerOne.board.receiveAttack("E", "6")
    playerOne.board.receiveAttack("E", "5")
    playerOne.board.receiveAttack("E", "7")
    playerOne.board.receiveAttack("F", "6")
    playerTwo.previousHit = {message: "HIT", coordinates: "E6"}

    //expect(["E5", "E7", "D6", "F6"]).toContain(playerTwo.aiMove(playerOne.board).coordinates)
    expect(playerTwo.aiMove(playerOne.board).coordinates).toBe("D6")
});