import { swap } from "../Common/swap";

export const selectionSort = async<T>(arr: Array<T>): Promise<Array<T>> => {
    const startTime = Date.now();
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) { // No need to check the last element
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update the index of the minimum element
            }
        }
        // Swap only if a new minimum was found
        if (minIndex != i) {
            swap(arr, i, minIndex)
        }
    }

    const endTime = Date.now();
    console.log(`Time taken for Selection Sort: ${endTime - startTime} ms`);
    return arr;

}
