export const secondMaxiumElementInArray = async<T>(arr: Array<T>): Promise<T> => {
    let largest = arr[0];
    let secondLargest = -1 as T;
    for (const ele of arr) {
        if (ele > largest) {
            secondLargest = largest;
            largest = ele;
        } else if (ele < largest && ele > secondLargest) {
            secondLargest = ele;
        }
    }
    return secondLargest;
}

