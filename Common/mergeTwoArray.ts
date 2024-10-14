export function mergeTwoArray<T>(arr: Array<T>, low: number, mid: number, high: number) {
    const temp: T[] = [];
    let left = low;
    let right = mid + 1;

    // Merging process
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left])
            left++;
        }

        if (arr[left] > arr[right]) {
            temp.push(arr[right]);
            right++;
        }
    }

    // Collect remaining elements from the left half
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    // Collect remaining elements from the right half
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    // Copy sorted elements back into original array
    for (let i = 0; i < temp.length; i++) {
        arr[low + i] = temp[i];
    }
}
