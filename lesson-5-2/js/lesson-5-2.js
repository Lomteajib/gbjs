//"use strict"
var basketGoods;
var products;
var cart;

new_product = function(_id, _type, _price, _manufacturer, _model, _options)
{
    this.id=_id;
    this.type=_type;
    this.price=_price;
    this.manufacturer=_manufacturer;
    this.model=_model;
    this.options = _options;
    this.getOptions = function()
    {
        let rv = "";
        for (let optKey in this.options)
        {
            rv += optKey + ": " + this.options[optKey]+"; ";        
        }
        return rv;
    }
};

new_basketObj=function(_obj,_count)
{
    this.obj = _obj;
    this.count = _count;
};


const basket =
{
    
    init()
    {
        this.initProducts();
        this.initEmptyBasket();
        this.initHTML();
        
    },
    
    initEmptyBasket()    
    {
        cart=document.getElementById("basket");
        cart.innerHTML="Пусто";
        basketGoods=[];
    },
    
    initHTML()
    {
        
        this.initListeners();
    },
    
    initListeners()
    {
        let obj = document.getElementById("basket");
        let pv = document.getElementById("basketGoods");
        obj.addEventListener('mouseenter', function()   
        {
        if (basketGoods.length > 0)
        {
            pv.style.top="60px";
            pv.style.left="calc(100% - 400px)";
            pv.style.display="block";  
            this.showBasketProducts();
            
        }
        });
        obj.addEventListener("mouseleave",function()
        {
            pv.style.display="none";    
        });        
    },
    
    addToBasket(productId, productCount)
    {
    let dd=false;

        for (let doub=0; doub < basketGoods.length; doub++)
        {
            if (basketGoods[doub].obj.id == products[productId].id)
            {
                basketGoods[doub].count += +productCount;
                dd=true;
                break;
            }
        }

        if (!dd)
        {

            const basketObj = new new_basketObj(products[productId],+productCount);
            basketGoods.push(basketObj);
//            console.log('Added to basket:' + cnt + " x " + basketObj.obj.manufacturer + " " + basketObj.obj.model);
        }
        this.showBasket();        
        
    },
    
    getTotalCost()
    {
        let basketSumm=0;
        for (let i=0; i< basketGoods.length; i++)
        {
            basketSumm+=basketGoods[i].obj.price * basketGoods[i].count;
        }
        return basketSumm;
    },
    
    getBasketCount()
    {
        let basketCount=0;
        for (let i=0; i< basketGoods.length; i++)
        {
            basketCount+= basketGoods[i].count;
        }
        return basketCount;        
    },
        
    showBasket()
    {
        cart.innerHTML = "В корзине [" + this.getBasketCount() + "] товаров на сумму " + this.getTotalCost() + " руб.";  
    },
    
    showBasketProducts()
    {
        let rv="<table><tr><th>Manufacturer</th><th>Model</th><th>Count</th><th>Price</th><th>Cost</th></tr>";
        for (let i=0; i< basketGoods.length; i++)
        {
            rv+="<tr><td>" + basketGoods[i].obj.manufacturer + "</td><td>" + basketGoods[i].obj.model + "</td><td>" + basketGoods[i].count + " шт.</td><td>" + basketGoods[i].obj.price + "</td><td>" + (basketGoods[i].obj.price * basketGoods[i].count) + "</td></tr>";
        }   
        rv+="</table>";
        document.getElementById("basketGoods").innerHTML = rv;
    },

    initProducts()
    {
        products=[];
        let product;

        product = new new_product(1, "TV",45000, "Samsung","T1000",{diagonal: 43, dpi: 1000});
        products.push(product);

        product = new new_product(2, "TV",55000, "Samsung","T2000",{diagonal: 55, dpi: 1200});
        products.push(product);

        product = new new_product(3, "PC",75000, "ASUS","A456",{processor: "intel core i11", hdd: "HDD 1000Gb", video: "Radeon M2356 512M"});
        products.push(product);

        product = new new_product(4, "LAPTOP",175000, "ACER","B2356",{processor: "intel core i9", hdd: "SSD 500Gb", video: "Nvidea N4589 1024M"});
        products.push(product); 
    },
    

};

basket.init();
basket.addToBasket(0,4);
basket.addToBasket(1,1);
basket.addToBasket(0,5);
basket.showBasketProducts();


//товары с картинками добавлю в 6 задании
