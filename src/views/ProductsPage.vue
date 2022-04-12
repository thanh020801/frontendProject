<template>
    <div class="container-fluid">
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
								<th>Image</th>
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
							<td><img :src="item.image" 
								:alt="item.image"></td>
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
    <!-- {{path("Hello")}} -->
    <img :src="path()" :alt="path()"/>
    <img src="@/assets/img/hoa/h1.jpg" alt="@/assets/img/hoa/h1.jpg"/>
</template>

<script type="module">
	import requireImage from '@/services/callAPI.js'
	import h1 from '@/assets/img/hoa/h1.jpg'
	import { storeToRefs } from 'pinia'
  	import { productStore } from '@/stores/productStore.js'
  	import { appStore } from '@/stores/appStore.js'
  	import HTTPRequest from '@/services/index.js'
	export default {
		data(){
			return {
				anh: "@/assets/img/hoa/h1.jpg",
				anh1:h1,
			}
		},
	    setup(){
	      	const main = productStore()
	      	const app = appStore()
	      	const { productList } = storeToRefs(main)
	      	return{
	      	  	productList,
	      	  	app,
	      	}
	    },
	    computed:{

	    },
	    methods:{
	    	deleteProduct(idProduct){
	    		const endPoint = `/admin/${idProduct}`
	    		console.log(endPoint)
	    		const req = {acceptToken:this.app.user.acceptToken}
	    		HTTPRequest('delete', endPoint, req)
	    		.then((res)=>{
	    			console('Delete successfully')
	    		}).catch((err)=>{
	    			console.log(err.response)
	    		})
	    	},

	    	path(){
	    		const link='@/assets/img/hoa/h1.jpg'
	    		return link
	    	}
	    		// import i from '@/assets/img/hoa/h1.jpg'
	    		// console.log(i)
	    		// import urlImage from '@/assets/img/hoa/h1.jpg'
	    		// console.log(url)

	   //  		const requireImage = async (link='@/assets/img/hoa/h1.jpg') => {
				//   const image = await import(link)
				//   console.log(image)
				//   return image
				// }
				// return requireImage
	   //  	},
	    }
	}
</script>