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

// PRACTICE: Additional element selections

// 1. Select the h1 element
const heading = document.querySelector("h1");
console.log("H1:", heading);

// 2. Select all elements with class "content"
const allContents = document.querySelectorAll(".content");
console.log("All contents:", allContents);

// 3. Select the form with id "contact-form"
const contactForm = document.getElementById("contact-form");
console.log("Contact form:", contactForm);

// 4. Select the email input
const emailInput = document.querySelector("#email");
console.log("Email input:", emailInput);

// 5. Select all list items in the navigation
const navItems = document.querySelectorAll("nav li");
console.log("Navigation items:", navItems);

// 6. Select the first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("First navigation link:", firstNavLink);

// 7. Select the last paragraph
const lastParagraph = document.querySelector("p:last-of-type");
console.log("Last paragraph:", lastParagraph);

// TASK 9.2: DOM TRAVERSAL

// Select the navigation element
const nav = document.querySelector("nav");

// Get its parent
console.log("Nav parent:", nav.parentElement);

// CHILDREN

// Get all direct children of nav
console.log("Nav children:", nav.children);

// Get the first direct child
console.log("First child:", nav.firstElementChild);

// Get the last direct child
console.log("Last child:", nav.lastElementChild);

// SIBLINGS

// Select the article
const article = document.querySelector("article");

// Get the next sibling element
console.log("Next sibling:", article.nextElementSibling);

// Get the previous sibling element
console.log("Previous sibling:", article.previousElementSibling);

// DESCENDANTS

// Select all links inside nav
const navLinks = nav.querySelectorAll("a");

console.log("Navigation descendants:", navLinks);

// 1. Header to nav
const headerElement = document.querySelector("header");
const headerNav = headerElement.querySelector("nav");

console.log("Header navigation:", headerNav);

// 2. First navigation link to its parent li
const firstLinkElement = document.querySelector(".nav-link");
const parentListItem = firstLinkElement.parentElement;

console.log("Parent list item:", parentListItem);

// 3. Article to its next sibling
const articleElement = document.querySelector("article");
const nextSection = articleElement.nextElementSibling;

console.log("Next sibling section:", nextSection);

// 4. Select ul and get all child li elements
const navList = document.querySelector(".nav-list");
const listItems = navList.children;

console.log("Navigation list children:", listItems);

// 5. Footer to body
const footerElement = document.querySelector("footer");
const bodyElement = footerElement.parentElement;

console.log("Footer parent:", bodyElement);

// TASK 9.3: MODIFYING CONTENT

// Select the h1 element
const pageHeading = document.querySelector("h1");

// Read text content
console.log("Text Content:", pageHeading.textContent);

// Read visible text
console.log("Inner Text:", pageHeading.innerText);

// Modify text
pageHeading.textContent = "My DOM Learning Journey";

console.log("Updated Heading:", pageHeading.textContent);
