import { leftRotateByOnePlace } from "./left_rotate_by_one_place";
import { maxiumElementInArray } from "./maxium_element_in_array";
import { moveZerosToEnd } from "./move_zero_to-end";
import { rightRotateByOnePlace } from "./right_rotate_by_one_place";
import { rotateArrayByKPlace } from "./rotate_array_by_kth_place";
import { secondMaxiumElementInArray } from "./second_maxium_element_in_array";
import { sortedArraySearchBinary } from "./sorted_array_search_binary";
import { sortedArrayLinearSearch } from "./sorted_array_search_linear";

const M_E_A = [10, 7, 8, 7, 7, 10, 10, 20, 90, 89];
const S_M_E_A = [10, 7, 7, 7, 5, 10];
const L_R_B_O = [1, 2, 3, 4, 5, 6, 7];
const R_R_B_O = [1, 2, 3, 4, 5, 6, 7];
const R_B_K_P = [1, 2, 3, 4, 5, 6, 7];
const M_Z_T_E = [0, 1, 0, 3, 12, 0, 0, 0, 4, 5, 3, 10];
const L_S_I_S_A = [0, 1, 3, 5, 9, 12, 16];
const B_S_I_S_A = [0, 1, 3, 5, 9, 12, 16];
const elementSearch = 5;
export const ArrayQuestions = async () => {
    const maxiumElement = await maxiumElementInArray(M_E_A);
    const secondMaxiumElement = await secondMaxiumElementInArray(S_M_E_A);
    const leftRotateByOnesPlace = await leftRotateByOnePlace(L_R_B_O)
    const righttRotateByOnesPlace = await rightRotateByOnePlace(R_R_B_O)
    const rotateByKPosition = await rotateArrayByKPlace(R_B_K_P, 3)
    const moveZeroToEnd = await moveZerosToEnd(M_Z_T_E);
    const linearSearchInSoretedArray = await sortedArrayLinearSearch(L_S_I_S_A, elementSearch)
    const binarySearchInSortedArray = await sortedArraySearchBinary(B_S_I_S_A,elementSearch)
    // console.log(`maxium element in array ${maxiumElement}`)
    // console.log(`second maxium element in array ${secondMaxiumElement}`)
    // console.log(`arry before left rotation --> ${L_R_B_O}`)
    // console.log(`array after left rotated by 1's place -->${leftRotateByOnesPlace} `)
    // console.log(`arry before right rotation --> ${R_R_B_O}`)
    //console.log(`array after left rotated by 1's place -->${righttRotateByOnesPlace} `)
    // console.log(`arry before rotation of kth --> ${R_B_K_P}`)
    // console.log(`array after left rotated by kth place -->${rotateByKPosition} `)
    console.log(`arry before moving zero to end --> ${M_Z_T_E}`)
    console.log(`array after moving zero to end -->${moveZeroToEnd} `)
    console.log(`element to search in array using linear search ${linearSearchInSoretedArray}`)
    console.log(`element to search in array using binart search ${binarySearchInSortedArray}`)
    
}