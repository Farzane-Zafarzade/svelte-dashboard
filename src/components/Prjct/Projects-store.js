import { writable } from "svelte/store";

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
    subscribe : projects.subscribe,
    addCProject: (projectData) => {
       const newProject = {
           ...projectData,
           id: Math.random().toString()
       };
       projects.update(items => {
           return [newProject, ...items]
       });
    },
    updateProject: (id, projectData) => {
        projects.update(items => {
           const projectIndex = items.findIndex(i => i.id === id);
           const updatedProject = {...items[projectIndex], ...projectData };
           const updatedProjects = [... items];
           updatedProjects[projectIndex] = updatedProject;
           return updatedProjects;
        })
    },
    deleteProject: (id) => {
        projects.update(items => {
            return items.filter(i => i.id !== id);
        });
    }
}

export default customProjectsStore;