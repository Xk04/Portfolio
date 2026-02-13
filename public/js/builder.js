let personalProjectArea = document.querySelector(
  "#personal-projects .projects-grid-selection",
);

let collegeProjectArea = document.querySelector(
  "#college-projects .projects-grid-selection",
);

function buildProjectSection(area, cardList) {
  cardList.forEach((card) => {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = card.getCode();

    let preview = tempDiv.querySelector(".project-preview");
    let projectModal = tempDiv.querySelector(".project");

    if (preview) area.appendChild(preview);

    if (projectModal) document.body.appendChild(projectModal);
  });
}

window.addEventListener("load", () => {
  buildProjectSection(personalProjectArea, personalProjects);
  buildProjectSection(collegeProjectArea, collegeProjects);
});
