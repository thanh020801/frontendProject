<template>
	<div class="container-fluid">
		<Headers />
		<div class="row">
			<div class="col-sm-3">
				<Menu />
			</div>
			<div class="col-sm-9">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script >
	import Headers from '@/components/Headers.vue';
	import Menu from '@/components/Menu.vue'
	export default {
		components: {
			Headers,
			Menu,
		}
	}
</script>
<style type="text/css">
/*	.Navbar{
		height: 50px;
		background-color: gold;
	}

	.col-sm-9{
		background-color: green;
	}*/
</style>