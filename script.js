// 1. Select ALL buttons with the 'ripple-btn' class
const buttons = document.querySelectorAll(".custom-button");

// 2. Loop through each button in the list
buttons.forEach(button => {
  
  // 3. Add the event listener to each individual button
  button.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;

    let ripples = document.createElement('span');
    ripples.style.left = `${x}px`;
    ripples.style.top = `${y}px`;
    
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
});