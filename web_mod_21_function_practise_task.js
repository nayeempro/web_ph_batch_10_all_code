/**
 ********Task-1***********
 *Take four parameters. Multiply the four numbers and then return the result
*/ 

/*
function Multiply(a,b,c,d){
    const mul = a*b*c*d;
    return mul;
}

const m = Multiply(2,3,5,4)
console.log(m)
*/

/**
 * Task-2
 * Take a number if the number is odd multiply it by 2 and return the result. If the  number is even divide it by two and return the result.
 */

/*
function evenOdd(num){
    if (num%2===0){
        console.log("number is even and we divided it by 2")
        return num/2;
    }
    else{
        console.log("number is odd and we multiplied it by 2")
        return num * 2;
    }
}

let result = evenOdd(5)
*/

/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

/*
function make_avg(arr,size){
    let sum =0;
    for(const i of arr){
        sum = sum+i;
        console.log(i,sum)
    }
    return sum/size;

}
const  avg = make_avg([1,2,3,4],4)
console.log("average is ",avg)
*/

/**
 * Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */

/*
function count_zero(binaryStr){
    let len = 0;
    for(const i of binaryStr){
        if( i === '0') len++;
    } 
    console.log("Count of zero is ",len)
}

count_zero("1010101010100000")

*/

/**
 * Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

/*
function odd_even(num){
    if (num%2===0){
        return "Even";
    }
    else{
        return "Odd";
    }   
}

let res = odd_even(9);
console.log(res);
*/


