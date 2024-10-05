(() => {

    const fullName = ( firstName: string, ...restArgs: string[] ): string => {
        return `${ firstName } ${ restArgs.join(' ') }`;
    }

    const superman = fullName('Clark', 'Joseph', 'Kent');
    const batman = fullName('Bruce', 'Wayne');

    console.log( { superman } );
    console.log( { batman } );

})()
