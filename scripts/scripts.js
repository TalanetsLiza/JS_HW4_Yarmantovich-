"use strict";

{
    // Task 1

    const arr = [1, 2, 3, 4, 5];
    
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

{
    // Task 2

    const arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
    
    for ( let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item > -10 && item < -3) {
            console.log(item);
        }
    }

}