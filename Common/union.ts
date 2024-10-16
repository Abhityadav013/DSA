export function union<T>(arr1:Array<T>,arr2:Array<T>,size1:number,size2:number){
    let left = 0;
    let right = 0;
    let temp:Array<T> = []
    while(left <= size1 && right <= size2){
        if(arr1[left] <= arr2[right]){
            if(temp.length == 0 || temp[temp.length -1] != arr1[left]){
                temp.push(arr1[left])
            }
            left++;
        }else{
            if(temp.length == 0 || temp[temp.length -1] != arr2[right]){
                temp.push(arr2[right])
            }
            right++;
        }
    }

    while(left <= size1){
        if(temp.length == 0 || temp[temp.length -1] != arr1[left]){
            temp.push(arr1[left])
        }
        left++;
    }

    while(right <= size2){
        if(temp.length == 0 || temp[temp.length -1] != arr2[right]){
            temp.push(arr2[right])
        }
        right++;
    }

    return temp;
}