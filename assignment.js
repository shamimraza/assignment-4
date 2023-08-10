// -------------------------1-------------

function cubeNumber(number) {
    if (typeof number === 'number') {
        const result = number * number * number;
        return result;
    } else {
        return "Please provide a positive number.";
    }
}
// -----------------------------------2----------------------------
function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
      return "Both inputs must be strings.";
    }
  
    if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
  }
  
// ------------------3--------------------
function sortMaker(arr) {
    if (arr.length !== 2) {
        return ("Array must have exactly two elements.");
    }

    if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid Input";
    }
    else if (arr[0] === arr[1]) {
        return "equal";
    }
    else if (arr[1] > 0) {
        return [arr[1], arr[0]];
    }
    else {
        return arr;
    }
}

// -------------------4---------------------

function findAddress(obj) {
    if (typeof obj === 'object' && obj !== null) {
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';

        const address = `${street}, ${house}, ${society}`;
        return address;
    } else {
        return 'Input must be a valid object.';
    }
}

const object = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
};
// console.log(findAddress({street:10 }));

// -------------------------5------------------------

