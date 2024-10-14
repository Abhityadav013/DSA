import { swap } from "../Common/swap";

export const bubbleSort = async <T>(arr: Array<T>): Promise<Array<T>> => {
    const startTime = Date.now();
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        let isSwapped = false; // Initialize swap flag
        // Reduce the range of the inner loop as the largest elements are sorted
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                isSwapped = true; // A swap occurred
            }
        }
        // If no swaps occurred, the array is already sorted
        if (!isSwapped) break;
    }
    const endTime = Date.now();
    console.log(`Time taken for Bubble Sort: ${endTime - startTime} ms`);
    return arr;
};
