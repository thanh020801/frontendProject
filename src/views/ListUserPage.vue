<template>
	<h1>User Table</h1>

	<table>
		<tr>
			<th>STT</th>
			<th>Name</th>
			<th>Username</th>
			<th>Admin</th>
			<th>Lock</th>
			<th>Cart</th>
			<th>Bought</th>
		</tr>
		<tr v-for='(item,index) in userList'>
			<td>{{ index     }}</td>
			<td>{{ item.name }}</td>
			<td>{{ item.username }}</td>
			<td>{{ item.admin }}</td>
			<td>{{ item.block}}</td>
			<td>{{ item.cart }}</td>
			<td>{{ item.bought }}</td>
		</tr>
	</table>
</template>

<script >
import { storeToRefs } from 'pinia'
import { userStore } from '@/stores/userStore.js'
export default {
	setup(){
			const main = userStore()
			const { userList } = storeToRefs(main)
			return { userList }
	},
	data(){
		return {
			users:[
			],
		}
	},
	computed:{

	},
}
</script>