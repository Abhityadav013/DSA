export const leftRotateByOnePlace = async<T>(arr:Array<T>) :Promise<Array<T>>=>{
    const temp = arr[0];
    const length =arr.length
    for(let i = 1;i<length ;i++){
        arr[i-1] = arr[i];
    }
    arr[length -1] = temp;
    return arr;
}