// variables

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// Event Listeners
/** Open Modal */
openBtn.addEventListener('click', function() {
    modalContainer.style.display = 'block';
});

/** Close Modal */
closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});