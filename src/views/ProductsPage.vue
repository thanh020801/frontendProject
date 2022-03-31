<template>
	<h1>Products Table</h1>

	<table>
		<tr>
			<th>Name</th>
			<th>Price</th>
			<th>Discount</th>
			<th>Brain</th>
			<th>Quantity</th>
		</tr>
		<tr v-for='(item,index) in productList' @key='index'>
			<td>{{ item.name }}</td>
			<td>{{ item.price }}</td>
			<td>{{ item.discount }}</td>
			<td>{{ item.brain }}</td>
			<td>{{ item.quantity }}</td>
		</tr>
	</table>
	{{ productList }}
</template>

<script >
	import { storeToRefs } from 'pinia'
  	import { productStore } from '@/stores/productStore.js'
	export default {
		data(){
			return {
			}
		},
	    setup(){
	      	const main = productStore()
	      	const { productList } = storeToRefs(main)
	      	return{
	      	  	productList,
	      	}
	    },
	}
</script>