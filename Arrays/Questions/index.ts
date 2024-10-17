import { findMissingNumberInArray } from "./find_missing_number_in_array";
import { findNumberAppearOnce } from "./find_number_appear_once";
import { leftRotateByOnePlace } from "./left_rotate_by_one_place";
import { longestSubarrayWithSumK } from "./longest_subArray_with_sum_k";
import { maxiumConsecutiveOne } from "./maxium_consecutive_one's";
import { maxiumElementInArray } from "./maxium_element_in_array";
import { moveZerosToEnd } from "./move_zero_to-end";
import { rightRotateByOnePlace } from "./right_rotate_by_one_place";
import { rotateArrayByKPlace } from "./rotate_array_by_kth_place";
import { secondMaxiumElementInArray } from "./second_maxium_element_in_array";
import { sortedArraySearchBinary } from "./sorted_array_search_binary";
import { sortedArrayLinearSearch } from "./sorted_array_search_linear";
import { subArraySumEqualsToK } from "./subArray_sum_equla_to_k";
import { unionOfArray } from "./union_of_array";

const M_E_A = [10, 7, 8, 7, 7, 10, 10, 20, 90, 89];
const S_M_E_A = [10, 7, 7, 7, 5, 10];
const L_R_B_O = [1, 2, 3, 4, 5, 6, 7];
const R_R_B_O = [1, 2, 3, 4, 5, 6, 7];
const R_B_K_P = [1, 2, 3, 4, 5, 6, 7];
const M_Z_T_E = [0, 1, 0, 3, 12, 0, 0, 0, 4, 5, 3, 10];
const L_S_I_S_A = [0, 1, 3, 5, 9, 12, 16];
const B_S_I_S_A = [0, 1, 3, 5, 9, 12, 16];
const U_A_1 = [1, 1, 1, 1, 1];
const U_A_2 = [2, 2, 2, 2, 2];
const M_N_F_A = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const M_C_O_C = [1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1];
const S_N_I_A = [4, 1, 2, 1, 2];
const L_S_W_S_K = [-13, 0, 6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6]
const S_O_A = 15
const S_A_S_Q_T_K = [1, 2, 1, 2, 1]
const S_Q_T_K = 3;
const elementSearch = 5;
export const ArrayQuestions = async () => {
    const maxiumElement = await maxiumElementInArray(M_E_A);
    const secondMaxiumElement = await secondMaxiumElementInArray(S_M_E_A);
    const leftRotateByOnesPlace = await leftRotateByOnePlace(L_R_B_O);
    const righttRotateByOnesPlace = await rightRotateByOnePlace(R_R_B_O);
    const rotateByKPosition = await rotateArrayByKPlace(R_B_K_P, 3);
    const moveZeroToEnd = await moveZerosToEnd(M_Z_T_E);
    const linearSearchInSoretedArray = await sortedArrayLinearSearch(L_S_I_S_A, elementSearch);
    const binarySearchInSortedArray = await sortedArraySearchBinary(B_S_I_S_A, elementSearch);
    const unionOfTwoArray = await unionOfArray(U_A_1, U_A_2);
    const missingNumber = await findMissingNumberInArray(M_N_F_A);
    const maxCountOfConsecutiveOne = await maxiumConsecutiveOne(M_C_O_C);
    const singleNumberInArray = await findNumberAppearOnce(S_N_I_A);
    const longestSubArrWithSumK = await longestSubarrayWithSumK(L_S_W_S_K, S_O_A);
    const subArraySumEqualTok = await subArraySumEqualsToK(S_A_S_Q_T_K, S_Q_T_K);
    // console.log(`maxium element in array ${maxiumElement}`)
    // console.log(`second maxium element in array ${secondMaxiumElement}`)
    // console.log(`arry before left rotation --> ${L_R_B_O}`)
    // console.log(`array after left rotated by 1's place -->${leftRotateByOnesPlace} `)
    // console.log(`arry before right rotation --> ${R_R_B_O}`)
    //console.log(`array after left rotated by 1's place -->${righttRotateByOnesPlace} `)
    // console.log(`arry before rotation of kth --> ${R_B_K_P}`)
    // console.log(`array after left rotated by kth place -->${rotateByKPosition} `)
    // console.log(`arry before moving zero to end --> ${M_Z_T_E}`)
    // console.log(`array after moving zero to end -->${moveZeroToEnd} `)
    // console.log(`element to search in array using linear search ${linearSearchInSoretedArray}`)
    // console.log(`element to search in array using binart search ${binarySearchInSortedArray}`)
    // console.log(`union of two array --> ${unionOfTwoArray}`)
    //console.log(`missing number from array is --> ${missingNumber}`)
    // console.log(`maximum count of consecutive 1's is --> ${maxCountOfConsecutiveOne}`)
    // console.log(`missing number of array is --> ${singleNumberInArray}`)
   // console.log(`longes subArray of sum k  --> ${longestSubArrWithSumK}`)
    console.log(`sub array sum equal to k  --> ${subArraySumEqualTok}`)

}