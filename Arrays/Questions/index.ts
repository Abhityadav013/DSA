import { maxiumElementInArray } from "./maxium_element_in_array";
import { secondMaxiumElementInArray } from "./second_maxium_element_in_array";

const M_E_A = [10, 7, 8, 7, 7, 10, 10, 20, 90, 89];
const S_M_E_A = [10, 7, 7, 7, 5, 10];

export const ArrayQuestions = async () => {
    const maxiumElement = await maxiumElementInArray(M_E_A);
    const secondMaxiumElement = await secondMaxiumElementInArray(S_M_E_A);
    console.log(`maxium element in array ${maxiumElement}`)
    console.log(`second maxium element in array ${secondMaxiumElement}`)
}