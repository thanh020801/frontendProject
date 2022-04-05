<template>
    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Product Table</h1>
            <router-link to='/addNewProduct' 
            	class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            	<i class="fas fa-download fa-sm text-white-50"></i>
            	Add new product
            </router-link>
        </div>
        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    	<thead>
							<tr>
								<th>STT</th>
								<th>Name</th>
								<th>Price</th>
								<th>Discount</th>
								<th>Brain</th>
								<th>Kind</th>
								<th>Origin</th>
								<th>Color</th>
								<th>Stuff</th>
								<th>Size</th>
								<th>State</th>
								<th>Quantity</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tr v-for='(item,index) in productList' @key='index'>
							<td>{{ index }}</td>
							<td>{{ item.name }}</td>
							<td>{{ item.price }}</td>
							<td>{{ item.discount }}</td>
							<td>{{ item.brain }}</td>
							<td>{{ item.kind }}</td>
							<td>{{ item.origin }}</td>
							<td>{{ item.color }}</td>
							<td>{{ item.stuff }}</td>
							<td>{{ item.size }}</td>
							<td>{{ item.state }}</td>
							<td>{{ item.quantity }}</td>
							<td @click='deleteProduct(item._id)'>X</td>
						</tr>
					</table>
            	</div>
        	</div>
        </div>
    </div>

</template>

<script >
	import { storeToRefs } from 'pinia'
  	import { productStore } from '@/stores/productStore.js'
  	import HTTPRequest from '@/services/index.js'
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
	    methods:{
	    	deleteProduct(idProduct){
	    		console.log(idProduct)
	    		const endPoint = `/admin/${idProduct}`
	    		console.log(endPoint)
	    		HTTPRequest('delete', endPoint, null)
	    		.then((res)=>{
	    			alert(JSON.parse(res))
	    		}).catch((err)=>{
	    			console.log(err.response)
	    		})
	    	}
	    }
	}
</script>