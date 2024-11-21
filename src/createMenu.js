import "./menu.css";
export default function () {
    const content = document.querySelector("#content");
    
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu");

    const titleContainer = document.createElement("div");
    const title = document.createElement("h1");

    title.textContent = "Menu";
    titleContainer.appendChild(title);
    menuContainer.appendChild(titleContainer);

    const foodSection = createMenuCategory("Food", ["Meat", "Fish", "Salad"]);
    menuContainer.appendChild(foodSection);

    const drinksSection = createMenuCategory("Drinks", ["Beer", "Wine", "Water"]);
    menuContainer.appendChild(drinksSection);

    const desertsSection = createMenuCategory("Deserts", ["Ice cream", "Cake"]);
    menuContainer.appendChild(desertsSection);

    content.appendChild(menuContainer);
}

function createMenuCategory(title, entries) {

    const categoryContainer = document.createElement("div");
    const categoryTitle = document.createElement("h2");
    const categoryList = document.createElement("ul");
    categoryList.role = "list";

    categoryTitle.textContent = title;
    categoryContainer.appendChild(categoryTitle);

    for (let entry of entries) {
        const entryItem = document.createElement("li");
        entryItem.textContent = entry;
        categoryList.appendChild(entryItem);
    }

    categoryContainer.appendChild(categoryList);
    return categoryContainer;
}