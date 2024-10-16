export function search<T>(arr: Array<T>, start: number, end: number,k:number):boolean {

   if(start > end) return false;
   let mid = Math.floor((start+end)/2);
   if(arr[mid] === k){
    return true;
   }else if((arr[mid] as unknown as number) < (k as unknown as number)){
    return search(arr,mid+1,end,k);
   }else{
    return search(arr,start,mid-1,k);
   }
  
}