class App {
  constructor() {
    this.previews = document.querySelectorAll(".project-preview");
    this.projects = document.querySelectorAll(".project");
    this.closeBtns = document.querySelectorAll(".close-project");
  }

  init() {
    if (window.location.hash) {
      window.scrollTo(0, 0);
      history.replaceState(null, null, " ");
    }
    this.setUpEvents();
  }

  smoothScroll() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    document.querySelectorAll("section, .project-preview").forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  setUpEvents() {
    // Ouvrir un projet
    this.previews.forEach((preview, i) => {
      preview.addEventListener("click", () => {
        const project = this.projects[i];
        const iframes = project.querySelectorAll("iframe");

        iframes.forEach((iframe) => {
          if (iframe.getAttribute("data-src")) {
            iframe.src = iframe.getAttribute("data-src");
            iframe.removeAttribute("data-src");
          }
        });

        project.classList.add("is-open");
        document.body.classList.add("no-scroll");
      });
    });

    // Fermer un projet
    this.closeBtns.forEach((btn, i) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.projects[i].classList.remove("is-open");
        document.body.classList.remove("no-scroll");
      });
    });

    this.smoothScroll();
  }
}
