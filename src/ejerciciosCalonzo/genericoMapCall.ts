
// import { map } from "./generics";

import { map } from "src/generics";

const Caja1: number[] = [1.13234532, 2.2, 3.3, 4.4, 5.5];
const funcionTransformadora = (e:number):string=>{ 
    return e.toString();
}

console.log(map(Caja1, funcionTransformadora)); // [ '1.1', '2.2', '3.3', '4.4', '5.5' ]
