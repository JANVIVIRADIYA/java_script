
let products = []
const handlesubmit = (e) => {
    e.preventDefault() 
    
    let title = document.getElementById("title").value
    let img = document.getElementById("img").value
    let price = document.getElementById("price").value

    let product = {
        title: title,
        img: img,
        price: price
    }
    console.log(product);
}


document.getElementById("form").addEventListener("submit",handlesubmit)