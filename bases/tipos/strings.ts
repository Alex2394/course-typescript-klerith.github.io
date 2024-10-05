(() => {

    let batman: string = 'Bruce Wayne';
    let linternaVerde: string = "Linterna Verde";
    let superman: string = `Clark Kent`;

    console.log(`I'm ${ batman }`);
    console.log(batman.toUpperCase());

    console.log( batman[10]?.toUpperCase() || 'No está presente');
})()