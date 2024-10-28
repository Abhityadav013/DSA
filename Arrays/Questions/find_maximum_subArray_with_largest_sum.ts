import { max } from "../../Common/maxium";
export const findSubArrayWithLargestSum =  async<T extends number>(arr:T[]):Promise<number> => {
    let maxium: number = arr[0];
    let sum = 0;
    for(const ele of arr){
        sum += ele;
        maxium = max(maxium,sum)
        if(sum < 0){
            sum = 0
        }
    }
    return maxium;
}

/*
THE BELOW CODE TAKES
  TC  ----> O(n²)
  SC  ----> O(1)

  as we are using two loops which are nested and the outer loop is traversing from 0 -> n and inner loop
  is decresing by 1 for each value of i 
  so overall TC:-
    n+(n−1)+(n−2)+...+1= 2n(n+1)

        TC =    n + (n - 1) + (n - 2) + ... + 1 = n(n + 1) / 2 = O((n² + n)/2) ---> O(n²) as n/2 is compartively low then O(n²) 
                so overall of TC is 
        TC =  O(n²)

============================================================================================================
export const findSubArrayWithLargestSum =  async<T extends number>(arr:T[]):Promise<number> => {
    let max = Number.NEGATIVE_INFINITY;
    for(let i = 0 ; i <arr.length ;i++){
        let sum = 0
        for(let j  =  i ; j< arr.length ; j++){
            sum += arr[j]; 
            if(max < sum){
                max = sum;
            }
        }
       
    }
    return max
}

*/