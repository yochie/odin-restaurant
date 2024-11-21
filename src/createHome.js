import "./styles.css";

const container = document.querySelector("#content");
const bannerContainer = document.createElement("div");
const title = document.createElement("h1");
const descriptionContainer = document.createElement("div");
const description = document.createElement("p");

bannerContainer.classList.add("banner-container");
title.classList.add("title");
title.textContent = "Tasty Treats";
bannerContainer.appendChild(title);
container.appendChild(bannerContainer);


descriptionContainer.classList.add("description-container");
description.textContent = "Do you like food exile? Come taste our captured beasts."
description.classList.add("description");
descriptionContainer.appendChild(description);
container.appendChild(descriptionContainer);
