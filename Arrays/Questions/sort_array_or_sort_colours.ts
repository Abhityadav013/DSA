import { swap } from "../../Common/swap";

export const sortColourOrSortArray = async<T>(arr:Array<T>):Promise<Array<T>> =>{
    let left = 0;
    let mid = 0;
    let right = arr.length -1;

    while(mid <= right){
        if(arr[mid] == 0){
            swap(arr,mid,left);
            left++;
            mid++;
        }else if(arr[mid] == 1){
            mid++;
        }else{
            swap(arr,mid,right);
            right--;
        }
    }
    return arr;
}