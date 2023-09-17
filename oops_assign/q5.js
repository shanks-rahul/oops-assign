class product{
    constructor(name,category,price,stock){
        this.name= name;
        this.category = category ;  //category is a string
        this.price=price;
        this.stock= stock;
    }
}


class inventory{
    constructor(){
        this.products=[];
    }
    addProducts(product){
        this.products.push(product);
        console.log(`${product.name} has been added`);
    }
    deleteProduct(name){
        this.products.forEach((Product)=>{
            if(Product.name==name){
                let index=this.products.indexOf(Product)
                this.products.splice(index,1);
                console.log(`deleted ${Product.name}`);
            }

        })
    }
    showallProducts(){
    if(this.products.length>0){
        this.products.forEach((Product)=>{
            console.table([`${Product.name}`, `${Product.category}` ,`$${Product.price}`]);
        })
    }
    else{
        console.log("No products at inventory");
    }
    }
}

const Inventory=new inventory();
const Product1=new product('laptop','electronics',20,50);
const Product2=new product('mobile','electronics',20,50);


Inventory.addProducts(Product1);
Inventory.addProducts(Product2);
// Inventory.showallProducts();
Inventory.deleteProduct('mobile');
Inventory.showallProducts();