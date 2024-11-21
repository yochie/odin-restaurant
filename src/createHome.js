import "./home.css";
export default function () {
    const content = document.querySelector("#content");
    const homeContainer = document.createElement("div");
    const bannerContainer = document.createElement("div");
    const title = document.createElement("h1");
    const descriptionContainer = document.createElement("div");
    const description = document.createElement("p");

    homeContainer.classList.add("home");

    bannerContainer.classList.add("banner-container");
    title.classList.add("title");
    title.textContent = "Tasty Treats";
    bannerContainer.appendChild(title);
    homeContainer.appendChild(bannerContainer);


    descriptionContainer.classList.add("description-container");
    description.textContent = "Do you like food exile? Come taste our captured beasts."
    description.classList.add("description");
    descriptionContainer.appendChild(description);
    homeContainer.appendChild(descriptionContainer);

    content.appendChild(homeContainer);
}