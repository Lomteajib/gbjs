var products = [];
var basket=[];
var bsk; 



new_product=function(_id, _type, _price, _manufacturer, _model, _options)
{
    this.id=_id;
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
};

function fillProducts()
{

    var product;

    product = new new_product(1, "TV",45000, "Samsung","T1000",{diagonal: 43, dpi: 1000});
    products.push(product);

    product = new new_product(2, "TV",55000, "Samsung","T2000",{diagonal: 55, dpi: 1200});
    products.push(product);

    product = new new_product(3, "PC",75000, "ASUS","A456",{processor: "intel core i11", hdd: "HDD 1000Gb", video: "Radeon M2356 512M"});
    products.push(product);

    product = new new_product(4, "LAPTOP",175000, "ACER","B2356",{processor: "intel core i9", hdd: "SSD 500Gb", video: "Nvidea N4589 1024M"});
    products.push(product); 
    
    
    const shop_body=document.getElementById("main");
    let o = document.createElement("table");
        o = document.createElement("tr");
        shop_body.appendChild(o);
        o = document.createElement("th")
        o.innerText="Type";
        shop_body.appendChild(o);
        o = document.createElement("th")
        o.innerText="Manufacturer";
        shop_body.appendChild(o);
        o = document.createElement("th")
        o.innerText="Model";
        shop_body.appendChild(o);
        o = document.createElement("th")
        o.innerText="Price";
        shop_body.appendChild(o);
        o = document.createElement("th")
        o.innerText="Buy";
        shop_body.appendChild(o);
    

    for (let p=0; p< products.length;p++)
    {

        o = document.createElement("tr");
        
        shop_body.appendChild(o);
        o = document.createElement("td")
        o.innerHTML=products[p].type;
        o.title = products[p].getOptions();
        shop_body.appendChild(o);
        o = document.createElement("td")
        o.innerHTML=products[p].manufacturer;
        o.title = products[p].getOptions();
        shop_body.appendChild(o);   
        o = document.createElement("td")
        o.title = products[p].getOptions();
        o.innerHTML=products[p].model;
        shop_body.appendChild(o);
        o = document.createElement("td")
        o.innerHTML=products[p].price;
        shop_body.appendChild(o);
        o = document.createElement("td")
        o.innerHTML="<input type='text' value='1' id='productCount"+p+"'/>";
        o.innerHTML += "<input type='button' value='buy' onClick='addToBasket("+p+")'/>";
        shop_body.appendChild(o);        
    
    }

}


    
function addToBasket(objid)
{
    var obj=products[objid];
    var cnt = document.getElementById("productCount"+objid).value;
    
    let dd=false;

        for (let doub=0; doub < basket.length; doub++)
        {
            if (basket[doub].obj.id == obj.id)
            {
                basket[doub].count += +cnt;
                dd=true;
                break;
            }
        }

        if (!dd)
        {

            const basketObj = new new_basketObj(obj,+cnt);
            basket.push(basketObj);
            console.log('Added to basket:' + cnt + " x " + basketObj.obj.manufacturer + " " + basketObj.obj.model);
        }
        showBasket();
}

function countBasketPrice()
{
    let basketSumm=0;
    for (let i=0; i< basket.length; i++)
    {
        basketSumm+=basket[i].obj.price * basket[i].count;
    }
    return basketSumm;
}

function getBasketProductCount()
{
    let basketCount=0;
    for (let i=0; i< basket.length; i++)
    {
        basketCount+=basket[i].count;
    }
    return basketCount; 
}


function showBasket()
{
    
    bsk.innerHTML="";
    let p=document.createElement("div");
    p.style.zIndex="-1";
    console.log(basket.length);
    if (basket.length > 0)
    {
        
        p.innerHTML="В корзине: " + getBasketProductCount() + " товар" +getEnding(basket.length) + " на сумму " + countBasketPrice();
        bsk.appendChild(p);
   
    }
    else
    {
        p.innerHTML="ЗДЭС НЭТ НИКТО!";
        bsk.appendChild(p);
        
    }
}

function getEnding(num)
{
    switch (+num%10)
    {
        case 1:
            return "";
        case 2:
        case 3:
        case 4:
            return "a";
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:    
            return "ов";
        default:
            return ("(-а, -ов)");
            
    }
}

function getBasket()
{
    let rv="<table><tr><th>Manufacturer</th><th>Model</th><th>Count</th><th>Price</th><th>Cost</th></tr>";
    for (let i=0; i< basket.length; i++)
    {
        rv+="<tr><td>" + basket[i].obj.manufacturer + "</td><td>" + basket[i].obj.model + "</td><td>" + basket[i].count + " шт.</td><td>" + basket[i].obj.price + "</td><td>" + (basket[i].obj.price * basket[i].count) + "</td></tr>";
    }   
    rv+="</table>";
    return rv;
}

function init()
{

    
    bsk = document.getElementById("basket");
    bsk.addEventListener('mouseenter', function()   
    {
        if (basket.length > 0)
        {
            document.getElementById("basket_preview").style.top="60px";
            document.getElementById("basket_preview").style.left="calc(100% - 350px)";
            document.getElementById("basket_preview").innerHTML=getBasket();
            document.getElementById("basket_preview").style.display="block";  
        }
    });
    bsk.addEventListener("mouseleave",function()
    {
        document.getElementById("basket_preview").style.display="none";    
    });

    showBasket();
    fillProducts();
}


window.onload = init;