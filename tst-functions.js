const testLetterCheck = (word, [...input]) => {
    input.filter(letter => {
        if (word.includes(letter)) {
            return true;
            // console.log(true);
        } else {
            return false;
            // console.log(false);
        }
    })
};
// testLetterCheck("developer", "e");
console.log(testLetterCheck("developer", "e"));


const testWordCheck = ([...word], inputLetterWords) => {
    word.map(letter => {
        if (inputLetterWords.includes(letter)) {
            return letter;
            // console.log(letter);
        } else {
            return "_";
            // console.log("_");
        }
    });
};
// testWordCheck("developer", "e");
console.log(testWordCheck("developer", "e"));


module.exports = {
    testLetterCheck,
    testWordCheck,
}





// const winGame = (input, answer) => {
//     return input === answer;
// };


/*
TIPS DOCENTEN:

je wilt eigenlijk geen functies met DOM elementen gebruiken in Jest.
In de test functies wil je een parameter meegeven die vervolgens een aantal bewerkingen
ondergaat zodat je het resultaat krijgt. Deze test functies zou je eventueel nog in een
ander bestand kunnen zetten

Wat ik verder bedoel is dat je er een compleet nieuwe functie voor maakt in bijv een andere
file. In deze nieuwe functie geef je een woord mee en dat vergelijk je dan met het juiste
antwoord.

Je test is een geautomatiseerde script wat afzonderlijke functies test. Vandaar dat je niet
naar DOM elementen of input uit je html kijkt

Hopelijk kun je iets met deze tip: Zorg ervoor dat je berekening (in dit geval, berekenen of
de game won is) in een aparte functie staat, en doe het DOM manipuleren ergens anders. Dus
maak een functie die alléén checkt of de game gewonnen is, en true of false returnt. Die
functie ga je testen.

Het aanpassen van de DOM elementen wil je niet in diezelfde functie doen, maar op een andere
plek. DOM element manipulation is niet iets dat je wil/hoeft te testen.
*/