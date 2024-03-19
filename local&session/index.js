// document.querySelector("#count").innerHTML=count;

let count = localStorage.getItem("count");
const add = () => {
    count = count + 1;
    document.querySelector("#count").innerHTML=count;
    localStorage.setItem("count",count);
}


document.querySelector("#add").addEventListener("click", add)