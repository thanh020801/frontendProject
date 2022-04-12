<template>
	<div class="container-fluid">
		{{getUserInfo}}
		<form className="col-md-12">
			<div className="from-title row">
				<div className='col-md-10 h3 mb-0 text-gray-800'><h2>Edit profile</h2></div>
				<div className='col-md-2'>
					<Router-Link to='/admin/product'>
						<span>trở về</span>
					</Router-Link>
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
				    <label htmlFor="company">Company</label>
				    <input 
				    	type="text" className="form-control"
				    	v-model='info.company'
				    />
				</div>
				<div className="form-group col-md-6">
				    <label htmlFor="email">Email</label>
				    <input 
				    	type="email" className="form-control"
				    	v-model='info.email'
				    	required 
				    />
				</div>
			</div>


			<div className="form-row">
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
			</div>


			<div className="form-row">
				<div className="form-group col-md-12">
				    <label htmlFor="Address">Address</label>
				    <input 
				    	type="text" className="form-control"
				    	v-model='info.address'
				    />
				</div>
			</div>



			<div className="form-row">
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
			</div>

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
					company: "",
					email:  "",
					firstName: "",
					lastName: "",
					address: "",
					city: "",
					country: "",
					phoneNumber: "0123456789",
					avarta: " ",	
					detail: "Học tại ĐHCT",				
				},

			}
		},
		setup(){
			const app = appStore()
			return { app }
		},
		methods:{
			handelSubmit(){
				let req = {}
				if(this.info.company){
					req = {...req,company: this.info.company}
				}
				if(this.info.email){
					req = {...req,email: this.info.email}
				}
				if(this.info.firstName){
					req = {...req,firstName: this.info.firstName}
				}
				if(this.info.lastName){
					req = {...req,lastName: this.info.lastName}
				}
				if(this.info.address){
					req = {...req,address: this.info.address}
				}
				if(this.info.city){
					req = {...req,city: this.info.city}
				}
				if(this.info.country){
					req = {...req,country: this.info.country}
				}
				if(this.info.phoneNumber){
					req = {...req,phoneNumber: this.info.phoneNumber}
				}
				if(this.info.avarta){
					req = {...req,avarta: this.info.avarta}
				}
				if(this.info.detail){
					req = {...req,detail: this.info.detail}
				}
				req = {...req , acceptToken:this.app.user.acceptToken}
				HTTPRequest('put', `/admin/user/${this.app.user._id}`, req)
					.then((res)=>{
						console.log(res.data)
						this.app.user = res.data
						alert("update successfully")
					})
					.catch((err)=>{
						console.log(err.response)
					})
				// console.log(this.app.user)
			},
		},
		computed:{
			getUserInfo(){
				this.info = {...this.app.user}
			},
		},
	}
</script>