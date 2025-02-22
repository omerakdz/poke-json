import readline from "readline-sync";
import {Pokemon, Trainer} from "./interface";
import pokeData from "./pokemon.json";
import trainersData from "./trainers.json";

let choices : string[] = [
    "View all data",
    "Filter by ID",
    "Exit"
];

let running : boolean = true;

console.log("Welcome to the JSON data viewer!");

function showAllPokemon() {
    for (const pokemon of pokeData.pokemon) {
        console.log(`- ${pokemon.name} (${pokemon.id})`);
    }
}

function filterById() {
    let choiceId : number = readline.questionInt("Please enter the ID you want to filter by: ");
    let correctId: boolean = false;

    for (const pokemon of pokeData.pokemon) {
        if (choiceId === pokemon.id) {
            correctId = true;
            console.log(`- ${pokemon.name} (${pokemon.id})`);
            console.log(`Description: ${pokemon.description}`);
            console.log(`Type: ${pokemon.type}`);
            console.log(`Level: ${pokemon.level}`);
            console.log(`Trainer: ${pokemon.trainer.name}`);
        }
    }
    
    if (!correctId) {
        console.log("Pokémon ID niet gevonden.");
    }
}

while(running){
    let input : number = readline.keyInSelect(choices, "Please enter your choice: ",{cancel: false}) ;

    switch (input) {
        case 0:
            showAllPokemon();
            break;
        case 1:
            filterById();
            break;
        case 2:
            running = false;
            break;
        default:
            console.log("Ongeldige keuze.");
    }

}

export {}