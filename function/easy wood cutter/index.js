// create a variable give a name, number then assign a value then after you have the check and print it if the value is odd print it's an odd number else it's an even number
// input
// 4
// output 
// it's an even number

function evenodd() {
    let N = prompt("enter the num");
    if (N % 3 == 0) {
        console.log("yes");
    } else {
        console.log("no");
    }

}
evenodd()