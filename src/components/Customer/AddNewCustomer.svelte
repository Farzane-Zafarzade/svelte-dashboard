<script>
    import { createEventDispatcher } from "svelte";
    import customers from "../Customer/customers-store";
    import Modal from "../Modal.svelte"
  
    export let id =null;
  
    let firstName="";
      let lastName="";
      let email="";
      let mobil="";
  
    if(id){
      const unsubscribe = customers.subscribe(items => {
        const selectedCustomer = items.find(i => i.ID === id);
        firstName = selectedCustomer.firstName;
        lastName = selectedCustomer.lastName;
        email = selectedCustomer.email;
        mobil = selectedCustomer.mobileNummber;
      });
      unsubscribe();
    }
  
    const dispatch = createEventDispatcher();
  
    function cancel(){
      dispatch("cancel");
    }
  
    function submitForm() {
      const customerData = {
            firstName:firstName,
            lastName:lastName,
            email:email,
            mobileNummber:mobil
        };
      if(id){
       customers.updateCustomer(id, customerData)
      }
      else{
        customers.addCustomer(customerData);
      }
      dispatch("save");
    };
  
  </script>
  
  
  <Modal title="Add Customer" on:cancel>
  <div class="container-add-Customer">
    <form on:submit|preventDefault={submitForm}>
      <div class="user-details">
        <div class="input-box">
            <span class="details">First name</span>
            <input type="text" placeholder="Enter first name" id="firstName" bind:value={firstName} required>
        </div>
        <div class="input-box">
           <span class="details">Last name</span>
           <input type="text" placeholder="Enter last name" id="lasttName" bind:value={lastName} required>
        </div>
        <div class="input-box">
           <span class="details">Email</span>
           <input type="text" placeholder="Enter Email" id="email" bind:value={email} required>
        </div>
        <div class="input-box">
          <span class="details">phone number</span>
          <input type="text" placeholder="Enter phone number" id="mobile" bind:value={mobil} required>
        </div>
      </div>
    </form>
  </div>
    <div slot="footer">
      <button class="cancel-button" type="button" on:click={cancel}>Cancel</button>
      <button class="save-button" type="button" on:click={submitForm}>Save</button>
    </div>
  </Modal>