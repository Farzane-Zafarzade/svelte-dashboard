<script>
	import OrdersTable from "../components/Order/OrdersTable.svelte";
    import AddNewOrder from "../components/Order/AddNewOrder.svelte";
    import orders from "../components/Order/Orders-store";
    
    let editedId;
    let addNew;

	function savedOrder() {
      addNew = null;
      editedId = null;
	}

    function cancelAdd() {
        addNew = null;
        editedId = null;
    }

    function deleteOrder(event) {
        orders.deleteOrder(event.detail);
    }

    function editOrder(event) {
        addNew="add"
        editedId = event.detail;
    }

</script>

<svelte:head>
	<title>Orders</title>
</svelte:head>



<div class="crad">
    <div class="card-header">
        <h3>Orders</h3>
        <button class="add-button" on:click="{()=>addNew="add"}">Add new Order</button>
        {#if addNew==="add"}
        <AddNewOrder class="add-form" id={editedId} on:save={savedOrder} on:cancel={cancelAdd}/>
        {/if}
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <OrdersTable tableData={$orders}  on:delete={deleteOrder} on:edit={editOrder}/>
        </div>
    </div>
</div>

