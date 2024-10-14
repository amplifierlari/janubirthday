// Predefined username and password (You can change these)
const predefinedUsername = "azgari";
const predefinedPassword = "ahadwife";

// Add event listeners to create an interactive 3D effect
const loginBox = document.querySelector('.login-box');
document.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  loginBox.style.transform = 'rotateY(${xAxis}deg) rotateX(${yAxis}deg)';
});

document.addEventListener('mouseleave', () => {
  loginBox.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

// Form validation function with predefined username and password check
const form = document.getElementById('loginForm');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (validateLogin(username, password)) {
    alert('Login successful!');
    // Redirect to another page after successful login
    window.location.href = "https://amplifierlari.github.io/birthdayofmyjanu/";  // Replace with the URL you want to open
  } else {
    alert('Invalid username or password!');
  }
});

// Function to validate the login with predefined credentials
function validateLogin(username, password) {
  return username === predefinedUsername && password === predefinedPassword;
}

// Optional: Add button animation on click
const button = document.querySelector('button');
button.addEventListener('click', () => {
  button.style.transform = 'scale(1.2)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 200);
});