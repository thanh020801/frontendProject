<template>
  {{getNamePageDefault()}}
  <!-- {{ app.user }} -->
  <ul v-for='item in Pages'>
    <li>

    <router-link 
        v-bind:to='item.url' 
        @click='getNamePage(item), callAPI'
    >
          {{item.name}}
    </router-link>|
    </li>
  </ul>
  
  <!-- {{ userList }} -->
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
          Pages:[
            {url: '/', name: 'Dashboard'},
            {url: '/user-profile', name: 'User ProFile'},
            {url: '/ListClient', name: 'List Client'},
            {url: '/ListProduct', name: 'List Product'},
            // {url: '/Login', name: 'Login'},
          ],
          userList: [],
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
      // Hàm lấy tên khi click vào đường dẫn
      getNamePage(page){
        // this.callAPI
        this.app.page = page
      },
      // Hàm lấy tên mặt định từ đường dẫn
      getNamePageDefault(){
        const URL = window.location.pathname
        for (var i = 0; i < this.Pages.length; i++) {
          // console.log(URL)
          // console.log(this.Pages[i].url)
          if(URL === this.Pages[i].url){
            this.app.page = this.Pages[i]
          }
        }
      },
    },
    computed:{

      callAPI(){
        if(this.app.page.url === '/ListProduct'){
          HTTPRequest('get','/',null).then((res)=>{

            this.productList= res.data
          }).catch((err)=>{
            alert(err.response.data)
          })         
        }


        else if(this.app.page.url === '/ListClient'){
          
          console.log(this.app.user)
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
        }        
      },
    }
  }
</script>

<style type="text/css">
</style>