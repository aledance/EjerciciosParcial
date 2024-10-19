function printToClg(constructor: Function){
    console.log(constructor);
}

@printToClg
export class Pokemon {
    public pubilcApi: string = 'https://pokeapi.co/api/v2/pokemon/';
    constructor(public name: string, public type: string) {}
}