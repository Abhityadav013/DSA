import { bubbleSort } from "./bubbleSort";
import { insertionSort } from "./insertionSort";
import { megrSort } from "./mergeSort";
import { quickSort } from "./quickSort";
import { selectionSort } from "./selectionSort";

export const Sortings = async () => {
    const array = [5, 4, 10, 1, 6, 2];
    const quickSortArray = [7, 6, 10, 5, 9, 2, 1, 15, 7];
    const mergeSortArray = [3, 2, 4, 1, 3];
    const largeArray = Array.from({ length: 1000 }, () =>
        Math.floor(Math.random() * 1000)
    );
    //await bubbleSort(largeArray);
    // await selectionSort(largeArray)
    // await insertionSort(largeArray)
   // await quickSort(quickSortArray)
    await megrSort(largeArray)
    console.log('Sorted Array ===>', largeArray);
};
