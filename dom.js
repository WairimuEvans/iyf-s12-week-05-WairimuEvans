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

// EXERCISE 2: HTML CONTENT

// Select the article
const articleContent = document.querySelector("article");

// Read HTML content
console.log("Original HTML:", articleContent.innerHTML);

// Modify HTML content
articleContent.innerHTML = `
    <h2>My Updated Article</h2>
    <p>I am learning how to manipulate HTML using JavaScript.</p>
`;

console.log("Updated HTML:", articleContent.innerHTML);

// SECURITY PRACTICE

const userInput = `<img src="x" onerror="alert('hacked!')">`;

// Treating user input as HTML is dangerous.
// Do not execute this using innerHTML.
console.log("Safe text output:", userInput);

// textContent displays the characters instead of interpreting them.
const safeOutput = document.createElement("p");
safeOutput.textContent = userInput;
console.log("Safe element:", safeOutput);

// EXERCISE 3: ATTRIBUTES

// Select the first navigation link
const linkElement = document.querySelector(".nav-link");

// Get attribute
console.log("Original href:", linkElement.getAttribute("href"));

// Access attribute through property
console.log("Href property:", linkElement.href);

// Set attribute
linkElement.setAttribute("href", "https://developer.mozilla.org");

// Check attribute
console.log("Has target:", linkElement.hasAttribute("target"));

// Remove attribute
linkElement.removeAttribute("target");

console.log("Updated href:", linkElement.getAttribute("href"));

// DATA ATTRIBUTES

const dataElement = document.querySelector("[data-id]");

console.log("ID:", dataElement.dataset.id);
console.log("Category:", dataElement.dataset.category);

// Create a new data attribute
dataElement.dataset.newAttr = "value";

console.log("New attribute:", dataElement.dataset.newAttr);

// EXERCISE 4: MODIFYING STYLES

// Select the main container
const mainContainer = document.querySelector(".container");

// Modify individual styles
mainContainer.style.backgroundColor = "#f0f0f0";
mainContainer.style.padding = "30px";
mainContainer.style.borderRadius = "8px";

// Modify multiple styles using Object.assign()
Object.assign(mainContainer.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});

// TASK 9.4: ADDING AND REMOVING ELEMENTS

// EXERCISE 1: CREATING ELEMENTS

// Create a new paragraph
const newParagraph = document.createElement("p");

// Add text to the paragraph
newParagraph.textContent = "This is a new paragraph!";

// Add CSS classes
newParagraph.className = "content highlight";

// Select the article
const secondArticleElement = document.querySelector("article");

// Add paragraph at the end
articleElement.appendChild(newParagraph);

// INSERT BEFORE ANOTHER ELEMENT

// Select the first paragraph inside article
const firstParagraph = articleElement.querySelector("p");

// Insert newParagraph before firstParagraph
articleElement.insertBefore(newParagraph, firstParagraph);

// MODERN INSERTION METHODS

// Add as the first child of article
articleElement.prepend(newParagraph);

// Add as the last child of article
articleElement.append(newParagraph);

// Insert before firstParagraph
firstParagraph.before(newParagraph);

// Insert after firstParagraph
firstParagraph.after(newParagraph);
