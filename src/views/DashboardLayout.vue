<template>
<!-- Nếu tài khoản chưa đăng nhập mà vào các trang khác trang login thì sẽ đươc chuyển về trang login -->
{{transitionPageLogin()}}
<div id="page-top">
	<div id="wrapper" >
		<Menu />
		<div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
				<Headers />
				<!-- {{ app.user }} -->
				<router-view />

			</div>
		</div>
	</div>
	
</div>
</template>

<script >
	import { appStore } from '@/stores/appStore.js'
	import Headers from '@/components/Headers.vue';
	import Menu from '@/components/Menu.vue'
	export default {
		setup(){
			const app = appStore()
			return { app }
		},
		components: {
			Headers,
			Menu,
		},
		methods:{
			transitionPageLogin(){
				if(this.$route.path !== '/Login' && this.app.user === null){
					this.$router.push('/Login')
				}
					
			}
		},
	}
</script>
<style type="text/css">
/*	.Navbar{
		height: 50px;
		background-color: gold;
	}

	.col-sm-9{
		background-color: green;
	}*/
</style>