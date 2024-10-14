import { swap } from "../Common/swap";

export const quickSort = async <T>(arr: Array<T>): Promise<Array<T>> => {
    const startTime = Date.now();
    const length = arr.length;
     await Quick(arr,0,length-1);

    const endTime = Date.now();
    console.log(`Time taken for Quick Sort: ${endTime - startTime} ms`);
    return arr;
};

const Quick = <T>(arr: Array<T>, lb: number, ub: number):void =>{
    if (lb < ub) { // Base case to stop recursion
        const end = Partition(arr, lb, ub);
        Quick(arr, lb, end - 1); // Sort left part
        Quick(arr, end + 1, ub); // Sort right part
    }  
}

const Partition = <T>(arr: Array<T>, lb: number, ub: number):number => {

    let pivot = arr[lb];
    let start = lb;
    let end = ub;
    while (start <= end) { // Loop while start is less than or equal to end
        while (start <= ub && arr[start] <= pivot) {
            start++;
        }
        while (end > lb && arr[end] > pivot) {
            end--;
        }

        if (start < end) {
            swap(arr, start, end); // Swap elements if out of order
        }
    }
    
    swap(arr, lb, end); // Place pivot in the correct position
    return end; // Return pivot index
}
