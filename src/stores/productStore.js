import { defineStore } from 'pinia'

export const productStore = defineStore('product', {
	state: ()=>{
		return{
			productList: [],
		}
	},
	actions:{

	}
})