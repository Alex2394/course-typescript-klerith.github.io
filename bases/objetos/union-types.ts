(() => {

    type Hero = {
        name: string,
        age: number,
        powers: string[],
        getName?: () => string
    }

    let myCustomVariable: ( string | number | Hero );

    myCustomVariable = 'Alex';
    console.log( typeof myCustomVariable );

    myCustomVariable = 28;
    console.log( typeof myCustomVariable );

    myCustomVariable = {
        name: 'Burce Wayne',
        age: 43,
        powers: ['Dinero']
    };
    
    console.log( typeof myCustomVariable );
})()