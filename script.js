// Add subtle hover animations (already done in CSS), can extend to future behavior
document.querySelectorAll('.img-hover img').forEach(img => {
    img.addEventListener('mouseover', () => {
      img.style.cursor = 'pointer';
    });
  });



// Image Zoom Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('imgModalImg');
  const modalClose = document.getElementById('imgModalClose');
  const zoomableImgs = document.querySelectorAll('.zoomable-img');

  zoomableImgs.forEach(img => {
    img.addEventListener('click', function() {
      modal.style.display = 'flex';
      modalImg.src = this.getAttribute('data-img');
      modalImg.alt = this.alt;
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    });
  });

  modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
    modalImg.src = '';
    document.body.style.overflow = ''; // Restore scroll
  });

  // Close modal when clicking outside the image
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalImg.src = '';
      document.body.style.overflow = '';
    }
  });
});
