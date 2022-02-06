<script>
    import { createEventDispatcher } from "svelte"; 

    const tableHeading = ["Project Title", "Status"];
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
        {#if i<7}
        <tr>
          <td>{data.projectName}</td>
          <td><span class= "{data.status}">{data.status}</span></td>
        </tr>
        {/if}
      {/each}
      </tbody>
      </table> 