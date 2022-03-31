<script  >
import { storeToRefs, mapActions } from 'pinia'
import httpRequest from '@/services/index.js'
import { productStore } from '@/stores/productStore.js'

export default {
  // data() {
  //   return {
  //     // res: "",
  //   }
  // },
    setup(){
        const main = productStore()
        const { productList } = storeToRefs(main)
        const { addProductList } = mapActions(productStore, ['addProductList'])
        return {
            productList,
            addProductList,
        }
    },
    methods:{
        API(){
            httpRequest("GET","/").then((res)=>{
              this.productList.push(res.data)
            })
        },
    },
    components:{
    },


}
</script>

<template>
    <router-view />
</template>

<style>

</style>
