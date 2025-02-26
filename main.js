// Function to include HTML files
function includeHTML(id, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading the HTML file:', error));
}

// Load header and footer when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    includeHTML('header-container', 'header.html');
    includeHTML('footer-container', 'footer.html');
    
    // Your other JavaScript code here
});

// Get current page from URL or default to home
function showPage(pageName) {
    // Hide all pages
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('team-page').style.display = 'none';
    document.getElementById('publications-page').style.display = 'none';
    document.getElementById('contact-page').style.display = 'none';
    
    // Show selected page
    document.getElementById(pageName + '-page').style.display = 'block';
}

// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Add click event listeners
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const pageName = this.getAttribute('href').split('.')[0];
        showPage(pageName);
    });
});



// Show home page by default
showPage('home');

