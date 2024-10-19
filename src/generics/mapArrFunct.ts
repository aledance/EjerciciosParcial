
export function map<T,U> (arr:T[], f:(e:T)=>U):U[]{
    // const arr2:U[]=[];
    // return arr2;
    let arr2:U[]=[];
    if (arr.length === 0) return arr2//if the array is empty, it will return an empty array
    for (let i=0; i<arr.length; i++){
        arr2.push(f(arr[i])); //push the result of the function f (a string) to the array arr2
    }return arr2;
    //what does this function implementation do?  
}
