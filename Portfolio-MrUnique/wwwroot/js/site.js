// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener('DOMContentLoaded', () => {
    // Select all offcanvas nav links
    const navLinks = document.querySelectorAll('.offcanvas-body .nav-link');
    const offcanvasElement = document.querySelector('.offcanvas');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href'); // Get target section ID
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll to the section
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

                // Manually hide the offcanvas
                const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
                offcanvasInstance.hide();
            }
        });
    });
});
