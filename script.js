// Add subtle hover animations (already done in CSS), can extend to future behavior
document.querySelectorAll('.img-hover img').forEach(img => {
    img.addEventListener('mouseover', () => {
      img.style.cursor = 'pointer';
    });
  });

function openSlide(page) {
  window.location.href = page;
}

function zoomImage(img) {
  const overlay = document.getElementById('overlay');
  const overlayImg = document.getElementById('overlayImg');
  overlayImg.src = img.src;
  overlay.style.display = 'flex';
}

function closeZoom() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}
