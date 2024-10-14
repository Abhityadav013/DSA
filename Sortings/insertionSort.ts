export const insertionSort = async<T>(arr: Array<T>): Promise<Array<T>> => {
    const startTime = Date.now();
    const length = arr.length;

    for (let i = 1; i < length; i++) { // Start from the second element
        let temp = arr[i];
        let j = i - 1;

        // Shift elements of arr[0..i-1] that are greater than temp
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place temp in its correct position
        arr[j + 1] = temp;
    }

    const endTime = Date.now();
    console.log(`Time taken for Insertion Sort: ${endTime - startTime} ms`);
    return arr;
}