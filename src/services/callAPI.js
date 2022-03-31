import { storeToRefs, mapActions } from 'pinia'
import httpRequest from './index.js'
import { productStore } from '@/stores/productStore.js' 

const main = productStore()

// const { productList } = storeToRefs(main)
const { addProductList } = mapActions(productStore, ['addProductList'])

const callAPI = {
	getAllProduct: httpRequest('get', '/').then((res)=>{
		addProductList(res)
	}),

}
