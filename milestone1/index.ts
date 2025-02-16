import readline from "readline-sync";
import {Pokemon, Trainer} from "./interface";
import pokeData from "./pokemon.json";
import trainersData from "./trainers.json";

let choices : string[] = [
    "View all data",
    "Filter by ID",
    "Exit"
];

console.log("Welcome to the JSON data viewer!");

let running : boolean = true;
while(running){
    let input : number = readline.keyInSelect(choices, "Please enter your choice: ",{cancel: false}) ;

    if (input === 0) {
        for (let i = 0; i < pokeData.pokemon.length; i++) {
            const pokemon: Pokemon = pokeData.pokemon[i];
            console.log(`- ${pokemon.name} (${pokemon.id})`);
        }
    } 
    else if(input === 1){
        let choiceId : number = readline.questionInt("Please enter the ID you want to filter by: ");
        let correctId : boolean = false;
        for (let i = 0; i < pokeData.pokemon.length; i++) {
            const pokemon: Pokemon = pokeData.pokemon[i];

            if (choiceId === pokemon.id) {
                correctId = true;
                console.log(`\n- ${pokemon.name} (${pokemon.id})`);
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
    else if(input === 2){
        running = false;
    }
}

export {}