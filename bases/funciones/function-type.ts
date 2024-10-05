(() => {

    const addNumbers = ( a: number, b: number ): number => a + b;
    const greet = ( name: string ) => `Hola ${ name }`;
    const saveToWorld = () => `¡El mundo está salvado!`;

    let myFunction;

    myFunction = 10;

    console.log( {myFunction} );

    myFunction = addNumbers;
    console.log( myFunction );
})()    