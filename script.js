// 0. Run the location check ONCE when the page loads
let userRegion = 'GLOBAL'; 

async function detectRegion() {
  const providers = [
    'https://freeipapi.com/api/json',
    'https://ipapi.co/json/'
  ];

  for (let url of providers) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('API down');
      
      const data = await response.json();
      
      // Handle different field names (freeipapi uses 'countryCode')
      const code = data.country_code || data.countryCode;
      
      console.log("Detected Country:", code);

      if (code === 'CA' || code === 'US') {
        userRegion = 'NA';
      } else {
        userRegion = 'GLOBAL';
      }
      return; // Stop once we have a success!
      
    } catch (error) {
      console.warn(`Provider ${url} failed, trying next...`);
    }
  }
}

detectRegion();

detectRegion();

// 1. Select ALL buttons with the 'ripple-btn' class
const buttons = document.querySelectorAll(".custom-button");

// 2. Loop through each button in the list
buttons.forEach(button => {
  
  // 3. Add the event listener to each individual button
  button.addEventListener('click', async function(e) {

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
    
    // --- REGIONAL LOGIC ---
    // We use a small delay so the user sees the ripple before the alert pops up
    setTimeout(() => {
      if (userRegion === 'NA') {
        alert("Customer in NA: Redirecting to Stripe...");
        // window.location.href = "https://buy.stripe.com/your_link";
      } else {
        alert("Customer in Global/EU: Redirecting to Gumroad...");
        // window.location.href = "https://yourstore.gumroad.com/l/product";
      }
    }, 400); 
  });
});