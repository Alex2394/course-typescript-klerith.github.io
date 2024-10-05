export const printObject = ( argument: any ): void => {
    //console.log( argument ); 
}

// Una función genérica permite que el tipo de dato de los parametros de salida sea igual al de entrada
export function genericFunction<T>( argument: T ): T{
    return argument;
}

// Una función genérica permite que el tipo de dato de los parametros de salida sea igual al de entrada
export const genericFunctionArrow = <T>( argument: T ) => argument;