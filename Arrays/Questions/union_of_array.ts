import { union } from "../../Common/union";

export const unionOfArray =async<T>(arr1:Array<T>,arr2:Array<T>):Promise<Array<T>> =>{
    const l1 = arr1.length;
    const l2 =arr2.length
    const unionArray = union(arr1,arr2,l1,l2)
    return unionArray
}