(() => {

    // Básicos
    let flash = {
        name: 'Barry Allend',
        age: 20,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };


    //Creación de un tipo de objeto
    let film: { name: string, age_publication: number, categories: string[], lenguage: string, director: string,  writers: string[], stars: string[], getName?: () => string } = {
        name: 'The Perks of Being a Wallflower',
        age_publication: 2012,
        categories: ['Drama'],
        lenguage: 'English',
        director: 'Stephen Chbosky',
        writers: ['Stephen Chbosky'],
        stars: ['Logan Lerman', 'Emma Watson', 'Ezra Miller']
    }

    film = {
        name: 'The Perks of Being a Wallflower',
        age_publication: 2012,
        categories: ['Drama'],
        lenguage: 'English',
        director: 'Stephen Chbosky',
        writers: ['Stephen Chbosky'],
        stars: ['Logan Lerman', 'Emma Watson', 'Ezra Miller'],
        getName() { return this.name; }
    }
})()