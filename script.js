// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Registration Form Handling
document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent form from submitting to a server
    
    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const college = document.getElementById("college").value;

    // Here, you can store the data to a database (Not implemented in this example)

    // Show success message and coins
    document.getElementById("successMessage").style.display = "block";
    
    // Reset form
    document.getElementById("registrationForm").reset();
});

// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example functionality for "View Details" (can open a modal or redirect)
document.querySelectorAll('.event-item button').forEach(button => {
    button.addEventListener('click', function () {
        alert('View Details button clicked! This can open a modal or redirect to a detailed event page.');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.mark-attendance');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const row = button.closest('tr');
            const statusCell = row.querySelector('.status');
            const coinsCell = row.querySelector('td:nth-child(4)');
            
            if (statusCell.classList.contains('attended')) {
                // Mark as missed
                statusCell.classList.remove('attended');
                statusCell.classList.add('missed');
                statusCell.textContent = 'Missed';
                coinsCell.textContent = '25';
                button.textContent = 'Mark Attended';
            } else if (statusCell.classList.contains('missed')) {
                // Mark as attended
                statusCell.classList.remove('missed');
                statusCell.classList.add('attended');
                statusCell.textContent = 'Attended';
                coinsCell.textContent = '0';
                button.textContent = 'Mark Missed';
            } else if (statusCell.classList.contains('pending')) {
                // Mark as attended
                statusCell.classList.remove('pending');
                statusCell.classList.add('attended');
                statusCell.textContent = 'Attended';
                coinsCell.textContent = '0';
                button.textContent = 'Mark Missed';
            }
        });
    });
});
