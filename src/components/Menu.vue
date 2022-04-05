<template>
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <router-link 
                to='/dashboard'
                class="sidebar-brand d-flex align-items-center justify-content-center" 
            >
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">MEGA Admin</div>
            </router-link>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <router-link to='/dashboard' class="nav-link" >
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></router-link>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                Content
            </div>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <router-link 
                    to="/user-profile" 
                    class="nav-link collapsed"  data-target="#collapseTwo" @click='transitionUserProfilePage()'
                >
                    <i class="fas fa-fw fa-cog"></i>
                    <span>User Profile</span>
                </router-link>
            </li>

            <!-- Nav Item - Utilities Collapse Menu -->
            <li class="nav-item">
                <div class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Table</span>
                </div>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Utilities:</h6>
                        <router-link 
                          to='ListClient' class="collapse-item" @click='callAPIGetListUser'>
                          User Table
                        </router-link>
                        <router-link 
                          to='ListProduct' class="collapse-item" @click=callAPIGetListProduct>
                          Product Table
                        </router-link>                        <a class="collapse-item" href="utilities-animation.html">Animations</a>
                        <a class="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                Interface
            </div>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <router-link to='Login' class="collapse-item">Login</router-link>
                        <router-link to='/register' class="collapse-item">Register</router-link>
                        <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div class="collapse-divider"></div>
                        <h6 class="collapse-header">Other Pages:</h6>
                        <a class="collapse-item" href="404.html">404 Page</a>
                        <a class="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>
        </ul>


</template>

<script>
  import { storeToRefs } from 'pinia'
  import { productStore } from '@/stores/productStore.js'
  import { userStore } from '@/stores/userStore.js'
  import { appStore } from '@/stores/appStore.js'
  import HTTPRequest from '@/services/index.js'
  export default {
    data(){
      return{

          Page:[{url: '/', name: 'Dashboard'} ],
          id: this.app.user ? this.app.user._id : "",
      }
    },
    setup(){
      const product = productStore()
      const app = appStore()
      const main = userStore()
      const { userList } = storeToRefs(main)
      const { productList } = storeToRefs(product)
      return{
        productList,
        app,
        userList,
      }
    },
    methods:{
      callAPIGetListProduct(){
        if(!this.app.user ){
            alert("Bạn vui lòng đăng nhập để sử dụng được các chức năng")
            this.$router.push('Login')
        }else{
            HTTPRequest('get','/',null).then((res)=>{
              this.productList= res.data
            }).catch((err)=>{
              alert(err.response.data)
            })           
        }
        
      },

      callAPIGetListUser(){
        // console.log(this.$route.params.id)
          // console.log(this.app.user)

          if(!this.app.user){
            alert("Bạn vui lòng đăng nhập để sử dụng được các chức năng")
            this.$router.push('Login')
          }
          else{
            HTTPRequest('get','/admin/user',this.app.user).then((res)=>{
              if(res.status === 200)
                  this.userList = res.data
            }).catch((err)=>{
              if(err.response.status === 403)
                alert("Không có quyền",err.response.data)
              else
                alert("Token",err.response.data)
            })            
          }        
      },
      transitionUserProfilePage(){
        if(!this.app.user){
            alert("Bạn vui lòng đăng nhập để sử dụng được các chức năng")
            this.$router.push('Login')
            return 
          }      
      }
    },
  computed:{
  },
}
</script>

<style type="text/css">
</style>