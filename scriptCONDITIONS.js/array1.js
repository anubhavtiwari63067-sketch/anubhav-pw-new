// when javascript needs to operate on different data types, it tries to convert one type of another -> this process is called type conversion.

// ARRAY IN JAVASCRIPT
// its a container
let marks= {
    stud1: 97,
    stud2: 76,

}
let mark = [97,76]
console.log(marks);
 
// ARRAY INDICES
// arr[0], arr[1],
// if i try to change the value of decleared valuethen we do ->
// marks[2] = 86;
//  then it gives 86 on the replace of 76. 

// STRING -> immutable ( iski value change nhi ki ja skti)
// ARRAY->(its a changeable value)

// LOOPING OVER AN ARRAY-> print all elements of an array.
// LOOP-> iterable [string, object, array]
// (ye ek aisa variable hota hai jisper hum loop laga skte h)

// use case of toString()->
// ye method kisi bhi value ya object ko string banane ke liye use kiya jata history.
// let number = 123;
// let str = num.toString();
// output = 123;

// // example of if else conditional statement;
// let num = 12;
// if(num % 5 == 0){
//     console.log("number is divisible by 5");
//     if(num % 2 == 0),{
//         Console.log("number is divisible bt 5 & 2"),
//     // } else{
//         Console.log("number is divisable by 5 but not by 2"),
//     // } else{
//         Console.log("no is not divisable by 5 ")
//     }
// }