import { Game } from "./game";

test('Test create player one', () => {

    let game = new Game();

    game.createPlayerOne("Mario");


    expect(game.playerOne.name).toBe("Mario");
});

test('Test create player two', () => {

    let game = new Game();

    game.createPlayerTwo("Luigi", "human");


    expect(game.playerTwo.isHuman()).toBe(true);
});


test('Test game loop - attack', () => {

    let game = new Game();

    game.createPlayerOne("Mario");
    game.createPlayerTwo("Luigi", "human");

    game.playerOne.board.placeShip("carrier", "horizontally", "A", 1);
    game.playerTwo.board.placeShip("carrier", "horizontally", "A", 1);

    expect(game.attack("A", 1)).toBe("HIT");
});

test('Test game loop - switch', () => {

    let game = new Game();

    game.createPlayerOne("Mario");
    game.createPlayerTwo("Luigi", "human");

    game.playerOne.board.placeShip("carrier", "horizontally", "A", 1);
    game.playerTwo.board.placeShip("carrier", "horizontally", "A", 1);

    game.attack("A", 1)

    expect(game.currentPlayer.name).toBe("Luigi");
});

test('Test game loop - victory', () => {

    let game = new Game();

    game.createPlayerOne("Mario");
    game.createPlayerTwo("Luigi", "human");

    game.playerOne.board.placeShip("patrol boat", "horizontally", "A", 1);
    game.playerTwo.board.placeShip("patrol boat", "horizontally", "A", 1);

    game.attack("A", 1);
    game.attack("A", 1);

    expect(game.attack("A", 2)).toBe("HIT! Mario WON!");
});

test('Test game loop - aiPlayer victory', () => {

    let game = new Game();

    game.createPlayerOne("Mario");
    game.createPlayerTwo("Computer");

    game.playerOne.board.placeShip("patrol boat", "horizontally", "A", 1);
    game.playerTwo.board.placeShip("patrol boat", "horizontally", "A", 1);

    game.attack("A", 1);

    expect(game.aiAttack()).toBe("MasISS");
});