// document.querySelectorAll('.card').forEach(card => {
//     // 3D Tilt effect
//     card.addEventListener('mousemove', (e) => {
//       const rect = card.getBoundingClientRect();
//       const x = e.clientX - rect.left - rect.width / 2;
//       const y = e.clientY - rect.top - rect.height / 2;
//       card.style.transform = `rotateY(${x / 10}deg) rotateX(${ -y / 10 }deg)`;
//     });
  
//     card.addEventListener('mouseleave', () => {
//       card.style.transform = 'rotateY(10deg) rotateX(30deg) rotatez(2deg)';
//     });
  
//     // Click = Circle mode
//     card.addEventListener('click', () => {
//       card.classList.add('circle');
//     });
  
//     // Double-click = Back to normal
//     card.addEventListener('dblclick', () => {
//       card.classList.remove('circle');
//     });
//   });
  



document.querySelectorAll('.card').forEach(card => {
  // 3D Tilt effect
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // card.style.transform = `rotateY(${x / 70}deg) rotateX(${ -y / 90 }deg)`;
    card.style.transform = 'rotateY(10deg) rotateX(30deg) rotatez(2deg)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });

  // Click = Circle mode
  card.addEventListener('click', () => {
    card.classList.add('circle');
  });

  // Double-click = Back to normal
  card.addEventListener('dblclick', () => {
    card.classList.remove('circle');
  });
});
