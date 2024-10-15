export function reverse<T>(arr: Array<T>, start: number, end: number) {

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}