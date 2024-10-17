import { max } from "../../Common/maxium";

export const longestSubarrayWithSumK = async<T>(arr:Array<T>,k:number):Promise<number> =>{
    let prefixMap = new Map()
    const n = arr.length;
    let sum = 0;
    let maxLen = 0;

    prefixMap.set(0,1);
    for(let i = 0 ; i<n;i++){
        sum += arr[i] as unknown as number;

        if(sum === k){
            maxLen = max(maxLen, i + 1);
        }
        let remining = sum - k;

        if(prefixMap.has(remining)){
            maxLen = max(maxLen, i - prefixMap.get(remining));
        }

        if(!prefixMap.has(sum)){
            prefixMap.set(sum ,i)
        }
    }
    return maxLen
}