let personalProjectArea = document.querySelector("#personal-projects .projects-grid-selection");

let collegeProjectArea = document.querySelector("#college-projects .projects-grid-selection");


function buildProjectSection(area, cardList) {
    let i;
    for (i=0 ; i < cardList.length ; i++) {
        let card = cardList[i];
        area.innerHTML += card.getCode();
    }
}

window.addEventListener("load", () => {
    buildProjectSection(personalProjectArea, personalProjects);
    buildProjectSection(collegeProjectArea, collegeProjects);
});