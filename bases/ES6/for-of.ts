(() => {

    console.log('*************************** For of ***************************************');

    type Pokemon = {
        name: string,
        height: number,
        weight: number,
        category: string,
        type: string[],
        skill: string[],
        weakness: string[]
    };

    let pikachu: Pokemon = {
        name: 'Pikachu',
        height: 0.4,
        weight: 6.0,
        category: 'Ratón',
        type: ['Eléctrico'],
        skill: ['Elec. Estática'],
        weakness: ['Tierra']
    }

    let bulbasaur: Pokemon = {
        name: 'Bulbasaur',
        height: 0.7,
        weight: 6.9,
        category: 'Semilla',
        type: ['Planta', 'Veneno'],
        skill: ['Espesura'],
        weakness: ['Tierra']
    }

    let squirtle : Pokemon = {
        name: 'Squirtle ',
        height: 0.5,
        weight: 9.0,
        category: 'Tortuga',
        type: ['Agua'],
        skill: ['Torrent'],
        weakness: ['Planta', 'Eléctrico']
    }

    let charmander : Pokemon = {
        name: 'Charmander ',
        height: 0.6,
        weight: 8.5,
        category: 'Lagartija',
        type: ['Fuego'],
        skill: ['Mar LLamas'],
        weakness: ['Agua', 'Tierra', 'Roca']
    }

    const pokemons: Pokemon[] = [ pikachu, bulbasaur, squirtle, charmander ];

    for (const pokemon of pokemons) {
        console.log(`${ pokemon.name } | ${ pokemon.skill.join(' ') }`);
    }

})()