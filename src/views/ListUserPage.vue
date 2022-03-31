<template>
	<h1>User Table</h1>

	<table>
		<tr>
			<th>Name</th>
			<th>Username</th>
			<th>Admin</th>
			<th>Cart</th>
			<th>Bought</th>
		</tr>
		<tr v-for='item in users'>
			<td>{{ item.name }}</td>
			<td>{{ item.username }}</td>
			<td>{{ item.admin }}</td>
			<td>{{ item.cart }}</td>
			<td>{{ item.bought }}</td>
		</tr>
	</table>
</template>

<script >
export default {
	data(){
		return {
			users:[
					{
						id: 1,
						name: "Thanh",
						username: 'botuser1',
						admin:1,
						cart: ['1','2','3'],
						bought: [ '4','5','6'] ,
					},
					{
						id: 2,
						name: "Tuan",
						username: 'botuser2',
						admin:0,
						cart: ['1','2','3'],
						bought: [ '4','5','6'] ,
					},
			],
		}
	},
	computed:{

	},
}
</script>