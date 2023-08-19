let pokemonTeam = [
	"pikachu",
	"mewtwo",
	"zapdos",
	"charmander",
	"eevee",
	"bulbasaur",
	"agumon", // Digimon?!
	"oshawott",
	"chikorita",
	"teddiursa",
	"weedle",
	"squirtle",
	"psyduck",
	"meowth"
]


// for loops
// for (counter, condition, incrementer){action}
for(let i = 2; i < pokemonTeam.length; i+=2){
	console.log(pokemonTeam[i] + " is at index " + i);
}


// for of 
let counter = 2;
for (const [index, pokemonName] of pokemonTeam.entries()) {
	if (index < 2){
		continue;
	}
	if (index == counter){
		console.log(pokemonTeam[index] + " is at index " + index);
		counter += 2;
	}
}


// logs all Pokemon in the team:
// for (let currentPokemon of pokemonTeam) {
// 	console.log(currentPokemon);

// }



// for in 












// while loop
while(false){
	console.log('while message appears at least once')
}

// do while loop 
do {
	console.log('do-while message appears at least once')
} while (false)

/*

{
	block of stuff to do 
}

(condition to check )

*/

