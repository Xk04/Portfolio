class App {
    constructor() {
        this.previews = document.querySelectorAll('.project-preview');
        this.projects = document.querySelectorAll('.project');
        this.closeBtns = document.querySelectorAll('.close-project');
        this.age = document.getElementById("age");
        this.date = new Date();
    }

    init() {
        if (window.location.hash) {
            window.scrollTo(0, 0);
            history.replaceState(null, null, " ");
        }
        this.setAge();
        this.setUpEvents();
    }

    setAge() {
        let day = this.date.getDate();
        let month = this.date.getMonth()+1;
        let year = this.date.getFullYear();
        let yo = year - 2005;
        if (!((month >= 2) && (day >= 23))) {
            yo -=1;
        }
        this.age.textContent = yo;
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


