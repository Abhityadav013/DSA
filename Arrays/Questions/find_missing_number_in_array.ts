export const findMissingNumberInArray = async<T>(arr:Array<T>):Promise<Number>=>{
    const length = arr.length;
    //return solutionWithSum(arr,length)

    return solutionWithXOR(arr,length)
}

function solutionWithSum<T>(arr: Array<T>, n: number): number {
    let sum = Math.floor((n * (n + 1)) / 2);
    for (let i = 0; i < n; i++) {
        sum = sum - (arr[i] as unknown as number); // Cast to number if T is not guaranteed to be number
    }
    return sum;
}


function solutionWithXOR<T>(arr:Array<T>,n:number): number{
    let xor1 = 0;
    let xor2 = 0;

    for(let i = 0 ; i <n;i++){
        xor2 ^= arr[i] as unknown as number
        xor1 ^= i+1;
    }
   return xor2^xor1;
}