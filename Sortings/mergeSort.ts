import { mergeTwoArray } from "../Common/mergeTwoArray";

export const megrSort = async <T>(arr: Array<T>): Promise<Array<T>> => {
    const startTime = Date.now();
    const length = arr.length;
    if (arr.length <= 1) return arr; // Handle edge case for single-element array
    Merge(arr,0,length-1);

    const endTime = Date.now();
    console.log(`Time taken for Quick Sort: ${endTime - startTime} ms`);
    return arr;
};

const Merge = <T>(arr:Array<T>,low:number,high:number):void =>{
    if(low >= high)return;

    const mid: number = Math.floor((low + high) / 2); // Use Math.floor for correct indexing
    Merge(arr, low, mid);         // Sort left half
    Merge(arr, mid + 1, high);    // Sort right half
    mergeTwoArray(arr, low, mid, high); // Merge both halves
}