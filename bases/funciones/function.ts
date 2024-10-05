(() => {

    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const activateBatiSignal = (): string => {
        return '¡La Bati Señal está activada!';
    }

    console.log( typeof activateBatiSignal );

    const heroName = returnName();

    console.log( { heroName } );
})()