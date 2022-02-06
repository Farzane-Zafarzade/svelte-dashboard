<script>
	import DashboardCards from "../components/Dashboard/DashboardCards.svelte";
	import DashboardGrid from "../components/Dashboard/DashboardGrid.svelte";
	
</script>

<div class="cards">
	<DashboardCards/>
 </div>
 <div class="recent-grid">
	 <div class="projects">
		<DashboardGrid items="projects" title="Recent Projects" pageAdress="projects"/>
	 </div>
	 <div class="customers">
		<DashboardGrid items="customers" title="Recent Customers" pageAdress="customers"/>
	 </div>
 </div>