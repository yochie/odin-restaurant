import "./about.css";
export default function () {
    const content = document.querySelector("#content");
    const aboutContainer = document.createElement("div");
    const title = document.createElement("h1");
    const descriptionContainer = document.createElement("div");
    const description = document.createElement("p");

    const contactContainer = document.createElement("div");
    const contactTitle = document.createElement("h2");
    const contact = document.createElement("p");

    aboutContainer.classList.add("about");

    title.classList.add("title");
    title.textContent = "About us";
    aboutContainer.appendChild(title);

    description.classList.add("description");

    description.textContent = "We're a restaurant... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in arcu egestas, sagittis velit non, feugiat dui. Etiam accumsan, massa et mollis vestibulum, ante eros vulputate urna, nec tempus ex magna non metus. Vestibulum venenatis massa quis elit fringilla dignissim. Cras suscipit molestie rhoncus. Aliquam eget ante et diam consectetur pretium. Ut vitae massa iaculis, iaculis sem non, scelerisque ante. Sed non libero mi. Donec sed lacus lacinia, dictum velit nec, sagittis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur, ante eleifend facilisis maximus, urna odio finibus tellus, sed lacinia felis elit accumsan leo."
    descriptionContainer.appendChild(description);
    aboutContainer.appendChild(descriptionContainer);


    contactTitle.textContent = "Contact information";
    contact.classList.add("contact-info")
    contact.textContent = "999 Boulevard of Dreams, FakeCity, FakeCountry"
    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(contact);
    aboutContainer.appendChild(contactContainer);

    content.appendChild(aboutContainer);
}