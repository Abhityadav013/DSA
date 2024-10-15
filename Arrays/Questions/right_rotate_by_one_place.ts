export const rightRotateByOnePlace = async<T>(arr: Array<T>): Promise<Array<T>> => {
    const length = arr.length;
    if (length === 0) return arr; // Handle empty array case

    const temp = arr[length - 1]; // Store the last element

    // Shift elements to the right
    for (let i = length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp; // Place the last element in the first position
    return arr;
}