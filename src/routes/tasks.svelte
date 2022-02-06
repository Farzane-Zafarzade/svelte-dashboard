<script>
	import TasksTable from "../components/Task/TasksTable.svelte";
    import AddNewTask from "../components/Task/AddNewTask.svelte";
    import tasks from "../components/Task/Tasks-store";
    
    let editedId;
    let addNew;

	function savedTask() {
      addNew = null;
      editedId = null;
	}

    function cancelAdd() {
        addNew = null;
        editedId = null;
    }

    function deleteTask(event) {
        tasks.deleteTask(event.detail);
    }

    function editTask(event) {
        addNew="add"
        editedId = event.detail;
    }

</script>

<svelte:head>
	<title>Tasks</title>
</svelte:head>



<div class="crad">
    <div class="card-header">
        <h3>Tasks</h3>
        <button class="add-button" on:click="{()=>addNew="add"}">New Task</button>
        {#if addNew==="add"}
        <AddNewTask id={editedId} on:save={savedTask} on:cancel={cancelAdd}/>
        {/if}
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <TasksTable tableData={$tasks}  on:delete={deleteTask} on:edit={editTask}/>
        </div>
    </div>
</div>

