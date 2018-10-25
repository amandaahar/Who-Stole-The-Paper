/* 
* Author: Amanda Harris
*
*/

import { print, csvToArray } from "introcs";

class Clue {
    person: string = "";
    hairColor: string = "";
    weapon: string = "";
    desk: number = 0;
    note: string = "";
    hasPencil: boolean = false; 
}
export let main = async () => {   
    let data: Clue[] = await csvToArray("Clue Data", Clue);   
    print(data); 
    
    let filtered: Clue[] = filterOutBlonde(data);
    print(filtered);

    let third = nth(data, 2);
    print(third);

    let clue1: string = findClue1(data);
    print("Clue 1: " + clue1);

    let x: number[] = [1, 2, 3];
    print(sum(x)); // Prints 6

    let y: number[] = [1, 2, 3];
    print(average(y)); // Prints 2

    let filtered2: Clue[] = filterAboveDeskNumber(data, 5);
    print(filtered2); // Only displays clues whose desk property is greater than 20

    let filtered3: Clue[] = filterByHairColor(data, "brown");
    print(filtered3); // Only displays clues whose hair color property is blue

    let deskNumbers: number[] = mapToDeskNumber(data);
    print(deskNumbers); // Only displays the desk numbers of each Clue

    let clue2: string = findClue2(data);
    print("Clue 2:" + clue2);

    let thief: string = findThief(data);
    print("Thief: " + thief);




    // TODO: Remove this line once your data is printed   
    // TODO: Your function calls go inside of this block
}; 
// TODO: Define your functions here

export let filterOutBlonde = (clues: Clue[]): Clue[] => {
    let notBlonde: Clue[] = [];
    for (let i = 0; i < clues.length; i++) {
        if (clues[i].hairColor !== "blonde") {
            notBlonde[notBlonde.length] = clues[i];
        }
    }

    return notBlonde;
};

export let nth = (clues: Clue[], index: number): Clue => {
    // for (let i = 0; i < clues.length; i++) {
        
    // }
    
    return clues[index]; 
};

export let findClue1 = (clues: Clue[]): string => {
    let nonBlonde = filterOutBlonde(clues);

    return nth(nonBlonde, 4).note;
};

export let sum = (nums: number[]): number => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return sum;
};

export let average = (nums: number[]): number => {
    let avg = sum(nums) / nums.length;
    return avg;
};

export let filterAboveDeskNumber = (clues: Clue[], deskNumber: number): Clue[] => {
    let higherDeskNumber = [];
    for (let i = 0; i < clues.length; i++) {
        if (clues[i].desk > deskNumber) {
            higherDeskNumber[higherDeskNumber.length] = clues[i];
        }
    }

    return higherDeskNumber;
};

export let filterByHairColor = (clues: Clue[], hairColor: string ): Clue[] => {
    let hair = [];
    for (let i = 0; i < clues.length; i++) {
        if (clues[i].hairColor === hairColor) {
            hair[hair.length] = clues[i];
        }
    }
    return hair;
};

export let mapToDeskNumber = (clues: Clue[]): number[] => {
    let deskNumbers = [];
    for (let i = 0; i < clues.length; i++) {
        deskNumbers[deskNumbers.length] = clues[i].desk;

    }
    return deskNumbers;
};

export let findClue2 = (clues: Clue[]): string => {
    let brownHair = filterByHairColor(clues, "brown");
    print(brownHair);
    let numbers = mapToDeskNumber(clues);
    let avg = average(numbers);
    print(avg);

    let clues3: Clue[] = filterAboveDeskNumber(brownHair, avg);
    print(clues3);
    
    return clues3[2].note;
};

export let filterWeapon = (clues: Clue[], weapon: string): Clue[] => {
    let weapons = [];
    for ( let i = 0; i < clues.length; i++ ) {
        if (clues[i].weapon === weapon) {
            weapons[weapons.length] = clues[i];
        }
    }
    return weapons;

};

export let findThief = (clues: Clue[]): string => {
    let suspectedWeapon = filterWeapon(clues, "chili");
    for (let i = 0; i < suspectedWeapon.length; i++) {
        if (suspectedWeapon[i].hasPencil === true) {
            return suspectedWeapon[i].person;
        }
    }
    return "";

};

main();
