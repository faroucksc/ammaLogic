<template>
  <div class="container">
    <section class="hero">
      <div class="content"> 
        <h1 class="logo">
          <span class="ai-icon">&#9889;</span> Ammalogic 
        </h1> 
        <p class="tagline">Harnessing AI for a Smarter, More Equitable Tomorrow</p> 
        <div class="countdown">Join the AI Revolution</div> 
        <div class="sms-signup">
          <input type="tel" placeholder="Enter your phone number" v-model="phoneNumber" />
          <button @click="submitSignup">Notify Me</button><br>
          <div class="consent">
            <input type="checkbox" id="sms-consent" v-model="consentGiven" />
             <label for="sms-consent">
              By clicking "Notify Me", you agree to receive SMS updates from Ammalogic. Consent is not a condition of purchase. Message and data rates may apply.
              Reply HELP for help or STOP to cancel.
              For more information, see our <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>.
            </label>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: '',
      consentGiven: false,
      errorMessage: '', // Add an error message field
    };
  },
  methods: {
    validatePhoneNumber() {
      // Add phone number validation logic here
      return this.phoneNumber.length >= 10; // Example validation
    },
    submitSignup() {
      if (!this.validatePhoneNumber() || !this.consentGiven) {
        this.errorMessage = 'Please enter a valid phone number and agree to the terms.';
        return;
      }
      this.errorMessage = ''; // Clear error message on successful validation
      console.log("SMS Sign-up:", this.phoneNumber);
      // Add API call here
    },
  },
};
</script>

<style scoped>
/* Basic layout */
body {
  margin: 0;
  font-family: 'Roboto', sans-serif; 
}

.container {  
  height: 100vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #050A27, #4A548C); 
  animation: gradient-shift 20s ease-in-out infinite alternate; 
}

@keyframes gradient-shift {
  0% { background: linear-gradient(135deg, #050A27, #4A548C); }
  100% { background: linear-gradient(135deg, #101842, #50589C); } 
}

.hero {
  text-align: center;
  max-width: 600px; 
  background-color: rgba(0, 0, 0, 0.2); /* Semi-transparent background */
  padding: 3rem;
  border: 1px solid #00D1FF; /* Neon-like border */
  border-radius: 8px;
}

.logo {
  color: #f9f9f9;           
  font-size: 4em;  
  margin-bottom: 1rem;
}

.ai-icon {
  margin-right: 0.5rem;
}

.tagline {
  color: #b0b0b0;
  font-size: 1.5em;  
  opacity: 0.8; 
}

.countdown {
  font-size: 2em;
  font-weight: bold;
  color: #00D1FF;
  margin: 2rem 0;
}

.sms-signup {
  /* display: flex; */
  align-items: center; /* Vertical alignment */
}

.sms-signup input[type="tel"] { 
  padding: 0.8rem;
  border-radius: 5px 0 0 5px; /* Subtle angled effect */
  border: 1px solid #b0b0b0;
}

.sms-signup button {
  background-color: #00D1FF;
  color: #222;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 0 5px 5px 0; 
}

.consent {
  font-size: 0.9em; 
  color: #999;
  margin-top: 0.5rem;
}

.consent a {
  color: #00D1FF; /* Match your color scheme */
}

  /* Error Message Style */
  .error-message {
    color: red;
    margin-top: 1rem;
  }
</style>
