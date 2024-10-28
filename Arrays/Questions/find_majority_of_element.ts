export const findMajorityOfElement = async<T>(arr: Array<T>) => {
    const minimumMajority = arr.length / 2;
    let element = arr[0];
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            count++;
        } else {
            count--;
        }
        if (count == 0) {
            element = arr[i + 1];
        }
    }

/*
    We need the below logic if it is specifed that majority should be greator then n/2
    then we have to check that the element which have count >  0 is having majority greater then n/2 or not 
*/

    let counter = 0;
    for (const ele of arr) {
        if (ele == element) {
            counter++;
        }
    }
    if (counter > minimumMajority) {
        return element
    }
    return -1
}
/*
THE BELOW CODE TAKES
  TC  ----> O(n)
  SC  ----> O(n)

  as we are using two loops first loop takes O(n) as it iterates over complete array 
  and second loop itertaor over limited keys so we can say O(m) if there is m unique key 
  but if all the elements in the array is uniquen then m = n and TC is O(n)
  so overall TC:-

        TC =  O(n) + O(n) ---> O(2n) and as 2 is constant so it will be
        TC =  O(n)
============================================================================================================
export const findMajorityOfElement = async<T>(arr:Array<T>) =>{
   const minimumMajority  = arr.length/2
    let majorityMap = new Map();
    for(const ele of arr){
        if(!majorityMap.has(ele)){
            majorityMap.set(ele,1);
        }else{
            let value  = majorityMap.get(ele);
            majorityMap.set(ele,value + 1);
        }
    }

    const majorityElements = [];
    for (const [key, value] of majorityMap.entries()) {
        if (value > minimumMajority) {
            majorityElements.push(key);
        }
    }

    return majorityElements;
}

*/