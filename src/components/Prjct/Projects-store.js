import { writable } from "svelte/store";

// Creates and initials projects
const projects = writable([
    {id:"p0", projectName: "UI/UX designe", department: "UI Team",dueDate:"07 Oct, 2021", status: "Review" },
    {id:"p1", projectName: "Web development", department: "UI Team",dueDate:"07 Oct, 2021", status: "In-progress" },
    {id:"p2", projectName: "Ushop app", department: "UI Team", dueDate:"07 Oct, 2021", status: "Pending" },
    {id:"p3", projectName: "UI/UX designe", department: "UI Team", dueDate:"07 Oct, 2021", status: "Review" },
    {id:"p4", projectName: "Web development", department: "UI Team", dueDate:"07 Oct, 2021", status: "Chargeback" },
    {id:"p5", projectName: "Ushop app", department: "UI Team", dueDate:"07 Oct, 2021", status: "Pending" },
    {id:"p6", projectName: "UI/UX designe", department: "UI Team", dueDate:"07 Oct, 2021", status: "Review" },
    {id:"p7", projectName: "Web development", department: "UI Team",dueDate:"07 Oct, 2021", status: "In-progress" },
    {id:"p9", projectName: "Ushop app", department: "UI Team", dueDate:"07 Oct, 2021", status: "Pending" }
  ]);

  const customProjectsStore = {

    //Allows interested parties to be notified whenever the store value changes.
    subscribe : projects.subscribe,

    //takes a projectData object as a parameter and adds it to the projects.
    //Creates id and add it to the projectData
    addCProject: (projectData) => {
       const newProject = {
           ...projectData,
           id: Math.random().toString()
       };
       projects.update(items => {
           return [newProject, ...items]
       });
    },

    //Takes the projectData object and id as parameters and updates the project's data into the projects.
    updateProject: (id, projectData) => {
        projects.update(items => {
           const projectIndex = items.findIndex(i => i.id === id);
           const updatedProject = {...items[projectIndex], ...projectData };
           const updatedProjects = [... items];
           updatedProjects[projectIndex] = updatedProject;
           return updatedProjects;
        })
    },

    //Takes a id as parameters and deletes the project with the same id from the projects.
    deleteProject: (id) => {
        projects.update(items => {
            return items.filter(i => i.id !== id);
        });
    }
}

export default customProjectsStore;