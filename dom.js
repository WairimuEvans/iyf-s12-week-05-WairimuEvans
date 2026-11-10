// --- Provided Examples ---
const header = document.getElementById("main-header");
console.log("getElementById:", header);

const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);


// --- Practice Solutions ---

// 1. The h1 element
const h1Element = document.querySelector("h1");
console.log("1. H1 element:", h1Element);

// 2. All elements with class "content"
const allContentElements = document.querySelectorAll(".content");
console.log("2. All content elements:", allContentElements);

// 3. The form with id "contact-form"
const contactForm = document.getElementById("contact-form");
console.log("3. Contact form:", contactForm);

// 4. The email input
const emailInput = document.getElementById("email");
console.log("4. Email input:", emailInput);

// 5. All list items in the nav
const navListItems = document.querySelectorAll(".nav-list li");
console.log("5. Nav list items:", navListItems);

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("6. First nav-link:", firstNavLink);

// 7. The last paragraph
const lastParagraph = document.querySelector("main p:last-of-type");
console.log("7. Last paragraph:", lastParagraph);