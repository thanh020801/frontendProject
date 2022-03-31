import { defineStore } from 'pinia'

export const userStore = defineStore('main', {
	state: ()=>{
		return{
			userList: {},
		}
	},
	actions:{

	}
})