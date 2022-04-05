<template>
	<div class="container-fluid">
		<h1>Hello222333</h1>
<!-- 		<h1 class="h3 mb-0 text-gray-800">Add New product</h1>
		<form className="col-md-12">
			<div className="from-title row">
				<div className='col-md-11 h3 mb-0 text-gray-800'><h2>Edit profile</h2></div>
				<div className='col-md-1'><Link to='/admin/product'><span>trở về</span></Link></div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-4">
				    <label htmlFor="name">name</label>
				    <input 
				    	type="text" className="form-control"
				    	v-model='product.name'
				    />
				</div>
				<div className="form-group col-md-4">
				    <label htmlFor="price">price</label>
				    <input 
				    	type="text" className="form-control"
				    	placeholder="Nhập giá sản phẩm"
				    	v-model='product.price'
				    	required 
				     />
				</div>
				<div className="form-group col-md-4">
				    <label htmlFor="discount">discount</label>
				    <input 
				    	type="text" className="form-control"
				    	v-model='product.discount'
				    	required 
				    />
				</div>
			</div>


			<div className="form-row">
				<div className="form-group col-md-6">
				    <label htmlFor="brain">Brain</label>
				    <input 
				    	type="text" className="form-control"
				    	v-model='product.brain'
				    	required 
				    />
				</div>
				<div className="form-group col-md-6">
				    <label htmlFor="kind">Kind</label>
				    <input 
				    	type="text" className="form-control"
				    	v-model='product.kind'
				    	required 
				     />
				</div>
			</div>


			<div className="form-row">
				<div className="form-group col-md-12">
				    <label htmlFor="origin">Origin</label>
				    <input 
				    	type="text" className="form-control"
				    	v-model='product.origin'
				    />
				</div>
			</div>



			<div className="form-row">
				<div className="form-group col-md-4">
				    <label htmlFor="color">Color</label>
				    <input 
				    	type="text" className="form-control"
				    	v-model='product.color'
				    />
				</div>
				<div className="form-group col-md-4">
				    <label htmlFor="stuff">Stuff</label>
				    <input 
				    	type="text" className="form-control"
				    	v-model='product.stuff'
				     />
				</div>
				<div className="form-group col-md-4">
				    <label htmlFor="size">Size</label>
				    <input 
				    	type="number" className="form-control"
				    	v-model='product.size'
				    	required 
				    />
				</div>
				<div className="form-group col-md-4">
				    <label htmlFor="quantity">Quantity</label>
				    <input 
				    	type="number" className="form-control"
				    	v-model='product.quantity'
				    	required 
				    />
				</div>
			</div>

		    <div className="form-group col-md-6">
		      	<label htmlFor="image">Ảnh đại diện</label>
		      	<input 
		      		type="file" 
		      		className="form-control"
		      		v-model='product.avarta'
		      	/>
		    </div>
			
 		 	<div className="form-group">
	        	<label className="form-check-label" >About me</label><br/>
	        	<textarea placeholder="Mời bạn nhập" 
	        		className="form-control col-md-12" 
	        		v-model='product.detail'
	        	>
	        	</textarea>
		    </div>
		    <div className="col-md-3">
		  		<span 
		  			className="btn btn-success col-md-12" 
		  			@click='handelSubmit()'
		  		>
		  			UPDATE PROFILE
		  		</span>
		    </div>
		</form> -->	
	</div>
</template>
<script>
	import { storeToRefs } from 'pinia'
  	import { appStore } from '@/stores/appStore.js'
	import HTTPRequest from '@/services/index.js'

	export default {
		data(){
			return {
				product:{
					name: "",
					price: "",
					discount:  "",
					brain: "",
					kind: "",
					origin: "",
					color: "",
					stuff: "",
					size: "",
					state: "",	
					quantity: "",				
				},

			}
		},
		setup(){

		},
		methods:{
			handelSubmit(){
				console.log(this.product)
				// HTTPRequest('put', `/user/${ this.app.user._id }`, this.product)
				// 	.then((res)=>{
				// 		alert("update successfully")
				// 	})
				// 	.catch((err)=>{
				// 		console.log(err.response)
				// 	})

			},
		},
	}
</script>