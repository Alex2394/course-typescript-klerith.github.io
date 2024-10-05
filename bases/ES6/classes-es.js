(() => {

    class Avenger {

        name;
        power;

        constructor( name = 'No name', power = 0 ){
            this.name = name;
            this.power = power;
        }

    }

    class FliyingAvenger extends Avenger {

        fliying;

        constructor( name, power ){
            
            super( name, power );
            this.fliying = true;
        }
    }

    const hulk = new Avenger( 'Hulk', 9001 );
    const falcon = new FliyingAvenger( 'Falcon', 50 );

    console.log(hulk);
    console.log(falcon);

})()