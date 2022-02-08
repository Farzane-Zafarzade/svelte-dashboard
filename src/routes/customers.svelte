<script>
	import CustomersTable from "../components/Customer/CustomersTable.svelte";
    import AddNewCustomer from "../components/Customer/AddNewCustomer.svelte";
    import customers from "../components/Customer/customers-store";
    
    let editedId;
    let addNew;

    //Sets addNew and editedId to null to close modal window
	function savedCustomer() {
      addNew = null;
      editedId = null;
	}

    //Sets addNew and editedId to null to close modal window
    function cancelAdd() {
        addNew = null;
        editedId = null;
    }

    //Calls deleteCustomer to delete a customer
    function deleteCustomer(event) {
        customers.deleteCustomer(event.detail);
    }

    function editCustomer(event) {
        addNew="add"
        editedId = event.detail;
    }

</script>

<svelte:head>
	<title>Customers</title>
</svelte:head>



<div class="crad">
    <div class="card-header">
        <h3>Customers</h3>
        <button class="add-button" on:click="{()=>addNew="add"}">Add new customer</button>
        {#if addNew==="add"}
        <AddNewCustomer id={editedId} on:save={savedCustomer} on:cancel={cancelAdd}/>
        {/if}
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <CustomersTable tableData={$customers}  on:delete={deleteCustomer} on:edit={editCustomer}/>
        </div>
    </div>
</div>

