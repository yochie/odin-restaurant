import "./styles.css"
import generateHome from "./createHome.js";
import generateMenu from "./createMenu.js";
import generateAbout from "./createAbout.js";

const content = document.querySelector("#content");
const buttonNodes = document.querySelectorAll("button");
const DEFAULT_PAGE = "home";
let currentlyDisplayed = null;

displayPage(DEFAULT_PAGE);
highlightSelectedPageButton(DEFAULT_PAGE);

for (const button of buttonNodes) {
    button.addEventListener("click", (event) => {
        const selected = button.getAttribute("data-attribute");
        displayPage(selected);
        highlightSelectedPageButton(selected);
    });
}

function displayPage(page) {
    if(currentlyDisplayed === page){
        return;
    }
    currentlyDisplayed = page;
    content.replaceChildren();
    switch (page) {
        case "home":
            generateHome();
            break;
        case "menu":
            generateMenu();
            break;
        case "about":
            generateAbout();
            break;
        default:
            generateHome();
    }
}

function highlightSelectedPageButton(selectedPage){
    for(const button of buttonNodes){
        const forPage = button.getAttribute("data-attribute");
        if (forPage === selectedPage){
            button.classList.add("selected");
        } else {
            button.classList.remove("selected");
        }
    }
}

console.log("hello");