const itemContainer = document.getElementById("item-container");
const itemImg = document.getElementById("item-img");
const itemInfo = document.getElementById("item-info");
const allBtn = document.getElementById("allBtn");
const breakfastBtn = document.getElementById("breakfastBtn");
const lunchBtn = document.getElementById("lunchBtn");
const beverageBtn = document.getElementById("beverageBtn");
const breakfastArray = [];
const lunchArray = [];
const beverageArray = [];

const itemsOnMenu = [
    {
        name: "Pancakes",
        info: "Fluffy pancakes served with maple syrup and fresh berries.",
        picture: "./images/pancakes.png",
        type: "breakfast"
    },
    {
        name: "Omelette",
        info: "Three-egg omelette with cheese, ham, and bell peppers.",
        picture: "./images/omelette.png",
        type: "breakfast"
    },
    {
        name: "Chicken Caesar Salad",
        info: "Grilled chicken breast on a bed of romaine lettuce, topped with Caesar dressing and parmesan cheese.",
        picture: "./images/salad.png",
        type: "lunch"
    },
    {
        name: "Spaghetti Bolognese",
        info: "Classic Italian pasta with a rich and hearty meat sauce.",
        picture: "./images/spagetti.png",
        type: "lunch"
    },
    {
        name: "Grilled Salmon",
        info: "Grilled salmon fillet served with roasted vegetables and lemon butter sauce.",
        picture: "./images/salmon.png",
        type: "lunch"
    },
    {
        name: "Margherita Pizza",
        info: "Thin-crust pizza with fresh mozzarella, tomatoes, and basil.",
        picture: "./images/pizza.png",
        type: "lunch"
    },
    {
        name: "Iced Coffee",
        info: "Cold brew coffee served over ice, sweetened with milk or cream.",
        picture: "./images/coffee.png",
        type: "beverage"
    },
    {
        name: "Steak",
        info: "Grilled ribeye steak served with mashed potatoes and garlic butter.",
        picture: "./images/steak.png",
        type: "lunch"
    },
    {
        name: "Lemonade",
        info: "Freshly made lemonade with a hint of mint.",
        picture: "./images/lemonade.png",
        type: "beverage"
    },
    {
        name: "Orange Juice",
        info: "Freshly squeezed orange juice served with ice.",
        picture: "./images/orange.png",
        type: "beverage"
    }
];

const groupMenuItems = () =>{
    for(let i = 0; i < itemsOnMenu.length; i++){
        if(itemsOnMenu[i].type == "breakfast"){
            breakfastArray.push(itemsOnMenu[i]);
        }else if(itemsOnMenu[i].type == "lunch"){
            lunchArray.push(itemsOnMenu[i]);
        }else{
            beverageArray.push(itemsOnMenu[i]);
        }
    }
}

groupMenuItems();

const showResults = (arr) => {
    itemContainer.innerHTML = arr.map(item =>{
        return `<div class = "item-container" >
            <span class="item-img">
                <div><img src="${item.picture}" alt="${item.name}" class="img"></div>
            </span>
            <span class="item-info">
                <h2>${item.name}</h2>
                <p>${item.info}</p>
            </span>                      
        </div>`
    }).join("");
}

allBtn.addEventListener("click", function(){
    showResults(itemsOnMenu);
})
breakfastBtn.addEventListener("click", function(){
    showResults(breakfastArray);
})
lunchBtn.addEventListener("click", function(){
    showResults(lunchArray);
})
beverageBtn.addEventListener("click", function(){
    showResults(beverageArray);
})


