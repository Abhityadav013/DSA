export const subArraySumEqualsToK =async<T>(arr:Array<T>,k:number):Promise<number> =>{
    let prefixMap = new Map<number, number>();
    const n = arr.length;
    let sum = 0;
    let count = 0;

    prefixMap.set(0,1);
    for(let i = 0 ; i< n; i++){
        sum += arr[i] as unknown as number;

        if(prefixMap.has(sum - k)){
            count += prefixMap.get(sum - k)!; 
        }

        if(prefixMap.has(sum)){
            prefixMap.set(sum, prefixMap.get(sum)! + 1);
        }else{
            prefixMap.set(sum,1);
        }
    }
    return count;
}