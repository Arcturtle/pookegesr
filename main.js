let submitbutton = document.getElementById("submitbutton");
let input = document.getElementById("userinput");
let pokemonimg = document.getElementById("pokemon");

let pokemonlist = ["arbok", "blastoise", "bulbasaur", "charizard", "diglett", "ditto", "ekans", "electrode", "gastly", "gengar", "haunter", "ivysaur", "charmander", "charmeleon", "mew", "pikachu", "raichu", "squirtle", "stakataka", "dugtrio", "venusaur", "voltorb", "wartortle"];
let popuplist = ["hdvmutb...png", "laughing_popup.png", "LOL.png", "luka.png", "u_suck.png"];

function newpokemon() {
    pokemonid = Math.floor(Math.random() * 23) + 1;
    pokemonimg.src = "images/" + pokemonid + ".png";
}

newpokemon();

submitbutton.onclick = function () {
    if (input.value.toLowerCase() != pokemonlist[pokemonid - 1]) {
        goofy.play()
        wrong.play()
    } else {
        correct1.play()
        correct2.play()
        correct3.play()
    }
    input.value = ""
    newpokemon();
}