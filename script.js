// ═══════════════════════════════════════════════════════════════
    // FORM SUBMISSION WITH FIXED REDIRECT URL
    // ═══════════════════════════════════════════════════════════════
    
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // ───────────────────────────────────────────────────────────────
      // FORM DATA COLLECTION
      // ───────────────────────────────────────────────────────────────
      
      // Get form values
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      
      // ───────────────────────────────────────────────────────────────
      // URL PARAMETER ENCODING
      // ───────────────────────────────────────────────────────────────
      
      // Fixed redirect URL to the thank-you page
      const baseRedirectUrl = 'https://baggottsbots.github.io/contact-form/thank-you/';
      
      // Create URLSearchParams for clean parameter encoding
      const params = new URLSearchParams({
        agent: '12301167',
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone
      });
      
      // Construct final redirect URL with parameters
      const redirectUrl = baseRedirectUrl + '?' + params.toString();
      
      // ───────────────────────────────────────────────────────────────
      // REDIRECT TO DESTINATION PAGE
      // ───────────────────────────────────────────────────────────────
      
      // Redirect to the thank-you page with all form data as URL parameters
      window.location.href = redirectUrl;
    });