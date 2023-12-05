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

test('Test current player', () => {

    let game = new Game();

    game.createPlayerOne("Mario");
    game.createPlayerTwo("Computer")

    expect(game.opponent.name).toBe("Computer");
});