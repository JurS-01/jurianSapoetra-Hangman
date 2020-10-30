const { test, expect } = require("@jest/globals");
const {
    pickWord,
    guessedWord,
    finishGame,
} = require("./script.js");

const {
    testLetterCheck,
    testWordCheck,
} = require("./tst-functions.js");

// import '@testing-library/jest-dom'


test('randomly select word out of list', () => {
    const list = ['dream', 'develope', 'learn', 'remember'];
    expect(pickWord(list)).toMatch(/dream|develope|learn|remember/);
});

test('no letters left, all are guessed', () => {
    const noLetterLeft1 = "";
    const noLetterLeft2 = "a";
    const noLetterLeft3 = "a";
    const noLetterLeft4 = "develope";
    expect(guessedWord([...noLetterLeft1], '')).toBe(true);
    expect(guessedWord([...noLetterLeft2], 'a')).toBe(true);
    expect(guessedWord([...noLetterLeft3], 'b')).toBe(false);
    expect(guessedWord([...noLetterLeft4], 'e')).toBe(false);
});

test("game is over", () => {
    expect(finishGame(true)).toBe(true);
});


test("word contains guessed letter", () => {
    expect(testLetterCheck("developer", "w")).toBe(false);
    expect(testLetterCheck("developer", "l")).toBe(true);
});


test("returns guessed letter(s)", () => {
    expect(testWordCheck(["developer"], ["q"])).toBe("_");
    expect(testWordCheck(["developer"], ["e"])).toBe("e");
});


