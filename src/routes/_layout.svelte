<script>
	import Sidebar from "../components/Sidebar.svelte";
	import Header from '../components/Header.svelte';
</script>



<Sidebar/>
<div class="main-content">
	<Header/>
	<main>
		<slot></slot>
	</main>
</div>
