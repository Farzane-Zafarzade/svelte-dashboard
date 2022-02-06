<script>
    import { createEventDispatcher } from "svelte"; 

    const tableHeading = ["Order ID", "Billing Name", "Date", "Total", "Payment Status", "View Details"];
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
          <td>{data.id}</td>
          <td>{data.billingName}</td>
          <td>{data.date}</td>
          <td>{data.total}</td>
          <td><span class="{data.paymentStatus}">{data.paymentStatus}</span></td>
          <td> <span class="detail-field">View detail</span></td>
          <td><div class="edit-icone">
            <i class="las la-edit" on:click={()=>{dispatch("edit",data.id)}}></i>
          </div>
          <div class="delete-icone">
            <i class="las la-trash-alt" on:click={()=>{dispatch("delete",data.id)}}></i>
          </div>
        </tr>
        {/if}
      {/each}
      </tbody>
      </table> 