// ================================
// DIALOG FUNCTIONALITY
// ================================
 
const specsDialog = document.getElementById('specs-dialog');
const openDialogBtn = document.getElementById('open-specs-dialog');
const closeDialogBtn = specsDialog?.querySelector('.close-dialog');
 
openDialogBtn?.addEventListener('click', () => {
    specsDialog.showModal();
});
 
closeDialogBtn?.addEventListener('click', () => {
    specsDialog.close();
});
 
// Close dialog when clicking outside
specsDialog?.addEventListener('click', (event) => {
    if (event.target === specsDialog) {
        specsDialog.close();
    }
});
 
// ================================
// THUMBNAIL GALLERY
// ================================
 
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image img');
 
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        // Update active states
        thumbnails.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-pressed', 'false');
        });
        thumbnail.classList.add('active');
        thumbnail.setAttribute('aria-pressed', 'true');
 
        // In a real application, update the main image source
        console.log(`Switching to image ${index + 1}`);
    });
});
 
// ================================
// QUANTITY CONTROLS
// ================================
 
const quantityInput = document.getElementById('quantity');
const qtyBtns = document.querySelectorAll('.qty-btn');
 
qtyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        const min = parseInt(quantityInput.min);
        const max = parseInt(quantityInput.max);
 
        if (btn.textContent === '−' && currentValue > min) {
            quantityInput.value = currentValue - 1;
        } else if (btn.textContent === '+' && currentValue < max) {
            quantityInput.value = currentValue + 1;
        }
    });
});
 
// ================================
// WISHLIST TOGGLE
// ================================
 
const wishlistBtn = document.querySelector('.wishlist-btn');
 
wishlistBtn?.addEventListener('click', () => {
    wishlistBtn.classList.toggle('active');
    const isActive = wishlistBtn.classList.contains('active');
    wishlistBtn.innerHTML = isActive ? '♥' : '♡';
    wishlistBtn.setAttribute('aria-label',
        isActive ? 'Remove from wishlist' : 'Add to wishlist'
    );
});
 
// ================================
// FORM SUBMISSION
// ================================
 
const productForm = document.querySelector('.product-form');
 
productForm?.addEventListener('submit', (event) => {
    event.preventDefault();
 
    const formData = new FormData(productForm);
    const selectedColour = formData.get('colour');
    const quantity = formData.get('quantity');
 
    console.log('Adding to basket:', { colour: selectedColour, quantity });
 
    // Visual feedback
    const addBtn = productForm.querySelector('.add-to-cart');
    const originalText = addBtn.querySelector('.btn-text').textContent;
 
    addBtn.querySelector('.btn-text').textContent = 'Added!';
    addBtn.disabled = true;
 
    setTimeout(() => {
        addBtn.querySelector('.btn-text').textContent = originalText;
        addBtn.disabled = false;
    }, 2000);
});