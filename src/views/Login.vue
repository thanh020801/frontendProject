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
  	import { appStore } from '@/stores/appStore.js'

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
		    const app = appStore()
		    const { user } = storeToRefs(main)
		    return{
	    	    user,
	    	    app,
	      	}
	    },
		computed:{
			handelSubmit(){
				const username = this.username
				const password = this.password
				HTTPRequest('post','/login',{username,password}).then((res)=>{
					if(res !== null){
						alert('Đăng nhập thành công')
						this.app.user = res.data
					}
        		}).catch((err)=>{
        			if(err.response.status === 404){
        				alert(err.response.data)
        			}
        		})
			}
		},



	}
</script>