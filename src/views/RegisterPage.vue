<template>
<div class="bg-gradient-primary">

    <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Register</h1>
                                    </div>
                                    <form class="user">
                                        <div class="form-group">
                                            <input type="text" v-model='info.username' class="form-control form-control-user"
                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address...">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" v-model='info.password' class="form-control form-control-user"
                                                 placeholder="Password">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" v-model='info.reparePassword'     class="form-control form-control-user"
                                            placeholder="Again password">
                                        </div>
                                        <div
                                            @click='handelSubmit'
                                            class="btn btn-primary btn-user btn-block"
                                        >
                                            Register
                                        </div>
                                        <hr>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <router-link to='/Login' class="small">Login</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</div>

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
                info:{
                    username: 'botuser10',
                    password: '123456789',
                    reparePassword: "123456789", 
                }
				
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
                const { username, password, reparePassword} = this.info
                if(reparePassword === password){
                    HTTPRequest('post','/register',{username,password}).then((res)=>{
                        alert('Đăng ký thành công')
                        this.$router.push('/Login')
                    }).catch((err)=>{
                        // if(err.response.status === 404){
                        //     alert(err.response.data)
                        // }
                    })
                }
                else{
                    alert("Nhập lại mật khẩu không chính xác !!!")
                }

			},
		},
	}
</script>