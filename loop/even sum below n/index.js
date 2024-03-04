let num=prompt("enter number")
let sum=0

for(let i=1; num>=i; i++){
    if(i%2==0){
        sum=sum+i;
    }
}
console.log(sum);