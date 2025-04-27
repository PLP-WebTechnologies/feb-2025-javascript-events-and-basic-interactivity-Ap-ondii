// ========== Image Slideshow ==========
const images = [
    "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
    "https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg",
    "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg"
  ];
  let currentIndex = 0;
  const slideshow = document.getElementById('slideshow');
  
  function showImage() {
    slideshow.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }
  setInterval(showImage, 3000); // Change every 3 seconds
  
  // ========== Tabs Functionality ==========
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
  
      button.classList.add('active');
      tabContents[index].classList.add('active');
    });
  });
  
  // ========== Form Validation ==========
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  
  form.addEventListener('submit', (e) => {
    let valid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (nameInput.value.trim() === "") {
      alert('Name is required!');
      valid = false;
    }
    if (!emailPattern.test(emailInput.value.trim())) {
      alert('Enter a valid email!');
      valid = false;
    }
    if (passwordInput.value.length < 8) {
      alert('Password must be at least 8 characters!');
      valid = false;
    }
  
    if (!valid) {
      e.preventDefault();
    }
  });
  
  // Real-time feedback while typing
  emailInput.addEventListener('input', () => {
    const emailFeedback = document.getElementById('email-feedback');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(emailInput.value.trim())) {
      emailFeedback.textContent = "✅ Valid email!";
      emailFeedback.style.color = "lightgreen";
    } else {
      emailFeedback.textContent = "❌ Invalid email.";
      emailFeedback.style.color = "red";
    }
  });
  
  // ========== Hover Effects ==========
  const hoverButton = document.getElementById('hover-btn');
  hoverButton.addEventListener('mouseover', () => {
    hoverButton.style.backgroundColor = '#ff7f50';
  });
  hoverButton.addEventListener('mouseout', () => {
    hoverButton.style.backgroundColor = '#4CAF50';
  });
  
  // ========== Keypress Detection ==========
  document.addEventListener('keydown', (e) => {
    const keypressDisplay = document.getElementById('keypress-display');
    keypressDisplay.textContent = `You pressed: ${e.key}`;
  });
  
  // ========== Surprise Button (Single Click, Double Click, Long Press) ==========
  const surpriseBtn = document.getElementById('surprise-btn');
  
  // Single Click
  surpriseBtn.addEventListener('click', function() {
    alert('✨ You clicked the Surprise Button!');
  });
  
  // Double Click
  surpriseBtn.addEventListener('dblclick', function() {
    alert('🎉 Double-click Surprise Unlocked!');
    document.body.style.background = 'linear-gradient(45deg, #ff6f61, #ffb347, #6dd5ed)';
  });
  
  // Long Press
  let pressTimer;
  surpriseBtn.addEventListener('mousedown', function() {
    pressTimer = setTimeout(function() {
      alert('🤫 Long press secret unlocked!');
      document.body.style.background = 'linear-gradient(90deg, #4facfe, #00f2fe)';
    }, 1000);
  });
  surpriseBtn.addEventListener('mouseup', function() {
    clearTimeout(pressTimer);
  });
  
  // Optional: Add "pressed" animation effect
  surpriseBtn.addEventListener('mousedown', () => {
    surpriseBtn.style.transform = "scale(0.95)";
  });
  surpriseBtn.addEventListener('mouseup', () => {
    surpriseBtn.style.transform = "scale(1)";
  });
  