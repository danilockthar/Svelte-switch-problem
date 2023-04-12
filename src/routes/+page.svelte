<script>
	import Switch from '../components/Switch.svelte';
</script>

<h3 class="title"> Enciende una bombilla a la vez </h3>
<div class="wrapper">
	<Switch identifier={1} />
	<Switch identifier={2} />
	<Switch identifier={3} />
	<Switch identifier={4} />
</div>

<style>
	.wrapper {
		display: grid;
		grid-column-gap: 2rem;
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 2rem;
	}
	.title{
		margin:10px 0 40px 0; 
		text-align: center;
	}
	@media screen and (min-width: 768px) {
		.wrapper {
			display: grid;
			grid-column-gap: 2rem;
			grid-template-columns: repeat(4, 1fr);
		}
		.title{
			font-size: 3rem;
			margin:0px 0 40px 0; 
		}
	}
</style>
