(() => {

    console.log('******************** Abstract ********************');
    

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante  {

        salvarMundo() {
            return 'Mundo a salvo!';
        }
    }

    class Vilian extends Mutante {
        
        conquistarMundo(){
            return 'Conquistando el mundo!';
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Vilian('Magneto', 'Magnus');

    console.log( wolverine.salvarMundo() );
    console.log( magneto.conquistarMundo() );

    const printName = ( character: Mutante ) => {
        console.log( character.realName );
    }

    printName( magneto );

})()