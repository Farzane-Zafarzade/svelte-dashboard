<script>
    import { createEventDispatcher } from "svelte";

    // Takes tableData as a prop
    export let tableData = [];

    // Creating Variables for Dispatch Scripts
    const dispatch = createEventDispatcher();

    const tableHeading = ["First name", "Last name", "E-mail", "Phone nummber"];
  
  </script>
  
  <!-- Displays the custmers table -->
  <table width ="100%" >
    <thead>
        <tr>
          {#each tableHeading as heading}
            <td>{heading}</td>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each tableData as data}
        <tr>
          <td>{data.firstName}</td>
          <td>{data.lastName}</td>
          <td>{data.email}</td>
          <td>{data.mobileNummber}</td>
          <td><div class="edit-icone">
            <i class="las la-edit" on:click={()=>{dispatch("edit",data.ID)}}></i>
          </div>
          <div class="delete-icone">
            <i class="las la-trash-alt" on:click={()=>{dispatch("delete",data.ID)}}></i>
          </div>
        </td>
        </tr>
      {/each}
      </tbody>
      </table>