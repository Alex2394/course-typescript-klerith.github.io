(() => {

    interface Hero {
        name: string,
        age: number,
        powers: string[],
        getName?: () => string
    }


    let flash: Hero = {
        name: 'Barry Allend',
        age: 20,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name
        },
    };

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerza']
    }

    console.log( flash.name );

})()