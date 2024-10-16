export const findNumberAppearOnce = async<T>(arr:Array<T>):Promise<number>=>{

    const length = arr.length;
    let xor = 0;
    for(let i = 0 ; i <length;i++){
        xor ^= arr[i] as unknown as number
    }
    return xor
}