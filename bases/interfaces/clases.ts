(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower( id: number ): string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {

        public age: number;
        public name: string;
        public realName: string;
        
        constructor(){
            this.name = '';
            this.age = 0;
            this.realName = '';
        }

        get Mutant(){
            return `${ this.name } ${ this.realName } | ${ this.age }`
        }

        set( name: string, realName: string, age:number ){
            this.name = name;
            this.realName = realName;
            this.age = age;
        }

        mutantPower(){
            return `${ this.name } ${ this.realName }`;
        }
    }

    const wolverine = new Mutant();
    wolverine.name = 'Wolverine';
    wolverine.realName = 'Logan';
    wolverine.age = 40;

    console.log( wolverine.Mutant );

    const profesor = new Mutant();
    profesor.name = 'Profesor X';
    profesor.realName = 'Xavier';
    profesor.age = 70;

    console.log( profesor.Mutant );


})()