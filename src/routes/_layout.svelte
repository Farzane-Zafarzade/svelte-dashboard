<script>
	import Sidebar from "../components/Sidebar.svelte";
	import Header from '../components/Header.svelte';
	

	//export let segment;
</script>



<!--<Nav {segment}/> -->

<Sidebar/>
<div class="main-content">
	<Header/>
	<main>
		<slot></slot>
	</main>
</div>

<!-- <main>
	<slot></slot>
</main> -->