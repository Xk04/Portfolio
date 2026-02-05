class Preview {
    constructor(imageUrl, title, description, date, info) {
        this.imageUrl = imageUrl;
        this.title = title;
        this.description = description;
        this.date = date;
        this.info = info;
    }

    getCode() {
        return (
            `
            <div class="project-preview reveal">
                <img src="${this.imageUrl}" alt="">
                <div class="project-preview-content">
                    <h3>${this.title}</h3>
                    <p class="description">${this.description}</p>
                    <div class="learn-more">
                        <p>${this.date}</p>
                        <p class="click-info">${this.info}</p>
                    </div>
                </div>
            </div>
            `
        );
    }
}