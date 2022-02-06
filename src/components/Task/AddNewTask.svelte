<script>
    import { createEventDispatcher } from "svelte";
    import tasks from "./Tasks-store";
    import Modal from "../Modal.svelte";
  
    export let id =null;
  
    let taskName="";
    let dueDate="";
    let status="";
    
  
    if(id){
        const unsubscribe = tasks.subscribe(items => {
        const selectedTask = items.find(i => i.id === id);
        taskName = selectedTask.taskName;
        dueDate = selectedTask.dueDate;
        status = selectedTask.status;
      });
  
      unsubscribe();
    }
  
    const dispatch = createEventDispatcher();
  
    function cancel(){
      dispatch("cancel");
    }
  
    function submitForm() {
      const taskData = {
            taskName:taskName,
            dueDate:dueDate,
            status:status,
        };
      if(id){
       tasks.updateTask(id, taskData);
      }
      else{
        tasks.addTask(taskData);
      }
      dispatch("save");
    };
  
  </script>
  
  
  <Modal title="Add Task" on:cancel>
  <div class="container-add-Customer">
    <form on:submit|preventDefault={submitForm}>
      <div class="user-details">
        <div class="input-box">
            <span class="details">Task name</span>
            <input type="text" placeholder="Enter here" id="taskName" bind:value={taskName} required>
        </div>
        <div class="input-box">
          <span class="details">Deu Date</span>
          <input type="date" id="start" name="trip-start"
          bind:value={dueDate}
          min="2021-02-01" max="2025-01-01">            
       </div>
       <div class="input-box">
         <span class="details">Task status</span>
         <select bind:value="{status}">
           <option value="" disabled selected>Select your option</option>
           <option value="Complete">Complete</option>
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