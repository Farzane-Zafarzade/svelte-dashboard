<script>
    import customerImg from "./img/customerImg.jpg"
    
    export let customers = [];
</script>


   {#each customers as customer,i}
   {#if i<5}
   <div class="customer">
      <div class="info">
          <img src="{customerImg}" width="40px" height="40px" alt="">
          <div>
             <h4>{customer.firstName} {customer.lastName}</h4>
          </div>
      </div>
      <div class="contact">
          <span class="las la-comment"></span>
          <span class="las la-phone"></span>
      </div>
  </div>
  {/if}
  {/each}


