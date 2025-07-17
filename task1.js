const navItems = document.querySelectorAll('.item');

navItems.forEach(item => {
  // Mouse enters
  item.addEventListener('mouseenter', () => {
    item.style.color = '#87CEFA';
    item.style.transform = 'scale(1.1)';
    
    item.style.backgroundColor = 'rgba(255, 255, 0, 0.1)';
    item.style.transition = 'all 0.3s ease';
  });

  // Mouse leaves
  item.addEventListener('mouseleave', () => {
    item.style.color = 'white';
    item.style.transform = 'scale(1)';
    item.style.textDecoration = 'none';
    item.style.backgroundColor = 'transparent';
  });
});
