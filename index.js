const url="https://dummyjson.com/products";
 async function getproduct(){
    const products=await fetch(url);
    const producs=await products.json();
    console.log(producs)
 }
    
 getproduct();