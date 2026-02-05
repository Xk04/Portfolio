class Project {
    constructor(title, leftDescription, rightDescription) {
        this.title = title;
        this.leftDescription = leftDescription;
        this.rightDescription = rightDescription;
    }

    getCode() {
        return (
            `
            <div class="project">
                <div class="project-header">
                    <h3>${this.title}</h3>
                    <button class="close-project"><img src="public/images/icons/close.png"></button>
                </div>
                <div class="project-grid">
                    <div class="left-content">
                        ${this.leftDescription}
                    </div>
                    <div class="right-content">
                        ${this.rightDescription}
                    </div>
                </div>
            </div>
            `
        );
    }
}