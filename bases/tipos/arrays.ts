(() => {

    //const numbers: (string | number | boolean)[] = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    numbers.push(11);

    console.log( numbers );

    const lenguages: string[] = ['Typescript', 'Angular', 'Python', 'Ruby'];

    lenguages.forEach((l) => console.log(l.toUpperCase()) );
})()