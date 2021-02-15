const testLetterCheck = (word, [...inputs]) => {
    let wrongLetters = inputs.filter(letter => {
        return !word.includes(letter);
    });
    return wrongLetters.join(" ");
};
console.log(testLetterCheck("developer", "q"));



const testWordCheck = ([...word], inputLetterWords) => {
    let display = word.map(letter => {
        if (inputLetterWords.includes(letter)) {
            return letter;
        } else {
            return "_";
        }
    });
    return display.join(" ");
};
console.log(testWordCheck("developer", "w"));


module.exports = {
    testLetterCheck,
    testWordCheck,
}





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
