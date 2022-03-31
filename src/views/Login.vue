<template>
	<h1>Login Page</h1>
	<input type="text" v-model='username' placeholder="username" /><br/>
	<input type="text" v-model='password' placeholder="password" /><br/>
	<button  @click='handelSubmit'>Submit</button>
	{{user}}<br/><br/>
</template>

<script >
	import { storeToRefs } from 'pinia'
  	import { userStore } from '@/stores/userStore.js'
  	// import { userStore } from '@/stores/userStore.js'
  	import HTTPRequest from '@/services/index.js'
	export default {
		data(){
			return{
				username: 'botuser2',
				password: '123456789',
			}
			
		},
	    setup(){
		    const main = userStore()
		    const { user } = storeToRefs(main)
		    return{
	    	    user,
	      	}
	    },
		computed:{
			handelSubmit(){
				const username = this.username
				const password = this.password
				HTTPRequest('post','/login',{username,password}).then((res)=>{
					// console.log('status',res.status)
					if(res !== null){
						this.user = res.data
					}
					// if(res.status !=== 200){
					// 	console.log('err')
					// }
					// else{
						
					// }
					// console.log(res.status)
					// console.log(res)
					// const { acceptToken , ...Info} = res.data

					
					// console.log(this.user)
        		})
			}
		},



	}
</script>