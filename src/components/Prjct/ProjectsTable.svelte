<script>
    import { createEventDispatcher } from "svelte"; 

    const tableHeading = ["Project Title", "Departemnt", "Due Date", "Status"];

    // Takes tableData as a prop
    export let tableData=[];

    // Creating Variables for Dispatch Scripts
    const dispatch = createEventDispatcher();

  </script>
  
  <!-- Displays the projects table -->
  <table width ="100%" >
    <thead>
        <tr>
          {#each tableHeading as heading}
            <td>{heading}</td>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each tableData as data, i}
        <tr>
          <td>{data.projectName}</td>
          <td>{data.department}</td>
          <td>{data.dueDate}</td>
          <td><span class= "{data.status}">{data.status}</span></td>
          <td><div class="edit-icone">
            <i class="las la-edit" on:click={()=>{dispatch("edit",data.id)}}></i>
          </div>
          <div class="delete-icone">
            <i class="las la-trash-alt" on:click={()=>{dispatch("delete",data.id)}}></i>
          </div>
        </tr>
      {/each}
      </tbody>
      </table> 