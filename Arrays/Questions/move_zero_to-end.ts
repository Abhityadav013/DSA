import { swap } from "../../Common/swap";

export const moveZerosToEnd = async<T>(arr:Array<T>):Promise<Array<T>> =>{
    const length  = arr.length;
    let j = -1
    if(length <= 1) return arr;
    for(let i = 0 ; i< length;i++){
        if(arr[i] == 0){
            j = i;
            break;
        }
    }

    if(j == -1){
        return arr;
    }

    for(let i = j+1;i<length;i++){
        if(arr[i] != 0){
            swap(arr,i,j);
            j++;
        }
    }
    return arr;
}