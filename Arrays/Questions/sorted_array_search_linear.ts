export const sortedArrayLinearSearch =async<T>(arr:Array<T>,searchElement:number):Promise<T> =>{
    const length = arr.length;
    for(let ele of arr){
        if(ele ===searchElement){
            return 1 as T;
        }
    }
    return -1 as T;
}