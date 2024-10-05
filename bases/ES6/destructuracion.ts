(() => {

    console.log('*************************** Destructuración ***************************************');

    type Avenger = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number
    };

    const avengers: Avenger = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.5678876543
    };

    const { poder, vision } = avengers;

    console.log(poder.toFixed(2), vision.toUpperCase());
    
    const printAvenger = ( { ironman, ...resto }: Avenger ) => {
        console.log(ironman, resto)
    };

    printAvenger(avengers);

    const avengersArr: string[] = ['Capitán América', 'Ironman', 'Hulk'];

    const [ rogers, ironman, ] = avengersArr;

    console.log( { ironman, rogers } );

    const avengersTuples: [string, string, boolean] = ['Capitán América', 'Ironman', true];

    const[ capi, filantropo, seriaUnBoolean] = avengersTuples;

    console.log( { capi, filantropo, seriaUnBoolean } );
    
    

})()