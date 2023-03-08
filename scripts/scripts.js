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

{
    // Task 3.1

    const arr = [];
    let result = 0;
    
    for (let i = 23; i <= 57; i++) {
        arr.push(i);
        result += i;
    }

    console.log(arr);
    console.log(`Сумма массива = ${result}`);
}

{
    // Task 3.2

    const arr = [];
    let result = 0;
    let i = 23;
    
    while (i <= 57) {
        arr.push(i);
        result += i;
        i++;
    }

    console.log(arr);
    console.log(`Сумма массива = ${result}`);
}

{
    // Task 4

    const arr = ["10", "20", "30", "50", "235", "3000"];

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i];

        if (str[0] === "1" || str[0] === "2" || +str[0] === 5) {
            console.log(str);
        }
    }

}