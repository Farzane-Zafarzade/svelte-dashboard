<script>
    import { createEventDispatcher } from "svelte";
    import projects from "../Prjct/Projects-store";
    import Modal from "../Modal.svelte"
  
    export let id =null;
  
    let projectName="";
    let department="";
    let status="";
    let dueDate="";
    
  
    if(id){
        const unsubscribe = projects.subscribe(items => {
        const selectedProject = items.find(i => i.id === id);
        projectName = selectedProject.projectName;
        department = selectedProject.department;
        dueDate = selectedProject.dueDate;
        status = selectedProject.status;
      });
  
      unsubscribe();
    }
  
    const dispatch = createEventDispatcher();
  
    function cancel(){
      dispatch("cancel");
    }
  
    function submitForm() {
      const projectData = {
            projectName:projectName,
            department:department,
            dueDate:dueDate,
            status:status
        };
      if(id){
       projects.updateProject(id, projectData);
      }
      else{
        projects.addCProject(projectData);
      }
      dispatch("save");
    };
  
  </script>
  
  <Modal title="Add Project" on:cancel>
  <div class="container-add-Customer">
    <form on:submit|preventDefault={submitForm}>
      <div class="user-details">
        <div class="input-box">
            <span class="details">Project name</span>
            <input type="text" placeholder="Enter project title" id="projectName" bind:value={projectName} required>
        </div>
        <div class="input-box">
          <span class="details">Department</span>
          <input type="text" placeholder="Enter department" id="department" bind:value={department} required>
       </div>
        <div class="input-box">
           <span class="details">Deu Date</span>
           <input type="date" id="start" name="trip-start"
           bind:value={dueDate}
           min="2021-02-01" max="2025-01-01">            
        </div>
        <div class="input-box">
          <span class="details">Project status</span>
          <select bind:value="{status}">
            <option value="" disabled selected>Select your option</option>
            <option value="Review">Review</option>
            <option value="In-progress">In-progress</option>
            <option value="Pending">Pending</option>
          </select>
       </div>
      </div>
    </form>
  </div>
    <div slot="footer">
      <button class="cancel-button" type="button" on:click={cancel}>Cancel</button>
      <button class="save-button" type="button" on:click={submitForm}>Save</button>
    </div>
  </Modal>