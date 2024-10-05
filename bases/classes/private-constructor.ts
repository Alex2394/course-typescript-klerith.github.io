(() => {

    class Apocalipsis {

        static intance:Apocalipsis;

        private constructor( public name: string ){

            this.name = name;

        }

        static callApocalipsis(): Apocalipsis {
            if( !Apocalipsis.intance ){
                Apocalipsis.intance = new Apocalipsis('Soy apocalipsis en único');
            }

            return Apocalipsis.intance;
        }

        changeName( newName: string ): void {
            this.name = newName;
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName('Xavier');

    console.log(apocalipsis1, apocalipsis2, apocalipsis3);

})()