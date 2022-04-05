<template>
	<div class="container-fluid">
		<h1 class="h3 mb-0 text-gray-800">User Profile</h1>
<!-- 		<div class="row">
			<div class="col-sm-6">
				<div>Họ và tên: {{!app.user.name ? "" : app.user.name}} </div>
				<div>Tài khoản: {{!app.user ? info.username : app.user.username}} </div>
				<div>Email: {{!app.user ? info.email : app.user.email}} </div>
			</div>
			<div class="col-sm-6">
				<div>Trình độ: Chưa có </div>
				<div>Kinh nghiệm: Chưa có </div>
			</div>
		</div> -->
		<!-- ***************************************************************** -->
		<form className="col-md-12">
			<div className="from-title row">
				<div className='col-md-11 h3 mb-0 text-gray-800'><h2>Edit profile</h2></div>
				<div className='col-md-1'><Link to='/admin/product'><span>trở về</span></Link></div>
			</div>
<!-- 			<div className="form-row">
				<div className="form-group col-md-4">
				    <label htmlFor="company">Company</label>
				    <input 
				    	type="text" className="form-control"
				    	v-model='info.company'
				    />
				</div>
				<div className="form-group col-md-4">
				    <label htmlFor="account">Tài khoản</label>
				    <input 
				    	type="text" className="form-control"
				    	placeholder="Nhập tên sản phẩm"
				    	v-model='info.username'
				    	required 
				     />
				</div>
				<div className="form-group col-md-4">
				    <label htmlFor="email">Email</label>
				    <input 
				    	type="email" className="form-control"
				    	v-model='info.email'
				    	required 
				    />
				</div>
			</div> -->


<!-- 			<div className="form-row">
				<div className="form-group col-md-6">
				    <label htmlFor="firstName">First name</label>
				    <input 
				    	type="text" className="form-control"
				    	v-model='info.firstName'
				    	required 
				    />
				</div>
				<div className="form-group col-md-6">
				    <label htmlFor="lastName">Last name</label>
				    <input 
				    	type="text" className="form-control"
				    	v-model='info.lastName'
				    	required 
				     />
				</div>
			</div> -->


<!-- 			<div className="form-row">
				<div className="form-group col-md-12">
				    <label htmlFor="Address">Address</label>
				    <input 
				    	type="text" className="form-control"
				    	v-model='info.address'
				    />
				</div>
			</div> -->



<!-- 			<div className="form-row">
				<div className="form-group col-md-4">
				    <label htmlFor="city">City</label>
				    <input 
				    	type="text" className="form-control"
				    	v-model='info.city'
				    />
				</div>
				<div className="form-group col-md-4">
				    <label htmlFor="country">Country</label>
				    <input 
				    	type="text" className="form-control"
				    	v-model='info.country'
				     />
				</div>
				<div className="form-group col-md-4">
				    <label htmlFor="phoneNumber">Phone number</label>
				    <input 
				    	type="number" className="form-control"
				    	v-model='info.phoneNumber'
				    	required 
				    />
				</div>
			</div> -->

<!-- 		    <div className="form-group col-md-6">
		      	<label htmlFor="image">Ảnh đại diện</label>
		      	<input 
		      		type="file" 
		      		className="form-control"
		      		v-model='info.avarta'
		      	/>
		    </div> -->
			
		 	<div className="form-group">
	        	<!-- <label className="form-check-label" >About me</label><br/> -->
	        	<textarea placeholder="Mời bạn nhập" 
	        		className="form-control col-md-12" 
	        		v-model='info.detail'
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
	<!-- <h1>Hello</h1> -->
</template>

<script >
	import { storeToRefs } from 'pinia'
  	import { appStore } from '@/stores/appStore.js'
	import HTTPRequest from '@/services/index.js'

	export default {
		data(){
			return {
				info:{
					company: " ",
					username: " ",
					email:  " ",
					firstName: " ",
					lastName: " ",
					address: " ",
					city: " ",
					country: " ",
					phoneNumber: " ",
					avarta: " ",	
					detail: " ",				
				},

			}
		},
		setup(){
			const app = appStore()
			return { app }
		},
		methods:{
			// handelSubmit(){
			// 	console.log(this.app.user._id)
			// 	console.log(this.$router.params.id)
			// 	// HTTPRequest('put', `/user/${ this.app.user._id }`, this.info)
			// 	// 	.then((res)=>{
			// 	// 		alert("update successfully")
			// 	// 	})
			// 	// 	.catch((err)=>{
			// 	// 		console.log(err.response)
			// 	// 	})

			// },
		},
	}
</script>