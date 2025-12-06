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
  const details = document.querySelectorAll(".details");
  details.forEach((detail) => {
    const summary = detail.querySelector("summary");
    const answer = detail.querySelector("._answer");
    if (!summary || !answer)
      return;
    if (!detail.hasAttribute("open")) {
      answer.style.height = "0";
    }
    summary.addEventListener("click", (e) => {
      e.preventDefault();
      if (detail.hasAttribute("open")) {
        const height = answer.scrollHeight;
        answer.style.height = `${height}px`;
        requestAnimationFrame(() => {
          answer.style.height = "0";
        });
        answer.addEventListener(
          "transitionend",
          () => {
            detail.removeAttribute("open");
          }, {
            once: true
          }
        );
      } else {
        detail.setAttribute("open", "");
        const height = answer.scrollHeight;
        answer.style.height = "0";
        requestAnimationFrame(() => {
          answer.style.height = `${height}px`;
        });
        answer.addEventListener(
          "transitionend",
          () => {
            answer.style.height = "auto";
          }, {
            once: true
          }
        );
      }
    });
  });
});