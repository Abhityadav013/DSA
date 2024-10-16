import { max } from "../../Common/maxium";

export const maxiumConsecutiveOne = async<T>(arr: Array<T>) => {
    const length = arr.length;
    let maxNumber = 0;
    let count = 0;
    for (let i = 0; i < length; i++) {
        if (arr[i] == 1) {
            count++;
        } else {
            count = 0;
        }
        maxNumber = max(maxNumber, count);
    }
    return maxNumber
}