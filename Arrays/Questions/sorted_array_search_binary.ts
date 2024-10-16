import { search } from "../../Common/search";

export const sortedArraySearchBinary =async<T>(arr:Array<T>,elementSearch:number):Promise<boolean> =>{
    const length = arr.length;
    return search(arr,0,length-1,elementSearch);
}