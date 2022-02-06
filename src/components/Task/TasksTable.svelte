<script>
    import { createEventDispatcher } from "svelte"; 

    const tableHeading = [ "Task Name", "Date", "Status", "View Details"];
    export let tableData=[];

    const dispatch = createEventDispatcher();

  </script>
  
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
          <td>{data.taskName}</td>
          <td>{data.dueDate}</td>
          <td><span class="{data.status}">{data.status}</span></td>
          <td><span class="detail-field">View detail</span></td>
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