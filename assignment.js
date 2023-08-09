// function cubeNumber(number) {
//     if (typeof number === 'number') {
//         const result = number * number * number;
//         return result;
//     } else {
//         return "Please provide a number ";
//     }
// }
// -----------------------------------------------------

function matchFinder(string1, string2) {
    if (!string1 || !string2) {
        return "Two input strings should be given";
    }

    for (let i = 0; i < string1.length; i++) {
        for (let j = i + 1; j <= string1.length; j++) {
            const substring = string1.slice(i, j);

            if (string2.includes(substring)) {
                return true;
            }
        }
    }

    return false;
}

// ফাংশন টেস্ট করা
const string1 = " javascript";
const string2 = "Code";
const emptyString = "";
const result1 = matchFinder(string1, string2);
const result2 = matchFinder(emptyString, string2);
console.log(result1); // true
console.log(result2); // "দুটি ইনপুট স্ট্রিং দিতে হবে"


// ------------------3--------------------
// function sortMaker(arr) {
//     if (arr.length !== 2) {
//         return ("The array must contain exactly two elements.");
//     }

//     if (arr[0] < 0 || arr[1] < 0) {
//         return "Invalid Input";
//     }
//     else if (arr[0] === arr[1]) {
//         return "equal";
//     }
//     else if (arr[1] > 0) {
//         return [arr[1], arr[0]];
//     }
//     else {
//         return arr;
//     }
// }

// ----------------------------4

// function findAddress(inputObj) {
//     // Extract properties from the input object
//     const name = inputObj.name || '__';
//     const address = inputObj.address || '__';
//     const phone = inputObj.phone || '__';

//     const output = `Name: ${name}\nAddress: ${address}\nPhone: ${phone}`;
    
//     return output;
// }

// // Example input object
// const inputObject = {
//     name: 'John Doe',
//     address: '123 Main St, City',
//     phone: '555-1234'
// };


// const formattedOutput = findAddress(inputObject,{street:10,house:“15A”,society:“Earth
//     Perfect”});

// console.log(formattedOutput);
