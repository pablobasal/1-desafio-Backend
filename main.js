
class ProductManager{
    static ultId=0;
    constructor(){
        this.products=[];
    }
    addProducts(tittle, description, price, img, code, stock){
        if(!tittle||!description||!price||!img||!code||!stock){
            console.log("Debe completar todos los campos");
            return;
        }
        if(this.products.some(item=>item.code===code)){
            console.log("El código debe ser único");
            return;
        }
        const newProduct={
            id: ++ProductManager.ultId,
            tittle,
            description,
            price,
            img,
            code,
            stock
        }
        this.products.push(newProduct);
    }
    getProducts(){
        return this.products;
    }
    getProductsById(id){
        const product=this.products.find(item=>item.id===id);
        if(!product){
            console.error("Not Found");
        } else{
            console.log(product);
        }
    }
}