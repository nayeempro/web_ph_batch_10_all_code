// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:
// ['orange', 'yellow', 'green', 'blue', 'red']

//===========Method 1  unshift Method==========

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let rev_colors = [];
for (let i=0; i<colors.length; i++){
    rev_colors.unshift(colors[i]);
}
console.log(colors);
console.log(rev_colors);


//===========Method 2 Push Method==========

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let rev_colors = [];
for (let i= colors.length-1; i>=0; i--){
    rev_colors.push(colors[i]);
}
console.log(colors);
console.log(rev_colors);


//================= Task 2 ===================
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
// Output: [12, 98, 76, 46]

//=========Ans============
const numbers = [12, 98, 5, 41, 23, 78, 46];
const even_numbers = [];
for(i=0; i<numbers.length;i++){
    if(numbers[i] %2 ===0){
        even_numbers.push(numbers[i])
    }
    else{
        continue;
    }
}
console.log(numbers);
console.log(even_numbers);




// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
Output:'TomTimTinTik'

========Answer===========
var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
const new_num = numbers.join("");
console.log(new_num);
console.log(typeof new_num);



//================= Task 4 (Hard) ================
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output: 'person working hard a am I'

// ============= Answer ==============
const statement = 'I am a hard working person';
const array_statement = statement.split(" ");
let rev_statement = [];
for(let i=0;i<array_statement.length;i++){
    rev_statement.unshift(array_statement[i])
}

console.log(array_statement);
console.log(rev_statement);
//join the whole array by space
rev_statement = rev_statement.join(" ")

console.log(rev_statement);