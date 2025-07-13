// Add subtle hover animations (already done in CSS), can extend to future behavior
document.querySelectorAll('.img-hover img').forEach(img => {
    img.addEventListener('mouseover', () => {
      img.style.cursor = 'pointer';
    });
  });
  