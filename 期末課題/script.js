document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.slide-in');
    elements.forEach(function(element, index) {
        element.style.animationDelay = `${index * 0.5}s`;
    });
});

function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        document.body.classList.remove('shifted');
    } else {
        menu.style.display = 'block';
        document.body.classList.add('shifted');
    }
}

function confirmSubmission(event) {
    event.preventDefault();
    document.getElementById('popup').style.display = 'flex';
    return false;
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function submitForm() {
    closePopup();
    document.getElementById('confirmation-popup').style.display = 'flex';
}

function closeConfirmationPopup() {
    document.getElementById('confirmation-popup').style.display = 'none';
    document.getElementById('contact-form').submit();
}
