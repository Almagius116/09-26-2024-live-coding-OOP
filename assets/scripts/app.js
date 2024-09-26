class Tooltip{

}

class ProjectItem{
    constructor(id, updateProjectListsFunction) {
        this.id = id;
        this.updateProjectListsFunction = updateProjectListsFunction;
        this.connectSwitchButton();
        this.connectMoreInfoButton();
    }

    connectMoreInfoButton() {

    }

    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id)
        const switchButton = projectItemElement.querySelector("button:last-of-type");
        switchButton.addEvesntListener("click", this.updateProjectListsFunction.bind(this));
    }
}

class ProjectList{
    projects = [];
    
    constructor(type){
        this.type = type;

        // EXAMPLE: #active-projects li
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        // for(let i = 0; i < this.projects.length; i++)
        for (const projectItem of projectItems) {
            console.log(type);
            console.log(projectItem);
            this.projects.push(new ProjectItem(projectItem.id, this.switchProject.bind(this)));
        }    
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject() {
        console.log(this);
    }

    switchProject(projectId) {
        this.project = this.projects.find(i => i.id === projectId);
        this.projects.filter((i) => i.id === !this.projectId);
        this.addProject();
        // const projectIndex = this.projects.findIndex(i => i.id === projectId);
        // this.projects.splice();
    }
}

class App{
    static init() {
        const activeProjectList = new ProjectList("active");
        const finishedProjectList = new ProjectList("finished");
        activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList));
    }
}

App.init();

// ProjectList("pass parameter 1")
// New ProjectList("pass parameter 1")