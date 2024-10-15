import { reverse } from "../../Common/reverse";

export const rotateArrayByKPlace = async<T>(arr: Array<T>, k: number): Promise<Array<T>> => {
    const length = arr.length;
    if (length <= 1) return arr;
    k = k % length;
    reverse(arr, 0, length - 1);// Step 1: Reverse the entire array
    reverse(arr, 0, k - 1); // Step 2: Reverse the first k elements
    reverse(arr, k, length - 1);// Step 3: Reverse the remaining elements
    return arr;

}