var goods = [];
var basket=
{
    products: [],
    getCount: function()
    {
        let cnt=0;
        for (let i=0; i<this.products.length;i++)
        {
            cnt+=this.products[i].count;        
        }
        return cnt;
    },
    getProducts: function()
    {
        let pList="";
        for (let i=0; i<this.products.length;i++)
        {
            pList+= "\r\n" + (i+1) + ". " + this.products[i].obj.manufacturer + " " + this.products[i].obj.model + " x" + this.products[i].count;
        }
        return pList;
    },
    getTotalCost: function()
    {
        let tcst=0;
        for (let i=0; i<this.products.length;i++)
        {
            tcst+=this.products[i].obj.price * this.products[i].count;        
        }
        return tcst;    
    }
};

new_good=function(_type, _price, _manufacturer, _model, _options)
{
    this.type=_type;
    this.price=_price;
    this.manufacturer=_manufacturer;
    this.model=_model;
    this.options = _options;
    this.getOptions = function()
    {
        let rv="";
        for (let optKey in this.options)
        {
                rv+=optKey + ": " + this.options[optKey]+"; ";        
        }
        return rv;
    }
};
new_basketObj=function(_obj,_count)
{
    this.obj = _obj;
    this.count = _count;
}

 

var good;
good = new new_good("TV",1, "Samsung","T1000",{diagonal: 43, dpi: 1000});
goods.push(good);
good = new new_good("TV",10, "Samsung","T2000",{diagonal: 55, dpi: 1200});
goods.push(good);
good = new new_good("PC",100, "ASUS","A456",{processor: "intel core i11", hdd: "HDD 1000Gb", video: "Radeon M2356 512M"});
goods.push(good);
good = new new_good("LAPTOP",1000, "ACER","B2356",{processor: "intel core i9", hdd: "SSD 500Gb", video: "Nvidea N4589 1024M"});
goods.push(good);    

addToBasket(goods[0],3);
addToBasket(goods[3],15);  
//addToBasket("Tefal U44P67Z",1);      
    
    

console.log("Basket count: " + basket.getCount());
console.log("Basket products: " + basket.getProducts());
console.log("Basket total cost:" + basket.getTotalCost());
    
function addToBasket(obj, cnt)
{

    if (typeof obj === typeof goods) 
    {
        const basketObj = new new_basketObj(obj,cnt);
        basket.products.push(basketObj);
        console.log('Added to basket:' + cnt + " x " + basketObj.obj.manufacturer + " " + basketObj.obj.model);
    }
    else
    {
        console.log('Only goods can be appended to basket!');        
    }
}

//function countBasketPrice()
//{
//    let basketSumm=0;
//    for (let i=0; i< basket.length; i++)
//    {
//        basketSumm+=basket.products[i].obj.price * basket.products[i].count;
//    }
//    return basketSumm;
//}
//    
//function getBasketGoods()
//{
//    var rv='';
//    for (let i=0; i< basket.length; i++)
//    {
//        rv+=basket.products[i].obj.manufacturer + " " + basket.products[i].obj.model + "(" +basket.products[i].obj.getOptions() + ") x [" + basket.products[i].count + "] \r\n";
//    }
//    return rv.substring(0,rv.length-2);    
//}    