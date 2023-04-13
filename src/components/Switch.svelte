<script context="module" lang="ts">
	import { writable } from 'svelte/store';
	export const switchedOn = writable<(string | number)[]>([]);
</script>

<script lang="ts">
	export let identifier: string | number;
	let isSwitchOn: boolean;

	const handleSwitch = () => {
		switchedOn.set([identifier]);
	};

	/* caracter $ delante de switchedOn me ahorra de hacer switchedOn.subscribe (autosubscribe)*/

	$: isSwitchOn = $switchedOn[0] === identifier && isSwitchOn === false ? true : false;
</script>

<button on:click={handleSwitch}>
	{isSwitchOn ? '💡' : '⛔'}
</button>

<style>
	button {
		font-size: 3rem;
		color: white;
		cursor: pointer;
		background: none;
		border: 2px solid black;
		padding: 15px;
		border-radius: 12px;
		width: 100%;
		height: 200px;
	}
</style>
