<template>
<div class="row">
	<div class="h-left col-sm-3"><img src="@/assets/logo.svg" alt="logo"></div>
	<div class="h-right col-sm-9">
		<div class="row">
			<div class="col-sm-4">{{ app.page.name }}</div>
			<div class="col-sm-5">
				<input class="col-sm-12" type="text" v-model='search' placeholder="search" />
			</div>

			<div class="col-sm-3">
				<router-link to='Login'>
					<span v-if='app.user'>Hi, {{app.user.name}}</span>
					<span v-else='app.user'>Login</span>
				</router-link>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import { appStore } from '@/stores/appStore.js'
	export default {
		data(){
			return{
				search: '',
			}
		},
		setup(){
			const app = appStore()
			return { app }
		}
	}
</script>
<style type="text/css" scoped>
	*{
		color: black;

	}
	a{
		text-decoration: none;
	}
	a:hover{
		background-color: blue;
	}
</style>