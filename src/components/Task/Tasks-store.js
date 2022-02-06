import { writable } from "svelte/store";

const tasks = writable([
    {id:"t1", taskName: "Create a Dashboard UI", dueDate: "07 Oct, 2021", status: "Complete"},
    {id:"t2", taskName: "Create a Dashboard UI", dueDate: "07 Oct, 2021", status: "In-progress"},
    {id:"t3", taskName: "Create a Dashboard UI", dueDate: "06 Oct, 2021", status: "Complete"},
    {id:"t4", taskName: "Create a Dashboard UI", dueDate: "06 Oct, 2021", status: "Complete"},
    {id:"t5", taskName: "Create a Dashboard UI", dueDate: "06 Oct, 2021", status: "Pending"},
    {id:"t6", taskName: "Create a Dashboard UI", dueDate: "06 Oct, 2021", status: "Complete"},
    {id:"t7", taskName: "Create a Dashboard UI", dueDate: "06 Oct, 2021", status: "In-progress"},
    {id:"t8", taskName: "Create a Dashboard UI", dueDate: "06 Oct, 2021", status: "Complete"},
    {id:"t9", taskName: "Create a Dashboard UI", dueDate: "06 Oct, 2021", status: "Pending"}
  ]);
    
  const customTasksStore = {
    subscribe : tasks.subscribe,
    addTask: (taskData) => {
       const newTask = {
           ...taskData,
           id: Math.random().toString()
       };
       tasks.update(items => {
           return [newTask, ...items]
       });
    },
    updateTask: (id, taskData) => {
        tasks.update(items => {
           const taskIndex = items.findIndex(i => i.id === id);
           const updatedTask = {...items[taskIndex], ...taskData };
           const updatedTasks = [... items];
           updatedTasks[taskIndex] = updatedTask;
           return updatedTasks;
        })
    },
    deleteTask: (id) => {
        tasks.update(items => {
            return items.filter(i => i.id !== id);
        });
    }
}

export default customTasksStore;