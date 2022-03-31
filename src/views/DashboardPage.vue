<template>
	<h1>DashBoard Page</h1>
	<div>Total: {{ total }}</div>
	<div>Salary: {{ salary }}</div>
	<div>User: {{ user }}</div>
	<div>Product: {{ product }}</div>
</template>

<script >
	export default {
		data(){
			return{
				total: 200,
				salary:500.000,
				user: 400,
				product:200,
			}
		}
	}
</script>