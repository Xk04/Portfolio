class App {
    constructor() {
        this.previews = document.querySelectorAll('.project-preview');
        this.projects = document.querySelectorAll('.project');
        this.closeBtns = document.querySelectorAll('.close-project');
    }

    init() {
        if (window.location.hash) {
            window.scrollTo(0, 0);
            history.replaceState(null, null, " ");
        }
        this.setUpEvents();
    }

    smoothScroll() {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('section, .project-preview').forEach((el) => {
            el.classList.add('reveal');
            observer.observe(el);
        });
    }

    setUpEvents() {
        this.closeBtns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                this.projects[i].classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        this.previews.forEach((preview, i) => {
            preview.addEventListener('click', () => {
                this.projects[i].style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        this.closeBtns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                this.projects[i].style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        });
        this.smoothScroll();
        }
}


