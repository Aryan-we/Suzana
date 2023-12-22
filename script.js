    
let likeCount = 0;

function likePost() {
likeCount++;
document.getElementById("likeCount").textContent = likeCount;
}
document.getElementById("comment-form").addEventListener("submit", function(event) {
event.preventDefault(); // Prevent form submission

// Get the input values
var nameInput = document.getElementById("name");
var commentInput = document.getElementById("comment");

// Create a new comment element
var commentElement = document.createElement("div");
commentElement.className = "comment";

// Create name and comment text nodes
var nameNode = document.createTextNode(nameInput.value + ": ");
var commentNode = document.createTextNode(commentInput.value);

// Append text nodes to the comment element
commentElement.appendChild(nameNode);
commentElement.appendChild(commentNode);

// Append the comment element to the comments container
document.getElementById("comments").appendChild(commentElement);

// Clear input fields
nameInput.value = "";
commentInput.value = "";
});
// Define an array of colors
const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

// Get the button and container elements
const changeButton = document.getElementById('changeButton');
const container = document.getElementById('container');

// Add click event listener to the button
changeButton.addEventListener('click', changeBackgroundColor);

// Function to change the background color
function changeBackgroundColor() {
// Generate a random index within the range of the colors array
const randomIndex = Math.floor(Math.random() * colors.length);

// Get the color from the array using the random index
const randomColor = colors[randomIndex];

// Set the background color of the container to the random color
container.style.backgroundColor = randomColor;
}
