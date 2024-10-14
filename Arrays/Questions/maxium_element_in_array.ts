export const maxiumElementInArray = async<T>(arr:Array<T>):Promise<T> =>{
    let maxiumEle = arr[0];
    for(let ele of arr){
        if(ele > maxiumEle){
            maxiumEle = ele;
        }
    }
    return maxiumEle;
}