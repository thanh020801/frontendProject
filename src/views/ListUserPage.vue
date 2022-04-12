<template>
    <div class="container-fluid">

        <!-- Page Heading -->
        <h1 class="h3 mb-2 text-gray-800">User Tables</h1>
        <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
            For more information about DataTables, please visit the <a target="_blank"
                href="https://datatables.net">official DataTables documentation</a>.</p>

        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                            	<th>STT</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Block</th>
                                <th>Cart</th>
                                <th>Bought</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            	<th>STT</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Block</th>
                                <th>Cart</th>
                                <th>Bought</th>
                                <th>Edit</th>
                            </tr>
                        </tfoot>
                        <tbody v-for='(item,index) in userList'>
                            <tr>
                            	<td>{{ index }}</td>
                                <td>{{item.firstName}} {{item.lastName}}</td>
                                <td>{{ item.username }}</td>
                                <td>{{ item.email }}</td>
                                <td>{{ item.admin }}</td>
                                <td>{{ item.block }}</td>
                                <td>{{ item.cart }}</td>
                                <td>{{ item.bought}}</td>
                                <td><input type="checkbox"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>



<!-- 	<table>
		<tr>
			<th>STT</th>
			<th>Name</th>
			<th>Username</th>
			<th>Admin</th>
			<th>Lock</th>
			<th>Cart</th>
			<th>Bought</th>
		</tr>
		<tr v-for='(item,index) in userList'>
			<td>{{ index     }}</td>
			<td>{{ item.name }}</td>
			<td>{{ item.username }}</td>
			<td>{{ item.admin }}</td>
			<td>{{ item.block}}</td>
			<td>{{ item.cart }}</td>
			<td>{{ item.bought }}</td>
		</tr>
	</table> -->
</template>

<script >
import { storeToRefs } from 'pinia'
import { userStore } from '@/stores/userStore.js'
export default {
	setup(){
			const main = userStore()
			const { userList } = storeToRefs(main)
			return { userList }
	},
	data(){
		return {
			users:[
			],
		}
	},
	computed:{

	},
}
</script>