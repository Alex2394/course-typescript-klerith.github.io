(() => {

    interface Client {
        name: string,
        age?: number,
        address: Address,
        getAddress(): string
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Alexander',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getAddress(){ return this.address?.city  }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            zip: 'K25 USA',
            id: 125
        },
        getAddress(){ return this.address?.city  }
    }

})()