interface isProduct{
    productId:number,
    productName:string,
    productPrice?:number,
    details?(a:number):string
}

const p1 : isProduct ={
    productId:101,
    productName:"Dell Laptop",
    details:function (){
        return ""
    }
}

console.log(p1)
console.log(p1.productId)