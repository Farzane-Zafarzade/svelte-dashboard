<script>
    import NewCustomerItem from "../Dashboard/NewCustomerItem.svelte";
    import RecentProjectItem from "./RecentProjectItem.svelte";
    import projects from "../Prjct/Projects-store";
    import customers from "../Customer/customers-store";

    //Takes title,pageAdress and items as props
    export let title;
    export let pageAdress;
    export let items;
</script>

<div class="crad">
    <div class="card-header">
        <h3>{title}</h3>
        <a href="{pageAdress}"><button class="header-button">See all <span class="las la-arrow-right"></span> </button></a>
    </div>
    <div class="card-body">
        {#if items==="customers"}
        <NewCustomerItem customers={$customers}/>
        {:else if items ==="projects"}
         <RecentProjectItem tableData={$projects}/>
        {/if}
    </div>
</div>
