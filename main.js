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

    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let index = 0;
    const totalImages = images.length;

    function showSlide() {
      if (index < 0) {
        index = totalImages - 1;
      } else if (index >= totalImages) {
        index = 0;
      }
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    // Button event listeners
    prevBtn.addEventListener('click', () => {
      index--;
      showSlide();
    });

    nextBtn.addEventListener('click', () => {
      index++;
      showSlide(); 
      // Removed the 'sys' typo from here
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
      index++;
      showSlide();
    }, 5000);
    
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

