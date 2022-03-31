import { defineStore} from 'pinia'

export const appStore = defineStore('app', {
	state:()=>{
		return {
			page: {
				url:'/',
				name:'Dashboard',
			},
			user: null,
		}
	},
	getters:{
		 
	},
	actions:{
		getNamePage(name){
			this.namePage = name 
		},
	},
})