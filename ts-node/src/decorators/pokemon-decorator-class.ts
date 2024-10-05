function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if (print) {
        return printToConsole;
    } else {
        return () => {};
    }
};

const bloquearPrototipo = function (constructor: Function) {
    //Object.seal(constructor);
    //Object.seal(constructor.prototype);
};



function CheckValidPokemonId() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const original_method = descriptor.value;

        descriptor.value = ( id: number ) => {
            if( id < 1 || id > 800 ){
                return console.error('Error');
            }
            else{
                return original_method( id );
            }
        }
    };
}

function readonly( isWritable: boolean = true ): Function {
    return function( target: any, propertyKey: string ){

        const descriptor: PropertyDescriptor = {

            get(){
                console.log( this );
                return 'Alexander'
            },
            set( this, val ){

                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                });
            }
        }

        return descriptor;
    }
}

@bloquearPrototipo
@printToConsoleConditional( false )
export class PokemonDecorator {

    @readonly()
    public publicApi: string = 'https://google.com';

    constructor(public name: string) {}

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon guardado en la base de datos ${id}`);
    }
}
