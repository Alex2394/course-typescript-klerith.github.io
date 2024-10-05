(() => {
    const msg: string = '¡Hola Mundo!';
    console.log(msg);

    const hero = {
        name: 'Iroman',
        age: 45
    };

    //hero.age = '50' Error por tipado
    hero.age = 50;
    console.log(hero.age + 1);
})()