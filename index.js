let shop=document.querySelector(".shop");

let shopItemData=[
    {
    id:"gdfhdfg",
    name:"Banana",
    price:5,
    img:"images/Flavours/banana.jpg"
    },
{
    id:"dfgsdfg",
    name:"Blueraspberry",
    price:5,
    img:"images/Flavours/blueraspberry.jpg"
},
{
    id:"dfgdreter",
    name:"Blackberry",
    price:5,
    img:"images/Flavours/blackberry.jpg"
},
{
    id:"fgmdnker",
    name:"Blueberry",
    price:5,
    img:"images/Flavours/blueberry.jpg"
}];

let basket=[];

let generateShop= () =>{
    return (shop.innerHTML= shopItemData.map((x)=>{
        let { id, name, price, img}= x;
        return `<div id=product-id-${id} class="item">
        <div class="image">
            <img src=${img} alt="" width="200" height="200">
        </div>
        <div class="title">
              <h4>${name}</h4>                  
                <h4>$ ${price}</h4>
        </div>
        <div class="button">
            <i onclick="increment(${id})" class="bi bi-plus-circle-fill"></i>
            <div id=${id} class="quantity">0</div>
            <i onclick="decrement(${id})" class="bi bi-dash-circle-fill"></i> 
        </div>   
          </div>`
    }).join(""));
};

generateShop();

let increment = (id) => {
let selectedItem=id;
let search=basket.find((x)=>x.id === selectedItem.id)
if (search === undefined)
{
    basket.push({
        id: selectedItem.id,
        item:1,
    });
}else{
    search.item += 1;
    }
    //console.log(basket);
    update(selectedItem.id);
};

let decrement = (id) => {
    let selectedItem=id;
    let search=basket.find((x)=>x.id === selectedItem.id)
    if (search.item === 0)
    
        return;
    else{
        search.item -= 1;
        }
        update(selectedItem.id);
    };
let update = (id) => {
let search=basket.find((x)=>x.id === id);
document.getElementById(id).innerHTML=search.item;
}

let calculation = () => {
    let cartIcon=document.getElementById("cart-item");
    
};