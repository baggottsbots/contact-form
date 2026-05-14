document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const baseRedirectUrl = 'https://baggottsbots.github.io/contact-form/thank-you/';
      const params = new URLSearchParams({ agent: '12301167', first_name: firstName, last_name: lastName, email: email, phone: phone });
      window.location.href = baseRedirectUrl + '?' + params.toString();
    });