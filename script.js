// ═══════════════════════════════════════════════════════════════
    // FORM SUBMISSION WITH DYNAMIC PARAMETER REDIRECT
    // ═══════════════════════════════════════════════════════════════
    
    // Redirect URL with template variables for dynamic form data
    const REDIRECT_URL = 'https://paymegpt.com/p/KkzuGcJW7Z?agent=12301167&first_name=%7B%7Bfirst_name%7D%7D&last_name=%7B%7Blast_name%7D%7D&email=%7B%7Bemail%7D%7D&phone=%7B%7Bphone%7D%7D';
    
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
      
      // Replace template variables with actual form values
      let redirectUrl = REDIRECT_URL
        .replace('%7B%7Bfirst_name%7D%7D', encodeURIComponent(firstName))
        .replace('%7B%7Blast_name%7D%7D', encodeURIComponent(lastName))
        .replace('%7B%7Bemail%7D%7D', encodeURIComponent(email))
        .replace('%7B%7Bphone%7D%7D', encodeURIComponent(phone));
      
      // ───────────────────────────────────────────────────────────────
      // REDIRECT TO DESTINATION PAGE
      // ───────────────────────────────────────────────────────────────
      
      // Redirect to the destination page with all form data as URL parameters
      window.location.href = redirectUrl;
    });