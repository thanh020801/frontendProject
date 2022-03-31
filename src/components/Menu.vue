<template>
  {{getNamePageDefault(), callAPI}}
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
  {{ user.acceptToken }}
  {{ userList }}
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
            {url: '/Login', name: 'Login'},
          ],
          userList: [],
      }
    },
    setup(){
      const product = productStore()
      const app = appStore()
      const main = userStore()
      const { user } = storeToRefs(main)
      const { productList } = storeToRefs(product)
      return{
        productList,
        app,
        user
      }
    },
    methods:{
      // Hàm lấy tên khi click vào đường dẫn
      getNamePage(page){
        this.callAPI
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
          })         
        }
        else if(this.app.page.url === '/ListClient'){
          // const token = this.user.acceptToken
          HTTPRequest('get','/admin/user',this.user).then((res)=>{
            // console.log(res)
            if(res.status !== 200){

              console.log(res.json())
            }
            else{
              this.userList = res.data
            }
          })         
        }        
      },
    }
  }
</script>

<style type="text/css">
</style>