// Click-to-reveal deters simple address scraping; it is not a security boundary.
// The address remains recoverable by a browser or a determined crawler.
(() => {
  const toggle = document.getElementById("contact-toggle");
  const options = document.getElementById("contact-options");
  const email = document.getElementById("contact-email");
  const copy = document.getElementById("contact-copy");
  const feedback = document.getElementById("contact-feedback");
  const fallback = document.getElementById("contact-fallback");
  if (!toggle || !options || !email || !copy || !feedback || !fallback) return;

  let address = "";
  toggle.hidden = false;
  fallback.hidden = true;

  toggle.addEventListener("click", () => {
    const opening = options.hidden;
    if (opening) {
      address = atob("c29sYXJibG9vbXNraW5jYXJlQGdtYWlsLmNvbQ==");
      email.href = `mailto:${address}?subject=NomadTime%20support`;
    } else {
      address = "";
      email.removeAttribute("href");
    }
    options.hidden = !opening;
    toggle.setAttribute("aria-expanded", String(opening));
    toggle.textContent = opening ? "Hide contact options" : "Contact support ↗";
    feedback.textContent = "";
  });

  copy.addEventListener("click", async () => {
    if (!address) return;
    const selectedAddress = address;
    try {
      await navigator.clipboard.writeText(selectedAddress);
      if (!options.hidden && address === selectedAddress) {
        feedback.textContent = "Email address copied. Paste it into your email app.";
      }
    } catch {
      // A manual fallback keeps contact usable when clipboard access is blocked.
      if (!options.hidden && address === selectedAddress) {
        feedback.textContent = `Copy this address into your email app: ${selectedAddress}`;
      }
    }
  });
})();
