// Select the button by its ID
const button1 = document.getElementById("btn-one");

// Add a click event listener
//button.addEventListener('click', () => {
//    alert('Button was clicked!');
//    console.log('The 84x84 button is functional.');
//});

button1.addEventListener('click', function(e) {

  const rect = this.getBoundingClientRect(); // Get exact button position
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