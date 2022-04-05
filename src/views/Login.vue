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
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form class="user">
                                        <div class="form-group">
                                            <input type="text" v-model='username' class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address...">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" v-model='password' class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password">
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <div
                                                @click='handelSubmit'
                                                class="btn btn-primary btn-user btn-block">
                                            Login
                                        </div>
                                        <hr>
                                        <a href="index.html" class="btn btn-google btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> Login with Google
                                        </a>
                                        <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                        </a>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <router-link to='/register' class="small">Create an Account!</router-link>
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
				username: 'admin1',
				password: 'admin1',
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
                        if(!res.data.admin){
                            alert('Tài khoản không đủ quyền')
                        }else{
                            alert('Đăng nhập thành công')
                            const {refreshToken,...others} = res.data
                            // console.log('refreshToken',refreshToken)
                            localStorage.setItem('refreshToken', JSON.stringify(refreshToken))
                            this.app.user = res.data
                            this.$router.push('/')
                        }
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