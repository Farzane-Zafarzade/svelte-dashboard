<script>
    import { createEventDispatcher } from "svelte";
    import orders from "./Orders-store";
    import Modal from "../Modal.svelte";
  
    export let id =null;
  
    let billingName="";
    let date="";
    let total="";
    let paymentStatus="";
    
  // Checks if id is not null display the order data to edit
    if(id){
        const unsubscribe = orders.subscribe(items => {
        const selectedOrder = items.find(i => i.id === id);
        billingName = selectedOrder.billingName;
        date = selectedOrder.date;
        total = selectedOrder.total;
        paymentStatus = selectedOrder.paymentStatus;
      });
  
      unsubscribe();
    }
  
    // Creating Variables for Dispatch Scripts
    const dispatch = createEventDispatcher();
  
    // Dispatching cancel-signal to parent component
    function cancel(){
      dispatch("cancel");
    }
  
    // Creates a new order or updates the data of an existing order in the orders
    function submitForm() {
      const orderData = {
            billingName:billingName,
            date:date,
            total:total,
            paymentStatus:paymentStatus
        };
      if(id){
       orders.updateOrder(id, orderData);
      }
      else{
        orders.addCOrder(orderData);
        console.log(orderData);
      }
      dispatch("save");
    };
  
  </script>
  
  <!-- Displays the edti-form or add-new-form -->
  <Modal title="Add Order" on:cancel>
  <div class="container-add-Customer">
    <form on:submit|preventDefault={submitForm}>
      <div class="user-details">
        <div class="input-box">
            <span class="details">billing name</span>
            <input type="text" placeholder="Enter here" id="billingName" bind:value={billingName} required>
        </div>
        <div class="input-box">
           <span class="details">Total</span>
           <input type="text" placeholder="Enter here" id="total" bind:value={total} required>
        </div>
        <div class="input-box">
          <span class="details">Date</span>
          <input type="date" id="start" name="trip-start"
          bind:value={date}
          min="2021-02-01" max="2025-01-01">            
       </div>
         <div class="input-box">
          <span class="details">Payment Status</span>
          <select bind:value="{paymentStatus}">
            <option value="" disabled selected>Select your option</option>
            <option value="Paid">Paid</option>
            <option value="Chargeback">Chargeback</option>
            <option value="Refund">Refund</option>
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