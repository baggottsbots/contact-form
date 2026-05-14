// ═══════════════════════════════════════════════════════════════
    // FORM SUBMISSION WITH DOMAIN-AGNOSTIC REDIRECT
    // ═══════════════════════════════════════════════════════════════
    
    // Function to build domain-agnostic redirect URL
    function getRedirectUrl() {
      // Get the current domain and protocol
      const protocol = window.location.protocol;
      const host = window.location.host;
      
      // Build the thank-you page path (domain-agnostic)
      const thankYouPath = '/thank-you/';
      const baseUrl = protocol + '//' + host;
      const redirectUrl = baseUrl + thankYouPath;
      
      return redirectUrl;
    }
    
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
      
      // Build the redirect URL dynamically based on current domain
      const baseRedirectUrl = getRedirectUrl();
      
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