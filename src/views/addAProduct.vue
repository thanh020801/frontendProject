<template>
	<div class="container-fluid">
<!-- 		<form>
			<input type="text" v-model='product.name'>
			<button @click='handelSubmit($event)'>Click</button>
		</form> -->
		<form className="col-md-12">
			<div className="from-title row">
				<div className='col-md-9 h3 mb-0 text-gray-800'><h2>Add New product</h2></div>
				<div className='col-md-3'>
					<Router-Link to='/admin/product'><span>trở về</span>
					</Router-Link>
				</div>
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
		      	<input 
		      		type="file" 
		      		className="form-control"
		      		id='imageFile'
		      	/>
		    </div>
			
 		 	<div className="form-group">
	        	<label className="form-check-label" >Detail Product</label><br/>
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
		</form>	
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
					name: "Bàn phong thủy",
					price: "50000000",
					discount:  "0.2",
					brain: "Storm",
					kind: "Bàn",
					origin: "Hàn quốc",
					color: "Nâu, tím",
					stuff: "Nhựa, cẩm thạch",
					size: "50",
					state: "mới",	
					quantity: "20",
					image: '',			
				},

			}
		},
		setup(){
			const app = appStore()
			return { app }
		},
		methods:{
			handelUrlImage(url){
				let newUrl = ""
				for(var i = url.length-1; i >= 0 ; i--){
					if(url[i] === '/' || url[i] === '\\'){
						break
					}
					else{
						newUrl += url[i]
					}
				}
				return `/src/assets/images/${newUrl.split('').reverse().join('')}`
			},
			handelSubmit(e){
				this.product.image = document.getElementById("imageFile").value
				this.product.image = this.handelUrlImage(this.product.image)
				console.log(this.product.image)
				const req = {...this.product , acceptToken:this.app.user.acceptToken}
				HTTPRequest('post', `/admin`, req)
					.then((res)=>{
						alert("update successfully")
					})
					.catch((err)=>{
						console.log(err.response)
					})

			},
		},
	}
</script>