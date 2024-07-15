const whoWon = require('../RPS.js');

describe("Who won test ", function () {
    test("return 'TIE!' when player1 === player2", function () {
        let output = whoWon('Rock','Rock');
        expect(output).toBe("TIE!");
    });

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function () {
        let output = whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function () {
        let output = whoWon('paper', 'scissors');
        expect(output).toBe("Player 2 wins!");
    });

});