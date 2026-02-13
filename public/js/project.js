class Project {
  constructor(title, leftDescription, rightDescription) {
    this.title = title;
    this.leftDescription = leftDescription;
    this.rightDescription = rightDescription;
  }

  getCode() {
    return `
            <div class="project">
                <div class="project-header">
                    <h3>${this.title}</h3>
                    <img src="public/images/icons/close.png" class="close-project">
                </div>
                <div class="project-content">
                    <div class="left-content">
                        ${this.leftDescription}
                    </div>
                    <div class="right-content">
                        ${this.rightDescription}
                    </div>
                </div>
            </div>
            `;
  }
}
