(() => {

    console.log('******************** Methods ********************');
    
    class Avenger {

        static avgAge: number = 35;

        constructor( 
            private name: string,
            public team: string,
            public realName?: string,
            avgAge: number = 55
        ) { Avenger.avgAge = avgAge }

        /* bio () {
            return `${ this.name } (${ this.team })!!!`
        } */

        public bio () {
            return `${ this.name } (${ this.team })!!!`
        }



    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    /* console.log( antman );

    console.log( Avenger.avgAge );

    console.log( antman.bio() ); */
    

})()