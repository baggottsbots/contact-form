// ===== DELAYED WIDGET INITIALIZATION =====
    // Purpose: Load the PayMeGPT webchat widget after 5 seconds
    // Delay: 5000 milliseconds (5 seconds)
    setTimeout(function() {
      var script = document.createElement('script');
      script.src = 'https://paymegpt.com/widget.js';
      script.setAttribute('data-widget', '12301167');
      script.async = true;
      document.body.appendChild(script);
    }, 5000);