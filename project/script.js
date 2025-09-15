// Initialize Lucide icons
lucide.createIcons();

// Form elements
const signupForm = document.getElementById('signupForm');
const otpForm = document.getElementById('otpForm');
const successMessage = document.getElementById('successMessage');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');

// OTP input handling
const otpInputs = document.querySelectorAll('.otp-input');
otpInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length === 1) {
            if (index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            otpInputs[index - 1].focus();
        }
    });
});

// Form submission handlers
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to your server here
    const formData = new FormData(signupForm);
    console.log('Form data:', Object.fromEntries(formData));
    
    // Show OTP verification step
    signupForm.classList.remove('active');
    signupForm.classList.add('hidden');
    otpForm.classList.remove('hidden');
    otpForm.classList.add('active');
    
    title.textContent = 'Verify Email';
    subtitle.textContent = 'Enter the code sent to your email';
});

otpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real application, you would verify the OTP here
    const otp = Array.from(otpInputs).map(input => input.value).join('');
    console.log('OTP:', otp);
    
    // Show success message
    otpForm.classList.remove('active');
    otpForm.classList.add('hidden');
    successMessage.classList.remove('hidden');
    successMessage.classList.add('active');
    
    title.textContent = 'Success!';
    subtitle.textContent = 'Your account has been verified';
});

// Redirect to login (demo function)
function redirectToLogin() {
    console.log('Redirecting to login page...');
    // In a real application, you would redirect to the login page here
    // window.location.href = '/login';
}