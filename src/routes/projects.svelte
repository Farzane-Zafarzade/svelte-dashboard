<script>
    import ProjectsTable from "../components/Prjct/ProjectsTable.svelte";
    import projects from "../components/Prjct/Projects-store"
    import AddNewProject from "../components/Prjct/AddNewProject.svelte";

    let editedId = null;
    let addNew; 

    //Calls deleteProject to delete a project
    function deleteProject(event) {
        projects.deleteProject(event.detail);
    }

    function editProject(event) {
        addNew="add"
        editedId = event.detail;
    }

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

</script>
<svelte:head>
	<title>Projects</title>
</svelte:head>


<div class="crad">
    <div class="card-header">
        <h3>Projects</h3>
        <button class="add-button" on:click="{()=>addNew="add"}"> New Project </button>
        {#if addNew==="add"}
        <AddNewProject id={editedId} on:save={savedCustomer} on:cancel={cancelAdd}/>
        {/if}
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <ProjectsTable tableData={$projects} on:delete={deleteProject} on:edit={editProject}/>
        </div>
    </div>
</div>