window.addEventListener("load", function() {
  const inviewElements = document.querySelectorAll(".js-inview");
  if (inviewElements.length === 0)
    return;
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-inview");
      }
    });
  }, observerOptions);
  inviewElements.forEach((element) => {
    observer.observe(element);
  });
  document.body.classList.add("is-load");
});